import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { Item } from './Friens.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Friend friend={friend} />
        </Item>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
