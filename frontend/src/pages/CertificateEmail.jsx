import React from 'react'

export default function Certificateemail() {
    const onClickHandler= (e) => {
        e.preventDefault();
        const config ={
            Username: "canadiancommerce@yopmail.com",
            Password: "FB43BC97E8619FBCFBB07E766BB274313E14",
            Host: "smtp.elasticemail.com",
            port: 2525,
            To : 'them@website.com',
            From : "canadiancommerce@yopmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
            }
           if(window.Email) {
            window.Email.send(config)
           }
    }
  return (
    <div>Certificateemail</div>
  )
}
