import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

function Statistics({statistic, title}) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {statistic.map(statistic => (
        <li key={statistic.id} className="item"><span className="label">{statistic.label}</span>
      <span className="percentage">{statistic.percentage}%</span></li>
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
  statistic: PropTypes.arrayOf(PropTypes.exact({
     id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),).isRequired,
};

export default Statistics;