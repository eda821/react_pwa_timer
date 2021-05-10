import { VFC } from 'react';
import Timer from 'containers/Timer';
import './App.css';

const App: VFC = () => (
  <div className="container">
    <Timer limit={60} />
  </div>
);

export default App;
