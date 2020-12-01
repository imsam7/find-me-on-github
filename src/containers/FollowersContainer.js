import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { loadFollowers } from '../shared/store/followers/actions'
import FollowersLayout from '../layouts/FollowersLayout'
import Loader from '../shared/components/loader'

class FollowersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { username } = this.props.match.params
        this.props.dispatch(loadFollowers({ userName: username }))
    }

    render() {
        if (this.props.followersData.loading) 
            return <Loader />
        return <FollowersLayout followersData={this.props.followersData.followers} />
    }
}

const mapStateToProps = (state) => { return ({ followersData: state && state.followers }) }
const withConnect = connect(mapStateToProps, (dispatch) => ({ loadFollowers, dispatch }))

export default compose(withConnect)(FollowersContainer);