import Input from './components/Input'
import Capitais from './components/Capitais'

import { GlobalStyle } from './styles/global'
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <GlobalStyle/>
      <Input/>
      <Capitais/>
    </AppProvider>
  );
}

export default App;
