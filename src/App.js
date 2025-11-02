import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="" element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
