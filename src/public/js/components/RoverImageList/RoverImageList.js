import './RoverImageList.css';

const RoverImageList = (photos) => {
  const ImageList = photos
    .map(
      (photo) => `
    <div class="col-3">
        <div class="card mb-3 rover-img">
          <img src="${photo}" class="card-img-top" alt="...">
        </div>
    </div>
    `
    )
    .join('');

  return `
  <div class="row">
    ${ImageList}
  </div>
  `;
};

export default RoverImageList;
