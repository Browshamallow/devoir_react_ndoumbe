import { useEffect, useState } from 'react';
import "./about.css"
import pp from "../../assets/images/about.jpg"

const About = () => {

    useEffect(() => {
        document.title = "Erreur";
    }, []);

    return (
        <>
         <h2>About</h2>
        <p>
          Oceanica est l'un des plus grands et des plus appréciés complexes touristiques de Floride. 
          Notre mission est d'enrichir la vie des gens en leur offrant des moments mémorables, allant 
          d'une chambre avec une vue magnifique à une multitude d'activités et d'offres.
        </p>
        <img src={pp} alt="pp" />
        <p>
          Nous ne nous contentons pas de fournir des services à nos invités, mais nous préservons, protégeons 
          et améliorons également la beauté naturelle et la culture de la Floride tout en développant des 
          activités récréatives et agricoles compatibles avec l'environnement. 
        </p>
        <p>
          Oceanica est un magnifique complexe et un endroit parfait pour faire du surf. Situé sur le côté nord-est 
          de la Floride, le long des plages de sable blanc de Keywest, il n'est qu'à 24 miles de Miami. Le terrain 
          de la réserve varie de forêts tropicales denses à de larges vallées ouvertes, en passant par de belles 
          plages de sable blanc et des falaises verdoyantes.
        </p>
        <p>
          Nous proposons également des leçons de surf ici - vous pouvez soit acheter des cours, soit surfer par vous-même.
        </p>
           </>
    );
}

export default About;