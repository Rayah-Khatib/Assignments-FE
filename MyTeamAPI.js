const tbody = document.querySelector('.dataTable');
const pageSize=4;
const i=0;

for(key in myTeam){
    const imageSrc=myTeam[key].img;
    const name=myTeam[key].name;
    const employeeId=myTeam[key].id;
    const buttonText = myTeam[key].button;
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.className = "empleyeeName" 
    const image = document.createElement('img');
    image.setAttribute('src',imageSrc);
    const a = document.createElement('a');
    a.innerText=name;
    a.setAttribute('href','#');

    td1.appendChild(image);
    td1.appendChild(a);
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.className="employeeId"
    td2.innerText=employeeId;
    tr.appendChild(td2);

    const td3=document.createElement('td');
    td3.className="topSkills"
    employeeSkills=  myTeam[key].topSkills
    for(key2 in employeeSkills){
        const label =document.createElement('label');
        label.innerText = employeeSkills[key2];
        td3.appendChild(label);
    }

    tr.appendChild(td3);

    const td4 = document.createElement('td');
    const button = document.createElement('input');
    button.innerText = buttonText;
    button.setAttribute('type','button');
    button.setAttribute('value','Assign');
    button.setAttribute('onClick',"window.location.href = 'addAssignment.html'");

    td4.appendChild(button);
    tr.appendChild(td4);

    tbody.appendChild(tr);
}
