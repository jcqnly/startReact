import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ul><li>bread</li><li>veggies</li><li>fruit</li></ul>, document.getElementById('root'));


serviceWorker.unregister();
