var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function getName(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('liu', 'huan');
console.log(getName(user));
