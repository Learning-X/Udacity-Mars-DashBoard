/* This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. */

const baseURL = 'http://localhost:3005';

const getRoverData = async (name) => {
  const data = await fetch(`${baseURL}/rovers?name=${name}`);
  const { latest_photos } = await data.json();
  const { rover } = latest_photos[0];
  const photos = latest_photos.map((object) => object.img_src);

  // const roverData = {
  //   activeRover: {
  //     ...rover,
  //     photos,
  //   },
  // };
  // console.log('roverData: ', roverData);
  return {
    ...rover,
    photos,
  };
};

export default getRoverData;
