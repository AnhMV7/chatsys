import axios from 'axios';
import { useState } from 'react';


const projectID = 'b0c4fc92-75c0-4655-96c1-79cc109bebdc';

const CredLogins = () => {
  const [Creds, setCreds] = useState('');
  const [Secrets, setSecrets] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const VerifyLogin = { 'Project-ID': projectID, 'User-Name': Creds, 'User-Secret': Secrets };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: VerifyLogin });

      localStorage.setItem('Creds', Creds);
      localStorage.setItem('Secrets', Secrets);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={Creds} onChange={(e) => setCreds(e.target.value)} className="input" placeholder="Creds" required />
          <input type="Secrets" value={Secrets} onChange={(e) => setSecrets(e.target.value)} className="input" placeholder="Secrets" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default CredLogins;