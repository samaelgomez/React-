import React from "react";

import { BrowserRouter } from "react-router-dom";
import Router from "./provider/router/router.js";
import ReactDOM from "react-dom/client";
import {UserProvider} from "./provider/utils/auth.context"
import Layout from "./provider/layout/layout.component";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Router />
        </Layout>
      </UserProvider>
    </BrowserRouter>
);
