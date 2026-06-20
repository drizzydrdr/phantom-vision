import { HashRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import Today from './pages/Today';
import History from './pages/History';
import Spark from './pages/Spark';

export default function App() {
  return (
    <HashRouter>
      <div className="halftone-bg min-h-screen">
        <TopBar />
        <main className="pt-24 pb-32 px-4 max-w-2xl mx-auto">
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/history" element={<History />} />
            <Route path="/spark" element={<Spark />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </HashRouter>
  );
}
