import { useEffect, useState } from 'react';

import RepositoryItem from './components/RepositoryItem';

import './styles.scss';

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de reopsitórios</h1>

      <ul>
        {
          repositories.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />)
          )
        }
      </ul>
    </section>
  );
}

export default RepositoryList;
