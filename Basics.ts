// Inter types
// defining SVGUnitTypes
// interface
// types
// Unoin/Optional
// functions
// Named Types
// Functions overloading
// generics
// enums/ as const
// Keyof/typeof
// Utility Types
// any/unknown/never/void
//   ___________________________________________________________________
   
// infer types (implicity types)

let username="jaseena";
let age =22
// age="twenty three" (error/Type 'string' is not assignable to type 'number')


// Defining types (explicit types)

let Name:string = "jaseena"
let ageis:number = 22
let ispass:boolean = true
let skills:string[] = ["js","HTML","CSS"]
let count:number[] =  [3,6,8,9]
let empty:[] = []
let userDetails :{Name:string;age:number;skills:string[]} = {
    
    Name:"jaseena",
    age:22,
    skills:["js","HTML","CSS"]
}

// Interface (direct object)

 interface Details{
    Name : string;
    age : number;
    getName: ()=>void

}
 let userdetails : Details= {
    Name :"jaseena",
    age:23,
    getName(){
        console.log(this.Name)
    }
 }
//  Type   (type attribute can directly assign values)

type details = {
    name:string
    age:number
    getName: ()=>void
}
  let Userdetails : details= {
    name :"jaseena",
    age:23,
    getName(){
        console.log(this.name)
    }  
  }

//   Union
let studentName:string ="Rumaisha";
let ageof:number |string =22
ageof="twentytwo"
let studentskills:(string|number)[] =["js","HTML",5,9]

// optional
type detail = {
    name:string
    age:number
    getName?: ()=>void  //optional
}
  let Userdetail : detail= {
    name :"jaseena",
    age:23,
    // getName(){
    //     console.log(this.name)        
    // }  
  }

//   function
function getuserName(Userdetail:detail):string{
    return Userdetail.name
}
getuserName(Userdetail)

// void 
function getuserage(Userdetail:detail):void{        //void  is used for when there is no any return value
    console.log(Userdetail.age)
}
getuserName(Userdetail)

// Named type
type statusType = "Pending"|"complete"|"failed";
let currentStatus : statusType ="Pending"
const response = "complete";

    if(response === "complete"){
      currentStatus="complete"

    }

    // function overloading
    function  add(num1:number|string,num2:number|string){
        if( typeof num1==="string"||typeof num2==="string"){
            return num1 + ""+ num2
        }
        return num1+num2
    }
    add(6,9)   //15
    add("6","9")  //69