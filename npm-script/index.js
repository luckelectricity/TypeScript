function getName(name) {
    if(name){
        return 'Hello ' + name;
    }
    return 'name is undefined';
}
let name = 'liuhuan';
console.log(getName(name),123);

module.exports = { getName };
