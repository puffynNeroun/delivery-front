// src/hooks/useAuthInit.ts
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { fetchMe } from '../store/slices/authSlice';

export const useAuthInit = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMe());
    }, [dispatch]);
};
