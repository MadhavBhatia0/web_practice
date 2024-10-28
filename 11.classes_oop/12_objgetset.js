const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){ // user k hisab se yeh ik property hai method nhi
        this._email = value
    }
}

const tea = Object.create(User) // factory fn.//by default null. Kis object k basis pe object banau?
console.log(tea.email);

// _ means almost means private value
// but we are using getter and setter // toh uska koi meaning nhu bacha