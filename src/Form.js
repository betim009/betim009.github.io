import React from 'react';

function Form() {
  return (
    <form>
        <p>Que tal me enviar uma mensagem?</p>
      <div>
        <label htmlFor="name">Me diga seu nome:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Seu E-mail:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Sua Mensagem:</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form
