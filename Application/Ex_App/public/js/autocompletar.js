
$(function() {
    function log( message ) {
      $( "<div>" ).text( message ).prependTo( "#log" );
      $( "#log" ).scrollTop( 0 );

    }
 
    $( "#articles" ).autocomplete({
      source: function(req, res){
        $.getJSON( "/search", req, function( data, status, xhr ) {  
          res(data);
        }); 
      },
      minLength: 1,
      select: function( event, ui ) {
        log( "Selected: " + ui.item.value + " ID " + ui.item.id );
      }
    });
});
/*
$(function() {

  function log( message ) {
    $( "<div>" ).text( message ).prependTo( "#log" );
    $( "#log" ).scrollTop( 0 );
  }

  $( "#articles" ).autocomplete({

    source: function(req, res){

      /*$.getJSON( "/search", req, function( data, status, xhr ) {  

        res(data.slice(0, limit));

      });
      var rta = ["Buscar","Buscar2","Buscar3","Buscar4","Buscar5","Buscar6"];
      res(rta);

    },

    minLength: 3,
    select: function( event, ui ) {
      log( "Selected: " + ui.item.value + " ID " + ui.item.id + " Label: " + ui.item.label);
    }

  });

});
*/