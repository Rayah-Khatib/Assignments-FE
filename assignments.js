

function initializeAssignments(){
    const item = api.getAssignments();

    const table = document.querySelector('#assignment-history tbody');

    item.forEach(({id, projectName, startDate, endDate, status, requestedBy}) => {
        table.innerHTML += `
            <tr>
                <th scope="row">${id}</th>
                <td>${projectName}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${status}</td>
                <td>${requestedBy}</td>
            </tr>
          `
    })
}

initializeAssignments();