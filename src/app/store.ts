import { configureStore } from '@reduxjs/toolkit'
import langSelectorReducer from '../features/langSelector'
import activePageReducer from '../features/activePage'


export const store = configureStore({
    reducer: {
        langSelector: langSelectorReducer,
        activePage: activePageReducer,
    },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export default store;
