import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>React is running nhg...</div>;
};


// enable HMR
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));