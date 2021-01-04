import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

function Statistics({stats, title}) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stats => (
        <li key={stats.id} className="item"><span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}%</span></li>
      ))}
  </ul>
</section>
  );
}

Statistics.defaultProps = {
  percentage:
    '0',
};

Statistics.propTypes = {
  title: PropTypes.string,
   stats: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired,
};

export default Statistics;