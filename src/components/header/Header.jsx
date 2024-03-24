import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg owText text-center">BHM</span>
        <span className="headerTitleSm">ALUMINIUM ET PVC</span>
      </div>
      <img 
        className="headerImg" 
        alt=""
        src="https://images.archiliste.fr/medium/projects/ets/vielliard-et-francheteau/maison-contemporaine-haut-de-gamme-lyon/villa-contemporaine-lyon-architectes-vf2.jpg"
      />
    </div>
  )
}
