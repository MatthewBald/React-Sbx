// src/js/actions/actions.js

import fetch from 'cross-fetch'

/**
 * Synchronous Actions
 */

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

/**
 * Asynchronous Actions
 */

export const REQUEST_POSTS = 'REQUEST_POSTS'

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.date),
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit) {
  return function (dispatch) {

    dispatch(requestPosts(subreddit))

    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}