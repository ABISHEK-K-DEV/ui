
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FeedBack } from './Customepage/FeedBack';
import { Dashboard } from './Components/Dashboard';
import { FinalPage } from './FinalPage/FinalPage';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/edit/:id" element={<FeedBack />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
