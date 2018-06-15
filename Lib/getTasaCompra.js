const axios = require('axios')
const cheerio = require('cheerio')

let get = function () {
  return new Promise(function (resolve, reject) {
    axios.get('https://www.banprogrupopromerica.com.ni/umbraco/Surface/TipoCambio/Run?json=%7B%22operacion%22%3A2%7D')
      .then((response) => {
        if (response.status === 200) {
          const html = response.data.value
          const $ = cheerio.load(html)
          const Datos = $('TBODY').children()
          const TipoCambio = Datos.eq(2).children().eq(2).text()
          resolve(TipoCambio)
          // reject(new Error('hhh'))
          return TipoCambio
        }
      }, (error) => {
        reject(error)
        console.log(error)
      })
  })
}

module.exports = {
  get
}
