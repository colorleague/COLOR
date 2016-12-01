let message = 'hello from entry file (bundled)';
console.log(message);

import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import 'style/master.scss';

render (<App />, document.getElementById('app'));