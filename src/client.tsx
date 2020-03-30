import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

// idがappの部分をhydrateで描画する
hydrate(<App />, document.querySelector('#root'));