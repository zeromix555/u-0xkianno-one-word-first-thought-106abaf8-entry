[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/zeromix555/u-0xkianno-one-word-first-thought-106abaf8-entry/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/zeromix555/u-0xkianno-one-word-first-thought-106abaf8-entry/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

# One Word, First Thought

One word — the first that comes to mind — entered in a
[make.fun bounty](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
where an AI judge compares words two at a time on which is more interesting.

## The word

> **petrichor**

The scent of rain on dry earth. Surprising, vivid, and a little witty in
its sound — stone-blood, the earth's own perfume after a storm.

## How it is built

`main.ts` (Node 22) is a deterministic program: it writes that one fixed
word to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). No
network, no clock, no randomness — run it twice and the outputs are
byte-identical (9 characters, exactly one word).
