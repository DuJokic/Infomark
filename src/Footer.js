import React from 'react';
import InputForm from './InputForm';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <h2>NEWSLETTER</h2>
        <InputForm />
        <p className="footer_copyright">Copyright 2022 © INFOMARK GOLD j.d.o.o.</p>
    </div>
  )
}

export default Footer