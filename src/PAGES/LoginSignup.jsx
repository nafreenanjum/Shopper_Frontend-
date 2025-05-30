// import React from 'react'
// import './LoginSignup.css'
// import { useState } from 'react';

// export default function LoginSignup() {
//   const [state,setstate]=useState("Login");
//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>
//           {state}
//         </h1>
//         <div className="loginsignup-fields">
//           {state==="Sign up"?<input type="text" placeholder="Your Name"/>:<></>}
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder="password"/>


//         </div>
//         <button>Continue</button>
//         {state==="Sign Up"? <p className="loginsignup-login">
//           Alreday have an account ? <span >Login here</span>
//         </p>: <p className="loginsignup-login">
//           Create an account ? <span onClick={()=>{setstate("Sign Up")}}>Click here</span>
//         </p>}
        
       
//         <div className="loginsignup-agree">
//           <input type="checkbox" name="" id=""/>
//           <p>By continuing,i agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import './LoginSignup.css';

// export default function LoginSignup() {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const changeHandler = (e) => {
//     setFormData({
//       ...formData, // ✅ fixed casing
//       [e.target.name]: e.target.value
//     });
//   };

//   const login = async () => {
//     console.log("Login executed", formData);
//     // You can make an API call here using fetch or axios
//   };

//   const signup = async () => {
//     console.log("Signup executed", formData);
//     let responseData;
//     await fetch('http://localhost:3001/signup',{
//       method:'POST',
//       headers:{
//         Accept:'application/form-data',
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(formData),
//     }).then((response)=>response.json()).then((data)=>responseData=data)

//     if(responseData.success){
//       localStorage.setItem('auth-token',responseData.token);
//       window.location.replace("/");
//     }else{
//       alert(responseData.errors);
//     }
//     // You can make an API call here using fetch or axios
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>

//         <div className="loginsignup-fields">
//           {state === "Signup" && (
//             <input
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//               type="text"
//               placeholder="Your Name"
//             />
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//             type="email"
//             placeholder="Email Address"
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//             type="password"
//             placeholder="Password"
//           />
//         </div>

//         <button onClick={() => (state === "Login" ? login() : signup())}>
//           Continue
//         </button>

//         {state === "Signup" ? (
//           <p className="loginsignup-login">
//             Already have an account?{" "}
//             <span onClick={() => setState("Login")}>Login here</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?{" "}
//             <span onClick={() => setState("Signup")}>Click here</span>
//           </p>
//         )}

//         <div className="loginsignup-agree">
//           <input type="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import './LoginSignup.css';

// export default function LoginSignup() {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const changeHandler = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const login = async () => {
//     const loginData = {
//       email: formData.email,
//       password: formData.password
//     };

//     console.log("Login executed", loginData);

//     try {
//       const response = await fetch('http://localhost:3001/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       const responseData = await response.json();

//       if (response.ok && responseData.success) {
//         localStorage.setItem('auth-token', responseData.token);
//         window.location.replace('/');
//       } else {
//         alert(responseData.errors || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   const signup = async () => {
//     console.log("Signup executed", formData);

//     try {
//       const response = await fetch('http://localhost:3001/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const responseData = await response.json();

//       if (response.ok && responseData.success) {
//         localStorage.setItem('auth-token', responseData.token);
//         window.location.replace('/');
//       } else {
//         alert(responseData.errors || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state}</h1>

//         <div className="loginsignup-fields">
//           {state === "Signup" && (
//             <input
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//               type="text"
//               placeholder="Your Name"
//             />
//           )}
//           <input
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//             type="email"
//             placeholder="Email Address"
//           />
//           <input
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//             type="password"
//             placeholder="Password"
//           />
//         </div>

//         <button onClick={() => (state === "Login" ? login() : signup())}>
//           Continue
//         </button>

//         {state === "Signup" ? (
//           <p className="loginsignup-login">
//             Already have an account?{" "}
//             <span onClick={() => setState("Login")}>Login here</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?{" "}
//             <span onClick={() => setState("Signup")}>Click here</span>
//           </p>
//         )}

//         <div className="loginsignup-agree">
//           <input type="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './LoginSignup.css';

export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const login = async () => {
    console.log("Login executed", formData);
    let responseData;

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,  // fixed this line
          email: formData.email,        // fixed this line
          password: formData.password,  // fixed this line
        }),
      });

      const data = await res.json();

      // Check if the response is not OK (status code 400 or 500)
      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      }
    } catch (err) {
      // Display the error message if signup failed
      alert(err.message);  // Show the error to the user
    }

    // You can add an API call here for login if needed
  };

  const signup = async () => {
    console.log("Signup executed", formData);
    let responseData;

    try {
      const res = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,  // fixed this line
          email: formData.email,        // fixed this line
          password: formData.password,  // fixed this line
        }),
      });

      const data = await res.json();

      // Check if the response is not OK (status code 400 or 500)
      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      }
    } catch (err) {
      // Display the error message if signup failed
      alert(err.message);  // Show the error to the user
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Signup" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>

        <button onClick={() => (state === "Login" ? login() : signup())}>
          Continue
        </button>

        {state === "Signup" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Signup")}>Click here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}
