import transactions from '../../source/transactions.json';
import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ imgUrl, name, price, quantity }) {
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

TransactionHistory.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

TransactionHistory.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//propTypes 
//defaultProps
/*Данные для списка доступны в формате JSON в файле transactions.json. Это массив объектов, каждый объект описывает одну транзакцию со следующими свойствами:

id — уникальный идентификатор транзакции
type — тип транзакции
amount - сумма транзакции
currency - тип валюты
Описание компонента
Необходимо создать компонент <TransactionHistory> принимающий один проп items - массив объектов транзакций из transactions.json. Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. В примере приведена разметка двух транзакций.

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
 */

export default TransactionHistory;