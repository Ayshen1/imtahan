import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Post } from '../../api/httprequest';
import {Helmet} from "react-helmet";

const Add = () => {
  
    const formik = useFormik({
        initialValues: {
          image: '',
          name: '',
          username: '',
        },
        validationSchema: Yup.object({
          image: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            username: Yup.string().required('Required'),
        }),
        onSubmit: values => {
          Post(values)
          formik.resetForm()
        },
      });
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
 
       <label htmlFor="name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
 
       <label htmlFor="username">Username</label>
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.username}
       />
       {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default Add