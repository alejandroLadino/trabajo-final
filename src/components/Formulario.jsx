import React from 'react';

const Formulario = () => {
    return (
        <div className="formulario"> 
         <p className="titleSeccion">Contacto</p> 
         <div id="after_submit"></div>
         <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
            <div className="row">
                <label className="required" htmlFor="name">Su Nombre:</label><br />
                <input id="name" className="input" name="name" type="text" value="" size="30" /><br />
                <span id="name_validation" className="error_message"></span>
            </div>
            <div className="row">
                <label className="required" htmlFor="email">Su email:</label><br />
                <input id="email" className="input" name="email" type="text" value="" size="30" /><br />
                <span id="email_validation" className="error_message"></span>
            </div>
            <div className="row">
                <label className="required" htmlFor="message">Mensaje:</label><br />
                <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
                <span id="message_validation" className="error_message"></span>
            </div>
            <input id="submit_button" type="submit" value="Send email" />
         </form>
        </div>
    );
};

export default Formulario;