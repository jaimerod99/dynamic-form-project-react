import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./Components/NavbarMenu";
import Introduction from "./Components/Introduction";
import Services from './Components/Services'
import DynamicForm from "./Components/DynamicForm";
function App() {
  return (
    <div className="App">
      <NavbarMenu></NavbarMenu>
      <Introduction></Introduction>
      <Services></Services>
      <DynamicForm></DynamicForm>
  
    </div>
  );
}

export default App;
