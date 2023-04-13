import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";


library.add(fas)

function App() {
  return <div><Header/></div>
}
export default App;