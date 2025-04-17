import { useAppDispatch } from "../store/hooks";
import { logoutUser } from "../store/slices/authSlice";
import { ReactNode } from "react";

interface LogoutButtonProps {
    icon?: ReactNode; // ✅ добавляем проп icon
}

const LogoutButton = ({ icon }: LogoutButtonProps) => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <button onClick={handleLogout} title="Выйти">
            {icon ?? "Выйти"}
        </button>
    );
};

export default LogoutButton;
