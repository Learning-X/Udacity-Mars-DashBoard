import RoverSection from '../RoverSection/RoverSection';
import RoverImageList from '../RoverImageList/RoverImageList';
import './Main.css';

const Main = (activeRover) => {
  if (!activeRover.name)
    return `
    <main>
      <section class="container mt-3 text-center">
      <h2 class="default-text">Choose a Rover</h2>
      </section>
    </main>
    `;

  return `
    <main>
      <section class="container mt-3 text-center">
        ${RoverSection(activeRover)}
        ${RoverImageList(activeRover.photos)}
      </section>
    </main>  
  `;
};

export default Main;
