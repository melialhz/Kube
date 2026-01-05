import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Chargement...    Backend connecté           user1: 123.  user2:abc");
  useEffect(() => {
    fetch('/api/message') // L'Ingress fera le lien
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <h1>{msg}</h1>;
}
export default App;