import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const MovieCard = ({cardID, cover,title,duration,genres, synopsis, releasedate, reserved, reserve, unreserve, loadDetails}) => {

    const header = (
        <Link to={`/details/${cardID}`}>
            <img alt="Card" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/> 
        </Link>
    );
    const footer = ()=>{
        return localStorage.getItem("demoUserData")
        ? <span>
            {reserved === localStorage.getItem("demoUserData").split('"')[3]
                ? <Button onClick={() => unreserve(cardID)} label="Unrent" icon="pi pi-times" className="p-button-secondary ml-2" /> 
                : <Button onClick={() => reserve(cardID)} label="Rent" icon="pi pi-check" />}
        </span>
        :""
    }

    return (
        <div className='wrapper'>
            <Card title={title} subTitle={genres} header={header} footer={footer}>
                    <p>{synopsis}</p>
                </Card>
           
        </div>
    )
}

export default MovieCard