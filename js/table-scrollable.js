// SCROLLABLE TABLE FIXED HEADER SELECTION
var $table = $('.table-scrollable');
$table.floatThead({
  scrollContainer: function($table) {
    return $table.closest('.scrollable-table-container');
  }
});
