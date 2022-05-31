import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginpage from '../../pages/loginpage';
import Dashboardpage from '../../pages/dashboardPage';
import { AppRouterProps } from './types';
import UserContainer from '../userContainer';
import GroupsContainer from '../groupsContainer';
import AddGroupContainer from '../addGroupContainer';
import DataStoreContainer from '../dataStoreContainer';
import AddDataStoreContainer from '../addDataStoreContainer';
import FormContainer from '../formContainer';
import AddEditFormContainer from '../addEditFormContainer';
import FormPage from '../../pages/formPage';

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/" element={<Dashboardpage />}>
        <Route path="/" element={<div> Home </div>} />
        <Route path="users" element={<UserContainer />} />
        <Route path="groups" element={<GroupsContainer />} />
        <Route path="groups/edit/:groupId" element={<AddGroupContainer />} />
        <Route path="groups/add" element={<AddGroupContainer />} />
        <Route path="tasks" element={<div> users </div>} />
        <Route path="workflow" element={<div> users </div>} />
        <Route path="datastore" element={<DataStoreContainer/>} />
        <Route path="datastore/edit/:dataStoreId" element={<AddDataStoreContainer/>} />
        <Route path="datastore/add" element={<AddDataStoreContainer/>} />
        <Route path="billing" element={<div> users </div>} />
        <Route path="forms" element={<FormContainer />} />
        <Route path="settings" element={<div> settings </div>} />
      </Route>
      <Route path="createform/new" element={<FormPage />} />
      <Route path="editform/:formId" element={<FormPage />} />
    </Routes>
  );
};

export default AppRouter;
