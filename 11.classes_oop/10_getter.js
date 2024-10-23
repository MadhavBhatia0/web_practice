class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // using new property
        // this.email= value //error memory exceed beacuse both constructor and setter are setting values 
        // almost like a race between them
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}
// getter and setter are a pair // both must exist simuntaneously
// name must be same as property

const madd = new User("h@maddy.ai", "abc")
console.log(madd.email);
console.log(madd) //User { _email: 'h@maddy.ai', _password: 'abc' }