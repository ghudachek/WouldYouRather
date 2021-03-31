import "./App.css";
import { Route, Switch } from "react-router-dom";

import MainContainer from "./containers/MainContainer";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
