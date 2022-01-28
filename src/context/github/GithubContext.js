import { data } from "autoprefixer";
import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";



const GithubContext = createContext()


// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // //fetch all users
    // const fetchUsers = async () => {

    //     setLoading()

    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    // }

    // //get searched users
    // const searchUsers = async (text) => {

    //     setLoading()

    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const { items } = await response.json()

    //     dispatch({
    //         type: 'GET_SEARCH_USER',
    //         payload: items,
    //     })
    // }


    // //get single user
    // const getUser = async (login) => {

    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     if (response.status === 404) {
    //         window.location = '/notfound'
    //     } else {
    //         const data = await response.json()
    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data,
    //         })
    //     }
    // }

    //  //get user repos
    //  const getUserRepos = async (login) => {

    //     setLoading()

    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page: 10
    //     })

    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()
    //     // console.log(data)

    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data,
    //     })
    // }

    // //clear list
    // const clearList = () => dispatch({
    //     type: 'CLEAR_USERS'
    // }
    // )

    // //Set loader
    // const setLoading = () => dispatch({
    //     type: 'SET_LOADING'
    // })

    return <GithubContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        // fetchUsers,
        // searchUsers,
        // clearList,
        // getUser,
        // getUserRepos,
        ...state,
        dispatch,

    }}>
        {children}
    </GithubContext.Provider>


}

export default GithubContext