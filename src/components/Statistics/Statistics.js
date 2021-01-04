import statisticalData from '../../source/statistical-data.json';
import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';
console.log(statisticalData[0]);

function Statistics({ title }) {
  return (
    <section class="statistics">
  {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {statisticalData.map(statisticalData => (
        <li key={statisticalData.id} class="item"><span class="label">{statisticalData.label}</span>
      <span class="percentage">{statisticalData.percentage}%</span></li>
      ))}
  </ul>
</section>
  );
}

Statistics.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;