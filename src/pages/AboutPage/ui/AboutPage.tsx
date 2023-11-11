import { Counter } from 'entities/Counter';
import { memo } from 'react';

const AboutPage = () => {
  return (
    <div>
      AboutPage
      <Counter />
    </div>
  );
};

export default memo(AboutPage);
