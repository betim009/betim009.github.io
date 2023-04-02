import React from 'react';

function Form() {
  return (
    <div className='bg-dark'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <h2 className="text-center mb-4">Entre em contato</h2>
                <form action="https://formspree.io/f/xknaqvpw" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Digite seu nome" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" id="email" name="_replyto" placeholder="Digite seu e-mail" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea className="form-control" id="message" name="message" rows="5" placeholder="Digite sua mensagem"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">Enviar mensagem</button>
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
