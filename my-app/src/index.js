import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import ClassApp from './Components/ClassApp';
import * as serviceWorker from './serviceWorker';

//import { tsTypeParameterInstantiation } from '@babel/types';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ClassApp />, document.getElementById('root'));

serviceWorker.unregister();
