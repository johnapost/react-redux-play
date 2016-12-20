// @flow

// All visibility actions
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// --- SET_VISIBILITY_FILTER
export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export type SetVisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter: VisibilityFilter,
};

export default function setVisibilityFilter(
  filter: VisibilityFilter
): SetVisibilityFilterAction {
  return { type: SET_VISIBILITY_FILTER, filter };
}
// ---
