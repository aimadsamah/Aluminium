import { Link } from "react-router-dom"
import "./section1.css"

export default function Section1() {
  return (
    <div className="section1">
      <div className="section1Container1">
        <div className="section1MainTitle">NOUS OFFRONS</div>
        
      </div>
      <div className="section1Container2">
        <div className="section1Container2Produits">
            <button className="container2Titles">
              <Link className='link' to="/produits">PRODUITS</Link>
            </button>
            
        </div>
        <span className="between"></span>
        <div className="section1Container2Services">
            <button className="container2Titles">
              <Link className='link' to="/services">SERVICES</Link>
            </button>
            
        </div>
      </div>
      
    </div>
  )
}
