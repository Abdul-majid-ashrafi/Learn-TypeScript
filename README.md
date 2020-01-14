# Introduction of TypeScript

TypeScript is a typed superset of JavaScript, aimed at making the language more scalable and reliable.

It’s open-source and has been maintained by Microsoft since they created it in 2012.

### Installing TypeScript
Before we start coding, we need to install TypeScript on our computer.

You can use npm or yarn for this, open the terminal (press key windows+r) and type the following command:

`npm install -g typescript`

or

`yarn add global typescript`

We can verify it by running the command `tsc -v` which will display the version of the TypeScript installed.


Let’s create our first TypeScript file and write some code inside it. Open up your favourite Text Editor and create a file with the name of `index.ts` — For TypeScript files,
we use the extension`.ts`


For now, we’re just going to write a few lines of code in plain JavaScript

```
let firstName = "Majid";
let lastName = "Ashraf";
let phoneNumber = 123456;

console.log("firstName ", firstName)
console.log("lastName ", lastName)
console.log("phoneNumber ", phoneNumber)
```

The next step is to compile our TypeScript into plain JavaScript, as browsers want .js files to read.

Just open up the terminal at the location of the file and run the following command

`tsc index.ts`

After it you will see the file called `index.js` in same folder with old JavaScript.

 
 ## Data types
TypeScript — as its name suggests — is the typed version of JavaScript.
This means we can specify types to different variables at the time of declaration.
They will always hold the same type of data in that scope.
This also helps in hunting down bugs and errors and properly documenting our code.

The Data types to assign a type to any variable to write the name of the variable followed by a `:` sign, 
and then the name of the type followed by a `=` sign and the value of the variable.

There are three different types in TypeScript: 
* any type
* Built-in types
* User-defined types.

 Let’s have a look at each of them.

### any types:
This data type is the superset of all the data types in TypeScript like this

```let variableName: any = 'This is something'```
### Built-in types:
These are the types which are built in TypeScript
* number
* string
* boolean
* void
* null
* undefined
```
let phoneNumber: number = 0308123456789;  
let fullName: string = 'Majid Ashraf';  
let isDeveloper: boolean = true;



const greeter = (fullName: string): string => {
    return "Hello, " + fullName;
}
let user = `${firstName + ' ' + lastName}`;

console.log(greeter(user));
```
### User-defined types:
The `User-defined` types are:
* enum
* class
* interface
* array
* tuple


#### Object-oriented programming
TypeScript supports all the features of object-oriented programming, such as classes and interfaces.
#### Class
 TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
 In object-oriented programming, a class is the template of objects.
 A class also encapsulates data for the object.


 ```
 class User {
    // properties  
    gentleman: String;
    phoneNumber: Number;
    isDeveloper: Boolean;

    constructor(gentleman: String, phoneNumber: Number, isDeveloper: Boolean) {
        this.gentleman = gentleman;
        this.phoneNumber = phoneNumber;
        this.isDeveloper = isDeveloper;
    }
// function
    displayMake(): void {
        console.log(`My name is ${this.gentleman}`);
    }
}
```

Here we have declared a `User` class, along with some of its `properties` and `function`, `properties` are initializing in the `constructor`. 
We also have a method which would display some message using its property.

Let’s develop how we can create a new instance of User class:
```
const Developer = new User('Majid Ashraf', 9230812345678, true);
Developer.displayMake(); // This User is Developer
```

We create an object of a class, 
we use the keyword called `new` and call the constructor of `User` class and passed it his properties. 
Now this `Developer` object has its own properties of gentleman , phoneNumber , and isDeveloper. The object also can call the method of displayMake, which would have access to the properties of `Developer`.
