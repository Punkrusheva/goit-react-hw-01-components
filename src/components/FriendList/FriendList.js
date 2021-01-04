import friends from '../../source/friends.json';
import React from 'react';
import PropTypes from 'prop-types';
import './friendList.css';

function FriendList({ imgUrl, name, price, quantity }) {
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

FriendList.defaultProps = {
  imgUrl:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ims-ghaziabad.ac.in%2Ffaculty%2Fprofile%2Famit-sharma&psig=AOvVaw0dKQcdoP8QP6VGKBB12Zkm&ust=1609833833025000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJi51cPoge4CFQAAAAAdAAAAABAD',
};

FriendList.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

/*Описание компонента FriendList
Компонент должен принимать один проп friends - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
</ul>
Описание компонента FriendListItem
Компонент должен принимать несколько пропов:

avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры.

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="" width="48" />
  <p class="name"></p>
</li>

*/

export default FriendList;