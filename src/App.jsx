
import './App.css'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import NavBar from './Components/NavBar/NavBar'
import RatingBar from './Components/RatingBar/RatingBar'
import Digital_Tools from './Components/Premium-Digital-Tools/Digital_Tools'
import ProductItems from './Components/ProductItems/ProductItems'
import { Suspense } from 'react'
import Accounts from './Components/Accounts/Accounts'
import WorkFlow from './Components/WorkFlow/WorkFlow'
import Footer from './Components/Footer/Footer'
import PreFooter from './Components/PreFooter/PreFooter'



function App() {
  const fetchData= async()=>{
  try {
    const res=await fetch('SystemData.json')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching SystemData.json:', error)
    throw error
  }

}
   const productPromise=fetchData();
  return (
 
    <>
    <header className='container mx-auto max-w-400 px-50'> <NavBar/> <HeroBanner/></header>
    <RatingBar/>
    <main className='container mx-auto max-w-400 px-50'>
      <Digital_Tools/>
      <Suspense fallback={ <div className=''><span className="loading loading-infinity loading-lg"></span></div>}>
            <ProductItems  productPromise={productPromise}/>
      </Suspense>
      <Accounts/>
      <PreFooter/>
      <WorkFlow/>

    </main>

    <footer className=' container mx-auto max-w-400 px-50'>
      <Footer/>
    </footer>
  
    </>
  )
}

export default App
