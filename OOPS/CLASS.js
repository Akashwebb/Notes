// CLASS is a collection of data member or property and member function or methods 
// IT is a BLUEPRINT or PROTOTYPE from which OBJECT are created
// Use the keyword class to create a class.

// CONSTRUCTOR  ::  Always add a method named constructor():
// It have a same name as that of class
// It is executed automatically when a new object is created
// It is used to initialize object properties
// Three types : parameterized , dafault , copy constructor

// NEW keyword is use to create an Empty Object and store it in Heap Memory
// IT is use to call a class or invoke a class  i.e  it invoke  constructor()

// THIS keyword capture the reference of the object that hold that method
// It refer to an object that is executing current piece of code

// class first {
//      constructor(a,b){
//         this.name=a;
//         this.age=b
//         this.func1 = function(email){     //function inside constructor
//          this.email=email;
//         }
//      }

//      func(p){                             //function in class
//       this.password=p;
//       console.log("password is:")
//      }
        
// }

// let obj=new first("akash",22,"ak@ad")     // always equal to parameter present in constructor
// // console.log(obj.name)                 // akash
// // console.log(obj.a)                   //undefine  


// obj.func1("em@123")                 // set argument value for function
// console.log(obj.email)             //   call the variable , not function   //em@123 

//  obj.func("aa")
//console.log(obj.func("p"))  // password will display as undefine (DATA-ABSTRACTION)
 //console.log(obj.password)    // ( p )  OBJECT of that Class can call password

// console.log(obj)                                  //     first {
//                                                //    name: 'akash',
//                                                //    age: 22,
//                                                //    func1: [Function (anonymous)],
//                                                //    email: 'em@123',
//                                                //    password: 'p'
//                                                //  }

//--------------------------------------------------------------------------------------------------------

//     ABSTRACTION : Process of hiding the implementation details
//                    DATA ABSTRACTION HAVE   ABSTRACT CLASS   AND   INTERFACE
//     ENCAPSULATION  : Process of hiding the properties
//                      use  getter  and  setter  method 

// class xyz{
//     #pri                               //PRIVATE PROPERTIES MUST BE DECLARE IN CLASS WITH  '#'
//     constructor(a,b,c){
//         this.num=a;                       //NOT private properties
//         this.age=b;
//         this.#pri=c                      // pri is PRIVATE property coz it have "#"
//     }
//     #method1(){                           //  "#" is use to make a method PRIVATE
//         for(let i=0;i<this.num;i++){      // Using "num" property in method1() using 'this' operator
//             console.log("I am private")
//         }
//     }
//     method2(){
//         this.#method1()                  // Calling PRIVATE method1()  in   method2()
//         for(let i=0;i<2;i++){
//             console.log(i)
//         }
//     }
//     method3(){
//         // this.#method1()   // calling private method
//         // this.method2()    // calling normal method
        
//         console.log(this.age)
//         console.log(this.#pri)                // Calling PRIVATE property "pri" 
//         for(let i=10;i<this.age;i++){  
//             console.log(i)
//         }
//     }
// }
// let obj=new xyz(2,13,20)
// obj.method1()              // CANNOT be ACCESS coz this method is private
//obj.method2()               // this will give output of method1() alse but we donno implementation or code of method1()
// console.log(obj.age)       // (o/p - 13)
 //console.log(obj.pri)         // (undefine)  COZ its private property
//obj.method3()


// Abstract class  ::

// abstract class demo {
//     int no_of_wheels;
//     public abstract void start();                // abstract method do not have a body

// } 
    
//  class car extends demo{                         //if regular class extend abstract class , 
//      public void start() {                       //regular class have to define abstract method of abstract class
//          System.out.println("start by key");
//      }
//  }


// Interface :: 

// interface I1{
// 	public static final int a =10;                 // variable will be public static final type only
//      void show() ;                              // by default method are always abstract i.e NO BODY METHOD
     
//      static void put() {                      // use static keyword to have body in interface
    	
//     	 System.out.println("method body in interface achieve by default or static keyword");
//      }
// }
// class Test implements I1,I2
// 	{                                              // A extend both I1 and I2
// 		public void show() {                       // must have body of method as it extend I1 
// 			System.out.println("extends both I1 ans I2");
// 		}
// 	   public void display() {                     // body of display method as it extends I2
// 		   System.out.println("interface achieve multiple inheritance");
// 	   }
// 	}
//----------------------------------------------------------------------------------------------------------
 
// Encapsulation :

// class aaa{
//    #name                    //declare private property inside class
//    constructor(a){
//     this.#name=a
//    }
//    getName(){              // method()  to access private properties 
//     return this.#name
//    }
//    setName(p){             // method()  to update the private properties
//      this.#name=p
//      }
// }
// let obj=new aaa("akash")
// console.log(obj.getName())      //  o/p  akash
// obj.setName("vikash")
// console.log(obj.getName())      //  i/p  vikash

//-------------------------------------------------------------------------------------------------------

// Inheritance

// class A{
//     constructor(n,a,m){
//         this.name=n;
//         this.age=a;
//         this.money=m;
//     }
//     method1(){
//         console.log("i am parent")
//     }
// }
// class B extends A{
//     constructor(n,a,e){         // did not extend money ,  so obj2 cannot access money property of parent
//** */        super(n,a)
//         //this.name="vikash"    //upadate a name from akash to vikash(most priority)
//         this.email=e
//     }
// }
// let obj1=new A("ram",33,80)
// let obj2=new B("akash",24,"zz@aa")

// console.log(obj2)             //  B { name: 'akash', age: 24, money: undefined, email: 'zz@aa' }
// console.log(obj1)            //  A { name: 'ram', age: 33, money: 80 }
// console.log(obj2.money)      //  undefine
// obj2.method1()               //  call parent method  from child class

//-----------------------------------------------------------------------------------------------------

// Polymorphism is one of the core concepts of object-oriented programming language. 
// Polymorphism means the same function with different signatures is called many times.

// class A {
//     area(x, y) {
//         console.log(x * y);
//     }
// }
// class B extends A {
//     area(a, b,c) {
//         console.log(a+b+c);
//     }
// }
// let obj1 = new A();
// let output = obj1.area(10, 20);

// let obj2=new B();
// obj2.area(10,20,30)


// POLYMORPHISM HAVE OVERLOADING   AND   OVERRIDING
//ability of a message to be displayed in more then one form

//OVERLOADING -- Compile time polymorphism  OR  Static polymorphism
//ACHIEVE BY -- Same CLASS  ,  Same METHOD NAME ,  Different argument(no.of agr , type of argument)

//OVERRRIDING -> Run time polymorphism   OR   Dynamic polymorphism
// ACHIEVE BY -- same METHOD NAME , same ARGUMENT ,  different CLASS
