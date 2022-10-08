// conponents //
import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from './components/index';
// data //
import * as data from './data/index.js';
// styles //
import { Container } from './App.styled';

export default function App() {
  return (
    <>
      <Container>
        <Profile
          username={data.user.username}
          tag={data.user.tag}
          location={data.user.location}
          avatar={data.user.avatar}
          stats={data.user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data.data} />
      </Container>
      <Container>
        <FriendList friends={data.friends} />
      </Container>
      <Container>
        <TransactionHistory items={data.transactions} />
      </Container>
    </>
  );
}
