import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import AppRouter from './routes';


function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
