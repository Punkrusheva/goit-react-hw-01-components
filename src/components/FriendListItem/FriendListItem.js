import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({  friends} ) {
    
    return (
        
            friends.map(({ id, isOnline, avatar, name }) => (
                <li key={id} className={styles.item}>
                    {isOnline && <span className={styles.status}></span>}
                    <img className={styles.avatar} src={avatar} alt={name} width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            ))
        
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://www.ims-ghaziabad.ac.in/images/faculty/1498127141img.png',
    isOnline: false,
  name: "",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;