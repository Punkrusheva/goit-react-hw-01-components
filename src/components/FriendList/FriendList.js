import React from 'react';
import PropTypes from 'prop-types';
import './friendList.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
  {friends.map(friends => (
    <li key={friends.id} className="item">
      {friends.isOnline && <span className="status"></span>}
  <img className="avatar" src={friends.avatar} alt={friends.name} width="48" />
        <p className="name">{friends.name}</p>
</li>
  ))}
</ul>
  );
}

FriendList.defaultProps = {
  avatar:
    'https://www.ims-ghaziabad.ac.in/images/faculty/1498127141img.png',
  isOnline: false,
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

/*Описание компонента FriendList

avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.*/

export default FriendList;