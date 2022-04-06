# accessify
Web accessibility for low-bandwidth inputs

## Features
- [x] Enable virtual mouse interaction with CSS elements
- [ ] Make buttons available for labeling and direct selection
- [ ] Flash buttons for SSVEP / P300 selection
- [ ] Accessify Chrome Extension

## Methods
accessify.ui
- accessify.ui.keyboard()
- accessify.ui.mouse()

accessify.p300
- potentials.p300(): Basic P300 Detection
accessify.ssvep
- ssvep.fbcca(): Filter Bank Canonical Correlation Analysis (FBCCA) algorithm



## Dependencies
- [ssvep](https://github.com/brainsatplay/ssvep): Detect SSVEP on the browser
- [potentials](https://github.com/brainsatplay/potentials): Detect ERPs on the browser

### Peer Dependencies
- [datastreams-api](https://github.com/brainsatplay/datastreams-api): Get raw data on the browser
