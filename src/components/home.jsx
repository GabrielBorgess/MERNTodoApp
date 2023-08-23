
import Progress from './Progress.jsx'
import Tasks from './Tasks.jsx'
import '../index.css'

const Home = () => {
  return (
    <div className="home-container">
        <div className="nav">
            <h1>Bom dia, <span className='name'>Gabriel</span></h1>
        </div>
        <Progress/>
        <Tasks/>
    </div>
  )
}

export default Home