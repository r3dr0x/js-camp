import { BaseLogger, MongoLoger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let logger1 = new MongoLoger()//BaseLogegr, ElasticLoger
let userService = new UserService(logger1)


let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla")
userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(1))


let customer = {id:1, firstName:"Engin"}
//prototyping
customer.lastName = "Demiroğ"
//console.log(customer.lastName)