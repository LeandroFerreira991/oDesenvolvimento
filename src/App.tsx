import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experiencias from './screens/Experiencias/Experiencias';
import Formacao from './screens/Formacao/Formacao';
import Hobbies from './screens/Hobbies/Hobbies';
import QuemSouEu  from './screens/QuemSouEu/QuemSouEu';
import Header from './common-componets/Header'
import './shared/styles.css'

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
          <Route path="/" element={<QuemSouEu/>}></Route>
          <Route path="/formacao" element={<Formacao/>}></Route>
          <Route path="/experiencias" element={<Experiencias/>}></Route>
          <Route path="/hobbies" element={<Hobbies/>}></Route>

      </Routes>
		</BrowserRouter>
  );
}

export default App;
