let OtherMessage = ({ beforeMessage, textUser }) => {
  {/* Does a check and comapres the recently sent message to the very first one and sets a background image if that is the case */}
  var initialMessage = !beforeMessage || beforeMessage.sender.username !== textUser.sender.username;
  return (
    <h1 className="message-row">
      {initialMessage && (
        <div
          className="message-avatar"
          style={{ backgroundImage: textUser.sender && `url(${textUser.sender.avatar})` }}
        />
      )}
      {textUser.attachments && textUser.attachments.length > 0
        ? (
          <img
            src={textUser.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: initialMessage ? '10px' : '50px' }}
          /> 
        ) 
        : ( 
          <main className="message" style={{ float: 'left', backgroundColor: '#98ff98', marginLeft: initialMessage ? '4px' : '48px' }}>
            {textUser.text}
          </main>
        )}
    </h1>
  );
};

{/* The button of the code just sends the message similarly to how the current user sends the message if that is the case */}

export default OtherMessage;