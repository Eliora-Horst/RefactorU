//credit to Darin Dimitrov's insiteful answer on Stack Overflow
//http://stackoverflow.com/questions/6003060/cycle-through-divs

$('a').click(function() {
    var visibleBox = $('.container .boxes:visible');
    visibleBox.hide();
    var nextToShow = $(visibleBox).next('.boxes:hidden');
    if (nextToShow.length > 0) {
        nextToShow.show();
    } else {
        $('.container .boxes:hidden:first').show();
    }
    return false;
});