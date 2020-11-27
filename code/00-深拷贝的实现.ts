function deepClone(source:object | [],map = new WeakMap()) {
import deepClone from './00-深拷贝的实现';
    //不是引用类型时直接返回
    if(typeof source !== 'object'){
        return source
    }
    let target = source instanceof Array?[]:{};

    //  使用 weakmap 来解决循环引用的问题
    if(map.get(source)){
        return source
    }

    map.set(source,target)
    for(let key in source){
        // 不拷贝原型上的属性
        if(source.hasOwnProperty(key)){
            target[key] = deepClone(source[key])
        }   
    }
    return target;
}

function isObject(value){
    return value !== null && (typeof value === 'object' || typeof value === 'function')
}

function cloneFunction(value){
    if(typeof value === 'function'){
        return value
    }
}

function cloneSymbol(value){
    const symbolValuof = Symbol.prototype.valueOf;
    return Object(symbolValuof.call(value))
}

function cloneRegExp(regexp){
    const reFlags = /\w*$/;
    const result = new regexp.constructor(regexp.source,reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}

function cloneMap(target){
    let map = new Map();
    target.forEach((value,key)=>{
        map.set(key,deepClone(value));
    })
    return map
}

function cloneSet(target){
    let set = new Set();
    target.forEach((value,key)=>{
        set.add(deepClone(value));
    })
    return set
 
}

export default deepClone
