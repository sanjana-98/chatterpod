import {ChatEngine} from 'react-chat-engine';
import "./App.css"
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
       height = "100vh"
       projectID = "33bf07f5-c2c2-4295-84ee-1abc9f20b807"
       userName = "aliabhatt"
       userSecret = "123456"
       // we use spread operator(...) to pass down all attributes from props object to child
       renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
       
       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     />
  );
}

export default App;
