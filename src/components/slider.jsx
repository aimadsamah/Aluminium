import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import {sliderItems} from "../data"
import { useEffect } from "react"; // Add useEffect import
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top:150px;
    margin-bottom:150px;
    font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ props=> props.direction === "left" && "10px"};
    right: ${ props=> props.direction === "right" && "10px"};

    margin: auto;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f5fafd;
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Image = styled.img`
    height: 70%;
    width: 70%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid white;
  color: black;
  transition: all 0.3s ease;

  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));

  &:hover {
    background-color: white;
    color: black;
    
  }
`;


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick= (direction) =>{

        if(direction=== "left"){
            setSlideIndex((prevIndex)=>(prevIndex > 0 ? prevIndex-1 : 1))
        } else {
            setSlideIndex((prevIndex)=>(prevIndex < 1 ? prevIndex+1 : 0))
        }
    };

    // Auto slide transition effect
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex < 1 ? prevIndex + 1 : 0));
        }, 4000); // Change the interval duration here (4 seconds)

        return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
    }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <Container>
        <Arrow direction= "left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
        
            <Slide>
                <ImgContainer>
                    <Image src="https://www.cybstores.com/sites/default/files/styles/image_420x460/public/gallery/coulissant_alu_aluslide.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>NOS PRODUITS</Title>
                    <Desc>DÉCOUVREZ NOTRE GAMME COMPLÈTE DE FERMETURES EN ALUMINIUM ET PVC, CONÇUES POUR ALLIER ESTHÉTIQUE ET FONCTIONNALITÉ.</Desc>
                    <Link className='link' to="/produits">
                        <Button>VOIR NOS PRODUITS</Button>
                    </Link>
                </InfoContainer>
            </Slide>
        
            <Slide>
                <ImgContainer>
                    <Image src="https://www.lacleaixoise.com/public/img/big/AdobeStock310166567jpeg_613223b16f8e2.jpeg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>NOS SERVICES</Title>
                    <Desc>PROFITEZ DE NOTRE EXPERTISE ET DE NOTRE SERVICE PERSONNALISÉ POUR L'INSTALLATION ET LA MAINTENANCE DE VOS FERMETURES, POUR UNE TRANQUILLITÉ D'ESPRIT TOTALE.</Desc>
                    <Link className='link' to="/services">
                        <Button>VOIR NOS SERVICES</Button>
                    </Link>
                </InfoContainer>
            </Slide>
            

        </Wrapper>

        <Arrow direction= "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
