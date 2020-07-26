console.log("Welcome to Weather Application")

const request = require('request');
const yargs = require('yargs');
//const { describe } = require('yargs');




yargs.command({
    command: 'place',
    describe: 'enter location',
    handler: (argv)=>{
        tempr(argv.location);
        console.log(argv.location);
    }
})

const tempr = (location) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=1272dfb30993207c5002772e5336aba6&units=metric"
    request({url: url, json: true}, (error, response)=>{
    console.log("Hi Find Temperature")
    console.log(response.body.main.temp);
})
}

console.log(yargs.argv)