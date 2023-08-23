const Progress = () => {
  return (
    <div className="progress-container">
        <div className="top">Progresso.</div>
        <div className="bottom">
            <p className="taskQnt">12/12 tasks</p>
            <p className="taskPercent">83%</p>
            <div className="progress-bar"></div>
        </div>
    </div>
  )
}

export default Progress