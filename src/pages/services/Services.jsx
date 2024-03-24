import { Link } from "react-router-dom"
import "./services.css"
import Lottie from "lottie-react"
import animationData1 from "../../assets/Animation1.json"
import animationData2 from "../../assets/Animation2.json"
import animationData3 from "../../assets/Animation3.json"
import animationData4 from "../../assets/Animation4.json"
import animationData5 from "../../assets/Animation5.json"

export default function Services() {
  return (
    <div className="maintenance">

      <span className="mainTitle">NOS SERVICES</span>
      <span className="mainParagraphe">Découvrez notre expertise en maintenance et installation</span>

      <div className="maintenance1">
        
        <div className="maintenanceDesc">  
          <h1 className="maintenanceTitle">
            <Link className='link' to="/contact">Être dépanné</Link>
          </h1>
          <span className="maintenanceText">Nous ne nous contentons pas seulement de fabriquer et d'installer, nous offrons également un service complet de maintenance. Que vous ayez besoin de dépannage, de résolution de problèmes ou d'entretien pour vos produits en aluminium et en PVC, notre équipe est là pour vous. Profitez de notre expertise pour assurer la durabilité et la performance continue de vos installations. Contactez-nous dès maintenant pour un service de maintenance fiable et professionnel.</span>
        </div>
        <div className="maintenanceIcon">
          <Link className='link' to="/contact">
            <Lottie animationData={animationData5}/>
          </Link>
        </div>
          
  
      </div>
      
      <hr className="maintenanceBetween" />

      <div className="maintenance1">
        <div className="maintenanceIcon">
          <Link className='link' to="/contact">
          <Lottie animationData={animationData4}/>
          </Link>
        </div>
        
        <div className="maintenanceDesc">  
          <h1 className="maintenanceTitle">
            <Link className='link' to="/contact">Trouver un installateur</Link>
          </h1>
          <span className="maintenanceText">Nous comprenons que la commodité est essentielle, c'est pourquoi nos installateurs sont prêts à se déplacer directement chez vous pour assurer l'installation de vos produits. Que ce soit pour des fenêtres, des portes ou d'autres éléments en aluminium et en PVC, notre équipe se dévoue pour vous offrir un service efficace et sans tracas. Faites-nous confiance pour apporter notre expertise directement à votre porte et réaliser une installation impeccable.</span>
        </div>
  
      </div>

    </div>
  )
}

