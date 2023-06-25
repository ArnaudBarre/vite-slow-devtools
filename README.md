# Devtools perf issue reproduction with high number of JS requests

## Setup

- Install deps with you're preferred package manager
- Run `node generate.js`
- Run `vite dev`
- Open the browser & the devtools


## Observed perf on Mac Pro Intel

### Chrome [🐞](https://bugs.chromium.org/p/chromium/issues/detail?id=1457783)

- Fast load (~5s)
- Big lag when switching from the `Fetch/HMR` tab to the `JS` tab.

### Firefox [🐞](https://bugzilla.mozilla.org/show_bug.cgi?id=1840284)

- Very slow load (~1m)
- Moderate lag when switching from the `Fetch/HMR` tab to the `JS` tab.

### Safari

- Fast load (~5s)
- Devtools very responsive at any time
- Very long to get details on requests (>1m)
