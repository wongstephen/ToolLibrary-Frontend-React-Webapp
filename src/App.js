import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./hooks/AuthContext";

import { Register } from "./components/Register";
import { HomeScreen } from "./components/HomeScreen";
import { AddItem } from "./components/AddItem";
import { Feed } from "./components/Feed";
import { SignOut } from "./components/SignOut";
import { EditItem } from "./components/EditItem";
import { AccountCreated } from "./components/AccountCreated";
import { PrivateRoutes } from "./components/utils/PrivateRoutes";
import { Login } from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <main className="min-w-full min-h-screen bg-slate-900 App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/accountcreated" element={<AccountCreated />} />
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Feed />} exact />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/edit-item/" element={<EditItem />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
