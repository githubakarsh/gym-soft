import { AppRouter } from './approuter/AppRouter';
import { AppHeader } from './components/AppHeader';
import { useHelmet } from './hooks/UseHelmet';

function App() {
  useHelmet("Gym soft");
  return (
    <div >
      <header >
      <AppHeader />
      </header>
      <main className="main-container">
        <AppRouter />
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
