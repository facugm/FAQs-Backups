$('input#menu1').keyup( function() {
    if( this.value.length < 4 ) return;
    
    $('#output').val(this.value); 
 });