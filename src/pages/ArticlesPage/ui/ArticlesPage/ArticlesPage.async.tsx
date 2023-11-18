import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error bas aproach
        resolve(import('./ArticlesPage'));
      }, 1000);
    })
);
