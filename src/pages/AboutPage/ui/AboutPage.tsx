import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
  return (
    <Page>
      AboutPage
      <Counter />
    </Page>
  );
};

export default memo(AboutPage);
