
import deepClone from '../00-深拷贝的实现';
const obj = {
  a: 1,
  person: {
    name: 'zs',
    age: 22,
    sayName() {
      console.log(this.name);
    },
  },
  obj:null
};

obj.obj = obj

const target = deepClone(obj);
console.log(target);
