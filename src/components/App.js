import { Routes, Route } from "react-router-dom";

import { useDarkmode } from "../reducers/Darkmode";

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
import UserSettingsPage from "./UserSettingsPage";

function App() {
  const { state } = useDarkmode();
  if (
    process.env.REACT_APP_ENV.toLowerCase().includes("development") ||
    process.env.REACT_APP_ENV.toLowerCase().includes("staging")
  ) {
    console.log("Environment: " + process.env.REACT_APP_ENV);
  }

  return (
    <main className={`min-w-full min-h-screen ${state.isDark && "bg-black"}`}>
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
            <Route path="/usersettings/" element={<UserSettingsPage />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
