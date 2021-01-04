import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';

function Profile({name, tag, location, avatar, stats}) {
  return (
     <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}

Profile.defaultProps = {
  avatar:
    'https://www.ims-ghaziabad.ac.in/images/faculty/1498127141img.png',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;