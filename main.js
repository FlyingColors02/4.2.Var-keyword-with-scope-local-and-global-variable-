//VARIABLES
// keywords: let, var, and const

//1.var keyword with scope(local and global variable)

//IMPORTANT: var is a global variable(by default) even if declared within scope

//case 1
var intValue0= 0; //global variable
console.log(intValue0); //0

//since their is only one scope here that is global therefore it is global variable.

////////////////////////////////////////////////////////////////////////////////////////////


//case 2
var intValue1 = 1;    //global variable(since variable is defined out of the scope)
{
  console.log(intValue1); //1
}
//scope: the functional bracket(i.e;{}) is scope
//global variable can be access outside as well as inside the scope.

///////////////////////////////////////////////////////////////////////////////////////////////////


{
  console.log(intValue2); //case 3: undefined (no error ie; it gives undefined output but will process with further code)
  var intValue2= 2;      //local variable
  console.log(intValue2);//2  
  }

  //Note: In let keyword accessing variable before defining is not possible.whereas in var we undefined value.
//////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(intValue3); //case 4 :undefined (no error ie; further code is exectuted)
{
console.log(intValue3); //undefined (no error)
var intValue3= 3;      //local variable
console.log(intValue3);//3  (within the scope accessing the variable)
}


/*note:before declaring variable we a undefined value as output and not any error like let keyword.
 */ 

////////////////////////////////////////////////////////////////////////////////////////////////////

{
    console.log(intValue4);     //undefined (no error)
    var intValue4= 4;            // local variable(since defined within the scope)
    console.log(intValue4);     //4
}
console.log(intValue4);         //case 5: error- undefined



//since var is global variable we can access it globally even if declared within scope.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let intValue5;   //declared
{
  
  console.log(intValue5); //undefined(no error)
  intValue5=5; //defined
  console.log(intValue5);  //5
}
console.log(intValue5); //5

//'intValue5' is global variable since declared outside scope

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


var intValue6;   //declared
{
  intValue6=6.1; //defined
  console.log(intValue6); //6.1
}
intValue6=6.2;
console.log(intValue6); //6.1 (no error because their is already defined value for intValue6(global variable))



////////////////////////////////////////////////////////

 var intValue7= 7;  //global variable(since defined outside scope)
 {
   //console.log(intValue7);  //cannot access before initialization
   var intValue7 = 7.3;         //local variable(defined within scope)
   console.log(intValue7); //7.3
 }
 console.log(intValue7); //7.3  (in let we "7" output as there is local and global level concept but var is by default global)


 //here both the variable are having same name(bad practice) 
