import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { BottomNavigation } from './components';
import { I18nProvider } from './i18n';
import { Onboarding, Placeholder, Score, Splash, Today, WorkoutFocus } from './pages';

function Shell() { const location=useLocation(); const showNav=['/today','/train','/skills','/progress','/profile'].includes(location.pathname); return <div className="app-shell"><Routes><Route path="/" element={<Splash/>}/><Route path="/splash" element={<Navigate to="/" replace/>}/><Route path="/onboarding" element={<Onboarding/>}/><Route path="/today" element={<Today/>}/><Route path="/train" element={<Placeholder kind="train"/>}/><Route path="/skills" element={<Placeholder kind="skills"/>}/><Route path="/progress" element={<Placeholder kind="progress"/>}/><Route path="/profile" element={<Placeholder kind="profile"/>}/><Route path="/score" element={<Score/>}/><Route path="/workout/:id" element={<WorkoutFocus/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes>{showNav&&<BottomNavigation/>}</div> }
export function App() { return <I18nProvider><Shell/></I18nProvider> }
