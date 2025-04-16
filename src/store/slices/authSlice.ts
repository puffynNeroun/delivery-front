import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getMe, login, register, LoginDto, RegisterDto, User } from '../../services/auth';
import { RootState } from '../store';

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

// 🔹 Авторизация
export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: LoginDto, thunkAPI) => {
        try {
            return await login(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Ошибка входа');
        }
    }
);

// 🔹 Регистрация
export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: RegisterDto, thunkAPI) => {
        try {
            return await register(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Ошибка регистрации');
        }
    }
);

// 🔹 Получение текущего пользователя
export const fetchMe = createAsyncThunk(
    'auth/me',
    async (_, thunkAPI) => {
        try {
            return await getMe();
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Не удалось получить данные пользователя');
        }

    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // getMe
            .addCase(fetchMe.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchMe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logoutUser, setToken } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => Boolean(state.auth.token);
export const selectAuthLoading = (state: RootState) => state.auth.loading;

export default authSlice.reducer;
