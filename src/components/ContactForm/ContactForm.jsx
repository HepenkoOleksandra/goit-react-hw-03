import { Field, Form, Formik } from "formik"

const initialValues = {
  name: "",
  number: "", 
};

const ContactForm = ({onAddContact}) => {
 const handleSubmit = (values, actions) => {
    console.log("values: ", values);
    onAddContact(values);
    actions.resetForm();
  };
    
  
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label>
                    <span>Name</span>
                        <br />
                    <Field type="text" name="name" />
                </label>
                    <br />
                <label>
                    <span>Number</span>
                        <br />
                    <Field type="number" name="number" />
                </label>
                    <br />				
<button type="submit">Add contact</button>
			</Form>
      </Formik>
      
  )
}

export default ContactForm