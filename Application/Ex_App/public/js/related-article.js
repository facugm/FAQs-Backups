  
  $(document).ready(function() {
    
    $("#art-rel").select2({
    minimumInputLength: 3,
    ajax: {
        url: function (params) {
      return '/searchR/';
    },
    processResults: function (data) {
    return {
      results: data
    };
  }
  }
    });
});