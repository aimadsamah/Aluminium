import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer1">
        <h1 className="logo">BHM</h1>
        <p className="paragraphe">Nous sommes là pour répondre à toutes vos questions et vous fournir plus d'informations. N'hésitez pas à nous contacter pour discuter de vos besoins, obtenir des conseils personnalisés, ou demander un devis. Notre équipe est à votre disposition pour vous offrir le meilleur service possible. Merci de nous faire confiance.</p>
      </div>
      <hr />
      <div className="footerContainer2">
        <div className="footerContainer2Items">
        <div className="footerLeft">
            <h3 className="footerTitle">NOS SERVICES</h3>
            <div className="footerList">
                <div className="footerListItem">
                    <p className="footerDesc">Fabrication sur Mesure</p>
                </div>
                <div className="footerListItem">
                    <p className="footerDesc">Installation Professionnelle</p>
                </div>
                <div className="footerListItem">
                    <p className="footerDesc">Conseils et Expertise</p>
                </div>
                <div className="footerListItem">
                    <p className="footerDesc">Entretien et Réparation</p>
                </div>
            </div>
        </div>

        <div className="footerCenter">
            <h3 className="footerTitle">NOUS VISITER</h3>
            <div className="footerList">
                <div className="footerListItem">
                    <i className="footerIcon fa-solid fa-location-dot"></i>
                    <p className="footerDesc">117 Avenue du Général de Gaulle 06700 SAINT LAURENT DU VAR</p>
                </div>
                <div className="footerListItem">
                    <i className="footerIcon fa-solid fa-map-location-dot"></i>
                    <p className="footerDesc">Plan d'acces</p>
                </div>
                
            </div>
            
        </div>



        <div className="footerRight">
            <h3 className="footerTitle">NOUS CONTACTER</h3>
            <div className="footerList">
                <div className="footerListItem">
                    <i className="footerIcon fa-solid fa-phone"></i>
                    <p className="footerDesc">+213770454948</p>
                </div>
                <div className="footerListItem">
                    <i className="footerIcon fa-brands fa-square-whatsapp"></i>
                    <p className="footerDesc">+213770454948</p>
                </div>
                <div className="footerListItem">
                    <i className="footerIcon fa-solid fa-envelope"></i>
                    <p className="footerDesc">imedsam4@gmail.com</p>
                </div>
            </div>
            
        </div>
        </div>
      </div>
    </div>
  )
}
