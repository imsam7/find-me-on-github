import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { loadRepos } from '../shared/store/repos/actions'
import RepositoriesLayout from '../layouts/RepositoriesLayout'
import Loader from '../shared/components/loader'

class RepositoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { username } = this.props.match.params
        this.props.dispatch(loadRepos({ userName: username }))
    }

    render() {
        if (this.props.repoDetails.loading) return <Loader />
        return <RepositoriesLayout repos={this.props.repoDetails.repos} />
    }
}

const mapStateToProps = (state) => { return ({ repoDetails: state && state.repos }) }
const withConnect = connect(mapStateToProps, (dispatch) => ({ loadRepos, dispatch }))

export default compose(withConnect)(RepositoriesContainer);