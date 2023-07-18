import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Component/ChatFeed';
import './App.css';
import LoginForm from './Component/LoginForm';

function App() {

  if(!localStorage.getItem("username")){
    return <LoginForm />
  }

  return (
    <div className="App">
      <ChatEngine 
        height = '100vh'
        projectID = "b3dfde2e-f466-4125-8663-db8ce15ad7b9"
        userName = {localStorage.getItem("username") || "hari"}
        userSecret = {localStorage.getItem("password") || "123456"}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage = {() => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}
      />
    </div>
  );
}

export default App;
