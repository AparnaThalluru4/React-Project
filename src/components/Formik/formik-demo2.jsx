import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";


export function FormDemo2(){

    // we use formic components like <Formik>, <Form>, <Field>, <ErrorMessage>


    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'',Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('User Name Required').min(4,'Name must have above 4 letters'),Mobile:yup.string().required('Mobile required').matches(/\+91\d{10}/,'Mobile must start with +91')})} onSubmit={(values)=>{console.log(values)}}>
                <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName"/></dd>
                        <dd><ErrorMessage name="UserName"/></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile"/></dd>
                        <dd><ErrorMessage name="Mobile"/></dd>
                    </dl>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}