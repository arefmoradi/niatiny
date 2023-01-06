import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ساخت حساب" subtitle="اخت یک حساب کاربری جدید" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField

                fullWidth
                variant="filled"
                type="text"
                label="نام"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                   gridColumn: "span 2" ,
                   "& label" : {
                    transformOrigin: "right !important",
                    left: "inherit !important",
                    right: "1.75rem !important",
                   }
                   }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="نام خانوادگی"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2" ,
                  "& label" : {
                   transformOrigin: "right !important",
                   left: "inherit !important",
                   right: "1.75rem !important",
                  }
                  }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ایمیل"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 2" ,
                  "& label" : {
                   transformOrigin: "right !important",
                   left: "inherit !important",
                   right: "1.75rem !important",
                  }
                  }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="شماره تماس"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: "span 2" ,
                  "& label" : {
                   transformOrigin: "right !important",
                   left: "inherit !important",
                   right: "1.75rem !important",
                  }
                  }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ادرس اول"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 4" ,
                  "& label" : {
                   transformOrigin: "right !important",
                   left: "inherit !important",
                   right: "1.75rem !important",
                  }
                  }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ادرس دوم"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 4" ,
                  "& label" : {
                   transformOrigin: "right !important",
                   left: "inherit !important",
                   right: "1.75rem !important",
                  }
                  }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                ساخت حساب جدید  
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("الزامی است"),
  lastName: yup.string().required("الزامی است است"),
  email: yup.string().email("فرمت ایمیل صحیح نیست").required("الزامی است"),
  contact: yup.string().required("الزامی است"),
  address1: yup.string().required("الزامی است"),
  address2: yup.string().required("الزامی است"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
