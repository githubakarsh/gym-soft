import { AppRouter } from './approuter/AppRouter';
import { AppHeader } from './components/AppHeader';

function App() {
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
