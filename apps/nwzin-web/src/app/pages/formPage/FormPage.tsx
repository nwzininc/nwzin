import React, { FC } from "react";
import AuthWrapper from "../../containers/authWrapper";
import AddEditFormContainer from "../../containers/addEditFormContainer";
import { FormPageProps } from "./types";

const FormPage: FC<FormPageProps> = () => {
    return (
      <AuthWrapper isLoginPage={false} authProtected authRole="admin">
         <AddEditFormContainer />
      </AuthWrapper>
     
    )
};

export default FormPage;