import { lazy } from 'react';

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error bas aproach
      setTimeout(() => { resolve(import('./AboutPage')); }, 1000);
    })
);
