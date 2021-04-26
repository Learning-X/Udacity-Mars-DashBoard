import RoverFormSelect from '../RoverFormSelect/RoverFormSelect';
import './Header.css';

const Header = (state) => {
  const { rovers } = state;

  return `
    <header>
      <div class="container mt-4">
        <h1 class="mars-title text-center text-white">Mars Rover Dashboard</h1>
        ${RoverFormSelect(state)}
      </div>
    </header>
  `;
};
export default Header;
