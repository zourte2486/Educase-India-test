
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm h-full max-h-[812px] bg-popx-white shadow-lg rounded-3xl overflow-hidden relative">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
          </Routes>
          <BottomNavigation currentPage={1} totalPages={4} />
        </Router>
      </div>
    </div>
  );
}

export default App;
