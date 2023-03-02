import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Nav from './Nav/Nav'
import Variants from './Variants/Variants';
import Basic from './Basic/Basic';
import Layout from './Layout/Layout';
import SliderDemo from './SliderDemo/SliderDemo';
import LayoutMini from './LayoutMini/LayoutMini';
import Home from './Home';
import UseScrollBasic from './useScrollBasic/UseScrollBasic';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/basic' element={<Basic></Basic>}></Route>
          <Route path='/usescrollbasic' element={<UseScrollBasic></UseScrollBasic>}></Route>
          <Route path='/variants' element={<Variants></Variants>}></Route>
          <Route path='/layout' element={<Layout></Layout>}></Route>
          <Route path='/slider' element={<SliderDemo></SliderDemo>}></Route>
          <Route path='/layout-mini' element={<LayoutMini></LayoutMini>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
