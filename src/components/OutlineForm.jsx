import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

var OutlineForm = (props) => {
  let [value, setValue] = useState('');
  let { chatId, creds } = props;

  const updateStatus = (event) => {   {/* Updates the chat stream by the user */}
    setValue(event.target.value);

    isTyping(props, chatId);
  };

const submitMessage = (event) => {    {/* Basic integration of sending messages */}
    event.preventDefault();
    let text = value.trim();

    if (text.length > 0) { {/* Does a check to only allow the send button to operate while there is text in the chat-field */}
      sendMessage(creds, chatId, { text });
    }
    setValue('');
  };
  const uploadFiles = (event) => {  {/* Allows users to send files if needed */}
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={submitMessage}> {/* Class names are pretedermined by backend service */}
      <input
        className="message-input"
        placeholder="Type the message here...."
        value={value}
        onChange={updateStatus}
        onSubmit={submitMessage}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={uploadFiles.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default OutlineForm;