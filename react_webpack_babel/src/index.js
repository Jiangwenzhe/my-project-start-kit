import React from "react";
import ReactDOM from "react-dom";
import './style.scss';

const App = () => {
  return <div>React is running</div>;
};

// enable HMR
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));