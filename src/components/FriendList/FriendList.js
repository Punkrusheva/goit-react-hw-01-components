import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({children}) {
  return (
    <ul className={styles.friendList}>
      {children}
    </ul>
  );
}

FriendList.defaultProps = {
  children: "",
};

FriendList.propTypes = {
  children: PropTypes.node,
};

export default FriendList;