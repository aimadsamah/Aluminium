import Devis from '../../components/devis/Devis'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Section1 from '../../components/section1/Section1'
import Section4 from '../../components/section4/Section4'
import Slider from '../../components/slider'
import Topbar from '../../components/topbar/Topbar'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <div className='sections'>
        <Slider />
        {/* <Section1 /> */}
        <Devis />
        <Section4 />
      </div>
    </div>
  )
}
