import React, { FC } from "react";
import AuthWrapper from "../../containers/authWrapper";
import LoginContainer from "../../containers/loginContainer";
import { LoginPageProps } from "./types";

const LoginPage: FC<LoginPageProps> = () => {
    return (
      <AuthWrapper isLoginPage authProtected={false} authRole="user">
        <LoginContainer 
            illustationUrl=""
            logoUrl="https://res.cloudinary.com/nwzin/image/upload/v1648574236/itc-limited-logo-black-and-white_imet3x.png"
        />
      </AuthWrapper>
     
    )
};

export default LoginPage;