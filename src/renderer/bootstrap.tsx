import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Board from './components/pages/Board';
import Main from './components/pages/Main';

const id = 'root';
const rootElem = document.getElementById(id);
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/board" element={<Board />} />
          </Route>
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.log(
    `${rootElem} 가 존재하지 않습니다. (${id} 가 존재하지 않을 수도 있습니다)`,
  );
}
