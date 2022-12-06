import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./hooks/AuthContext";

import { Register } from "./components/Register";
import { HomeScreen } from "./components/HomeScreen";
import { AddItem } from "./components/AddItem";
import { Feed } from "./components/Feed";
import { SignOut } from "./components/SignOut";
import { Inventory } from "./components/Inventory";
import { EditItem } from "./components/EditItem";
import { AccountCreated } from "./components/AccountCreated";
import { PrivateRoutes } from "./components/utils/PrivateRoutes";
import { Login } from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <main className="w-full h-full App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />s
          <Route path="/login" element={<Login />} />s
          <Route path="/register" element={<Register />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/accountcreated" element={<AccountCreated />} />
          {/* Private Route */}
          <Route element={<PrivateRoutes />}>
            <Route path="/feed" element={<Feed />} exact />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/edit-item/" element={<EditItem />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
