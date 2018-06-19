const sql = require('mssql')
const config = require('../Config/config')

// Insertar los datos en la base de datos
let InsertTCinDB = function (Valor) {
  return new Promise(function (resolve, reject) {
    sql.connect(config).then(pool => {
      let fecha = new Date()
      return pool.request()
        .input('Valor', sql.Decimal(28, 4), 23)
        .input('Fecha', sql.Date, fecha)
        .execute('fnica.usp_UpdateTipoCambioCompra')
    }).then(result => {
      sql.close()
      resolve()
    }).catch((err) => {
      sql.close()
      reject(err)
    })
  })
}

module.exports = InsertTCinDB
