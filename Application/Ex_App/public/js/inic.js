function insert(edited) {
  if (confirm("¿Guardar?")) {

    var art_rel_data = $('#art-rel').select2('data');
    var art_rel = art_rel_data.map(item => {
      return {
        id: item.id,
        text: item.text
      };
    });

    var tags_data = $('#tags-input').select2('data');
    var tags = tags_data.map(item => {
      return {
        id: item.id,
        text: item.text
      };
    });

    var idPage = $('#idPage').val();
    var pgTitl = $('#input-title').val();
    var inf = {
      id: idPage,
      title: pgTitl,
      art_text: edited,
      tags: tags,
      related: art_rel
    };
    //var inf = JSON.stringify(inf);
    $.ajax({
      type: "POST",
      url: "/save",
      dataType: 'json',
      data: inf
    }).then(back());
  }
}

function back() {
  var idPage = $('#idPage').val();
  location.href = "/article/" + idPage;
}
