import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <p>{dev.techs.join(', ')}</p>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}

DevItem.propTypes = {
  dev: PropTypes.shape({
    github_username: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default DevItem;
