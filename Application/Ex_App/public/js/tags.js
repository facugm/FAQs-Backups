 
$(document).ready(function() {
  $("#tags").select2({
    minimumInputLength: 1,
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