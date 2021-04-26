import getRoverData from './api/NASA_api';
import { getState, updateState } from './store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const root = document.getElementById('root');

// const updateState = (state, newState) => {
//   state = Object.assign(state, newState);
//   render(root, state);
// };

const render = (root, state) => {
  root.innerHTML = app(state);
};

const app = (state) => {
  const { activeRover } = state;

  return `
    ${Header(state)}
    ${Main(activeRover)}
  `;
};

window.addEventListener('DOMContentLoaded', () => {
  render(root, getState());
});

root.addEventListener('change', async (e) => {
  e.preventDefault();
  const selectedRover = e.target.value;
  const roverData = await getRoverData(selectedRover);
  // console.log('roverData: ', roverData);

  updateState({
    key: 'activeRover',
    value: roverData,
  });

  render(root, getState());
});
