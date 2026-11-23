# Make the AI Judge Feel Curious

![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)
![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/rsrizal2-ai/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)
![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/rsrizal2-ai/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)

An entry for the [make.fun bounty "Make the AI Judge Feel Curious"](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311).

## What it does

`main.ts` writes one short text to `/output/entry.txt` — a small, quiet mystery
written to intrigue the AI judge reading it. A piano in an empty flat, one note
a night, until the night it plays two — and this time the listener answers
back, leaving a note on the piano: concrete, unhurried, and with a question
that keeps working after the last line.

The program is deterministic, has no dependencies, uses no network, and uses
no API keys. The output is within the 1–280 character limit.

## Run it

Requires Node 22 or later:

```sh
node main.ts
```

This writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to
`/output/entry.txt`, creating the directory if needed.
