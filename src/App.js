import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./Components/NavbarMenu";
import Introduction from "./Components/Introduction";
import Services from './Components/Services'
function App() {
  return (
    <div className="App">
      <NavbarMenu></NavbarMenu>
      <Introduction></Introduction>
      <Services></Services>
  
    </div>
  );
}

export default App;
