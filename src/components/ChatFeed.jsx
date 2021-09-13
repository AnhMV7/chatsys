import UserText from './UserText';
import OutlineForm from './OutlineForm';
import OtherMessage from './OtherMessage';


let ChatFeed = (addOns) => {
  const { chats, activeChat, userName, messages } = addOns;
  var convo = chats && chats[activeChat];
  let processInfo = (message, textCheck) => convo.people.map((person, i) => person.last_read === message.id && (
    <main
      key={`read_${i}`}
      className="read-receipt"
      style={{
        float: textCheck ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const processChat = () => {
    let keys = Object.keys(messages);
    return keys.map((key, i) => {
      const message = messages[key];
      let messagePrevious = i === 0 ? null : keys[i - 1];
      let textCheck = userName === message.sender.username;
      return (
        <div key={`msg_${i}`} style={{ width: '100%' }}>
          <main className="message-block">    {/* Displays the code on the browser to the user. */}
            {textCheck
              ? <UserText message={message} />  
              : <OtherMessage message={message} lastmessage={messages[messagePrevious]} />}
          </main>
          <div className="read-receipts" style={{ marginRight: textCheck ? '20px' : '0px', marginLeft: textCheck ? '0px' : '70px' }}>
            {processInfo(message, textCheck)}
          </div>
        </div>
      );
    });
  };


  if (!convo) return <div />;
{/* Applies CSS Rules and displays the info here */ }
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <h1 className="chat-title">{convo?.title}</h1>
        <h2 className="chat-subtitle">
          {convo.people.map((person) => ` ${person.person.username}`)}
        </h2>
      </div>
      {processChat()}
      <div style={{ height: '100px' }} />
      <h2 className="message-form-container">
        <OutlineForm {...addOns} chatId={activeChat} />
      </h2>
    </div>
  );
};

export default ChatFeed;