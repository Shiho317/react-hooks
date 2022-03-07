import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import UseState from './Components/useState/UseState';
import UseRef from './Components/useRef/UseRef';
import UseMemo from './Components/useMemo/UseMemo';
import UseLayoutEffect from './Components/useLayoutEffect/UseLayoutEffect';
import UseImperativeHandle from './Components/useImperativeHandle/UseImperativeHandle';
import UseEffect from './Components/useEffect/UseEffect';
import UseContext from './Components/useContext/UseContext';
import UseCallback from './Components/useCallback/UseCallback';
import UseReducer from './Components/useReducer/UseReducer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UseState/>}/>
          <Route path='/useref' element={<UseRef/>}/>
          <Route path='/usereducer' element={<UseReducer/>}/>
          <Route path='/usememo' element={<UseMemo/>}/>
          <Route path='/uselayout' element={<UseLayoutEffect/>}/>
          <Route path='/useimperative' element={<UseImperativeHandle/>}/>
          <Route path='/useeffect' element={<UseEffect/>}/>
          <Route path='/usecontext' element={<UseContext/>}/>
          <Route path='/usecallback' element={<UseCallback/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
