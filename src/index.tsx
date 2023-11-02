import { createRoot } from 'react-dom/client';
import { Counter } from './components/Counter';


const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
 <div><Counter/></div>,
);