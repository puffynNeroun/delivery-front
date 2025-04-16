// src/components/LogoutButton.tsx
import { useAppDispatch } from '../store/hooks';
import { logoutUser } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login'); // перенаправим на логин
    };

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Выйти
        </button>
    );
};

export default LogoutButton;
