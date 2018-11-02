
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
    minLength: 3,
    select: function( event, ui ) {
      log( "Selected: " + ui.item.value + " ID " + ui.item.id );
      location.href = "/article/" + ui.item.id;
    }
  });
});
