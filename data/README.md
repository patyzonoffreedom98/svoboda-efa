# Historical US equities snapshot

Provider: https://datahub.io/core/s-and-p-500
Original research: Robert J. Shiller, https://www.econ.yale.edu/~shiller/data.htm
Provider's declared license: ODC-PDDL-1.0, https://opendatacommons.org/licenses/pddl/1-0/
Retrieved 2026-10-14. Source URL and downloaded CSV SHA-256 are in the JSON.

Licensing qualification: DataHub's README explicitly says there is no exact statement of the original data license; its maintainer assumes public-domain status because of the size and factual nature and dedicates the compilation under PDDL. This is a reliance on the provider's published license, not a claim that upstream rights were independently cleared. Attribution does not cure third-party restrictions. No MSCI or FRED extension data is included.

Only January 1871–June 2023 observations are retained; subsequent DataHub rows contain price only and zero placeholders for dividends. Each row is [YYYY-MM, monthly-average nominal USD price, annualized dividend]. US historical composite, not a global index and not the modern S&P 500 throughout history.

Monthly gross return proxy: (P_t + D_t/12) / P_(t-1) - 1. Historical dividends include interpolated values. Monthly-average prices smooth volatility; this is a reconstructed educational backtest, not exact executable month-end returns. No taxes, inflation or FX; optional annual cost deducted monthly with factor (1-cost)^(1/12). First return February 1871; last June 2023.

Every complete rolling window is included, advanced one month. One-off deposit before first return; periodic deposits before each month's return. Lump sum annualized as CAGR; periodic investment annualized via money-weighted IRR. Histogram bins are left-inclusive/right-exclusive except open tails. Zero belongs to 0–5%; near-zero floating-point values normalized within 1e-10. Overlapping windows are not independent; historical frequency is not a forecast.
