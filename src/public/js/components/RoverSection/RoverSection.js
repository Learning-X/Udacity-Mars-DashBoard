import images from '../../../assets/images/*.jpg';
import './RoverSection.css';

const RoverSection = (activeRover) => {
  let imageRoverUrl = '';

  for (const [key, value] of Object.entries(images)) {
    if (activeRover.name === key) {
      imageRoverUrl = value;
    }
  }

  return `
  <div class="card mb-3 rover-img">
    <img src="${imageRoverUrl}" class="card-img-top rover-img" alt="...">
  </div>

  <div class="row gx-2 gx-lg-3">
    <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
      <div class="card card-hover-shadow h-100">
        <div class="card-body">
          <h6 class="card-title">Rover</h6>
          <h4 class="card-info">${activeRover.name}</h4>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
      <div class="card card-hover-shadow h-100">
        <div class="card-body">
          <h6 class="card-title">Status</h6>
          <h4 class="card-info">${activeRover.status}</h4>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
      <div class="card card-hover-shadow h-100">
        <div class="card-body">
          <h6 class="card-title">Landing_date</h6>
          <h4 class="card-info">${activeRover.landing_date}</h4>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-lg-3 mb-3 mb-lg-5">
      <div class="card card-hover-shadow h-100">
        <div class="card-body">
          <h6 class="card-title">Launch_date</h6>
          <h4 class="card-info">${activeRover.launch_date}</h4>
        </div>
      </div>
    </div>
  </div>
`;
};

export default RoverSection;
