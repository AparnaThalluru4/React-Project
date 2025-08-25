import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemo1(){

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Mobile:'',
            City:''
        },
        validationSchema: yup.object({
            UserName: yup.string().required('User Name Required').min(4,'Name too short'),
            Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/,'Invalid Mobile')
        }),
        onSubmit: (user)=>{
            console.log(user);
        }
    })

    /*
        insted of writing all events like onChange={fomik.handleChange} onBlur={formik.handleBlur}
        we can write like this {...formik.getFeildProps("field name like UserName,Mobile")}
    */

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...formik.getFieldProps("UserName")} type="text" name="UserName"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City">
                            <option>Select City</option>
                            <option>Hyderbad</option>
                            <option>Bangalore</option>
                        </select>
                    </dd>
                </dl>
                <button className="mx-2" disabled={(formik.isValid)?false:true} type="submit">Register</button>
                <button className={(formik.dirty)?'d-inline':'d-none'}>Save</button>
            </form>
        </div>
    )
}