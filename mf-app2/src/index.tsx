import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const App: React.FC = () => (
  <div>
    <h1>Remote mf-app2</h1>
    <Button />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));