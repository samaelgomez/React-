import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import "./moviesTable.css";
import MovieCard from "../cards/card.component";
import { useUserData } from "../../utils/auth.context";

const MoviesTable = ({ moviesData }) => {
  const {state} = useUserData();

  const onReserve = (props) => {
    console.log(state);
  }
  
  const onUnreserve = (props) => {
    console.log(props);
  }

  const loadDetails = (props) => {
    console.log(props);
  }

  console.log(moviesData);
  return <div className="movieGallery">
    {
      moviesData.movies.map((movie)=>{
        return <MovieCard reserve={onReserve} unreserve={onUnreserve} loadDetails={loadDetails} key={movie.slug} cardID={movie.slug} cover = {movie.cover} title = {movie.title} duration = {movie.duration} 
                          genres = {movie.genres} synopsis = {movie.synopsis} releasedate = {movie.releaseDate} reserved={movie.reserved}/>
      })
    }
  </div>
};

export default MoviesTable;