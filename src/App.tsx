import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { SignInModal } from './components/SignInModal';
import { SignUpModal } from './components/SignUpModal';
import AppProvider from './hooks/index';
import { startServer } from './services/fakeBackend';

startServer();

function App() {

  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
      <SignInModal />
      <SignUpModal />
    </AppProvider>
  );
}

export default App;
