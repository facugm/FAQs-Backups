
$(document).ready(function() {
  var idPage = $('#idPage').val();
  // Buscar todos los datos de la edicion de la pagina
  $.ajax({
     url: '/page/edit/' + idPage
  }).success(function (json) {
    // inicializo widget de tags
    $("#tags-input").select2({ 
      initSelection : function (element, callback) {
        var data = json.tag;
        callback(data);
    },
      multiple: true,
      tags: true,
      minimumInputLength: 1,
      ajax: {
          url: function (params) {
        return '/searchTags/';
      },
      processResults: function (datta) {
      return {
        results: datta
      };
      }
      }
    });

    // titulo
    $("#input-title").val(json.article_name);

  
  });

});