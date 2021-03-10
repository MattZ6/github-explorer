import { useState } from 'react';

import RepositoryItem from './components/RepositoryItem';

import './styles.scss';

function RepositoryList() {
  const [repositories, setRepositories] = useState([
    {
      id: 'unform',
      name: 'unform',
      description: 'Forms in React',
      url: 'https://github.com/unform/unform',
    }
  ]);

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
