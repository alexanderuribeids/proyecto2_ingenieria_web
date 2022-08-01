import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'layouts/Layout';
import { Home } from 'pages/Home';
import { Iphonex } from 'pages/iphonex';
import { Tablet } from 'pages/tablet';
import { Desktop } from 'pages/desktop';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/iphonex' element={<Iphonex />} />
        <Route path='/tablet' element={<Tablet />} />
        <Route path='/desktop' element={<Desktop />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
