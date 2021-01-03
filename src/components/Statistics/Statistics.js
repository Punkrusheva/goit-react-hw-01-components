import statisticalData from '../../source/statistical-data.json';
import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

function Statistics({ imgUrl, name, price, quantity }) {
  return (
    <div>
      <img src={imgUrl} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>

      <p>Quantity: {quantity < 50 ? 'Few left' : 'In stock'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Statistics.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Statistics.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};


/*Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
 */

export default Statistics;