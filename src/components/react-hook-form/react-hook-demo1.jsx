import {useForm} from "react-hook-form";


export function HookForm(){

    const{register,handleSubmit,formState:{errors}}=useForm();
    const submit = (values)=>{
        console.log(values);
    }

    return(
        <div className="container-fluid  border border-2 w-50 p-4 m-4 bg-body-secondary">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" {...register("UserName",{required:true,pattern:/[A-Z,a-z]{4,15}/})} /></dd>
                     <dd className="text-danger">{((errors.UserName?.type==="required")?<span>User Name required</span>:'') || ((errors.UserName?.type==="pattern")?"Name should be 4-15 chars":'')}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" {...register("Mobile",{required:true,pattern:/\+91\d{10}/})}/></dd>
                    <dd className="text-danger">{((errors.Mobile?.type==="required")?<span>Mobile Required</span>:'')||((errors.Mobile?.type==="pattern")?"Mobile No. should start with +91":'')}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" min="15" max="30" name="Age" {...register("Age",{required:true,min:15,max:30})}/></dd>
                    <dd className="text-danger">{((errors.Age?.type==="required")?<span>Age required</span>:'')||((errors.Age?.type==="min")?'Age in between 15 to 30':'')||(errors.Age?.type==="max")?'Age should not be greater than 30':''}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" {...register("City",{required:true})}>
                            <option>Select City</option>
                            <option>Hyderabad</option>
                            <option>Bangalore</option>
                            <option>Delhi</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{(errors.City?.type==="required")?<span>Please select City</span>:''}</dd>
                    
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}