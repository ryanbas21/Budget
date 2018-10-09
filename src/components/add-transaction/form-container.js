import React from "react";
import Slide from "@material-ui/core/Slide";
import { Formik } from "formik";

export default ({ children, isModalOpen, initialValues, validate }) => (
  <Slide direction="up" in={isModalOpen} mountOnEnter unmountOnExit>
    <Formik initialValues={initialValues} validate={validate}>
      {children}
    </Formik>
  </Slide>
);
