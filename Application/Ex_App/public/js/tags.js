
<<<<<<< HEAD
$(document).ready(function () {
  var idPage = $('#idPage').val();
  // Buscar todos los datos de la edicion de la pagina
  $.ajax({
    url: '/page/edit/' + idPage
  }).success(function (json) {
    // inicializo widget de tags
    $("#tags-input").select2({
      initSelection: function (element, callback) {
        var data = json.tag;
        callback(data);
      },
=======
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
>>>>>>> 06796aab7daf6a44bae456c43be991cc9ae924b1
      multiple: true,
      tags: true,
      minimumInputLength: 1,
      ajax: {
<<<<<<< HEAD
        url: '/searchTags/',
        processResults: function (datta) {
          return {
            results: datta
          };
        }
=======
          url: function (params) {
        return '/searchTags/';
      },
      processResults: function (datta) {
      return {
        results: datta
      };
      }
>>>>>>> 06796aab7daf6a44bae456c43be991cc9ae924b1
      }
    });

    // titulo
    $("#input-title").val(json.article_name);

<<<<<<< HEAD
=======
  
>>>>>>> 06796aab7daf6a44bae456c43be991cc9ae924b1
  });

});