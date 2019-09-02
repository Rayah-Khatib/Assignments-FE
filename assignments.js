

function initializeAssignments(){
    const item = assignHistAPI.getAssignments();

    const table = document.querySelector('#assignment-history tbody');
    let i=0;

    item.forEach(({id, projectName, startDate, endDate, status, requestedBy}) => {
        i++;
        table.innerHTML += `
            <tr>
                <th scope="row" style="text-align:center;">${i}</th>
                <td style="text-align:center;">${id}</td>
                <td style="text-align:center;">${projectName}</td>
                <td style="text-align:center;">${startDate}</td>
                <td style="text-align:center;">${endDate}</td>
                <td style="text-align:center;">${status}</td>
                <td style="text-align:center;">${requestedBy}</td>
            </tr>
          `
    })
}

// function initializePagination(){
//     const item=assignHistAPI.getNumOfPages();
//     const pagination = document.querySelector('#assignment-history footer');
// }

initializeAssignments();