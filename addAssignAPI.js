const employeeData={"msg":"success",
               "employeeID":"123456789",
               "employeeName":"Raneem Daher",
               "Projects":['Skype','Instagram','Mobileye','Waze','Viber','Doulingo']};

class assignmentData{
       constructor(projectName,startDate,endDate){ 
             this.projectName=projectName;
             this.startDate=startDate;
             this.endDate=endDate;
        }
}

const dataAPI={
    //get data from backend
    getProjects: function(){
        return employeeData.Projects;
    },
    getEmployeeID: function(){
        return employeeData.employeeID;
    },
    getEmployeeName: function(){
        return employeeData.employeeName;
    },
    // get input and store it
    setInputDetails: function(){
        ////////ask Shahar about project input////////
        
        assignmentData.projectName = document.getElementById("selectID").value;
        console.log(document.getElementById("selectID").value);
        assignmentData.startDate = document.getElementById("startDateID").value;
        assignmentData.endDate = document.getElementById("endDateID").value;
    }
}

