<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules
- All editable business details (name, email, prices, booking URL, FAQ) live in src/lib/site.ts so non-devs can edit one file.
- Booking buttons use BookButton/useBooking: open the external booking URL when set, otherwise the request-form modal.
- Home and About reuse the coach introduction in src/lib/site.ts to keep supplied coaching details consistent.
- Cloudflare deploy: keep the built-in nitro cloudflare-module build; root wrangler.jsonc only carries Worker settings and `npm run deploy` ships dist/server/wrangler.json — adding @cloudflare/vite-plugin would duplicate the adapter and break the Lovable preview.
