import App from './scripts/start';
import './assets/styles/default.css';

import Routes from './routes';

Routes(
  App, 
  document.querySelector("#app")
).listen();