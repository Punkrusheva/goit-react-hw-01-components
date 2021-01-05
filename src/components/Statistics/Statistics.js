import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({statistic, title}) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {statistic.map(({id, label, percentage}) => (
          <li key={id} className={styles.item}><span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span></li>
      ))}
  </ul>
</section>
  );
}

Statistics.defaultProps = {
  percentage:
    '0',
  label: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(PropTypes.exact({
     id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number
  }),).isRequired,
};

export default Statistics;