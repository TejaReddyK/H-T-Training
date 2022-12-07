const employee={

    empid: 2142631,

    name:'Teja',

    department:{

        dept_id:58,

        name:'FSE',

        mgrid:400001

      },

      project:{

        project_id:123,

        title:'abbv',

        startdate: new Date("2000-06-13"),

        duration: "9 months"

      },

    salary:26000,

  }

 

 

  for(i in employee){

    if(i==="project" || i==="department"){

        for(j in employee[i]){

            console.log(`${j}: ${employee[i][j]}`);

        }

    }else{

        console.log(`${i}: ${employee[i]}`);

    }

  }
