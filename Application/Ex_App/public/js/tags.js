
$(document).ready(function () {
  var idPage = $('#idPage').val();
  // Buscar todos los datos de la edicion de la pagina
  $.ajax({
    url: '/page/edit/' + idPage
  }).success(function (json) {
    $("#tags-input").select2({
      data: json.tag,
      multiple: true,
      tags: true,
      minimumInputLength: 1,
      ajax: {
        url: '/searchTags/',
        processResults: function (datta) {
          return {
            results: datta
          };
        }
      }
    });

    $("#art-rel").select2({
      data: json.related,
      minimumInputLength: 3,
      ajax: {
        url: function (params) {
          return '/searchRelated/';
        },
        processResults: function (data) {
          return {
            results: data
          };
        }
      }
    });

    $("#input-title").val(json.article_name);

    load(json.article_text);
  });
});

//para traer los datos del texto:
//    var data = $("#editor").val();