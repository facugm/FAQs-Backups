function insert() {
    if (confirm("¿Guardar?")) {

      var art_rel=$('#art-rel').select2('data');

     var art_rel= art_rel.map(item => {
       return {id: item.id, text: item.text};

       
     });

     var tags= $('#tags-input').select2('data');

     var tags= tags.map(item => {
      return {id: item.id, text: item.text};
    });



      var inf = {title: $('#input-title').val(), art_text: $("#editor").val(), tags: tags, related: art_rel};
      //var inf = JSON.stringify(inf);
   
    $.ajax({
    type: "GET",
    url: "/save",
    dataType: 'json',
    data: inf
    });
    }
}