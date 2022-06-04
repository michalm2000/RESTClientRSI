function getOne(id) {
    $.ajax({
        type: "GET",
        url: `http://localhost:55193/AlbumRestService.svc/json/Album/${id}`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            document.getElementById("id").innerText = msg.Id
            document.getElementById("name").innerText = msg.Name
            document.getElementById("author").innerText = msg.Author
            document.getElementById("track-count").innerText = msg.TrackCount

        },
        error: function(errMsg) {
            alert(errMsg);
        }
    });
}

function removeAlbum() {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:55193/AlbumRestService.svc/json/Album/${id}`,

        success: function(msg) {
           window.location.replace("/RESTClient/index.html")
        },
        error: function(errMsg) {
            alert(errMsg);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get('id');
window.onload = getOne(id);

