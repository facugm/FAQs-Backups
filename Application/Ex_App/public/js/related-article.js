  
  $(document).ready(function() {
    
    $("#art-rel").select2({
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
});