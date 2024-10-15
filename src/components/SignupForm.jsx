import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignupForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {user, token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user && token){
            navigate("/")
        }
    },[user,token, navigate]);

    const initialFields = {
        name: "",
        password: "",
        email: "",
        mobile: "",
    };


    const onSubmit = async (data) => {
        console.log(data);
        reset(initialFields);
        
        const action = await dispatch(registerUser(data));
        if (action.type === 'auth/registerUser/fulfilled') {
            navigate('/login');
        }
    };
    return (
        <div className="flex-1 flex flex-col items-cente justify-center py-10 h-full lg:w-[fit-content] w-full">
            <div className="flex flex-col items max-w-[500px] mx-auto">
                <h3 className={`text-4xl font-semibold my-2`}>Create an account</h3>
                <p className='mb-2 text-white'>Your personal job finder is here</p>
                <form onSubmit={handleSubmit(onSubmit)} className='py-4 mx-auto flex flex-col gap-5'>
                    <input
                        placeholder='Name'
                        className='w-full border border-2 border-gray-300 rounded-md py-2 px-2 text-gray-600'
                        name='name'
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm h-1">{errors.name.message}</p>}

                    <input
                        placeholder='Email'
                        className='w-full border border-2 border-gray-300 rounded-md py-2 px-2 text-gray-600'
                        name='email'
                        type="email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500 text-sm h-1">{errors.email.message}</p>}

                    <input
                        placeholder='Mobile'
                        className='w-full border border-2 border-gray-300 rounded-md py-2 px-2 text-gray-600'
                        name='mobile'
                        {...register("mobile", { required: "Mobile number is required" })}
                    />
                    {errors.mobile && <p className="text-red-500 text-sm h-1">{errors.mobile.message}</p>}

                    <input
                        placeholder='Password'
                        type="password"
                        className='w-full border border-2 border-gray-300 rounded-md py-2 px-2 text-gray-600'
                        name='password'
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.username && <p className="text-red-500 text-sm h-1">{errors.username.message}</p>}

                    {/* Checkbox for terms and conditions */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id='tnc'
                            {...register("tnc", { required: "Check this box if you want to proceed" })}
                        />
                        <label htmlFor="tnc" className='text-[#7C7C7C] text-sm'>By creating an account, I agree to our terms of use and privacy policy</label>
                    </div>
                    {errors.tnc && <p className="text-red-500 text-sm">{errors.tnc.message}</p>}

                    <button className='font-semibold bg-red-400 text-white w-[fit-content] rounded-md py-2 px-4'>Create Account</button>
                    <span className='text-sm text-[#525252]'>Already have an account <Link to="/login" className='font-bold cursor-pointer'>Sign in</Link></span>
                </form>
            </div>
        </div>
    )
}
