import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'
import Modal from 'react-modal';

const ErrorModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Error Modal"
    >
      <div className="pop"><h2>User Already Exists</h2>
      <p>Sorry, the email you entered is already registered.</p>
      <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [respText, setResp] = useState(null)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data)
    registerUser(data)
  }

  useEffect(() => {
    console.log(respText)
  }
    , [respText])

  const registerUser = async (data) => {
    try {
      // http://localhost:8088/api/register
      // https://s59-useless-inventions-1.onrender.com/api/register
      const response = await fetch("http://localhost:8088/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
             FirstName: data.FirstName,
             LastName: data.LastName,
             Email: data.Email,
             password: data.password })

      })

      if (response.status === 409) { 
        setIsErrorModalOpen(true); 
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to register user");
      }
      const responseText = await response.json()
      setResp(responseText)
    }
    catch (err) {
      console.log(err)
    }
  }
  
  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-group">
        <label className="label">First Name</label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            {...register("FirstName", {
              required: "Please enter the name",
              minLength: { value: 3, message: "Name should be of minimum 3 characters." },
              maxLength: { value: 30, message: "Name should be not more than 30 characters long" }
            })}
          />
          <label className="label">Last Name</label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            {...register("LastName", {required: "Please enter the name",
              minLength: { value: 3, message: "Name should be of minimum 3 characters." },
              maxLength: { value: 30, message: "Name should be not more than 30 characters long" }
            })}
          />
          <label className="label">E-mail</label>
          <input type="email" placeholder="Enter Email"
            {...register("Email", { required: "Please enter the Email", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" } })}/>
          
            <label className="label">Password</label>
          <input type="password" placeholder="Set up a password"
            {...register("password", {required: "Please enter the password",
              minLength: {value: 10,message: "The password should be at least 10 characters long",
              }
            })}
          />
          
          <div ><input type="checkbox" />
            <label>I agree to the <span>Terms and conditions</span></label></div>
        </div>
        <div >
          <button>I already have an account</button>
          <button type="submit">
            Create Account
          </button>
        </div>
      </form>

      <ErrorModal isOpen={isErrorModalOpen} closeModal={closeErrorModal} />

      {errors && Object.keys(errors).length > 0 && (
        <div className="error-popup">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error.message}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default SignUp
