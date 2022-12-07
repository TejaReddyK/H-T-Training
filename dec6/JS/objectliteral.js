const employee ={
    employeeId:2142631,
    name:"Teja",
    department:{
        id:111,
        name:"Full stack",
        managerId:123
    },
    salary:26000,
    dateOfJoining:new Date("2019-03-25"),
    getNumberOfServiceYears:function(){
        return (2022-this.dateOfJoining.getFullYear());
    }


}


console.log(employee);


console.log(employee.employeeId);
console.log(employee.name);
console.log(employee.department.id);
console.log(employee.department.name);
console.log(employee.salary);
console.log(employee.dateOfJoining);
console.log(employee.getNumberOfServiceYears());


const employees=[
    {id:1,name:"Teja",age:22},
    {id:2,name:"satya",age:22},
    {id:3,name:"sai",age:22}
];


for(let i=0;i<employees.length;i++){
    console.log(employees[i]);
}

