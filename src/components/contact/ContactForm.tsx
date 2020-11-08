import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import axios, { CancelToken } from "axios";

export default function ContactForm() {
   const [sending, isSending] = useState(false);
   const [sent, setSent] = useState(false);
   const [errorRes, setErrorRes] = useState("");

   async function onSubmit(
      fields: {
         name: string;
         email: string;
         subject: string;
         message: string;
      },
      resetForm: any
   ) {
      isSending(true);
      setErrorRes("");
      setSent(false);

      var axiosInstance = axios.create({
         baseURL: "https://www.echim.ioanacatalina.com",
         timeout: 1000 * 5, // Wait for 5 seconds
         // baseURL: "localhost:30002",
         /* other custom settings */
      });

      axiosInstance
         .post(`/sendEmail`, {
            email: fields.email,
            subject: fields.subject,
            name: fields.name,
            message: fields.message,
         })
         .then((res) => {
            isSending(false);
            setSent(true);
            setErrorRes("");
            resetForm({});
         })
         .catch((err) => {
            isSending(false);
            setSent(false);
            setErrorRes(
               "There was a problem sending the email! :( Please try again!"
            );
         })
         .finally(() => {
            isSending(false);
         });
   }

   return (
      <Formik
         initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
         }}
         validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
               .email("Invalid email")
               .required("Email is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
         })}
         onSubmit={(fields, { resetForm }) => {
            onSubmit(fields, resetForm);
         }}
      >
         {({ errors, touched }) => (
            <Form
               className="text-center"
               style={{ maxWidth: "40rem", margin: "auto" }}
            >
               <div className="form-group flex-div f-wrap flex-column-sm-row">
                  <div
                     className="flex-column-item text-left"
                     style={{ padding: "1rem 0.5rem 0rem 0.5rem" }}
                  >
                     <label htmlFor="email">Name</label>
                     <Field
                        name="name"
                        type="text"
                        disabled={sending}
                        style={{ width: "100%" }}
                        className={
                           "form-control" +
                           (errors.name && touched.name ? " is-invalid" : "")
                        }
                     />
                     <ErrorMessage
                        name="name"
                        component="div"
                        className="invalid-feedback"
                     />
                  </div>
                  <div
                     className="flex-column-item text-left"
                     style={{ padding: "1rem 0.5rem 0rem 0.5rem" }}
                  >
                     <label htmlFor="email">Email</label>
                     <Field
                        name="email"
                        type="text"
                        disabled={sending}
                        className={
                           "form-control" +
                           (errors.email && touched.email ? " is-invalid" : "")
                        }
                     />
                     <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                     />
                  </div>
               </div>

               <div
                  className="form-group  text-left"
                  style={{ padding: "0rem 0.5rem 0rem 0.5rem" }}
               >
                  <label htmlFor="subject">Subject</label>
                  <Field
                     name="subject"
                     type="text"
                     disabled={sending}
                     className={
                        "form-control" +
                        (errors.subject && touched.subject ? " is-invalid" : "")
                     }
                  />
                  <ErrorMessage
                     name="subject"
                     component="div"
                     className="invalid-feedback"
                  />
               </div>

               <div
                  className="form-group text-left"
                  style={{ padding: "0rem 0.5rem 0rem 0.5rem" }}
               >
                  <label htmlFor="subject">Message</label>
                  <Field
                     component="textarea"
                     rows="5"
                     name="message"
                     type="text"
                     className={
                        "form-control" +
                        (errors.message && touched.message ? " is-invalid" : "")
                     }
                     disabled={sending}
                  />
                  <ErrorMessage
                     name="message"
                     component="div"
                     className="invalid-feedback"
                  />
               </div>

               <div style={{ color: "red", marginBottom: "0.5rem" }}>
                  {errorRes}
               </div>

               {sent && (
                  <div style={{ marginBottom: "0.5rem" }}>
                     Message was sent! Thanks for reaching me!
                  </div>
               )}

               <Button
                  type="submit"
                  className="button-main-outline"
                  disabled={sending}
                  bsPrefix="button-main width-100 button-main-height-medium text-normal"
               >
                  {!sending ? <span>Send</span> : <span>Sending...</span>}
                  {/* <SendingAnimation /> */}
               </Button>
            </Form>
         )}
      </Formik>
   );
}
