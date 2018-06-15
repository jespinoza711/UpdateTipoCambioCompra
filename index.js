'use stric'
const tc = require('./Lib/getTasaCompra')
const insertSQL = require('./Lib/Insertsql')
const mail = require('./Lib/mail')
const schedule = require('node-schedule')
const chalk = require('chalk')

const rule = new schedule.RecurrenceRule()
rule.second = 40

schedule.scheduleJob(rule, function () {
  // Obtener el tipo de cambio
  tc.get()
    .then((res) => {
      return insertSQL(res)
    })
    .catch(handleError)
})

function handleError (err) {
  console.log(chalk.red(`
  [1] Han ocurrido los siguientes errores: `) +
   chalk.blue(`
   =========================================================
  `) +
  chalk.bold.white.bgRed(`Name:`) + ` [${err.name} 


  ` +
   chalk.bold.white.bgRed(`Mensaje:`) + ` [${err.message} 


  ` + chalk.bold.white.bgRed(`Stack:`) + `${err.stack} 
  ` +
  chalk.blue(`=========================================================`)
  )
  mail.sendMail().then()
}

console.log(chalk.green(`🚀 Ejecuantado Aplicacion`))
