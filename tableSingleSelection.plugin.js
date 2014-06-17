(function($){

  var defaultSettings = {
    selectedClass: 'selected',
    targetSelector: 'a',
    onSelected: $.noop,
    isDisabled: $.noop
  }

  $.fn.tableSingleSelection = function(){
    this.config = $.extend(true,{},defaults,options);

    var table = null;

    //if selector is not a table, find inner table
    if(!this.is('table')){
      table = this.children('table');

      //do nothing and return if no table found
      if (table.length == 0) return this;
    }
    //we are a table, use it
    else{
      table = this;
    }

    //add selected class to target if it exists.
    var element = table.children(targetSelector);
    if(element.length > 0){
      element.addClass('selected');
    }

    return this;
  };

}(jQuery));
