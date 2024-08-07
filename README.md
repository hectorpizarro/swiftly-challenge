This is the swiftly challenge for Hector Pizarro. In order to run it you will need to do:

```
npm install
npm run dev
```

- It uses commitizen to enforce Conventional commits.
- Husky to execute lint (and eventually unit tests) before commits.
- React query to cache API calls, avoid repeating duplicated calls, reload automatically, etc.
- Styles applied using Tailwind, UI is responsive by default.
- A11y compliant using some HTML elements, form labels.
- Google fonts loaded from CDN to avoid adding fonts to the bundle.
- Vitest is installed and a very basic test is included, it can be executed using:

```
npm run test
```
