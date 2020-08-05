<<<<<<< HEAD
// var dic = [
//     { dickey: 1, value: 'a' },
//     { dickey: 2, value: 'b' },
//     { dickey: 3, value: 'c' },
//     { dickey: 4, value: 'd' }
// ];

// var obj = [
//     { objkey: 1, id: 'haha' },
//     { objkey: 2, id: 'hehe' }
// ];
// // [
// //     { dickey: 1, value: 'a', id: 'haha'},
// //     { dickey: 2, value: 'b', id: 'hehe'},
// //     { dickey: 3, value: 'c', id: '' },
// //     { dickey: 4, value: 'd', id: '' }
// // ]
// function assign(a, b) {
//     let obj = {};
//     for(let item of a){
//         obj[item.dickey] = {value: item.value};
//     }
//     for(let item of b){
//         if (obj[item.objkey]) {
//             obj[item.objkey].id = item.id;
//         } else {
//             obj[item.objkey] = { id: item.id };
//         }
//     }
//     return Object.entries(obj).map(([key, value]) => {
//         return({
//             dickey: key,
//             id: value.id || '',
//             value: value.value
//         });
//     });

// }
// console.log(assign(dic, obj));
// function dictValueToName(value, type) {
//     if (type && type.length > 0) {
//         if (typeof value === 'undefined' || value === null) {
//             return value;
//         }

//         for (const item of type) {
//             if (item.code === value) {
//                 return item.value;
//             }
//         }
//     }
//     // return value
//     return '';
// }
// let a = dictValueToName('123', [{code:'123',value: 123},{code: '234'}]);
// console.log(a);
// function arrIdToName(value, type) {
//     if (type && type.length > 0) {
//         if (
//             typeof value === 'undefined' ||
//       value === null ||
//       typeof value === 'string'
//         ) {
//             return value;
//         }

//         const arrName = [];

//         for (const item of value) {
//             for (let i = 0; i < type.length; i++) {
//                 if (type[i].code === item) {
//                     arrName.push(type[i].value);
//                     break;
//                 }
//             }
//         }

//         return arrName.join('、');
//     }
//     return Array.isArray(value) ? value.join('、') : value;
// }
// console.log(arrIdToName(['a','b'], [{ code: 'a', value: 123 }, { code: 'b', value: 'b' }]));


// function toWorkPostDay(arrDay) {
//     if (!arrDay || typeof arrDay === 'string') return arrDay;

//     const day = [];
//     arrDay.forEach((item) => {
//         switch (item) {
//         case '1':
//             day.push('一');
//             break;
//         case '2':
//             day.push('二');
//             break;
//         case '3':
//             day.push('三');
//             break;
//         case '4':
//             day.push('四');
//             break;
//         case '5':
//             day.push('五');
//             break;
//         case '6':
//             day.push('六');
//             break;
//         case '7':
//             day.push('日');
//             break;
//         default:
//             break;
//         }
//     });
//     return day.join('、');
// }
// console.log(toWorkPostDay(['1', '2', '3', '4', '5', '6', '7']));
// function uniqueArrayObject(arrayObject, key) {
//     if (!Array.isArray(arrayObject)) return arrayObject;

//     const uniqueArrayObject = [];

//     // 获取数组对象中主键,并生成没有重复项的数组
//     let primaryKeys = arrayObject.map(item => {
//         return item[key];
//     });
//     console.log(primaryKeys);
//     primaryKeys = uniqueArr(primaryKeys);

//     // 循环数组对象去掉重复项
//     while (primaryKeys.length > 0) {
//         for (const item of arrayObject) {
//             const primaryKeysIndex = primaryKeys.indexOf(item[key]);
//             if (primaryKeysIndex >= 0) {
//                 uniqueArrayObject.push(item);
//                 primaryKeys.splice(primaryKeysIndex, 1);
//                 break;
//             }
//         }
//     }

//     return uniqueArrayObject;
// }

// function uniqueArr(arr) {
//     return Array.from(new Set(arr));
// }
// let ad = uniqueArrayObject([{ a: 1, b: 2, c: 2 }, { a: 2, b: 1, c: 2 }, { c: 2 }], 'c');
// console.log(ad);
function removeArrayObjectItem(arrayObject, item, key) {
    if (!Array.isArray(arrayObject) || typeof item !== 'object')
        return arrayObject;

    for (let i = 0; i < arrayObject.length; i++) {
        if (arrayObject[i][key] === item[key]) {
            arrayObject.splice(i, 1);
        }
    }
    return arrayObject;
}
let ad = removeArrayObjectItem(
    [{ a: 1, b: 2 }, { a: 2, b: 1 }, { c: 2 }],
    {
        c: 2
    },
    'c'
);
console.log(ad);
=======
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
>>>>>>> one
