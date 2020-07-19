const weather = require('./utils/weather')
const location = require('./utils/location')
const place = process.argv[2]
location(place, (err, res)=>{
    if (err){
        console.log(err)
    }
    else{
        weather([res[1], res[0]], (err, data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data.current)
            }
        })
    }
})