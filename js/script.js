function getAll(child){
    $.ajax({
        type: "GET",
        url: "http://localhost:55193/AlbumRestService.svc/json/Album",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            console.log(msg)
            const table = document.getElementById("mainTable").getElementsByTagName("tbody")[0]
            let first = table.firstChild
            while (first){
                first.remove()
                first = table.firstChild
            }
            for (let record in msg){
                console.log(record)
                let newRow = table.insertRow()
                let newCell = newRow.insertCell()
                newCell.innerText = msg[record].Id
                newCell = newRow.insertCell()
                newCell.innerText = msg[record].Name
                newCell = newRow.insertCell()
                newCell.innerText = msg[record].Author
                newCell = newRow.insertCell()
                newCell.innerText = msg[record].TrackCount
                newCell = newRow.insertCell()
                newCell.innerHTML = "<button class='btn btn-outline-info'>Details</button>" +
                    "<button class='btn btn-secondary'>Edit</button>"
                newCell.firstChild.onclick = function () {
                    location.href = `/RESTClient/details.html?id=${msg[record].Id}`
                }
                newCell.lastChild.onclick = function () {
                    location.href = `/RESTClient/edit.html?id=${msg[record].Id}`
                }



            }
        },
        error: function(errMsg) {
            alert(errMsg);
        }
    });
}



window.onload = function () {
    getAll();
}