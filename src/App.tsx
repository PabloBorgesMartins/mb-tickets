import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { SignInModal } from './components/SignInModal';
import AppProvider from './hooks/index'

function App() {

  return (
    <AppProvider>
      <Header />
      <Routes />
      <GlobalStyle />
      <SignInModal />
    </AppProvider>
  );
}

export default App;
