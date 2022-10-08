import PropTypes from 'prop-types';
import { TbAccessPoint, TbAccessPointOff } from 'react-icons/tb';
import { Name, Status } from './Friens.styled';

export const Friend = ({ friend: { name, avatar, isOnline } }) => {
  return (
    <>
      <Status>
        {isOnline ? (
          <TbAccessPoint style={{ color: 'green' }} />
        ) : (
          <TbAccessPointOff style={{ color: 'red' }} />
        )}
      </Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
