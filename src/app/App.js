import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth/AuthPage';
import NotFound from './pages/not-found/NotFoundPage';
import Page from './pages/Page';
import { Toast } from './shared/components';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Navigate to="app" />} />
        <Route path='auth/*' element={<Auth />} />
        <Route path='app/*' element={<Page />} />
        <Route path='404' element={<NotFound />} />
        <Route path='*' element={<Navigate to="404" />} />
      </Routes>

      <Toast />
    </>
  );
}
