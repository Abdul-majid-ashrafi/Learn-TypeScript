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

After it you will see the file called index.js in same folder with old JavaScript.

 
