

## Exercise Image Audit

### All unique imageKeys used in programs.ts and their status in the registry

I extracted every `imageKey` from all 21 programs and cross-referenced with `exerciseImages.ts`.

#### CURRENTLY HAVE IMAGES (33 keys mapped):
| imageKey | Image File | Correct Exercise? |
|---|---|---|
| `abdominal-brace` | abdominal-brace-with-breathing.png | Yes |
| `bridge` | bridge.png | Yes |
| `bird-dog` | bird-dog-new.png | Yes |
| `side-plank` | side-plank-from-knees.png | Yes |
| `sit-to-stand` | sit-to-stand.png | Yes |
| `band-ext-rotation` | band-ext-rotation.png | Yes |
| `scaption-raise` | scaption-raise.png | Yes |
| `band-row` | band-row.png | Yes |
| `isometric-abduction` | isometric-abduction.png | Yes |
| `seated-knee-ext` | seated-knee-extension.png | Yes |
| `step-up` | step-up.png | Yes (also used for `step-down`) |
| `hip-abduction` | hip-abduction.png | Yes (side-lying hip abduction) |
| `chin-tuck` | chin-tuck.png | Yes |
| `chin-tuck-lift` | chin-tuck-with-head-lift.png | Yes |
| `wall-slide` | wall-slide.png | Yes (also used for `wall-sit`) |
| `prone-on-elbows` | prone-on-elbows.png | Yes |
| `standing-extension` | standing-extension.png | Yes |
| `isometric-wrist-ext` | isometric-wrist-extension.png | Yes |
| `eccentric-wrist-ext` | eccentric-wrist-extension.png | Yes |
| `wrist-extension` | wrist-extension.png | Yes |
| `supination` | supination.png | Yes |
| `towel-squeeze` | towel-squeeze.png | Yes |
| `hip-extension-band` | hip-extension-band.png | Yes |
| `bridge-band` | bridge-with-band.png | Yes |
| `lateral-band-walk` | lateral-band-walk.png | Yes |
| `heel-dig-bridge` | heel-dig-bridge.png | Yes |
| `bridge-walkout` | bridge-walkout.png | Yes |
| `romanian-deadlift` | romanian-deadlift.png | Yes |
| `hamstring-curl` | hamstring-curl-band.png | Yes |
| `nordic-hamstring` | nordic-hamstring.png | Yes |
| `ball-squeeze` | ball-squeeze-isometric.png | Yes |
| `lateral-lunge` | standing-lateral-lunge.png | Yes |
| `nerve-glide` | median-nerve-glide.png | Yes |
| `tendon-glide` | tendon-glide.png | Yes |
| `wrist-flexor-stretch` | wrist-flexor-stretch.png | Yes |
| `split-squat` | split-squat.png | Yes |
| `ankle-eversion` | ankle-eversion-band.png | Yes |
| `calf-raise` | calf-raise.png | Yes |
| `calf-stretch` | standing-calf-stretch.png | Yes |
| `bent-knee-calf-stretch` | bent-knee-calf-stretch.png | Yes |
| `decline-squat` | decline-squat.png | Yes |
| `terminal-knee-ext` | terminal-knee-extension.png | Yes |
| `mini-squat` | mini-squat.png | Yes |
| `leg-extension` | leg-extension-slow-tempo.png | Yes |

#### DUPLICATE/ALIAS entries in registry (acceptable):
- `step-down` → reuses `step-up` image (reasonable — same step movement)
- `wall-sit` → reuses `wall-slide` image (NOT ideal — different exercises)
- `single-calf-raise` and `single-leg-calf-raise` → both map to same file
- `double-calf-raise` → mapped but not used by any program imageKey

#### MISSING — No image exists (18 unique imageKeys with no mapping):
| # | imageKey | Exercise Name | Programs Using It |
|---|---|---|---|
| 1 | `isometric-ext-rotation` | Isometric External Rotation at Wall | RCRSP, RC Tear, Frozen Shoulder |
| 2 | `wall-pushup-plus` | Wall Push-Up Plus | RCRSP |
| 3 | `assisted-flexion-stick` | Assisted Shoulder Flexion with Stick | RC Tear, Frozen Shoulder |
| 4 | `straight-leg-raise` | Straight Leg Raise | Knee OA, Meniscal, ACL |
| 5 | `isometric-neck-ext` | Isometric Neck Extension | Neck Pain |
| 6 | `nerve-slider` | Sciatic Nerve Slider | Sciatica |
| 7 | `clamshell` | Clamshell | Patellofemoral, Posterior Hip |
| 8 | `single-leg-balance` | Single-Leg Balance | Ankle Sprain, Meniscal |
| 9 | `eccentric-heel-drop` | Eccentric Heel Drop from Step | Achilles |
| 10 | `seated-calf-raise` | Seated Calf Raise | Achilles |
| 11 | `bent-knee-calf-raise` | Bent-Knee Calf Raise | Achilles |
| 12 | `pendulum` | Pendulum | Frozen Shoulder |
| 13 | `ext-rotation-stick` | External Rotation with Stick | Frozen Shoulder |
| 14 | `plantar-stretch` | Plantar Fascia Stretch | Plantar Heel |
| 15 | `heel-raise-towel` | Heel Raise with Towel Under Toes | Plantar Heel |
| 16 | `towel-scrunch` | Towel Scrunch / Short-Foot Exercise | Plantar Heel |
| 17 | `hip-adduction` | Side-Lying Hip Adduction | Groin Strain |
| 18 | `copenhagen-adduction` | Copenhagen Adduction (Short Lever) | Groin Strain |
| 19 | `quad-set` | Quad Set | Meniscal |
| 20 | `quad-set-towel` | Quad Set with Towel Under Knee | ACL |
| 21 | `spanish-squat` | Spanish Squat Isometric | Patellar Tendinopathy |
| 22 | `figure-4-stretch` | Figure-4 Stretch | Posterior Hip |
| 23 | `isometric-hip-wall` | Isometric Wall Press for Hip Abductors | GTPS |

#### UPLOADED IMAGES — What to do with the 4 new uploads:

| Upload | Label on Image | Maps to imageKey | Action |
|---|---|---|---|
| `5cef709f...` | Single-Leg Balance | `single-leg-balance` | Add — fills missing #8 |
| `60be90fa...` | Single-Leg Calf Raise | `single-leg-calf-raise` | Update existing (better quality) |
| `521d095d...` | Straight Leg Raise | `straight-leg-raise` | Add — fills missing #4 |
| `9927084d...` | Clamshell | `clamshell` | Add — fills missing #7 |

#### ISSUE: `wall-sit` reuses `wall-slide` image
Wall Sit (back against wall, partial squat) and Wall Slide (forearms sliding up wall) are very different exercises. This needs its own image eventually.

### Summary

- **44 imageKeys** are used across all 21 programs
- **~24 have correct images** already in the registry
- **4 uploads** ready to add now (Single-Leg Balance, Straight Leg Raise, Clamshell, Single-Leg Calf Raise update)
- **19 still missing** after adding these 4 uploads
- **1 incorrect reuse** (`wall-sit` using `wall-slide` image)

### Implementation Plan

1. Copy the 4 uploaded images to `src/assets/exercises/` with names: `single-leg-balance.png`, `single-leg-calf-raise.png` (overwrite), `straight-leg-raise.png`, `clamshell.png`
2. Add imports and registry entries in `exerciseImages.ts` for the 3 new keys: `single-leg-balance`, `straight-leg-raise`, `clamshell`
3. Clean up: remove unused `double-calf-raise` and `single-calf-raise` entries (only `single-leg-calf-raise` is used in programs)

After this, **19 exercises** still need images created externally.

