import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import './InputForm.css';

const InputForm = () => {
	const [emails, setEmails] = useState([]);
	const [emailItem, setEmailItem] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (emailItem) {
			let newEmailItem = {
				email: emailItem,
				complete: false,
			};
			setEmails([newEmailItem, ...emails]);
			setEmailItem('');
		} else {
			setEmailItem('');
		}
	};

	console.log(localStorage)

	useEffect(() => {
		localStorage.setItem('emails', JSON.stringify(emails));
	}, [emails]);

	return (
         <div className="newsletter_header">
            <div className="newsletter">
               <div className="email_registration">
                  {emails.map((emailItem) => {
                     const { id, email, complete } = emailItem;
                     return (
                        <div key={id} className="email-card">
                           <p className={complete ? 'text-done' : ''}>Thank you for registering to our newsletter using following e-mail: {email}</p>
                        </div>
                     );
                  })}
               </div>
               <h4 className="newsletter_message">
                  Join our newslatter to stay up-to-date with latest games!
               </h4>
               <div className="newsletter_input_container">
                  <form onSubmit={handleSubmit} className="newsletter_input_form">
                     <input
                        className="inputField"
                        type="text"
                        value={emailItem}
                        onChange={(e) => setEmailItem(e.target.value)}
                        placeholder="Type your email here..."
                     />
                     <Button variant="contained" endIcon={<SendIcon />} type="submit" className="btn">
                        Submit
                     </Button>
                  </form>
				   </div>
			   </div>
		   </div>
	);
};

export default InputForm;