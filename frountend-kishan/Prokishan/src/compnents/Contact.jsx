import React from "react";
import "./Contact.css";
import Swal from 'sweetalert2'

const Contact = () => {
   
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9bace9cb-b9d0-48da-b30d-64d4e85d4ce2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
  title: "Success!",
  text: "Message sent successfully!",
  icon: "success"
});
    }
  };


    return (
        <section className="Contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="feild" placeholder="Enter your name" name="name" required />
                </div>
                 <div className="input-box">
                    <label>Add Email</label>
                    <input type="email" className="feild" placeholder="Enter your email" name="email" required />
                </div>
                 <div className="input-box">
                    <label>Your message</label>
                    <textarea name="message" id="" className="feildmsg" placeholder="Enter your message" required></textarea>
                    <button type="submit">Send message</button>
                </div>
            </form>
        </section>

    )
}

export default Contact