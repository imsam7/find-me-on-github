import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from './actionTypes'

export const loadRepos = (payload) => ({ type: GET_REPOS, payload });
export const loadReposuccess = data => ({ type: GET_REPOS_SUCCESS, data });
export const loadReposFailure = (error) => ({ type: GET_REPOS_FAILURE, error });