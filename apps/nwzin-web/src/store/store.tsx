import { configureStore } from '@reduxjs/toolkit';
import { AuthState } from '../app/containers/authWrapper';
import { authSlice } from '../app/containers/authWrapper/reducer';
import { UserState, usersSlice } from '../app/containers/userContainer';
import { GroupState, groupsSlice  } from '../app/containers/groupsContainer';
import { currentGroupSlice, CurrentGroupState } from '../app/containers/addGroupContainer';
import { dataStoreSlice, DataStoreState } from '../app/containers/dataStoreContainer';
import { currentDataStoreSlice, CurrentDataStoreState } from '../app/containers/addDataStoreContainer';
import { formsSlice, FormState } from '../app/containers/formContainer';
import { CurrentFormState } from '../app/containers/addEditFormContainer/types';
import { currentFormSlice } from '../app/containers/addEditFormContainer/reducer';
// ...

const store = configureStore({
  reducer: {
    authState: authSlice?.reducer,
    userState: usersSlice?.reducer,
    groupState: groupsSlice?.reducer,
    currentGroupState: currentGroupSlice?.reducer,
    dataStoreState: dataStoreSlice.reducer,
    currentDataStoreState: currentDataStoreSlice?.reducer,
    formState: formsSlice.reducer,
    currentFormState: currentFormSlice.reducer
  },
  devTools: true,
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export interface RootState {
  authState: AuthState;
  userState: UserState;
  groupState: GroupState;
  currentGroupState: CurrentGroupState;
  dataStoreState: DataStoreState;
  currentDataStoreState: CurrentDataStoreState;
  formState: FormState;
  currentFormState: CurrentFormState;
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;