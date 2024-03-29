// Called by getUserPoints
// Using userPointsArray, it creates a table

export default function displayUserPoints(userId, userPointsArray){
    const userPointsTableDiv = document.querySelector('#userPointsTableDiv');

    if(userPointsTableDiv){
        userPointsTableDiv.innerHTML = (`<p> Welcome ${userId} ! </p>`);

        let table = document.createElement('table');
        table.innerHTML = `<tr> <th> ATTEMPT </th> <th> POINTS </th> </tr>`;
        userPointsTableDiv.appendChild(table);

        userPointsArray.forEach((eachpointEntry, index) =>{
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${index}</td><td>${eachpointEntry.points}</td>`;
            table.appendChild(tr);
        });
        userPointsTableDiv.style.cssText=`order:2`;
    }
}