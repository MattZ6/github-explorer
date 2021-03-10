import './styles.scss';

function RepositoryItem({ repository: { name, description, url }  }) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      {
        url && (
          <a href={url} target="_blank">
            Acessar repositório
          </a>
        )
      }
    </li>
  );
}

export default RepositoryItem;
