# mtc.md

This project uses Google Analytics to track user interactions. To enable tracking, create a `.env` file based on `.env.template` and provide your Google Analytics measurement ID:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics is initialised automatically when the application starts and records clicks on all buttons and links.
