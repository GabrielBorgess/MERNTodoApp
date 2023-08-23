import PropTypes from 'prop-types';
const Task = () => {
  return (
    <div className={`task-container`}>
        <div className="checkbox"></div>
        <div className="task-info">
            <div className="">
              <p className="task-name">Create WireFrame</p>
              <p className="task-date">Today</p>
            </div>
            <div className="delete-task">delete</div>
        </div>
    </div>
  )
}

Task.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

export default Task