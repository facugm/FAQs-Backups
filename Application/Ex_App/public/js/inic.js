function insert() {
    if (confirm("¿Guardar?")) {
      var data = {title: $('#input-title').val(), art_text: $("#editor").val(), tags: $('#tags-input').select2('data'), related:$('#art-rel').select2('data')};
    console.log("TODO", data);
    }
}