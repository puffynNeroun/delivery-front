// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './providers/AppProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MoreAbout from './components/MoreAbout';
import BasketList from './pages/BasketList';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NotFound from './pages/NotFound'; // 🆕
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'more', element: <MoreAbout /> },
            { path: 'basket', element: <BasketList /> },
            { path: 'login', element: <LoginForm /> },
            { path: 'register', element: <RegisterForm /> },

            {
                element: <PrivateRoute />,
                children: [
                    // Приватные страницы можно будет добавить сюда
                ],
            },

            { path: '*', element: <NotFound /> },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </StrictMode>
);
