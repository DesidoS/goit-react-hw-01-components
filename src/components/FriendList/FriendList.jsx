import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { Friend } from './Friend';


export const FriendList = ({ friends }) => {
  return <ul className={css.friend_list}>
    {friends.map(friend =>
<li key={friend.id} className={css.item}>      
  <Friend friend={friend} />
</li>
    )}
  </ul>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};