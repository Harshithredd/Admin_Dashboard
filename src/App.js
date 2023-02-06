import { Switch , Route} from "react-router-dom";
import Landing from "./components/Landing";
export const config = {
    endpoint: `https://blue-journalist-bbrpv.ineuron.app:4000`,
  };
  
function App(){
    
    return (
        <>
        <Switch>
            <Route exact path="/" component={Landing}/>
        </Switch>
        </>
    )
}
export default App;