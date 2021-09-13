const UserText = ({ message }) => { {/* File is used mostly to format the images */}
{/* Checks to see if the input is an image, and will post it doing so*/}
    if (message.attachments && message.attachments.length > 0) {
      return ( 
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  {/* This section will just send the text for display if an image is not present */}
  return ( 
      <main className="message" style={{ float: 'right', marginRight: '15px', color: 'black', backgroundColor: '#3B2A50' }}>
        {message.text}
      </main>
    );
  };
  
  export default UserText;