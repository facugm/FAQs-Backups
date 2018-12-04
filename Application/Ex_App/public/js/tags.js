 
$(document).ready(function() {
  $("#tags-input").select2({
    minimumInputLength: 1,
    witdh: 'resolve',
    ajax: {
        url: function (params) {
      return '/searchTags/';
    },
    processResults: function (data) {
    return {
      results: data
    };
    }
    }
  });
});