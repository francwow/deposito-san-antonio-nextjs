"use client";

import { useState } from "react";
import Icon from "./GoogleIcon";

const ContactForm = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const data = { name, message, email };

  function ValidateEmail(input: string) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      setValidEmail(true);
      return true;
    } else {
      setValidEmail(false);
      return false;
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("not ready to send yet");
        setError(false);
        setSuccess(false);

        if (data.name.length === 0) {
          setError(true);
          setNameError(true);
        } else {
          setNameError(false);
        }

        if (data.email.length === 0) {
          setError(true);
          ValidateEmail(data.email);
        } else {
          ValidateEmail(data.email);
        }

        if (data.message.length === 0) {
          setError(true);
          setMessageError(true);
        } else {
          setMessageError(false);
        }

        if (
          data.name.length > 0 &&
          data.message.length > 0 &&
          ValidateEmail(data.email) === true
        ) {
          setError(false);
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          console.log("message sent successfully");
          fetch("/api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
        }
      }}
      className="contact_form"
    >
      <label htmlFor="empresa">Empresa</label>
      <input
        type="text"
        id="empresa"
        name="user_empresa"
        className={nameError ? "error-field" : ""}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Correo</label>
      <input
        type="email"
        id="email"
        name="user_email"
        className={!validEmail ? "error-email" : ""}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!validEmail ? (
        <div style={{ marginTop: "0px" }} className="error-msg-wrapper">
          <div>
            <h4 className="error-msg">
              <div className="error-icon">
                <span>!</span>
              </div>
              Por favor ingresar un correo electrónico válido.
            </h4>
          </div>
        </div>
      ) : null}
      <label htmlFor="asunto">Asunto</label>
      <textarea
        id="asunto"
        name="user_asunto"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      {error ? (
        <div className="error-msg-wrapper">
          <div>
            <h4 className="error-msg">
              <div className="error-icon">
                <span>!</span>
              </div>
              Por favor llenar los espacios con la información requerida.
            </h4>
          </div>
        </div>
      ) : null}

      {success ? (
        <div className="success-msg-wrapper">
          <div>
            <h4 className="success-msg">
              <div className="success-icon">
                <Icon icon="check" />
              </div>
              Mensaje enviado correctamente.
            </h4>
          </div>
        </div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
