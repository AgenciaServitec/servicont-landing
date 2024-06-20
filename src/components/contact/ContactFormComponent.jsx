import { useState } from "react";
import "./ContactFormComponent.css";

const ContactFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e) {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.ok) {
        setResponseMessage(data.message);
        return;
      }

      window.location.href = "/success";

      setLoading(false);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="form-container" >
      <h3>Contacto</h3>
      <div className="item-wrapper">
          <label htmlFor="name">
              Nombres
              <input type="text" id="name" name="name" autoComplete="name" required />
          </label>{" "}
      </div>
      <br />
      <div className="item-wrapper">
          <label htmlFor="email">
              Email
              <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
              />
          </label>{" "}
      </div>
      <br />
        <div className="item-wrapper">
            <label htmlFor="phoneNumber">
                Teléfono
                <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    required
                />
            </label>
        </div>
        <br/>
        <div className="item-wrapper">
            <label htmlFor="message">
                Mensaje
                <textarea id="message" name="message" autoComplete="off" required/>
            </label>
        </div>
        <button
            className={loading ? "disabled" : ""}
            disabled={loading}
            style={{
                minWidth: "300px",
          padding: "1em",
          border: "none",
          pointerEvents: `${loading ? "none" : ""}`,
          background: `${loading ? "gray" : ""}`,
        }}
      >
        Enviar
      </button>
      {responseMessage && <p style={{color: "red", padding: "1em"}}>{responseMessage}</p>}
    </form>

  );
};


export default ContactFormComponent;
