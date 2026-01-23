import React, { useActionState, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


export default function LoginPage() {
    
    const [form, setForm] = React.useState({
        username: "",
        password: ""
    });
    
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const [loading, setLoading] = useState(false);
    // const [message, formAction, isPending] = useActionState(loginAction, "",  {
    //     withPending: true
    // });
    const navigate = useNavigate();

    // if(message == "Login successful") {
       
    // }
    async function loginAction(formData) {
 try {
        setLoading(true);
    
    const res = await fetch('http://127.0.0.1:8000/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
        console.log("login data :  ",data)
        localStorage.setItem("userId", data.user_id);
        localStorage.setItem("username", data.username);

         navigate("/jobs")

    }

    return data.message || "Login Failed"
}
catch (error) {
    console.error("Error during login:", error);
    return "An error occurred. Please try again.";
} finally {
    setLoading(false);
}
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.username) {
            userNameRef.current.focus();
            return;
        }
        if (!form.password) {
            passwordRef.current.focus();
            return;
        }
        loginAction(form);

    }

    return (
        <div className="h-screen relative bg-gray-50 text-gray-800">

            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-700">
                        JobPortal
                    </div>

                    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                        <a href="#" className="hover:text-blue-700">Jobs</a>
                        <a href="#" className="hover:text-blue-700">Companies</a>
                        <a href="#" className="hover:text-blue-700">Services</a>
                        <a href="#" className="hover:text-blue-700">Register</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                <section className="hidden md:block">
                    <h1 className="text-3xl font-bold leading-snug">
                        Find your dream job now
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-md">
                        Register with JobPortal and get matched with the right opportunities.
                        Build your profile and apply to jobs in top companies.
                    </p>

                    <ul className="mt-6 space-y-3 text-sm text-gray-700">
                        <li>✔ Trusted by thousands of recruiters</li>
                        <li>✔ Personalized job recommendations</li>
                        <li>✔ Easy apply & profile visibility</li>
                    </ul>
                </section>
                <section className="bg-white border rounded-lg p-8 max-w-md w-full mx-auto">
                    <h2 className="text-xl font-bold text-gray-900 text-center">
                        JobPortal
                    </h2>
                    <p className="text-sm text-gray-500 text-center mt-1">
                        Login to your account
                    </p>

                    <form  onSubmit={handleSubmit}  className="mt-6 space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                               Username
                            </label>
                            <input type="text" ref={userNameRef} name='username' placeholder="Enter your email"
                            value={form.username}
                            onChange={handleChange}
                                className="mt-1 w-full rounded border border-gray-300 px-3 py-2
        focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input  name='password' ref={passwordRef} type="password" placeholder="Enter your password"
                             value={form.password}
                            onChange={handleChange}
                                className="mt-1 w-full rounded border border-gray-300 px-3 py-2
        focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-700 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button 
                        disabled={loading} 
                        type='submit' className="w-full bg-blue-700 hover:bg-blue-800
      text-white font-semibold py-2.5 rounded transition">
                             {loading ? 'Logging in...':'Login'}
                        </button>

                        
                        {/* <p className='text-center text-sm text-gray-600'>{message}</p> */}

                        <p className="text-sm text-center text-gray-600">
                           <span className='pr-0.75'> New to JobPortal?</span>
                            <NavLink to={"/register"} className="text-blue-700 font-medium hover:underline">
                             Register here
                            </NavLink>
                        </p>
                    </form>
                </section>

            </main>

            <footer className="absolute bottom-0 left-0 right-0 border-t bg-white">
                <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
                    © 2026 JobPortal.com | All rights reserved
                </div>
            </footer>

        </div>
    )
}