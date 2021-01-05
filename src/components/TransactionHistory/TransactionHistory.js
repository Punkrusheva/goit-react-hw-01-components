import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({id, type, amount, currency}) => (
      <tbody key={id}>
        <tr>
          <td>{type.slice(0, 1).toUpperCase() + type.slice(1)}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,})
  ).isRequired
};

export default TransactionHistory;