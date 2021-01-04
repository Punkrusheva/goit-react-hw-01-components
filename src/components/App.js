import React from 'react';
import user from '../source/user.json';
import statisticalData from '../source/statistical-data.json';
//import friends from '../source/friends.json';
//import transactions from '../source/transactions.json';

import '../App.css';
import "../normalize.css";

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
/*import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';*/
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
     
        <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
}
/**<Section title="Friend List">
        <FriendList friends={friends} />
      </Section>
      
       <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section> */