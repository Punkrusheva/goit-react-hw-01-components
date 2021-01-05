import React from 'react';
import user from '../source/user.json';
import statisticalData from '../source/statistical-data.json';
import friends from '../source/friends.json';
import transactions from '../source/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
     
      <Statistics title="Upload stats" statistic={statisticalData} />
      
      <FriendList><FriendListItem friends={friends} /></FriendList> 
       
      <TransactionHistory items={transactions} />
    </>
  );
}