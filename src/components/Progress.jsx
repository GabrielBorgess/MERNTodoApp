const Progress = () => {
  return (
    <div className="progress-container bg-gray-950 text-white w-full h-2/5 flex flex-col justify-between rounded-3xl mb-6">
        <div className="top text-4xl font-bold m-8">Progresso.</div>
        <div className="bottom m-6">
            <p className="taskQnt text-gray-400 m-1">12/12 tasks</p>
            <p className="taskPercent text-7xl font-bold m-1">83%</p>
            <div className="progress-bar m-1 h-12 rounded-3xl bg-purple-300"></div>
        </div>
    </div>
  )
}

export default Progress