import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';
import './index.css';

const App: React.FC = () => (
  <>
    <Button />
  </>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(<App />);