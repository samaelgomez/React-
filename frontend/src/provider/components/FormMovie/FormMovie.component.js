import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";

import "./FormMovie.css";


export const MovieForm = ({ action }) => {
  const [ , setShowMessage] = useState(false);
  const [ , setFormData] = useState({});

  const toast = useRef(null);


//   const showError = (error) => {
//     toast.current.show({
//       severity: "error",
//       summary: "Error Message",
//       detail: error,
//       life: 3000,
//     });
//   };

//   if (error) {
//     showError(error);
//     window.location.reload(true);

//   }

  const formik = useFormik({
    initialValues: {
        slug: "",
        title: "",
        cover: "",
        releaseDate: "",
        duration: "",
        genres: "",
        synopsis: "",
        rating: ""
    },
    validate: (data) => {
      let errors = {};

      if (!data.slug) {
        errors.slug = "Slug is required.";
      }

      if (!data.title) {
        errors.title = "Title is required.";
      }

      if (!data.cover) {
        errors.cover = "Cover is required.";
      }

      if (!data.releaseDate) {
        errors.releaseDate = "Release date is required.";
      }

      if (!data.duration) {
        errors.duration = "Duration is required.";
      }

      if (!data.genres) {
        errors.genres = "At least a genre required.";
      }

      if (!data.synopsis) {
        errors.synopsis = "Synopsis is required.";
      }

      if (!data.rating) {
        errors.rating = "Rating is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      action(data);
      setShowMessage(true);

      formik.resetForm();
      window.location.href = "/";
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  return (
    <div className="form-movie">
      <Toast ref={toast} />
      <div className="flex justify-content-center">
        <div className="card">
          <h2 className="text-center">Create Movie</h2>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText id="slug" name="slug" value={formik.values.slug} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("slug")})}/>
                <label htmlFor="slug" className={classNames({"p-error": isFormFieldValid("slug")})}>
                  Slug
                </label>
              </span>
              {getFormErrorMessage("slug")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="title" name="title" value={formik.values.title} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("title")})}/>
                <label htmlFor="title" className={classNames({"p-error": isFormFieldValid("title")})}>
                  Title
                </label>
              </span>
              {getFormErrorMessage("title")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="cover" name="cover" value={formik.values.cover} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("cover")})}/>
                <label htmlFor="cover" className={classNames({"p-error": isFormFieldValid("cover")})}>
                  Cover
                </label>
              </span>
              {getFormErrorMessage("cover")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="releaseDate" name="releaseDate" value={formik.values.releaseDate} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("releaseDate")})}/>
                <label htmlFor="releaseDate" className={classNames({"p-error": isFormFieldValid("releaseDate")})}>
                  Release date
                </label>
              </span>
              {getFormErrorMessage("releaseDate")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="duration" name="duration" value={formik.values.duration} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("duration")})}/>
                <label htmlFor="duration" className={classNames({"p-error": isFormFieldValid("duration")})}>
                  Duration
                </label>
              </span>
              {getFormErrorMessage("duration")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="genres" name="genres" value={formik.values.genres} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("genres")})}/>
                <label htmlFor="genres" className={classNames({"p-error": isFormFieldValid("genres")})}>
                  Genres
                </label>
              </span>
              {getFormErrorMessage("genres")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="synopsis" name="synopsis" value={formik.values.synopsis} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("synopsis")})}/>
                <label htmlFor="synopsis" className={classNames({"p-error": isFormFieldValid("synopsis")})}>
                  Synopsis
                </label>
              </span>
              {getFormErrorMessage("synopsis")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="rating" name="rating" value={formik.values.rating} onChange={formik.handleChange}
                           autoFocus className={classNames({"p-invalid": isFormFieldValid("rating")})}/>
                <label htmlFor="rating" className={classNames({"p-error": isFormFieldValid("rating")})}>
                  Rating
                </label>
              </span>
              {getFormErrorMessage("rating")}
            </div>

            <Button
              type="submit"
              label="Acceder"
              className="mt-2 p-button-warning"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
