import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import CredLogins from './components/CredLogins';
import './App.css';

const projectID = 'b0c4fc92-75c0-4655-96c1-79cc109bebdc';

const App = () => {
  if (!localStorage.getItem('username')) return <CredLogins />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};



export default App;

