import React, { useState, useEffect } from "react";
import { addRepositorie, listRepositories, removeRepositorie } from "./services/api"
import "./styles.css";

function App() {
  const [ repositories, setRepositories ] = useState([]);

  async function handleAddRepository() {
    const response = await addRepositorie();
    setRepositories([ ...repositories, response.data])
  }

  async function handleRemoveRepository(id) { 
    await removeRepositorie(id);
    setRepositories(repositories.filter(repositorie => repositorie.id !== id)) 
  }
  
  useEffect(() => {
    listRepositories().then(response => {
      setRepositories(response.data)
    });
  }, [])
  return (
    <div >
      <ul data-testid="repository-list">
        {repositories.map((repo )=> (
          <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
