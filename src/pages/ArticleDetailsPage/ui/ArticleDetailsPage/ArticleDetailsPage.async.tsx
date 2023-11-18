import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error bas aproach
        resolve(import('./ArticleDetailsPage'));
      }, 1000);
    })
);
