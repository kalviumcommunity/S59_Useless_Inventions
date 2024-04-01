import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'

function SignIn() {
  const { register, handleSubmit } = useForm()
  const [resp, setResp] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const Check = async (data) => {
      try {
          const response = await fetch("http://localhost:8088/api/login", {
              method: "POST",
              headers: { 'Content-Type': "application/json" },
              body: JSON.stringify({ Email: data.Email })
          });

          const Feedback = await response.json();
          const { accessToken , Email} = Feedback
          console.log(Feedback)
          document.cookie = `accessToken=${accessToken}; path=/;`;
          document.cookie = `user=${Email}`;
          if (response.ok) {
              console.log("Login Successful");
              setResp(Feedback);
              setLoggedIn(true);
              document.cookie = `user=${Feedback.Name}`;
          } else {
              console.log("Login Failed");
          }
          return Feedback;
      } catch (err) {
          console.log(err);
      }
  };


  const logout = async () => {
      try {
          const response = await fetch("http://localhost:8088/api/logout", {
              method: "POST",
              headers: { 'Content-Type': "application/json" },
          });

          const Feedback = await response.json();

          if (response.ok) {
              console.log("Logout Successful");
              document.cookie = `accessToken=; path=/;`
              document.cookie = `user=`;
              setResp(Feedback);
              setLoggedIn(false);
              
          } else {
              console.log("Logout failed");
          }
      } catch (err) {
          console.log(err);
      }
  };


  useEffect(() => {
      console.log(resp)
  }, [resp])

  const submit = async (data) => {
      try {
          await handleSubmit(Check)(data);
      } catch (err) {
          console.log(err);
      }
  };

  return (
      <div>
          <form
              
              onSubmit={handleSubmit(submit)}>
              <h3>Login</h3>
              
              <div>
                  <input
                      type="email"
                      
                      placeholder="Enter Email"
                      {...register("Email", { required: "Please enter the Email", pattern: { value: /^\S+@\S+$/i, message: "Invalid mail" } })}
                  />

                  <input
                      type="password"
                      
                      placeholder="Enter password"
                      {...register("pass", {
                          required: "Please enter the password",
                          minLength: {
                              value: 10,
                              message: "The password should be at least 10 characters long",
                          }
                      })}

                  />
              </div>
              {!loggedIn && <div>
                  <button type="submit">
                      Log In
                  </button>
              </div>}
          </form>
          {loggedIn && <div>{
              <button onClick={logout}>
                  Log Out
              </button>}</div>}

      </div>
  )
}

export default SignIn;