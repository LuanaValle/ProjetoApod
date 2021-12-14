$(
    "#selecionar"
).click (function (){
    let data = $("#data").val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=0W6RBXPTSBew7K94jthFEke7CNh2TcANIzAv7gKf&date=${data}`,
        type: "GET", 
        success: function(resultado){
            $(".paragrafo").text(resultado.explanation),
            $("#imagem").attr("src", resultado.url),
            $(".titulofoto").text(resultado.title)
        }
    })
}
    )