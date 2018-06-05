// src/js/actions/index.js

import {
  ADD_ARTICLE,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from '../constants/action-types'

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article,
})

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

export function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    index,
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index,
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}
