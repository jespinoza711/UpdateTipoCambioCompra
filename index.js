'use stric'
const tc = require('./Lib/getTasaCompra')
const insertSQL = require('./Lib/Insertsql')
const mail = require('./Lib/mail')
const schedule = require('node-schedule')
const chalk = require('chalk')

const rule = new schedule.RecurrenceRule()
rule.hour = 10
rule.minute = 1

// schedule.scheduleJob(rule, function () {
<<<<<<< HEAD
tc.get()
  .then((res) => {
    return insertSQL(res)
  }).then()
  .catch(handleError)
=======
  tc.get()
    .then((res) => {
      return insertSQL(res)
    }).then()
    .catch(handleError)
>>>>>>> f9cf3d5091d5473949ec9dc49196a921c0bc6785
// })

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

console.log(chalk.green(`🚀 Ejecuantado Aplicacion `))
