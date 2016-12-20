// @flow

// Types
export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
export type SetVisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter: VisibilityFilter,
};

// Actions
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Reducer
export default function reducer(
  state: VisibilityFilter = 'SHOW_ALL',
  action: SetVisibilityFilterAction
) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// Action Creators
export function setVisibilityFilter(
  filter: VisibilityFilter
): SetVisibilityFilterAction {
  return { type: SET_VISIBILITY_FILTER, filter };
}
