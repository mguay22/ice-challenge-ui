import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router";
import { ContentConversion } from "../../pages/content-conversion.page";
import { Home } from "../../pages/home.page";

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route index element={<Home />} />
      <Route path=":contentId" element={<ContentConversion />} />
    </ReactRouterRoutes>
  );
};

export { Routes };
