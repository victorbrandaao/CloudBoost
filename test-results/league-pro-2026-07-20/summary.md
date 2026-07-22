# League of Legends PRO session test

Date: 2026-07-20  
CloudBoost: 4.3.1-test1, PRO  
Profile: League of Legends  
Mode: Balanced  
Sample window: 5 minutes, 60 samples at 5-second intervals

## Independent sampling

| Signal | Result |
| --- | ---: |
| External ping average | 18.7 ms |
| External ping median | 17.9 ms |
| External ping p95 | 22.2 ms |
| External ping p99 | 28.9 ms |
| External ping maximum | 30.0 ms |
| Sample-to-sample latency variation average | 1.9 ms |
| Sample-to-sample latency variation p95 | 11.1 ms |
| League CPU average | 74.5% |
| League CPU maximum | 106.3% |
| League memory average | 278.7 MB |
| CloudBoost CPU average | 1.68% |
| CloudBoost CPU maximum | 5.9% |
| CloudBoost memory average | 46.1 MB |

## CloudBoost results

- Session Lab: 90/100, native session ready.
- Session Lab context: Mac nominal, power OK, quiet background, 19 ms network context, 3 ms jitter.
- Live Session Doctor capture: 97/100, 25 ms ping, 6 ms jitter, stable trend, AWDL Guarded+.
- Applied actions shown by the app: AWDL Guard requested, DNS cache refreshed, Time Machine pause requested.
- Final session score: 92/100 over 42m 38s.
- League detected in 100% of 180 benchmark samples.
- Final route p95: 25 ms; maximum jitter: 8 ms; maximum packet loss: 0.0%.
- Eleven threshold events were recorded; thermal pressure remained nominal.
- The app's 19% target CPU value is normalized by active CPU capacity and is not directly comparable to the independent process CPU percentage.

## Interpretation

The app stayed lightweight while League was running and its network readings were consistent with the independent samples. This is an observational PRO session, not a controlled before/after benchmark, so these results should not be presented as proof of an FPS increase or guaranteed latency reduction.

## Files

- `metrics.csv`: raw independent samples.
- `session-live.png`: live PRO session and Session Doctor.
- `session-lab.png`: completed Session Lab result.
- `session-result.png`: final CloudBoost session evidence.
- `session-proof.txt`: copied local Session Proof summary.
