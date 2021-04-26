import './RoverFormSelect.css';

const RoverFormSelect = (state) => {
  const { rovers, activeRover } = state;

  const DefaultFormSelect = () => {
    const isRoverSelected = rovers.some((rover) => rover === activeRover.name);
    const selectedValue = isRoverSelected ? '' : 'selected';

    return `
      <option ${selectedValue}>Rovers</option>
    `;
  };

  const RoverFormSelectOptions = rovers
    .map((rover) => {
      const selectedValue = rover === activeRover.name ? 'selected' : '';
      return `
        <option ${selectedValue} value="${rover}">${rover}</option>
    `;
    })
    .join('');

  return `
  <select id="rovers" class="form-select mt-4" aria-label="Default select example">
    ${DefaultFormSelect()}
    ${RoverFormSelectOptions}
  </select>  
  `;
};
export default RoverFormSelect;
