import React from 'react';
import Section from './Section';
import friends from '../source/friends.json';
import user from '../source/user.json';
import statisticalData from '../source/statistical-data.json';
import transactions from '../source/transactions.json';

import '../App.css';
import Profile from './Profile/Profile';
/*import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';*/
console.log(user);
export default function App() {
  return (
    <>
      <Section title="Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      </Section>

    </>
  );
}
/**<Section title="Friend List">
        <FriendList friends={friends} />
      </Section>

      <Section title="Statistics">
        <Statistics stats={statisticalData} />
      </Section>

       <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section> */