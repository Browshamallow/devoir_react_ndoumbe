import { useEffect, useState } from 'react';
import "./home.css"
import Search from '../../Components/Search/index.jsx';
import HotelList from '../../Components/Card/index.jsx';
import DataJson from "../../datas/hotel.json"



function Home () {

const [data, setData] = useState([]);
    useEffect(() => {
        document.title = "Bienvenue à notre site immobilier"
        setData(DataJson)
    }, []);

    return (
        <>
            <Search/>

            <HotelList/>

        </>
    );
}

export default Home;