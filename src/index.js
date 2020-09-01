import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const elmIdName = 'oSihDlktIQ-some-unique-id'; /* Be unique as possible */
if (!document.getElementById(elmIdName)) {
    let div = document.createElement("div");
    div.id = elmIdName;
    div.style = 'all:initial';
    document.body.appendChild(div);
}

ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>
    , document.getElementById(elmIdName));

