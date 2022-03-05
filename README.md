# Repro Next.js

## i18n and external rewrites do not work

A GET request to `/api/event` is supposed to return
`Example Domain`, but it returns a Next.js 404 page
and ignores the rewrite entirely.

With `i18n` disabled in `next.conf.js`, it works.

This bug does not seem to come from a particular Next.js version,
but rather from a change in the Vercel backend.

We redeployed a week old working deployment and it suddenly
didn't work anymore.

Had to alias the old deployment until this issue is resolved.
