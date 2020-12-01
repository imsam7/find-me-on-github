import React from 'react';

function FollowingLayout({ followingData }) {
    return (
        <div>
            <div>
                <center>
                    <h2 className="heading">FOLLOWING</h2>
                </center>
                {followingData.map((following) => (
                    <div className="card">
                        <img src={following.avatar_url} alt="Avatar" style={{ width: '20%' }} />
                        <div className="container">
                            <h4><b>{following.login}</b></h4>
                            <a href={following.html_url}>Visit Profile on Github</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FollowingLayout;