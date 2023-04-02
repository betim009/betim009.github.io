import React from 'react';

function Form() {
  return (
    <div id="contact"  className='bg-dark'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <h2 className="text-center mb-4">Entre em contato</h2>
                <form action="https://formspree.io/f/xknaqvpw" method="POST">
                  <div className="form-group mb-4">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control mt-2" id="name" name="name" placeholder="Digite seu nome" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control mt-2" id="email" name="_replyto" placeholder="Digite seu e-mail" />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="message">Mensagem</label>
                    <textarea className="form-control mt-2 mb-2" id="message" name="message" rows="5" placeholder="Digite sua mensagem"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-dark border mt-3">Enviar mensagem</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
