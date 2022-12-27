function SwapCase( str ) {
    var swap = '';
    for ( var i = 0; i < str.length; i++ ) {
      if ( str[i] == str[i].toUpperCase() )
        swap += str[i].toLowerCase();
      else
        swap += str[i].toUpperCase();
    }  
    return swap;
}
console.log(SwapCase('The quick brown Fox'));