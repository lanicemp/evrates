// import react from "react";

const UserTimeOfUse = ({ handleTOUChange, timeOfUse }) => {
  return (

    <div className="form-component">
      <div className= "modal-question">
      <h3>What hours of the day do you plan to charge your EV? </h3>
      </div>
      <br></br>
      <select
        name='time-of-use'
        value={timeOfUse}
        type='number'
        onChange={handleTOUChange}
      >
        <option value='Between noon and 6pm'>Between noon and 6pm</option>
        <option value='Between 7pm and 11am'>Between 7pm and 11am</option>
      </select>
    </div>
  );
};
export default UserTimeOfUse;
