import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import ToursItem from "../../components/tours/ToursItem";
import useFetch from "../../hooks/useFetch";
import "./tours.css"

const Tours = () => {
    const { data } = useFetch(
        `http://localhost:8800/api/tours`
    );

    return (
        <>
            <Navbar />
            <Header />
            <div className='container-tours'>
                {data.map((item) => (
                    <ToursItem item={item} key={item._id} />
                ))}
            </div>


        </>
    )
}

export default Tours
