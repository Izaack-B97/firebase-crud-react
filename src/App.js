import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Links } from './components/Links';

import './database/firebase';

const App = () => {
  return (
    <div className='container p-4'>
      <div className='row'>
        <Links />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
