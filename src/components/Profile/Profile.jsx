import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return<div className="profile">
        <div className={css.description}>
            <img src={avatar} alt="User avatar" />
            <p className={css.name}>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
        <ul className={css.stats}>
            <li className={css.stats_item}>
                <span className="label">Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li className={css.stats_item}>
                <span className="label">Views</span>
                <span>{stats.views}</span>
            </li>
            <li className={css.stats_item}>
                <span className="label">Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
</div>
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
    })
};