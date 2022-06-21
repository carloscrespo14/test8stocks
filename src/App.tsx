import './app.scss';
import Header from './components/Header';
import Layout from './components/layout';
import Lists from './components/Lists';
import { AppProvider } from './context/Provider';


const App = () => {

  return (
    <div className="App">
      <AppProvider>
        <Layout>
          <div className='container'>
            <Header />
            <Lists />
          </div>
        </Layout>
      </AppProvider>
    </div>
  );
}

export default App;
