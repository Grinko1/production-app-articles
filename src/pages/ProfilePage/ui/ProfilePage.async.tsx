import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error bas aproach
        resolve(import('./ProfilePage'));
      }, 1000);
    })
);
