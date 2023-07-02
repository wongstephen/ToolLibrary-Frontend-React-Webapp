import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import { Register } from "./components/Register";
import { HomeScreen } from "./components/HomeScreen";
import { ItemAdd } from "./components/ItemAdd";
import { Feed } from "./components/Feed";
import { SignOut } from "./components/SignOut";
import { ItemEdit } from "./components/ItemEdit";
import { AccountCreated } from "./components/AccountCreated";
import { Login } from "./components/Login";
import Layout from "./components/Layout";
import PrivateRoutes from "./components/utils/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <main className="min-w-full min-h-screen bg-slate-900">
        <Routes>
          {/* public route */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/accountcreated" element={<AccountCreated />} />
            {/* private Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Feed />} exact />
              <Route path="/itemadd" element={<ItemAdd />} />
              <Route path="/itemedit/" element={<ItemEdit />} />
            </Route>
            {/* todo 404  */}
            <Route
              path="*"
              element={<h1 className="text-center text-white">404</h1>}
            />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
