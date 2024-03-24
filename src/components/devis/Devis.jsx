import { Link } from "react-router-dom"
import "./devis.css"

export default function Devis() {
  return (
    <div className="devis">
    <div className="devisContainer1">
      <div className="devisTexts">
        <p className="text1">Vous envisagez un projet</p>
        <p className="text2">de menuiserie en ALUMINIUM ou en PVC ?</p>
        
      </div> 
      <img
        className="devisImg"
        alt=""
        src="https://static.caseo-maison.com/4002-fiche_product/baie-vitree-alu-gris-anthracite.jpg"
      />
      </div>
      <div className="devisContainer2">
        <i className="down fa-solid fa-down-long"></i>
        <div className="devisContainer2Text">
        <button className="devisButton">
          <Link className='link' to="/contact">Demandez un devis gratuit</Link>
        </button>
        <div className="text">
            <p className="text3">Découvrez nos services pour la fabrication et l'installation. </p>
            <p className="text4">Confiez-nous votre projet dès aujourd'hui et demandez dès maintenant votre devis gratuit.</p>
        </div>
        </div>
      </div>
      
    </div>


    
  )
}
