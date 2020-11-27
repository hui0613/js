## Map 是一种新的集合类型，可以用来存储键值对

> Map 类型的键可以是任意的数据类型

### 基本 API

> 使用 new 关键字创建 Map 实例

`const map = new Map()`

**Map 构造函数可以接受一个可迭代的对象，用于初始化实例**

```js
const map = new Map([('key1': 'val1'), ('key2': 'val2')]);
```

#### map.set() 方法

> 创建 map 实例之后，可以使用 set() 方法添加 键值对

```js
const map = new Map();
map.set(('firstName': 'zhong'));
```

#### map.get()

> 使用 get 方法来获取指定键对应的值

```js
alert(map.get('firstName'));
```

#### map.has()

> 使用 has 方法来判断 map 实例中是否存在指定的键值对,该方法返回一个布尔值

```js
alert(map.has('firstName'));
```

#### map.delete()

> 使用 delete 方法删除指定的键值对（只会删除指定的键值对）

#### map.clear()

> 删除 map 实例中的所有键值对

### 顺序和迭代

在对 Map 实例进行迭代时，迭代的顺序和插入的顺序一致（Map 实例会维护键值对的插入顺序）

Map 实例提供一个迭代器，该迭代器能顺序生成 [key,value] 形式的数组，使用 entries() 方法来获取这个迭代器

**可以使用扩展运算符将 Map 实例转换成数组**

## WeakMap（弱映射）

> WeakMap 中的弱描述的时 JavaScript 垃圾回收机制中对待 WeakMap 中键的方式

### 基本 API

WeakMap 的 API 是 Map API 的子集，具有 set、get、has、delete 方法。

**WeakMap 中的键只能使用对象，使用非对象作为键或抛出错误**

**在进行初始化的过程中，若有一个键无效抛出错误，则会导致整个初始化失败**

#### 弱键

webakmap 中的键不属于正式的引用，不会阻止垃圾回收回收。只要键存在，键值对就会存在，并被当作值的引用，因此就不会被回收。

### 使用弱映射

#### 私有变量
