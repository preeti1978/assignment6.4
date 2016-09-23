/*Create  a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n ap p .j s file , write a  Ja v aSc rip t  p rogr am th at   stores 5 di ffere nt  
E mp loyee obj ec ts in  a n  arr ay.  Usin g for  in  l oop  disp lay  the  name,   age,  sal ary , c it y, 
state  a nd  p in c o de for  all emp loyees i n c ons ole
*/

var EmployeeArray = [];  //defining an array
var i;
for (i=1; i<=5; i++){
//accepting user input values
	var name = prompt("Enter the name of Employee #"+i);
	var age = prompt("Enter the age of Employee #"+i);
	var salary = prompt("Enter the salary of Employee #"+i);
	var city = prompt("Enter the city of Employee #"+i);
	var state = prompt("Enter the state of Employee #"+i);
	var pincode = prompt("Enter the pincode of Employee #"+i);

	var Employee = {}; //create an Employee object;
	Employee.name = name;//assign the user input variables to each property of the Employee object
	Employee.age = age;
	Employee.salary = salary;
	Employee.city = city;
	Employee.state = state;
	Employee.pincode = pincode;

EmployeeArray.push(Employee); //pushing the object to the array. This is executed 5 times for each Employee object

}

//writing each object to console
for (i=0; i<5; i++){
	var j= parseInt(i)+1; //The Array index starts from 0 but we want to print SlNos starting from 1..5. So adding 1 to i for printing purpose only
	console.log("Printing Employee #"+j+"'s details");
	console.log("name = "+EmployeeArray[i].name);
	console.log("age = "+EmployeeArray[i].age);
	console.log("salary ="+EmployeeArray[i].salary);
	console.log("city="+EmployeeArray[i].city);
	console.log("state = "+EmployeeArray[i].state);
	console.log("pincode = "+EmployeeArray[i].pincode);
	
}

