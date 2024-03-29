import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import viewsReducer from 'views/redux';
import navigationReducer from 'views/App/Navigation/redux';
import appReducer from 'views/App/redux';
import dataSheetReducer from 'views/App/DataSheet/redux';
import importTypesReducer from 'views/App/ImportTypes/redux';
import analyticsReducer from 'views/App/Analytics/redux';
import createChartReducer from 'views/App/CreateChart/redux';

export interface AppState {
  loggedIn: boolean,
  PDFFileSrc: any,
}

const initialState: AppState = {
  loggedIn: false,
  PDFFileSrc: null,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setPDFFileSrc: (state, action: PayloadAction<any>) => {
      state.PDFFileSrc = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn, setPDFFileSrc } = counterSlice.actions;

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
  reducer: {
    public: counterSlice.reducer,
    views: viewsReducer,
    navigation: navigationReducer,
    app: appReducer,
    dataSheet: dataSheetReducer,
    importTypes: importTypesReducer,
    analytics: analyticsReducer,
    createChart: createChartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectIsLoggedIn = (state: RootState) => state.public.loggedIn;

export const selectPDFFileSrc = (state: RootState) => state.public.PDFFileSrc;
