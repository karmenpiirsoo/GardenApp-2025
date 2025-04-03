import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Rating from '@mui/material/Rating';


export const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [value, setValue] = useState(2);

  const sendEmail = (e) => {
    e.preventDefault();

    if (nameRef.current.value === "") {
        toast.error("Name cannot be empty")
        return
    }

    if (emailRef.current.value === "") {
        toast.error("Email cannot be empty")
        return
    }

    if (messageRef.current.value === "") {
        toast.error("Message cannot be empty")
        return
    }

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
            rating: value
        }


    emailjs
      .send ('service_jdbwaqi', 'template_xzpszoe', data, {
        publicKey: 'nq5-TkXE2nW_I2lRj',
      })
      .then(
        () => {
            toast.success("Sõnum saadetud!")
          console.log('SUCCESS!');
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          // setValue(0);
        },

        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> 
      <br />
      <label>Name</label> <br />
      <input ref={nameRef} type="text" name="user_name" /> <br /><br />
      <label>Email</label><br />
      <input ref={emailRef} type="email" name="user_email" /><br /><br />
      <label>Message</label><br />
      <textarea ref={messageRef} name="message" /><br /><br />
      {/* <input  type="submit" value="Send" /> */}
      <button onClick={sendEmail}>Send</button>
      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}
