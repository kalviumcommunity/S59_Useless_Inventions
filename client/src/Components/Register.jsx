// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Front from './Front';

// function Register() {
 

//   const[data,setData]=useState({
//   });
//   const [alert,setAlert]=useState('');
//   const [registered, setRegistered] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!data.name || data.name.split('').length < 3 || data.name.length > 30) {
//       setAlert('Please enter a name with at least 3 words and at most 30 characters!');
//     } 
    
//     else if (!data.contact || !/^\d{10}$/.test(data.contact)) {
//         setAlert('Please enter a valid 10-digit number!');
//       } 
      
//       else if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
//       setAlert('Please enter your email!');
//     }  
//     else if (!data.password || data.password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(data.password))
    
//     {
//         setAlert('Enter a vaild 10 character password!');
//       } 
      
//       else{
//         setAlert('Registration Successful')
//         setRegistered(true);
//         setTimeout(() => {
//         navigate('/');
//         }, 3000);
//       }
      
//   };

//   return (
//     <div className='registration'>
//     <div className='head'>Register</div>
//     <form onSubmit={handleSubmit} className='data'>
//      <label className='labels'>Name:
//          <input className='enter1' type='text' placeholder='Enter Your Name' name='name' value={data.name} onChange={handleChange}/>
//      </label>
//      <br />
//      <label className='labels'>Contact:
//          <input className='enter2' type='number' placeholder='Enter your contact no.' name='contact' value={data.contact} onChange={handleChange}/>
//      </label>
//      <br />
//      <label className='labels'>Email:
//          <input className='enter3' type='email' placeholder='Enter your mail' name='email' value={data.email} onChange={handleChange}/>
//      </label>
//      <br />
//      <label className='labels'>Password:
//           <input className='enter4' type='password' placeholder='Enter your Password' name='password' value={data.password} onChange={handleChange}/>
//      </label>
//      <br />

//      <button type='submit' className='submitButton'>Register</button>
//     </form>

//    {alert && <div className='alert'>{alert}</div>}
//    {registered && <div className='popup2'>Registered Successfully!</div>}
//   </div>
//   )
// }

// export default Register
