import { useFormik } from "formik";

export function FormDemo(){

    function ValidateUser(user){

        var errors = {UserName:'',Mobile:'',City:''};

        if(user.UserName.length===0){
            errors.UserName='User Name Required';
        }
        else{
            if(user.UserName.length<4){
                errors.UserName='User Name is too short';
            }
        }



        if(user.Mobile.length===0){
            errors.Mobile='Mobile Required';
        }
        else{
            if(user.Mobile.match(/\+91\d{10}/)){
                errors.Mobile='';
            }
            else{
                errors.Mobile='Mobile Invalid';
            }
        }


        


        return errors;

    }

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Mobile:'',
            City:''
        },

        validate:ValidateUser,

        onSubmit:(user)=>{
            console.log(user);
        }
    })

    return(
        <div className="container-fluid">
            <div className="border border-2 w-25 m-2 p-4">
                <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="UserName"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option>Select City </option>
                            <option>Hyderbad</option>
                            <option>Bangalore</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
            </div>
        </div>
    )
}