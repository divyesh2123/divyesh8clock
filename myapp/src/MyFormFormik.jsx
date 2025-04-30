import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default function MyFormFormik() {

  const myvalidationwithoutyup = (data)=>{

     const error= {};

     if(!data.firstName)
     {
      error["firstName"]= "first name is requited";
     }
     
     /* same logic for the other fields*/
     return error;

  }


   const  validationSchema =() => {
        return Yup.object().shape({
            firstName: Yup.string().required('firstName is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters')
            ,
            lastName: Yup.string().required('lastName is required'),
            email : Yup.string().required('lastName is required').email("emails is not valid"),
      
          
            
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
            cofirmPasswrod: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            isActive: Yup.bool().oneOf([true], 'isActive Terms is required'),
        });
      }



  return (
    <Formik
     validate={myvalidationwithoutyup}
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      isActive: false,
      hobbies: [],
      gender: "",
      location: "",
      password:"",
      cofirmPasswrod : ""
    }}
    onSubmit={async (values) => {
        console.log(values);
    }}
  >
    <Form>
    <label htmlFor="firstName">First Name</label>
    <Field id="firstName" name="firstName" placeholder="firstName" />
    <ErrorMessage  name='firstName'/>
    <label htmlFor="lastName">lastName Name</label>
    <Field id="lastName" name="lastName" placeholder="lastName" />
    <ErrorMessage  name='lastName'/>
    <label htmlFor="email">lastName Name</label>
    <Field id="email" name="email" placeholder="email" />
    <ErrorMessage  name='email'/>
    <label htmlFor="isActive">lastName Name</label>
    <Field id="isActive" name="isActive" type="checkbox" />
    <ErrorMessage  name='isActive'/>

    <Field id="password" name="password" type="password" />
    <ErrorMessage  name='password'/>

    <Field id="cofirmPasswrod" name="cofirmPasswrod" type="password" />
    <ErrorMessage  name='cofirmPasswrod'/>

    <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hobbies" value="cricket" />
              cricket
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="book" />
              book
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="travelling" />
              travelling
            </label>
          </div>

          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="radio" name="gender" value="male" />
              male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              female
            </label>
            <label>
              <Field type="radio" name="gender" value="other" />
              other
            </label>
          </div>

          <Field
             component="select"
             id="location"
             name="location"
            
           >
             <option value="NY">New York</option>
             <option value="SF">San Francisco</option>
             <option value="CH">Chicago</option>
             <option value="OTHER">Other</option>
           </Field>

    <button type="submit">Submit</button>
    </Form>

    </Formik>
  )
}
