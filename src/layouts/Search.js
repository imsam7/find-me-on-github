import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div class="search">
                <center>
                    <h2 className="heading">Checkout a GitHub Profile</h2>
                </center>

                < div className="search-page" >
                    <form action="" class="search-bar" onSubmit={this._handleSubmit}>
                        <input ref="userInput" type="search" name="search" pattern=".*\S.*" required />
                        <button class="search-btn" type="submit">
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Search;