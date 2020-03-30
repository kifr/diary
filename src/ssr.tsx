import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export const ssr = (): string => (`
  <!DOCTYPE html>
  <html lang="ja">

  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="../public/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <title>Diary</title>
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${renderToString(<App />)}
    </div>
    <script src="./client.js"></script>
  </body>

  </html>
`);