import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "./components/hooks/AuthContext";

import { Register } from "./components/Register";
import { HomeScreen } from "./components/HomeScreen";

function App() {
  // const { hasUser, setUser } = useContext(AuthContext);
  const [hasUser, setUser] = useState(false);
  return (
    <AuthContext.Provider value={{ hasUser, setUser }}>
      <main className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
