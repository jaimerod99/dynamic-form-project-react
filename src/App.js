import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./Components/NavbarMenu";

function App() {
  return (
    <div className="App">
      <NavbarMenu></NavbarMenu>
      <Button variant="primary">Button #1</Button>
  
    </div>
  );
}

export default App;
