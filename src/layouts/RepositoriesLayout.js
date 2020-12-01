import React from 'react';

function RepositoriesLayout({ repos }) {
    return (
        <div>
            <div>
                <center>
                    <h2 className="heading">REPOSITORIES</h2>
                </center>
                {repos.map((repos) => (
                    <div className="card">
                        {/* <img src={follower.avatar_url} alt="Avatar" style={{ width: '20%' }} /> */}
                        <div className="container">
                            <h3><b>{repos.name}</b></h3>
                            <h4>{repos.description}</h4>
                            {repos.language && <h5>Language : {repos.language}</h5>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RepositoriesLayout;