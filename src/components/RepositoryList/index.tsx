import { useEffect, useState } from 'react';

import RepositoryItem, { IRepository } from './components/RepositoryItem';

import './styles.scss';

function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

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
