import PropTypes from 'prop-types';
import { Description, Name, Stats, StatsItem, Span } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <Description>
        <img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <Stats>
        <StatsItem>
          <Span>Followers</Span>
          <Span>{followers}</Span>
        </StatsItem>
        <StatsItem>
          <Span>Views</Span>
          <Span>{views}</Span>
        </StatsItem>
        <StatsItem>
          <Span>Likes</Span>
          <Span>{likes}</Span>
        </StatsItem>
      </Stats>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
