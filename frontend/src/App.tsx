import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { Homepage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
          <Route index element={<Homepage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
