import React from 'react';
import { Link } from 'react-router-dom';

function ProfileLayout({ userDetails }) {
    return (
        <div>
            <div className="card">
                <center><div className="container">
                    <h2><b>{userDetails.name} ( {userDetails.login} )</b></h2>
                    {userDetails.company && <h3>Works at <b>{userDetails.company}</b></h3>}
                    {userDetails.location && <h3>Currently in <b>{userDetails.location}</b></h3>}

                    <p>{userDetails.bio}</p>
                    <a href={userDetails.html_url} target="_blank">Visit Profile on Github</a>
                </div>
                    <img src={userDetails.avatar_url} alt="Avatar" className="img"></img>
                </center>
                <div>
                    <ul className="user-info__stats">
                        <Link className="user-info__text" to={"/Repositories/" + userDetails.login}>
                            <li className="user-info__stat" > Repositories
                        <p className="user-info__stat-value">{userDetails.public_repos}</p>
                            </li>
                        </Link>

                        <Link className="user-info__text" to={"/Followers/" + userDetails.login}>
                            <li className="user-info__stat" > Followers
                        <p className="user-info__stat-value">{userDetails.followers}</p>
                            </li>
                        </Link>

                        <Link className="user-info__text" to={"/Following/" + userDetails.login}>
                            <li className="user-info__stat" > Following
                        <p className="user-info__stat-value">{userDetails.following}</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout;