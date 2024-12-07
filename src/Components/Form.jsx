import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.length > 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (!validateName(name) || !validateEmail(email)) {
      setErrors("Por favor verifique su información nuevamente");
    } else {
      setErrors("");
      setSubmitted(true);
      console.log(`Nombre: ${name}, Email: ${email}`);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre completo"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Escribe tu email"
            />
          </div>
          {errors && <p className="errors">{errors}</p>}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>Gracias {formData.name}, te contactaremos cuando antes vía mail.</p>
      )}
    </div>
  );
};

export default Form;