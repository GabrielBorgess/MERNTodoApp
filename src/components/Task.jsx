import PropTypes from 'prop-types';
const Task = () => {
  return (
    <div className={`task-container flex gap-4`}>
        <div className="checkbox h-8 w-8 cursor-pointer"></div>
        <div className="task-info flex items-center w-full justify-between">
            <div className="">
              <p className="task-name text-lg font-medium">Create WireFrame</p>
              <p className="task-date text-gray-400">Today</p>
            </div>
            <div className="delete-task cursor-pointer">delete</div>
        </div>
    </div>
  )
}

Task.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

export default Task