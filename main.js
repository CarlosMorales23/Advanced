import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponent } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { promiseComponent } from './src/concepts/03-promise';
import { promiseRaceComponent } from './src/concepts/04-promise-race';
import { asyncComponent } from './src/concepts/05-async';
import { asyncAwaitComponent } from './src/concepts/06-asyncAwait';
import { callBackComponent } from './src/concepts2/02-callbacks';
import { callBackComponentManejoDeErrores } from './src/concepts2/02-callbacks-manejo-de-errores';
import { callBackHellComponent } from './src/concepts2/02-callbacksHell';
import { asyncManejoErrorComponent } from './src/concepts/05-asyncManejoError';
import { asyncAwaitErrorComponent } from './src/concepts/06-asyncAwaitError';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`;

const element = document.querySelector('.card');

// callbacksComponent(element)
// promiseComponent(element)
// promiseRaceComponent(element)
// asyncComponent(element)
// callBackComponent(element)
// callBackComponentManejoDeErrores(element)
// asyncManejoErrorComponent(element)
// asyncAwaitComponent(element)
asyncAwaitErrorComponent(element)

