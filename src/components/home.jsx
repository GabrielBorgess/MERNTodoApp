
import Progress from './Progress.jsx'
import Tasks from './Tasks.jsx'
import '../index.css'

const Home = () => {
  return (
    <div className="home-container flex flex-col w-scren h-screen items-center justify-start pt-10">
        <div className="nav flex text-5xl font-extralight pb-6">
            <h1 className='text-center font-sans'>Bom dia, <span className='font-medium'>Gabriel</span></h1>
        </div>
        <Progress/>
        <Tasks/>
    </div>
  )
}

export default Home