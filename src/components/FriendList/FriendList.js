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
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;