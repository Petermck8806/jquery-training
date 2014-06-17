(function($){

  var defaultSettings = {
    selectedClass: 'selected',
    targetSelector: 'a',
    onSelected: $.noop,
    isDisabled: $.noop
  }

  $.fn.tableSingleSelection = function(){
    this.config = $.extend(true,{},defaults,options);

    var table = this.children('table');

    if(table.length == 0 ) return this;

    //other wise find the element in the table and
    //apply the selected class to the containing row.

    return this;
  };

}(jQuery));
