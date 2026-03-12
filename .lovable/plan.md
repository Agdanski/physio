

## Plan: Add Debug Mode with Visible Overlays and Labels

Make all overlay boxes permanently visible with colored borders and region labels, so you can see exactly where each hit-zone sits and manually tweak the coordinates in the code.

### Changes to `src/components/BodyMap.tsx`

1. **Add a `DEBUG` toggle constant** at the top of the file (`const DEBUG_OVERLAYS = true`)

2. **Make overlays always visible in debug mode**:
   - Show a semi-transparent colored background and solid border on every zone at all times
   - Each region gets a unique color so you can tell them apart
   - Display the region label + zone index as small text inside each overlay box

3. **Keep normal behavior intact** — when `DEBUG_OVERLAYS` is `false`, everything works as before (highlights only on hover/select)

Once visible, you can edit the `[left%, top%, width%, height%]` values in the `regionDefs` array and see the boxes move in real-time in the preview. When you're done positioning, set `DEBUG_OVERLAYS = false` to restore normal behavior.

