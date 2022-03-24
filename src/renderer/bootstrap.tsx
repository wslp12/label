import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screenplay from '../../public/assets/text/Screenplay';
import App from './App';
import text from '../../public/assets/text/text';

const screenplay = new Screenplay(text);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App screenplay={screenplay} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
