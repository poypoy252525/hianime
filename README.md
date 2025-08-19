# hianime

A lightweight TypeScript/Node.js client for fetching subbed anime listings from hianime.to.

- Written in TypeScript
- Promise-based API
- Ships types for first-class TS support

## Install

```bash
npm i hianime
# or
pnpm add hianime
# or
yarn add hianime
```

## Table of Contents

- [Exports](#exports)
- [getSubbedAnime()](#getsubbedanime)
- [getDubbedAnime()](#getdubbedanime)
- [getMostPopular()](#getmostpopular)
- [getMovies()](#getmovies)
- [getTVShows()](#gettvshows)
- [getSpecialList()](#getspeciallist)
- [getONAList()](#getonalist)
- [getOVAList()](#getovalist)
- [getEpisodes()](#getepisodes)
- [getEpisodeServers()](#getepisodeservers)
- [getEpisodeSources()](#getepisodesources)

## Quick Start

```ts
import Hianime from "hianime";
const hianime = new Hianime();
const page1 = await hianime.getSubbedAnime();
console.log(page1.results);
```

<a id="exports"></a>

## Exports

- **Default export**: `Hianime`
- **Named export**: `{ Hianime }`
- **Types and enums**: `HianimeResult`, `Result`, `Language`, `Type`, `Episode`

Example

```ts
import Hianime, {
  Hianime as HianimeClass,
  Type,
  type HianimeResult,
  type Result,
  type Language,
  type Episode,
} from "hianime";

const hianime = new Hianime();
```

<a id="getsubbedanime"></a>

<details>
  <summary><strong>getSubbedAnime(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
import Hianime from "hianime";
const hianime = new Hianime();
//the page number is optional, defaults to 1
const res = await hianime.getSubbedAnime();
console.log(res);
```

Response

```json
{
  "page": 1,
  "totalPage": 231,
  "hasNextPage": true,
  "results": [
    {
      "id": "/dungeons-and-television-19841",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/64af49f767c62aac9c02a8c4025a726d.jpg",
      "title": "Dungeons & Television",
      "type": "ONA",
      "language": {
        "sub": "1",
        "dub": "1"
      },
      "dataId": "19841"
    },
    {
      "id": "/lord-of-mysteries-old-neils-mysticism-class-19839",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/e6f282dc48539d8dc89d6de820791bcb.jpg",
      "title": "Lord of Mysteries - Old Neil's Mysticism Class",
      "type": "SPECIAL",
      "language": {
        "sub": "5",
        "dub": null
      },
      "dataId": "19839"
    }
  ]
}
```

</details>

<a id="getdubbedanime"></a>

<details>
  <summary><strong>getDubbedAnime(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getDubbedAnime();
```

Response

```json
{
  "page": 1,
  "totalPage": 94,
  "hasNextPage": true,
  "results": [
    {
      "id": "/dungeons-and-television-19841",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/64af49f767c62aac9c02a8c4025a726d.jpg",
      "title": "Dungeons & Television",
      "type": "ONA",
      "language": {
        "sub": "1",
        "dub": "1"
      },
      "dataId": "19841"
    },
    {
      "id": "/new-gods-nezha-reborn-19834",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/41cf0de655170b7903d4be477874b230.jpg",
      "title": "New Gods: Nezha Reborn",
      "type": "MOVIE",
      "language": {
        "sub": "1",
        "dub": "1"
      },
      "dataId": "19834"
    }
  ]
}
```

</details>

<a id="getmostpopular"></a>

<details>
  <summary><strong>getMostPopular(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getMostPopular();
```

Response

```json
{
  "page": 1,
  "totalPage": 50,
  "hasNextPage": true,
  "results": [
    {
      "id": "/one-piece-100",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
      "title": "One Piece",
      "type": "TV",
      "language": {
        "sub": "1140",
        "dub": "1133"
      },
      "dataId": "100"
    },
    {
      "id": "/naruto-shippuden-355",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9cbcf87f54194742e7686119089478f8.jpg",
      "title": "Naruto: Shippuden",
      "type": "TV",
      "language": {
        "sub": "500",
        "dub": "500"
      },
      "dataId": "355"
    }
  ]
}
```

</details>

<a id="getmovies"></a>

<details>
  <summary><strong>getMovies(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getMovies();
```

Response

```json
{
  "page": 1,
  "totalPage": 35,
  "hasNextPage": true,
  "results": [
    {
      "id": "/ne-zha-2-19835",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/61538876bc30bcc5e8f7ba9c43eb6de3.jpg",
      "title": "Ne Zha 2",
      "type": "MOVIE",
      "language": {
        "sub": "1",
        "dub": null
      },
      "dataId": "19835"
    },
    {
      "id": "/new-gods-nezha-reborn-19834",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/41cf0de655170b7903d4be477874b230.jpg",
      "title": "New Gods: Nezha Reborn",
      "type": "MOVIE",
      "language": {
        "sub": "1",
        "dub": "1"
      },
      "dataId": "19834"
    }
  ]
}
```

</details>

<a id="gettvshows"></a>

<details>
  <summary><strong>getTVShows(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getTVShows();
```

Response

```json
{
  "page": 1,
  "totalPage": 121,
  "hasNextPage": true,
  "results": [
    {
      "id": "/peter-grill-and-the-philosophers-time-uncensored-19832",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a78870432e4342cfb407094fe7588497.jpg",
      "title": "Peter Grill and the Philosopher's Time [Uncensored]",
      "type": "TV",
      "language": {
        "sub": "12",
        "dub": "12"
      },
      "dataId": "19832"
    },
    {
      "id": "/punirunes-puni-3-19810",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f2e1961fa1f8ca51c8a40908c049118f.jpg",
      "title": "Punirunes: Puni 3",
      "type": "TV",
      "language": {
        "sub": "7",
        "dub": null
      },
      "dataId": "19810"
    }
  ]
}
```

</details>

<a id="getspeciallist"></a>

<details>
  <summary><strong>getSpecialList(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getSpecialList();
```

Response

```json
{
  "page": 1,
  "totalPage": 23,
  "hasNextPage": true,
  "results": [
    {
      "id": "/lord-of-mysteries-old-neils-mysticism-class-19839",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/e6f282dc48539d8dc89d6de820791bcb.jpg",
      "title": "Lord of Mysteries - Old Neil's Mysticism Class",
      "type": "SPECIAL",
      "language": {
        "sub": "5",
        "dub": null
      },
      "dataId": "19839"
    },
    {
      "id": "/private-tutor-to-the-dukes-daughter-recap-19831",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/87693000cc4e2cab02fe8a89e1a1fcc8.jpg",
      "title": "Private Tutor to the Duke's Daughter (Recap)",
      "type": "SPECIAL",
      "language": {
        "sub": "1",
        "dub": null
      },
      "dataId": "19831"
    }
  ]
}
```

</details>

<a id="getonalist"></a>

<details>
  <summary><strong>getONAList(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getONAList();
```

Response

```json
{
  "page": 1,
  "totalPage": 31,
  "hasNextPage": true,
  "results": [
    {
      "id": "/dungeons-and-television-19841",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/64af49f767c62aac9c02a8c4025a726d.jpg",
      "title": "Dungeons & Television",
      "type": "ONA",
      "language": {
        "sub": "1",
        "dub": "1"
      },
      "dataId": "19841"
    },
    {
      "id": "/tiger-coming-in-19838",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6f8786f19a0f428ba2405cc8408a526e.jpg",
      "title": "Tiger Coming In",
      "type": "ONA",
      "language": {
        "sub": "8",
        "dub": null
      },
      "dataId": "19838"
    }
  ]
}
```

</details>

<a id="getovalist"></a>

<details>
  <summary><strong>getOVAList(page?: number): Promise<HianimeResult></strong></summary>

Example

```ts
const res = await hianime.getOVAList();
```

Response

```json
{
  "page": 1,
  "totalPage": 30,
  "hasNextPage": true,
  "results": [
    {
      "id": "/the-idolm-at-ster-shiny-colors-2nd-season-shhis-19667",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f34a23c1531b9bb2d69d6e7e5a30735e.jpg",
      "title": "The iDOLM@STER Shiny Colors 2nd Season: SHHis",
      "type": "OVA",
      "language": {
        "sub": "1",
        "dub": null
      },
      "dataId": "19667"
    },
    {
      "id": "/konosuba-gods-blessing-on-this-wonderful-world-3-ova-19611",
      "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9a5fb3ba0947bb487b71b0a74e3d495a.jpg",
      "title": "KonoSuba: God's Blessing on This Wonderful World! 3 OVA",
      "type": "OVA",
      "language": {
        "sub": "2",
        "dub": null
      },
      "dataId": "19611"
    }
  ]
}
```

</details>

<a id="getepisodes"></a>

<details>
  <summary><strong>getEpisodes(dataId: string): Promise<Episode[]></strong></summary>
**Note**: `dataId` comes from each `Result` returned by listing methods.

Example

```ts
// Suppose you got dataId from a listing result
const episodes = await hianime.getEpisodes("112");
console.log(episodes);
```

Response

```json
[
  {
    "id": "3303",
    "number": "1",
    "title": "To You Two Thousand Years Later",
    "href": "/watch/attack-on-titan-112?ep=3303"
  },
  {
    "id": "3304",
    "number": "2",
    "title": "That Day",
    "href": "/watch/attack-on-titan-112?ep=3304"
  },
  {
    "id": "3305",
    "number": "3",
    "title": "Shining Dimly in the Midst of Despair",
    "href": "/watch/attack-on-titan-112?ep=3305"
  },
  {
    "id": "3306",
    "number": "4",
    "title": "Night of the Disbanding",
    "href": "/watch/attack-on-titan-112?ep=3306"
  }
]
```

</details>

<a id="getepisodeservers"></a>

<details>
  <summary><strong>getEpisodeServers(episodeId: string): Promise<{ sub: Server[]; dub: Server[] }></strong></summary>
**Server**: `{ type: string; id: string; serverId: string; name: string }`

Example

```ts
// Use an episode id from getEpisodes()
const servers = await hianime.getEpisodeServers("3303");
console.log(servers);
```

Response

```json
{
  "sub": [
    {
      "type": "sub",
      "id": "579601",
      "serverId": "4",
      "name": "HD-1"
    },
    {
      "type": "sub",
      "id": "1180455",
      "serverId": "6",
      "name": "HD-3"
    },
    {
      "type": "sub",
      "id": "413285",
      "serverId": "1",
      "name": "HD-2"
    }
  ],
  "dub": [
    {
      "type": "dub",
      "id": "586962",
      "serverId": "4",
      "name": "HD-1"
    },
    {
      "type": "dub",
      "id": "1180405",
      "serverId": "6",
      "name": "HD-3"
    },
    {
      "type": "dub",
      "id": "7481",
      "serverId": "1",
      "name": "HD-2"
    }
  ]
}
```

</details>

<a id="getepisodesources"></a>

<details>
  <summary><strong>getEpisodeSources(serverId: string): Promise<HianimeSources></strong></summary>
**Note**: `serverId` comes from objects returned by `getEpisodeServers()`.

Example

```ts
const data = await hianime.getEpisodeSources("579601");
console.log(data);
```

Response

```json
{
  "sources": [
    {
      "file": "https://lightningflash39.live/_v7/85da27503d497abadce04a6c756a9bfad648451cfea9f39d3c2a584a9ffb45644417f699e0da69cb4f50701ecebb8b1d75d4f37b02dc2eeb0e32a287de765222ad083ea27aa71e7dc61b69b07dccc5558c5451e2ff91642435e5ebc7dbfce30db6a9e2367f75ad4173dac32b5f950b11d5f662e56f75fe72efb3518b4e008b1c/master.m3u8",
      "type": "hls"
    }
  ],
  "tracks": [
    {
      "file": "https://megacloudforest.xyz/subtitle/5fbacd492a343a2f30b97d682b61b985/eng-2.vtt",
      "label": "English",
      "kind": "captions",
      "default": true
    },
    {
      "file": "https://megacloudforest.xyz/subtitle/5fbacd492a343a2f30b97d682b61b985/eng-3.vtt",
      "label": "English",
      "kind": "captions"
    },
    {
      "file": "https://megacloudforest.xyz/subtitle/806a582526a4c5a226514316bd5b6f64/806a582526a4c5a226514316bd5b6f64.vtt",
      "label": "English - (Crunchyroll)",
      "kind": "captions"
    },
    {
      "file": "https://megacloudforest.xyz/subtitle/5fbacd492a343a2f30b97d682b61b985/por-4.vtt",
      "label": "Portuguese",
      "kind": "captions"
    },
    {
      "file": "https://megacloudforest.xyz/subtitle/5fbacd492a343a2f30b97d682b61b985/spa-5.vtt",
      "label": "Spanish",
      "kind": "captions"
    },
    {
      "file": "https://megacloudforest.xyz/thumbnails/9f851301fa0ea7b316599351ccedb423/thumbnails.vtt",
      "kind": "thumbnails"
    }
  ],
  "encrypted": false,
  "intro": {
    "start": 138,
    "end": 215
  },
  "outro": {
    "start": 1452,
    "end": 1542
  },
  "server": 4
}
```

</details>

## Development

- Build: `npm run build`
- Dev (watch): `npm run dev`

## License

MIT
