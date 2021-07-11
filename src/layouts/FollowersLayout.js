import React from 'react';

function FollowersLayout({ followersData }) {
    return (
        <div>
            <div>
                <center>
                    <h2 className="heading">FOLLOWERS</h2>
                </center>
                {followersData.map((follower) => (
                    <div className="card">
                        <img src={follower.avatar_url} alt="Avatar" style={{ width: '20%' }} />
                        <div className="container">
                            <h4><b>{follower.login}</b></h4>
                            <a href={follower.html_url} target="_blank">Visit Profile on Github</a>
                        </div>
                    </div>
                    // <div>
                    //     <img src={follower.avatar_url} alt="Avatar" className="img"></img>
                    //     <a href={follower.html_url}>Visit Profile on Github</a>
                    //     <h3>{follower.login}</h3>
                    // </div>
                ))}
            </div>
        </div>
    )
}

export default FollowersLayout;