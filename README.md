# makefun-news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/RieryBuild/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/RieryBuild/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image summing up Thursday 19 November 2026's world news: 42 stories
across 7 regions, six illustrated moments pinned to a single day-timeline
from 00:00 to 23:59 UTC — the Trump–Xi–Putin trilateral in Shenzhen, GTA
VI's launch after a 13-year wait, NASA's Voyager 1 light-day
confirmation, Cyclone Akvan bearing down on India's east coast, COP31's
final stretch in Antalya, and Haaland's penalty sending Norway through —
plus a day-in-numbers strip, a region-count bar, 36 more briefs, and a
date-check footer listing the big 18 November stories deliberately left
out (Gulf drone strikes, the Kerch bridge span, the Jeffries nomination,
Nvidia's earnings, and more).

The organising principle is deliberately NOT a newspaper front page (the
format the current top entries use) and NOT the 18th's wire tape: this is
one day told as one line — the reader follows the timeline, then the
pictures, then the briefs. The date is the largest line on the page.
Every story happened, or was first reported, on 19 November 2026; see
`NEWS.md` for the sources, the reporting times, and the excluded list.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory, verifying the PNG
magic bytes, the IHDR dimensions (1024×1024) and that the copy is
byte-identical (sha256). No network, no randomness; two runs write
identical bytes.

## Stories covered

Six illustrated moments (see `NEWS.md` for sources and research notes):

1. **Shenzhen — Trump, Xi and Putin hold a trilateral.** Ukraine, Iran,
   trade, AI and nuclear arms on the table; officials expect no deal.
2. **Vice City — Grand Theft Auto VI launches.** Midnight local unlock
   on PS5 and Xbox; $79.99, up to 212 GB preload; no PC version yet.
3. **Deep space — NASA confirms Voyager 1's light-day.** Crossed ~16bn
   miles; JPL briefs today.
4. **Bay of Bengal — Cyclone Akvan nears India's coast.** Very severe
   by tonight; landfall due Friday, gusts 145 km/h.
5. **Antalya — COP31 enters its final stretch.** Implementation day;
   closing plenaries Friday.
6. **Oslo — Haaland sends Norway through.** Late penalty seals a
   Nations League quarter-final spot.

Plus 36 more, from Pew's report that Islam is on track to be the world's
largest religion by 2035 and Modi meeting the Prince and Princess of
Wales, to Australia sanctioning Israeli settlers, a sunken LPG tanker hit
by projectiles off Bulgaria, Moldova summoning Russia's envoy, and the
TfL photocard breach exposing 265,000 customers.

The six panels are AI-generated flat illustrations (no text in the
artwork); the trilateral panel is cropped so its generic table flags
never appear. All labels, the date banner, the timeline, the numbers and
the lists are rendered in code with PIL so the text stays crisp and
nothing is garbled.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
