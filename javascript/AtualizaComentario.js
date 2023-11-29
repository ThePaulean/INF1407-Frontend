window.onload = function () {
    document.getElementById('atualiza').addEventListener('click', function (evento) {
      evento.preventDefault();


      var conteudo = document.getElementById("descricao").value;
      var currentcomentariotId = localStorage.getItem("currentcomentariotId");

      // console.log(nome + "_" + descricao + "_" + id_forum);
  
      if (currentcomentariotId) {
        fetch("http://https://conectapucv2-9ee7c697e1e1.herokuapp.com/api/comentarios/update/"+ currentcomentariotId + "/", {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({  // Converter o corpo da requisição em uma string JSON
              "texto": conteudo
        }),
        })
      }
        window.location.href = "listar_postagens.html"
    });
  };
  