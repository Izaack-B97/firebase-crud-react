import { Links } from './components/Links';

import './database/firebase';

const App = () => {
  return (
    <div className='container p-4'>
      <div className='row'>
        <Links />
      </div>
    </div>
  );
}

export default App;
