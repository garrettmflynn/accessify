# Proposal: hightime
High-Performance Time Series Analysis on the Web

## Description
The following excerpt is taken from [Toward Community-Driven Big Open Brain Science: Open Big Data and Tools for Structure, Function, and Genetics](https://www.annualreviews.org/doi/abs/10.1146/annurev-neuro-100119-110036).
 > ### Big Time
> Physiology data are fundamentally multivariate time series. In contrast to unstructured and image
data, there is significantly less development for time series data. This is despite the fact that signal
processing has been to a large extent focused on analysis of dynamics (Kay 1993). A key counterexample highlights the severe limitations faced with big time series data. There is no “scikit-time” for time series. Rather, perhaps the most widely used Python time series toolbox is Prophet. Developed by Facebook, it is explicitly designed to incorporate seasonal trends (e.g., holiday effects)
and is therefore not appropriate for brain signals. Neural network frameworks support time series analysis, such as Long Short-Term Memory and other recurrent neural networks (RNNs)
(Goodfellow et al. 2016), but like CNNs, it is not clear how or when RNNs work. A few recent
theoretical works extended Kalman filters, the workhorse of much linear and nonlinear time series
modeling, to big data regimes (Chen et al. 2017, Zipunnikov et al. 2011). Efficient implementations of these tools, however, are not yet available. Brain science has pushed latent process models
(Smith & Brown 2003, Pakman et al. 2018, Sharma et al. 2018), but like the Kalman models, open
source and community-developed packages for these tools do not exist. Many of the classical tools
for time series analyses are incorporated into statsmodels, a Python package that includes many
regression techniques and basic time series techniques. The need for time series packages yields
an opportunity for the community to create, either anew or by expanding the current statsmodels,
the toolbox that will fill that void.

## References
- [Time Series Wikipedia](https://en.wikipedia.org/wiki/Time_series)
- [bci.js](https://bci.js.org/docs/)
- [dsp.js](https://github.com/corbanbrook/dsp.js)
- [GPU FFT](https://github.com/moothyknight/gpujsutils)
- [biquadjs](https://github.com/moothyknight/BiquadFilters.js)
