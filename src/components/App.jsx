import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"
import user from './Path/user.json';
import data from './Path/data.json';
import friends from './Path/friends.json';
import transactions from './Path/transactions.json';

import css from './App.module.css'

export default function App() {
  return (
    <>
      <section className={css.container}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section className={css.container}>
        <Statistics title="Upload stats" stats={data} />
      </section>
      <section className={css.container}>
        <FriendList friends={friends} />
      </section>
      <section className={css.container}>
        <TransactionHistory items={transactions} />
      </section>
    </>
  )
}
