import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import EnterData from './Components/EnterData';
import ShowData from './Components/ShowData';
import Submit from './Components/Submit';



function App() {
  return (
    <div>
     <Router>
       <Switch>
       <Route exact path="/" component={Home} />
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/getdata">
          <EnterData />
        </Route>
        <Route path="/showuserdata">
          <ShowData />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
