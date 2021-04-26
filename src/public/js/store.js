import { fromJS } from 'immutable';

let state = fromJS({
  rovers: ['Curiosity', 'Opportunity', 'Spirit'],
  activeRover: {},
});

// getter
export const getState = () => state.toJS();

// setter
export const updateState = ({ key, value }) => {
  state = state.set(key, fromJS(value));
};
