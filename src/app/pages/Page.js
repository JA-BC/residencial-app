import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, Navigation, Footer } from '../shared/components';
import HomePage from './home/HomePage';
import ResidentePage from './residente/ResidentePage';

export default function Page() {
    return (
        <div className="d-flex vh-100">
            <aside className="w-75px">
                <Sidebar />
            </aside>

            <section className="d-flex flex-column flex-fill"
                style={{ maxWidth: 'calc(100vw - 75px)' }}>
                <header>
                    <Navigation />
                </header>

                <main className="flex-fill bg-lighten scroll">
                    <Routes>
                        <Route path="" element={<Navigate to="home" />} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="residente" element={<ResidentePage />} />
                    </Routes>
                </main>

                <footer>
                  <Footer />
                </footer>
            </section>
        </div>
    );
}
