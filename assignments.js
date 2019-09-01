

function initializeAssignments(){
    const item = api.getAssignments();

    const table = document.querySelector('#assignment-history tbody');
    let i=0;

    item.forEach(({id, projectName, startDate, endDate, status, requestedBy}) => {
        i++;
        table.innerHTML += `
            <tr>
                <th scope="row">${i}</th>
                <td>${id}</td>
                <td>${projectName}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${status}</td>
                <td>${requestedBy}</td>
            </tr>
          `
    })
}

function initializePagination(){
    const item=api.getNumOfPages();
    const pagination = document.querySelector('#assignment-history footer');
    

}

initializeAssignments();