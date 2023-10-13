import {ChatEngine} from 'react-chat-engine';
import "./App.css"
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
       height = "100vh"
       projectID = "20ae007e-1789-43d9-bbd1-70b24f28ed2e"
       userName = "Kartikaryan"
       userSecret = "123456"
       // we use spread operator(...) to pass down all attributes from props object to child
       renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
       
       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     />
  );
}

export default App;
