import LoginView from "./LoginView";
import ExhibitopSpaceConnectedView from "./ExhibitorSpaceConnectedView";

export default function ExhibitopSpaceView(props){
     const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <ExhibitopSpaceConnectedView />;
  }
  return <LoginView />;
}
