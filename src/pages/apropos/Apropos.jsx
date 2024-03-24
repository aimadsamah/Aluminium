import Section4 from "../../components/section4/Section4"
import "./apropos.css"

export default function Apropos() {
  return (
    <div className="apropos">
       <div className="aproposContainer1">
            <div className="aproposContainer1Left">
                <span className="aproposContainer1Title">BHM</span>
                <img
                    className="aproposContainer1Img"
                    alt=""
                    src="https://www.habitatnews.fr/wp-content/uploads/2019/06/Stores-Discount.jpg"
                />
            </div>
        <div className="aproposContainer1Right">
            <span className="aproposContainer1Text">Bienvenue chez <span className="aproposBHM">BHM</span> - Votre partenaire de confiance en menuiserie aluminium et PVC. Forts d'une expertise solide, nous nous spécialisons dans la fabrication sur mesure, l'installation professionnelle, et la maintenance de vos éléments en aluminium et en PVC. Chez <span className="aproposBHM">BHM</span>, nous nous engageons à offrir des produits de qualité supérieure accompagnés d'un service professionnel exceptionnel. Explorez notre gamme variée et contactez-nous pour concrétiser vos projets avec excellence.</span>
        </div>
       </div>

       <div className="aproposContainer2">
            <Section4 />
       </div>
    </div>
  )
}
