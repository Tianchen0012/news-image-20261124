[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Tianchen0012/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Tianchen0012/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# The World Today — Tuesday 24 November 2026

A make.fun bounty entry for
[news-image-20261124](https://make.fun/bounty/news-image-20261124):
one image summing up the world news of Tuesday 24 November 2026.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`. The image is
the entry itself: a newspaper front page with the four stories above,
each with a small flat illustration (chip, gavel, Capitol dome, chess
board) — no photographs, no graphic content.

## The four stories

1. **Huang back at Nvidia** — Nvidia's board reinstated Jensen Huang as
   CEO, 11 days after he resigned; shares jumped 33% and the Nasdaq
   rallied 6%. Announced Monday in the US, reported Tuesday 24 November
   in Asia-Pacific editions. Sources:
   [Reuters](https://www.reuters.com/business/view-nvidia-reinstates-jensen-huang-ceo-igniting-tech-surge-2026-11-23/),
   [CNN](https://www.cnn.com/2026/11/23/tech/nvidia-reinstates-jensen-huang-ceo?cid=external-feeds_iluminar_meta).
2. **States sue over Grok deepfakes** — Virginia and Oregon sued Elon
   Musk's SpaceX and related firms, the first state lawsuits over Grok's
   AI image tool generating sexualised images, including images appearing
   to depict children. Filed Monday in the US, reported Tuesday
   24 November in Asia-Pacific editions. Sources:
   [Reuters](https://www.reuters.com/legal/government/virginia-oregon-sue-musks-spacex-over-grok-ais-creation-child-sexual-abuse-2026-11-23/),
   [AP via Reflector](https://www.reflector.com/news/national/states-sue-musk-companies-over-flood-of-sexualized-images-made-with-ai-chatbot-grok/article_c1b1e255-9e6d-59bb-9972-c21e26b885a4.html).
3. **Congressman to resign** — Democratic Rep. Jimmy Gomez of California
   said he will resign from Congress effective 1 December 2026, after a
   House Ethics Committee report found substantial evidence of sexual
   misconduct toward a House staffer. Announced Monday in the US, reported
   Tuesday 24 November in Asia-Pacific editions. Sources:
   [CNN](https://www.cnn.com/2026/11/23/politics/house-ethics-committee-reports-jimmy-gomez?cid=external-feeds_iluminar_meta),
   [AP via Reflector](https://www.reflector.com/news/national/democratic-rep-jimmy-gomez-resigns-after-ethics-panel-finds-evidence-of-sexual-misconduct/article_637e1f88-b72a-5fc0-98aa-3fabee030784.html).
4. **Chess crown on the line** — Game 1 of the 2026 FIDE World Chess
   Championship begins in Geneva on Tuesday 24 November: defending
   champion Gukesh Dommaraju of India faces challenger Javokhir Sindarov
   of Uzbekistan, the youngest-ever match for the classical crown, with a
   $2.5 million prize fund. Sources:
   [Chess.com](https://www.chess.com/news/view/2026-fide-world-chess-championship-game-1),
   [Gulf News](https://gulfnews.com/sport/chess-history-beckons-as-gukesh-dommaraju-faces-javokhir-sindarov-for-world-title-1.500757964).

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, JPEG bytes in a file named
`entry.png`, as the rules allow). Two runs write byte-identical output
(verified in this session, 2026-11-24).

## License

MIT — see [LICENSE](LICENSE).

