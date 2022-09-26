import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./hooks/AuthContext";

import { Register } from "./components/Register";
import { HomeScreen } from "./components/HomeScreen";
import { AddItem } from "./components/AddItem";
import { Feed } from "./components/Feed";
import { SignOut } from "./components/SignOut";
import { Inventory } from "./components/Inventory";
import { EditItem } from "./components/EditItem";

function App() {
  return (
    <AuthProvider>
      <main className="w-full h-full App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />s
          <Route path="/additem" element={<AddItem />} />
          <Route path="/edit-item/" element={<EditItem />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
