import React, { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import "./moviesTable.css";
import MovieCard from "../cards/card.component";
import { useUserData } from "../../utils/auth.context";
import useConsumerReducer from "../../router/consumer";

const MoviesTable = ({ moviesData }) => {
  const {state} = useUserData();
  const [consumerResult, consume] = useConsumerReducer();
  useEffect(() => {
    consumerResult !== null ? window.location.reload() : console.log(consumerResult)
  }, [consumerResult])

  const onReserve = (props) => {
    consume({consumer:"MovieConsumer",consumerAction:"ReserveMovie",variables:{movie:{slug:props, reserved:localStorage.getItem("demoUserData").split('"')[3]}}});
  }
  
  const onUnreserve = (props) => {
    consume({consumer:"MovieConsumer",consumerAction:"UnreserveMovie",variables:{movie:{slug:props, reserved:"false"}}});
  }

  const loadDetails = (props) => {
    console.log(props);
  }

  return <div className="movieGallery">
    {
      moviesData.movies.map((movie)=>{
        return <MovieCard reserve={() => onReserve(movie.slug)} unreserve={onUnreserve} loadDetails={loadDetails} key={movie.slug} cardID={movie.slug} cover = {movie.cover} title = {movie.title} duration = {movie.duration} 
                          genres = {movie.genres} synopsis = {movie.synopsis} releasedate = {movie.releaseDate} reserved={movie.reserved}/>
      })
    }
  </div>
};

export default MoviesTable;