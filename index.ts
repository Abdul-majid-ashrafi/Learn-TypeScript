//With Data Types

let firstName: string = "Majid";
let lastName: string = "Ashraf";
let phoneNumber: number = 123456;

const greeter = (fullName: string): string => {
    return "Hello, " + fullName;
}
let user = `${firstName + ' ' + lastName}`;
console.log(greeter(user));


// sample with class
// class User {
//     // properties  
//     gentleman: String;
//     phoneNumber: Number;
//     isDeveloper: Boolean;

//     constructor(gentleman: String, phoneNumber: Number, isDeveloper: Boolean) {
//         this.gentleman = gentleman;
//         this.phoneNumber = phoneNumber;
//         this.isDeveloper = isDeveloper;
//     }
// // function
//     displayMake(): void {
//         console.log(`My name is ${this.gentleman}`);
//     }
// }

// const Developer = new User('Majid Ashraf', 9230812345678, true);
// Developer.displayMake(); // This User is Developer