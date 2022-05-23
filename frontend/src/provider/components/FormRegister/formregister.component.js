import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";

import "./FormDemo.css";


export const Form = ({ action, error }) => {
  const [ , setShowMessage] = useState(false);
  const [ , setFormData] = useState({});

  const toast = useRef(null);


  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error Message",
      detail: error,
      life: 3000,
    });
  };

  if (error) {
    showError(error);
    window.location.reload(true);

  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.username) {
        errors.username = "Username is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      action(data);
      setShowMessage(true);

      formik.resetForm();
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
    <div className="form-demo">
      <Toast ref={toast} />
      <div className="flex justify-content-center">
        <div className="card">
          <h2 className="text-center">Register</h2>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("username"),
                  })}
                />
                <label
                  htmlFor="username"
                  className={classNames({
                    "p-error": isFormFieldValid("username"),
                  })}
                >
                  Username
                </label>
              </span>
              {getFormErrorMessage("username")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("email"),
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Email
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("password"),
                  })}
                />
                <label
                  htmlFor="password"
                  className={classNames({
                    "p-error": isFormFieldValid("password"),
                  })}
                >
                  Password
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>

            <Button
              type="submit"
              label="Register"
              className="mt-2 p-button-warning"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
