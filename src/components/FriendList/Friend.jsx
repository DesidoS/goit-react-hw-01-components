import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { TbAccessPoint,TbAccessPointOff } from "react-icons/tb";


export const Friend = ({ friend: { name, avatar, isOnline } }) => {
    return <>
        <span>
            {isOnline ? <TbAccessPoint className={css.status} style={{ color: "green" }} />
                : <TbAccessPointOff className={css.status} style={{ color: "red" }} />}
        </span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p></>
};

Friend.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }
    ),
};