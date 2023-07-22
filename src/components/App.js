import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import { AuthProvider } from "../context/AuthContext";
import reducer from "../reducers/darkmode";

import { CreateAccountPage } from "./CreateAccountPage";
import { HomePage } from "./HomePage";
import { CreateItemPage } from "./CreateItemPage";
import { Dashboard } from "./Dashboard";
import { LogoutPage } from "./LogoutPage";
import { EditItemPage } from "./EditItemPage";
import { CreateAccountConfirmationPage } from "./CreateAccountConfirmationPage";
import { LoginPage } from "./LoginPage";
import Layout from "./Layout";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Error404Page } from "./Error404Page";

function App() {
  console.log(process.env.REACT_APP_ENV);

  return (
    <AuthProvider>
      <main className="min-w-full min-h-screen">
        <Routes>
          {/* public route */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccountPage />} />
            <Route path="/signout" element={<LogoutPage />} />
            <Route
              path="/accountcreated"
              element={<CreateAccountConfirmationPage />}
            />
            {/* private Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Dashboard />} exact />
              <Route path="/itemadd" element={<CreateItemPage />} />
              <Route path="/itemedit/:id" element={<EditItemPage />} />
            </Route>
            {/* todo 404  */}
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
