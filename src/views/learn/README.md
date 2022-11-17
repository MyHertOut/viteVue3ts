## TS
一、TypeScript是JacaScript类型的超集，它可以编译成纯JavaScript。
二、TS最主要的用途
    1.约束类型
    2.TS最后要编译成JS 
三、数据类型
    3.1 字符串类型
    let str: strimg = '12'
    3.2 数值类型
    let num: number = 234
    3.3 布尔类型
    let bool: boolean = ture
    3.4 可以接受任何类型 :any
    3.5 :undefinde
    3.6 :null
    3.7 数组
        a> :number[] // 数组的每一个成员都是number类型
        b> :(string|number|boolean)[] // 数组里面可能有某些类型
        c> :Array<number> // 数组每一个成员是number类型（范式）
        d> 元组的形式：规定每一位成员类型
           let arr:[string,string,number] = ['a','b', 10]
    3.8 void：代表没有返回值
        fun(a:number, b:number):boid {
            let c = a + b
        }
        fun(1, 2)
    3.9 object
四、函数的约束
    4.1 普通写法
        fun(a:number, b:number) :number {
            let c = a + b
            return c
        }
        fun(1, 2)
    5.2 函数的可选参数 ?缺省
        fun(a:number, b?:number) :void {

        }
        fun(1)
    5.3 函数参数的默认值
        fun(a:number, b:number=111) :void {
        }
        fun(1)
    5.4 变量或者常量来声明函数的写法
        let fun:(a:number,b:number)=>number =(a:neuber, b:number): number => {
            return a+b
        }
        fun(1, 2)

六、类和抽象类
    6.1 写法
        class Person {
            public userName:string
            public userAge:number
            constructor(name:string,age:number) {
                this.userName = name;
                this.userAge = age;
            }
            run():number{
                return this.userAge
            }
            run2():void{}
            run3():strimg{
                return this.userName
            }
        }
        let p = new Person('ye', 26);
    6.2 修饰符
    public  公开的，在任何地方都可以访问
    protected 受保护的，只能在当前类和当前类的子类内部使用
    private 私有的，当前类的内部使用

    抽象类：abstract
    * 注意抽象类不可以new
    * 如果有类继承抽象类，必须在类中要实现抽象类中的方法
    写法：
    abstract class {
        abstract connection():void;
    }
    使用场景：例如封装一个链接数据库的约束类，这个类不实现具体功能，但是需要链接每一款数据库和其中的函数操作

    abstract class Db{
        abstract connection():void;
        abstract auth():void;
    }
    class mySql extends Db{
        connection(){
        }
        auth(){
        }
    }
    new mySql();

七、implements和interface继承
    7.1 implements使用
    写法
        interface IObj1{
            userName:string;
            run():void;
        }
        class Person implements IObj1 {
            userName: string;
            run(){

            }
        }
    主要interface对于类的约束，比如上面代码，必须有userName和run

    当然也可以联合约束

    interface IObj1{
        userName:string;
        run():void;
    }

    interface IObj2{
        age:number;
    }

    class Person implements IObj1,IObj2 {
        userName: string;
        age: number;
        run(){

        }
    }
    7.2 interface继承
    interface IObj1{
        userName:string;
        run():void;
    }

    interface IObj2 extends IObj1{
        age:number;
    }

    class Person implements IObj2 {
        userName: string;
        age: number;
        run(){

        }
    }
八、泛型基本使用
什么是泛型：是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。  