import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import MainContainer from "./containers/MainContainer";
import Layout from "./layout/Layout";
import { verifyUser, loginUser, joinUser, removeToken } from "./services/auth";
import Join from "./screens/Join";
import Login from "./screens/Login";
import { updateUser } from "./services/users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/home");
  };

  const handleJoin = async (formData) => {
    const userData = await joinUser(formData);
    setCurrentUser(userData);
    history.push("/home");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  useEffect(() => {
    const updateUser = async (id, userData) => {
      const update = await updateUser(id, userData);
      setCurrentUser((prevState) => [...prevState, update]);
      history.push("/account");
    };
  }, []);

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/Join">
            <Join handleJoin={handleJoin} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} updateUser={updateUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
