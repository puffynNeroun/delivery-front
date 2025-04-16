import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { registerUser } from '../store/slices/authSlice';

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error } = useAppSelector((state) => state.auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const resultAction = await dispatch(registerUser({ name, email, password }));
        if (registerUser.fulfilled.match(resultAction)) {
            navigate('/');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded-lg bg-white shadow">
            <h2 className="text-xl font-bold mb-4">Регистрация</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    disabled={loading}
                >
                    {loading ? 'Создание...' : 'Создать аккаунт'}
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
