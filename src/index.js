import React from 'react';
import ReactDom from 'react-dom/client';

import Toplearn from './Toplean';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Toplearn />
    </React.StrictMode>
)