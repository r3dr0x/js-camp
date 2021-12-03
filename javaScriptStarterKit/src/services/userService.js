import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
  constructor(loggerService) {
    this.employees = [];
    this.customers = [];
    this.errors = []
    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
            if(!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user);
            }
          
          break;
        case "employee":
            if(!this.checkEmployeeValidityForErrors(user)){
                this.employees.push(user);
            }
          
          break;

        default:
            this.errors.push(new DataError("Hatalı Kullanıcı Tipi", user))
          break;
      }
    }
  }

//formik - yup
    checkCustomerValidityForErrors(user) {
            let requiredFields = "id firstName lastName age city".split(" ")
            let hasErrors = false
            for (const field of requiredFields) {
                if(!user[field]){
                    hasErrors = true
                    this.errors.push(new DataError(`Doğrulama Problemi :  ${field} <-- Alanı Gereklidir`, user))
                }
            }

            if(Number.isNaN(Number.parseInt(+user.age))){
                hasErrors = true
                this.errors.push(new DataError(`Doğrulama Problemi :  ${user.age} <-- Alanı Sayı Değildir`, user))
            }

            return hasErrors
    }



    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Doğrulama Problemi :  ${field} <-- Alanı Gereklidir`, user))
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors = true
            this.errors.push(new DataError(`Doğrulama Problemi :  ${user.age} <-- Alanı Sayı Değildir`, user))
        }

        return hasErrors
}




add(user) {
    switch (user.type) {
        case "customer":
            if(!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user);
            }
            break;
        case "employee":
            if(!this.checkEmployeeValidityForErrors(user)){
                this.employees.push(user);
            }
            break;
        default:
            this.errors.push()
                this.errors.push(new DataError("Bu Kullanıcı Eklenemdi. Hatalı Kullanıcı Tipi", user))
            break;
    }
    this.loggerService.log(user)
}

  listCustomers() {
    return this.customers
  }

  getCustomersById(id) {
    return this.customers.find(u=>u.id === id)
  }

  getCustomersSorted(){
    return this.customers.sort((customer1,customer2)=>{
        if(customer1.firstName>customer2.firstName){
            return 1;
        }else if(customer1.firstName===customer2.firstName){
            return 0;
        }else{
            return -1
        }
    })
}

}
