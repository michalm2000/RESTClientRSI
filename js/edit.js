function postAlbum(formData){
    console.log(formData)
    const data = JSON.stringify(formData)
    $.ajax({
        type: "PUT",
        url: `http://localhost:55193/AlbumRestService.svc/json/Album/${id}`,
        data: data,
        success: function(){window.location.replace("/RESTClient/index.html")},
        error: function (e) { console.error("dupcia" + e.stack)

        },
        contentType : "application/json"
    })

}

function handleSubmit(event){
    event.preventDefault()
    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())
    value["Id"] = 10
    postAlbum(value)
}

function getOne(id) {
    $.ajax({
        type: "GET",
        url: `http://localhost:55193/AlbumRestService.svc/json/Album/${id}`,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            document.getElementById("Name").setAttribute('value', msg.Name)
            document.getElementById("Author").setAttribute('value',msg.Author)
            document.getElementById("TrackCount").setAttribute('value', msg.TrackCount)
            console.log(msg)

        },
        error: function(errMsg) {
            alert(errMsg);
        }
    });
}

let id = 0

window.onload = function () {
    document.getElementById("a-form").addEventListener('submit', handleSubmit)
    const urlParams = new URLSearchParams(window.location.search)
    id = urlParams.get('id')
    getOne(urlParams.get('id'));

}


