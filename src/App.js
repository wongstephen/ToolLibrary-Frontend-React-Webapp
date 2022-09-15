import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./hooks/AuthContext";

import { Register } from "./components/Register";
import { HomeScreen } from "./components/HomeScreen";
import { AddItem } from "./components/AddItem";
import { Feed } from "./components/Feed";

function App() {
  return (
    <AuthProvider>
      <main className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="feed" element={<Feed />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
