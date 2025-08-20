import axios from "axios";
import * as cheerio from "cheerio";
import { HianimeResult } from "./types/hianime-result";
import { HianimeEpisode } from "./types/hianime-episode";
import { HianimeSources } from "./types/hianime-sources";

class Hianime {
  private readonly BASE_URL = "https://hianime.to";

  private async getAnimeList(
    category:
      | "subbed-anime"
      | "dubbed-anime"
      | "most-popular"
      | "movie"
      | "tv"
      | "special"
      | "ona"
      | "ova"
      | "top-airing",
    page: number = 1
  ): Promise<HianimeResult> {
    const { data } = await axios.get(`${this.BASE_URL}/${category}`, {
      params: {
        page: page,
      },
    });
    const $ = cheerio.load(data);
    const animeList = $(".tab-content div.film_list-wrap > div.flw-item")
      .map((_, element) => {
        const anime = {
          id: $(element).find("a[data-id]").attr("href")!,
          image: $(element).find("div.film-poster > img").attr("data-src"),
          title: $(element)
            .find("div.film-detail > .film-name > a")
            .attr("title"),
          type: $(element)
            .find("div.fd-infor > span.fdi-item")
            .first()
            .text()
            .toUpperCase(),
          language: {
            sub: $(element).find(".tick.ltr > .tick-sub").text() || null,
            dub: $(element).find(".tick.ltr > .tick-dub").text() || null,
          },
          dataId: $(element).find("a[data-id]").attr("data-id")!,
        };
        return anime;
      })
      .get();

    const totalPage = parseInt(
      $('a[title="Last"]').attr("href")?.split("=")[1] ?? page.toString()
    );

    return {
      page,
      totalPage,
      hasNextPage: page < totalPage,
      results: animeList,
    };
  }

  public async getSubbedAnime(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("subbed-anime", page);
  }

  public async getDubbedAnime(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("dubbed-anime", page);
  }

  public async getMostPopular(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("most-popular", page);
  }

  public async getMovies(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("movie", page);
  }

  public async getTVShows(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("tv", page);
  }

  public async getSpecialList(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("special", page);
  }

  public async getONAList(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("ona", page);
  }

  public async getOVAList(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("ova", page);
  }

  public async getTopAiring(page: number = 1): Promise<HianimeResult> {
    return this.getAnimeList("top-airing", page);
  }

  public async getEpisodes(dataId: string): Promise<HianimeEpisode[]> {
    const { data } = await axios.get(
      `${this.BASE_URL}/ajax/v2/episode/list/${dataId}`
    );
    const $ = cheerio.load(data.html);
    const episodes = $("div.ss-list > a.ep-item")
      .map((_, element) => {
        const episode = {
          id: $(element).attr("data-id")!,
          number: $(element).attr("data-number")!,
          title: $(element).attr("title")!,
          href: $(element).attr("href")!,
        };
        return episode;
      })
      .get();
    return episodes;
  }

  public async getEpisodeServers(episodeId: string) {
    const { data } = await axios.get(
      `${this.BASE_URL}/ajax/v2/episode/servers`,
      {
        params: {
          episodeId,
        },
      }
    );

    const $ = cheerio.load(data.html);

    const subServers = $("div.servers-sub .server-item")
      .map((_, element) => {
        const server = {
          type: $(element).attr("data-type")!,
          id: $(element).attr("data-id")!,
          serverId: $(element).attr("data-server-id")!,
          name: $(element).find("a.btn").text(),
        };
        return server;
      })
      .get();

    const dubServers = $("div.servers-dub .server-item")
      .map((_, element) => {
        const server = {
          type: $(element).attr("data-type")!,
          id: $(element).attr("data-id")!,
          serverId: $(element).attr("data-server-id")!,
          name: $(element).find("a.btn").text(),
        };
        return server;
      })
      .get();

    return {
      sub: subServers,
      dub: dubServers,
    };
  }

  public async getEpisodeSources(serverId: string): Promise<HianimeSources> {
    const { data } = await axios.get(
      `${this.BASE_URL}/ajax/v2/episode/sources?id=${serverId}`
    );

    const embedLink: string | undefined = data?.link;
    if (!embedLink) {
      throw new Error(
        `No embed link returned for serverId ${serverId}. Response: ${JSON.stringify(
          data
        ).slice(0, 200)}...`
      );
    }

    const { data: embedData } = await axios.get(embedLink, {
      headers: {
        Referer: this.BASE_URL,
      },
    });

    const $ = cheerio.load(embedData);
    const dataId = $("div[data-id]").attr("data-id")!;

    let nonce: string | null = null;

    // Try a single 48-char token first
    const regex48 = /\b[a-zA-Z0-9]{48}\b/;
    const match48 = embedData.match(regex48);
    if (match48 && match48[0]) {
      nonce = match48[0];
    } else {
      // Fallback: concatenate multiple 16-char tokens
      const regex16 = /"([a-zA-Z0-9]{16})"/g;
      const parts: string[] = [];
      let m: RegExpExecArray | null;
      while ((m = regex16.exec(embedData)) !== null) {
        if (m[1]) parts.push(m[1]);
      }
      if (parts.length) nonce = parts.join("");
    }

    if (!nonce) {
      throw new Error(
        `Failed to extract nonce from embed page for serverId ${serverId}`
      );
    }

    const { data: sources } = await axios.get<HianimeSources>(
      `https://megacloud.blog/embed-2/v3/e-1/getSources`,
      {
        params: {
          id: dataId,
          _k: nonce,
        },
        headers: {
          Referer: embedLink,
        },
      }
    );

    sources.headers = {
      Referer: "https://megacloud.blog/",
    };

    return sources;
  }
}

export default Hianime;
