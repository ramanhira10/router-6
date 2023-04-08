import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Component1 from './components/Component1.js';
import Component2 from './components/Component2.js';
import ReactMemo from './components/ReactMemo';
import ReactUseMemo from './components/ReactUseMemo';
import ReactUseCallBack from './components/ReactUseCallBack';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Component1 />} />
      
      <Route index element={<Component1 />} />
      
      <Route path="component2">
        <Route index element={<Component2 />} />
      </Route>

      <Route path='ReactMemo'>
        <Route index element={<ReactMemo />} />
      </Route>

      <Route path='ReactUseMemo'>
        <Route index element={<ReactUseMemo />} />
      </Route>

      <Route path='ReactUseCallBack'>
        <Route index element={<ReactUseCallBack />} />
      </Route>
    </Routes>
  );
}

export default App;
