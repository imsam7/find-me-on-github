import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { loadFollowing } from '../shared/store/following/actions'
import FollowingLayout from '../layouts/FollowingLayout'
import Loader from '../shared/components/loader'

class FollowingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { username } = this.props.match.params
        this.props.dispatch(loadFollowing({ userName: username }))
    }

    render() {
        if (this.props.followingData.loading) return <Loader />
        return <FollowingLayout followingData={this.props.followingData.following}/>
    }
}

const mapStateToProps = (state) => { return ({ followingData: state && state.following }) }
const withConnect = connect(mapStateToProps, (dispatch) => ({ loadFollowing, dispatch }))

export default compose(withConnect)(FollowingContainer);