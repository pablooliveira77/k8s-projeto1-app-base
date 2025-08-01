$("#button-blue").on("click", function() {
    
    var txt_nome = $("#name").val();
    var txt_email = $("#email").val();
    var txt_comentario = $("#comment").val();

    $.ajax({
        url: "http://localhost:8080/",
        
        type: "post",
        data: {nome: txt_nome, comentario: txt_comentario, email: txt_email},
        beforeSend: function() {
        
            console.log("Tentando enviar os dados....");

        }
    }).done(function(response) {
        alert("Dados Salvos: " + response);
    })
    .fail(function(xhr, status, error) {
        alert("Erro ao salvar os dados: " + error + "\n" + xhr.responseText);
    }).always(function() {
        console.log("Requisição finalizada");
    });

});