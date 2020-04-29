# 每周总结可以写在这里
# JavaScript对象
- 对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。
- 对象有状态：对象具有状态，同一对象可能处于不同状态之下。
- 对象具有行为：即对象的状态，可能因为它的行为产生变迁。

1. 一般而言，各种语言的对象唯一标识性都是用内存地址来体现的， 对象具有唯一标识的内存地址，所以具有唯一的标识。

2.  在 JavaScript 中，将状态和行为统一抽象为“属性”

***对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力***

# 我们可以使用内置函数 Object.getOwnPropertyDescripter 来查看JavaScript 对象的两类属性（数据属性和访问器属性）
1. writable：决定属性能否被赋值。
2. enumerable：决定 for in 能否枚举该属性。
3. configurable：决定该属性能否被删除或者改变特征值。

- 如果我们要想改变属性的特征，或者定义访问器属性，我们可以使用 Object.defineProperty

- 在创建对象时，也可以使用 get 和 set 关键字来创建访问器属性

- 所以在使用`o.a`的时候其实就是在调用a的get方法
- 访问器属性跟数据属性不同，每次访问属性都会执行 getter 或者 setter 函数。这里我们的 getter 函数返回了 1，所以 o.a 每次都得到 1。

# 语句(简单语句和复合语句)

- 简单语句

1. ExpressionStatement ( a = 1 + 2 )
2. EmptyStatement ( ; )
3. DebuggerStatement ( debugger )
4. ThrowStatement ( throw )
5. ContinueStatement ( continue )
6. BreakStatement ( break )
7. ReturnStatement ( return )

- 复合语句(由简单语句复合而来)

1. BlockStatement ( {...somecode} )
2. IfStatement ( if(){...somecode} )
3. IterationStatement
4. VariableStatement

# JS 标准里面没法实现的一些特性

```javascript 
Bound Function Exotic Objects
    [[Call]] [[Construct]]

Array Exotic Objects
    [[DefineOwnProperty]] ArrayCreate(length[,proto]) ArraySpeciesCreate(originalArray,length) ArraySetLength(A,Desc)

String Exotic Objects
    [[GetOwnProperty]] [[DefineOwnProperty]] [[OwnPropertyKeys]] StringCreate(value,prototype) StringGetOwnProperty(S,P)

Arguments Exotic Objects
    [[GetOwnProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[Delete]] CreateUnmappedArgumentsObject(argumentsList) CreateMappedArgumentsObject(func,formals,argumentsList,env)

Integer-Indexed Exotic Objects
    [[GetOwnProperty]] [[HasProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[OwnPropertyKeys]] IntegerIndexedObjectCreate(prototype,internalSlotsList) IntegerIndexedElementGet(O,index) IntegerIndexedElementSet(O,index,value)

Module Namespace Exotic Objects
    [[SetPrototypeOf]] [[IsExtensible]] [[PreventExtensions]] [[GetOwnProperty]] [[DefineOwnProperty]] [[HasProperty]] [[Get]] [[Set]] [[Delete]] [[OwnPropertyKeys]] ModuleNamespaceCreate(module,exports)

Immutable Prototype Exotic Objects
    [[SetPrototypeOf]] SetImmutablePrototype
```