import './Profile.css';
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="ProfilContener">
      <div className="ProfilContetnt">
        <img className="ProfilImg" src={avatar} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="ProfilList">
        <li className="ProfilItem">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="ProfilItem">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="ProfilItem">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
