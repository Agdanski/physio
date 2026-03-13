

## Problem

On small screens (like the current 384px viewport), the header's right side contains both the "Feedback" button and the "Sign Out" button side by side, which causes them to overlap with the logo/title on the left.

## Solution

Make the header responsive on small screens:

1. **In `src/pages/Index.tsx`** — Update the header layout:
   - Allow the header to wrap on small screens (`flex-wrap`)
   - On mobile, hide the button text labels and show only icons for both Feedback and Sign Out buttons
   - Alternatively, stack the logo row and buttons row on very small screens

2. **In `src/components/FeedbackDialog.tsx`** — Hide the "Feedback" text on small screens:
   - Add `hidden sm:inline` to the text span so only the icon shows on mobile

3. **In `src/pages/Index.tsx`** — Hide "Sign Out" text on small screens:
   - Add `hidden sm:inline` to the text so only the LogOut icon shows on mobile

This keeps both buttons accessible but prevents overlap by showing icon-only buttons on narrow viewports.

