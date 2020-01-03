var dic = [
    { dickey: 1, value: 'a' },
    { dickey: 2, value: 'b' },
    { dickey: 3, value: 'c' },
    { dickey: 4, value: 'd' }
];

var obj = [
    { objkey: 1, id: 'haha' },
    { objkey: 2, id: 'hehe' }
];
// [
//     { dickey: 1, value: 'a', id: 'haha'},
//     { dickey: 2, value: 'b', id: 'hehe'},
//     { dickey: 3, value: 'c', id: '' },
//     { dickey: 4, value: 'd', id: '' }
// ]
function assign(a, b) {
    let obj = {};
    for(let item of a){
        obj[item.dickey] = {value: item.value};
    }
    for(let item of b){
        if (obj[item.objkey]) {
            obj[item.objkey].id = item.id;
        } else {
            obj[item.objkey] = { id: item.id };
        }
    }
    return Object.entries(obj).map(([key, value]) => {
        return({
            dickey: key,
            id: value.id || '',
            value: value.value
        });
    });

}
console.log(assign(dic, obj));
