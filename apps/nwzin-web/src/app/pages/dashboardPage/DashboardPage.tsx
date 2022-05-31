import React, { FC } from "react";
import AuthWrapper from "../../containers/authWrapper";
import DashboardContainer from "../../containers/dashboardContainer";
import { DashboardPageProps } from "./types";

const DashboardPage: FC<DashboardPageProps> = () => {
    return (
      <AuthWrapper isLoginPage={false} authProtected authRole="admin">
         <DashboardContainer />
      </AuthWrapper>
     
    )
};

export default DashboardPage;