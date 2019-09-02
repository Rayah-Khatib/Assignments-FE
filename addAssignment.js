function initializeProjects(){
    const projects = dataAPI.getProjects();

    var dynamicSelect = document.getElementById("selectID");
    var newOption = document.createElement("option");
    newOption.text = "Choose Project";
    newOption.value="Choose Project";

    dynamicSelect.add(newOption);
        projects.forEach(function(item){ 
                var newOption = document.createElement("option");
                newOption.text = item.toString();
                newOption.value=item.toString();

                dynamicSelect.add(newOption);

                //new select items should populated immediately
        });
}

function initializeEmpDetails(){
    const employeeName=dataAPI.getEmployeeName();
    const employeeID=dataAPI.getEmployeeID();
    document.getElementById("empNameShow").innerHTML=employeeName;
    document.getElementById("empIdShow").innerHTML=employeeID;
}

initializeProjects();
initializeEmpDetails();






