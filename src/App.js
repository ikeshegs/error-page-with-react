import React from 'react';
import SVG from './404.svg';
import './App.css';

function App() {
  return (
    <div className="app__container">
      <div className="app__image">
        <img src={SVG} alt="A boy lost in space" height="70%" width="70%" />
      </div>
      <div className="app__text">
        <h1 className="app__text--big">An error occurred</h1>
        <p className="app__text--small">
          Seems like you got lost.
          <span className="app__text--link"> <a href="#">Reload</a> </span>
          this page to try again.
        </p>
      </div>
    </div>
  );
}

export default App;
