import { configureStore } from '@reduxjs/toolkit'
import langSelectorReducer from '../reducers/langSelector'
import activePageReducer from '../reducers/activePage'


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
