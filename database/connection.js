const {Sequelize,DataTypes} =  require("sequelize")


const sequelize = new Sequelize("postgresql://postgres.jjhvqsbpgkjvbtrsdrvk:iloveyouashmitasaroj@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo" +err)
})

const db  = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize

// db.books =  require("./models/book.model")(sequelize,DataTypes)




// migrate code ho yo chai hai 
// sequelize.sync({alter : true}).then(()=>{
//     console.log("Migrate vayo hai tw 🚀")
// })

module.exports = db




