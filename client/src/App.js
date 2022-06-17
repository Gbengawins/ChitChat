import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Registerpage from "./Pages/Registerpage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/" component={Homepage} exact />
      <Route path="/register" component={Registerpage} exact />
      <Route path="/chats" component={Chatpage} exact />
    </div>
  );
}

export default App;
