const Form = ({ course,trainer, handleChange, handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            name="course"
            id="course"
            required
            value={course}
            onChange={handleChange}
            placeholder="enter course"
          />
        </div>
        <div className="from-group">
          <label htmlFor="trainer">Trainer</label>
          <input
            type="text"
            name="trainer"
            id="trainer"
            required
            value={trainer}
            onChange={handleChange}
            placeholder="enter trainer"
          />
        </div>
        <div className="from-group">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
