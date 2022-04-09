# accessify
Web accessibility for low-bandwidth inputs

## Introduction
### Goal
Implement a fully on-browser web navigation system for low-bandwidth inputs (e.g. BCIs).

### Features
- [x] Enable virtual mouse interaction with CSS elements
- [ ] Make buttons available for labeling and direct selection
- [ ] Flash buttons for SSVEP / P300 selection
- [ ] Accessify Chrome Extension

### Questions
#### Which devices can be used to detect P300 / SSVEP responses?
  - [ ] Muse 2: [P300 likely](https://neurotechx.github.io/eeg-notebooks/getting_started/available_notebooks.html)
  - [ ] OpenBCI Daisy-Cyton: Previous literature says yes to both
  - [ ] FreeEEG32
  - [ ] Neurosity Crown

#### Does detection disrupt stimuli generation?
- Use `ssvep-stimuli` 

#### Does detection work on low-spec hardware?
- Validate detection on a Chromebook

## Repo Structure
- `/src`: Source code
    - `/libraries`: Libraries to be published separately
    - `/core`: Core internal functions
    - `/ui`: Standard Web Component library
        - `/core`: **Keyboard** and **Mouse** components
        - `/mouse`: Internal mouse components
        - `/keyboard`: Internal keyboard components

- `/docs`: Documentation and demo site

## Rough Reference
## Classes
### accessify.Keyboard()
Customizable keyboard with SSVEP / P300 controls

### accessify.Mouse()
Virtual mouse

## Namespaces
### accessify.select(type)
1. **p300:** Basic P300 Detection
    - potentials.p300(): Basic P300 Detection
2. **ssvep:** Basic SSVEP Detection
    - hightime.fbcca(): Filter Bank Canonical Correlation Analysis (FBCCA) algorithm

### accessify.move(type)
1. **erd / ers:** Basic Event-Related (De)Synchronization (i.e. motor imagery) Detection

## Roadmap
1. Implement Filter Bank Canonical Correlation Analysis (FBCCA) in **hightime**
2. Test FBCCA algorithm on a single flashing stimulus
3. Implement P300 detection in **potentials** with all the signal processing in **hightime**
4. Test P300 detection on a single flashing stimulus
5. Test both algorithms on various EEG devices
6. Test both algorithms on a Chromebook
7. Test both algorithms with multiple stimuli to discriminate from
8. Design a navigation scheme (i.e. Web Components) that can use the algorithms to navigate a webpage
9. Design a Chrome Extension that allows for generic web browsing

## Dependencies
- [ssvep](https://github.com/brainsatplay/ssvep): Detect SSVEP on the browser
- [potentials](https://github.com/brainsatplay/potentials): Detect ERPs on the browser

### Peer Dependencies
- [datastreams-api](https://github.com/brainsatplay/datastreams-api): Get raw data on the browser
