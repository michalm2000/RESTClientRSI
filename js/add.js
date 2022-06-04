function postAlbum(formData){
    console.log(formData)
    const data = JSON.stringify(formData)
    $.ajax({
        type: "POST",
        url: "http://localhost:55193/AlbumRestService.svc/json/Album",
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

window.onload = function () {
    document.getElementById("a-form").addEventListener('submit', handleSubmit)

}