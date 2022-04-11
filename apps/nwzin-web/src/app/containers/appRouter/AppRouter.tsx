import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage";
import { AppRouterProps } from "./types";

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
  
    )
};

export default AppRouter;