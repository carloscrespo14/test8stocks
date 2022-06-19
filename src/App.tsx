import './app.scss';
import Header from './components/Header';
import Layout from './components/layout';
import Lists from './components/Lists';
const App = () => {

  return (
    <div className="App">
      <Layout>
        <div className='container'>
          <Header />
          <Lists />
        </div>
      </Layout>
    </div>
  );
}

export default App;
