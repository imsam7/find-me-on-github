import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { loadUserData } from '../shared/store/profile/actions'
import ProfileLayout from '../layouts/ProfileLayout'
import Loader from '../shared/components/loader'

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { username } = this.props.match.params
        this.props.dispatch(loadUserData({ userName: username }))
    }

    render() {
        if (this.props.userDetails.loading)
            return <Loader />
        return <ProfileLayout userDetails={this.props.userDetails.userData} />
    }
}

const mapStateToProps = (state) => { return ({ userDetails: state && state.profile }) }
const withConnect = connect(mapStateToProps, (dispatch) => ({ loadUserData, dispatch }))

export default compose(withConnect)(ProfileContainer);