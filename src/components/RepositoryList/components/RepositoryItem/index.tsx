import './styles.scss';

export interface IRepository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

interface IRepositoryItemProps {
  repository: IRepository;
}

function RepositoryItem({ repository }: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      {
        repository.html_url && (
          <a href={repository.html_url} target="_blank">
            Acessar repositório
          </a>
        )
      }
    </li>
  );
}

export default RepositoryItem;
