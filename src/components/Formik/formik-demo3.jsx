import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";


export function FormDemo3(){

    // we use formic components like <Formik>, <Form>, <Field>, <ErrorMessage>
    // we use form component to access properties


    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'',Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('User Name Required').min(4,'Name must have above 4 letters'),Mobile:yup.string().required('Mobile required').matches(/\+91\d{10}/,'Mobile must start with +91')})} onSubmit={(values)=>{console.log(values)}}>
                
            {
                form=>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName"/></dd>
                            <dd><ErrorMessage name="UserName"/></dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile"/></dd>
                            <dd><ErrorMessage name="Mobile"/></dd>
                        </dl>
                        <button disabled={(form.isValid)?false:true} type="submit">Submit</button>

                        <div className="mt-4 text-danger" style={{display:(form.isValid)?'none':'block'}}>
                            <h4>Check the following errors</h4>
                            <ul>
                                {
                                    Object.keys(form.errors).map(key=>
                                        <li key={key}>{form.errors[key]}</li>
                                    )
                                }
                            </ul>
                        </div>

                    </Form>
            }

            </Formik>
        </div>
    )
}