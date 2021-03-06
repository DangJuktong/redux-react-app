import IndexPage from './pages'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <IndexPage />
      </Provider>
      
    </div>
  );
}

export default App;
