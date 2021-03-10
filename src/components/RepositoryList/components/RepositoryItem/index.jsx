import './styles.scss';

function RepositoryItem({ repository: { name, description, html_url }  }) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>

      {
        html_url && (
          <a href={html_url} target="_blank">
            Acessar repositório
          </a>
        )
      }
    </li>
  );
}

export default RepositoryItem;
