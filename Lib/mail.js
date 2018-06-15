const nodemailer = require('nodemailer')
const destinatarios = require('./Config/ListaCorreo')

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jespinoza@formunica.com',
    pass: 'manu1981*'
  }
})

let mailOptions = {
  from: '"🚨Vigilante Virtual🚨" <jespinoza@formunica.com>',
  to: destinatarios.join(','),
  subject: '📣 🔥 🆘 No se actualizó el tipo de cambio de compra 😭 🔥',
  text: `
  
  ┈╱▔▔▔▔▔▔╲┈╭━━━╮  ______                     
  ▕┈╭━╮╭━╮┈▏┃BOO…┃|  ____|                    
  ▕┈┃╭╯╰╮┃┈▏╰┳━━╯ | |__   _ __ _ __ ___  _ __ 
  ▕┈╰╯╭╮╰╯┈▏┈┃    |  __| | '__| '__/ _ \\| '__|
  ▕┈┈┈┃┃┈┈┈▏━╯    | |____| |  | | | (_) | |   
  ▕┈┈┈╰╯┈┈┈▏      |______|_|  |_|  \\___/|_| 
  ▕╱╲╱╲╱╲╱╲▏
  
  
  * El tipo de cambio no pudo ser actualizado
  
  Por favor ingrese el tipo de cambio Compra de la pagina oficial de 
  Banpro en Solftland ERP y comente la anomalía al departamento de IT 
  de Formunica.
  
  
  
                            ¯\\_(ツ)_/¯
  
                            GRACIAS.!`,
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      .content {
        margin: 0 auto;
        width: 80%;
        text-align: center;
      }
      div.avatar {
        margin: 0 auto;
        background-image: url('https://drive.google.com/uc?export=view&id=1e_0tVx85l15LpIGnE82b5o6YKM3zB6ii');
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 0%;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background-size: 100% auto;
        
      }
  
      div.separador {
        border-width:0px 0px 3px 0px;
        border-style:solid;
        border-bottom-color:deepskyblue;
        height: 20px;
        width: 30%;
        margin: 0 auto;
      }
  
      ul {
        display: inline-block;
        text-align: left
      }
  
  
    </style>
  </head>
  <body>
      <div class="avatar" >
        <!-- <img id="image" src="https://drive.google.com/uc?export=view&id=1e_0tVx85l15LpIGnE82b5o6YKM3zB6ii" alt="Formunica_Min" border="0"> -->
      </div>     
  
      <div class="separador"></div>
      <div class="content">
        <h1>Errores</h1>
        <ul>
          <li>El tipo de cambio de compra no pudo ser actualizado.</li>
          
        </ul>
        <p>Por favor, ingrese el tipo de cambio Compra de la pagina oficial de Banpro en Solftland ERP y comente la anomalía al departamento de IT de Formunica.</p>
      </div>
  </body>
  </html>
  `
}

let sendMail = function () {
  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve('OK')
      }
    })
  })
}

module.exports = {
  sendMail
}
