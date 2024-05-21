import MiniGame from './components/miniGame.component'
import ReactComp from './components/react.component'
import VueComp from './components/vue.component'

const MainGreet = () => {
  return (
    <>
    <main className='grid-cols-12 grid h-[calc(100dvh-40px)] bg-lightGray'>
      {/* <ReactComp />
      <VueComp /> */}
      <MiniGame />
    </main>
    
    </>
  )
}

export default MainGreet
