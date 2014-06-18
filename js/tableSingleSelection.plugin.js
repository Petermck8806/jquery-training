//tableSingleSelection Plugin - pmckinney

//Do nothing if plugin is disabled.
//Do nothing if the row is already selected.
//allow for changing the selectedClass property
//allow for changing the targetSelector property
(function($){

  var defaultSettings = {
    selectedClass: 'selected',
    targetSelector: 'a',
    onSelected: $.noop,
    isDisabled: $.noop
  }

  $.fn.tableSingleSelection = function(options){
    var $t;

    //if we are not a table, find the first child table.
    if(!$(this).is('table')){
      $t = $(this.children('table'));

      if($t.length == 0) return this; //do nothing if a table DNE

      return $t.data("tableSingleSelection",new SingleSelection($t,options));
    }

    return this.each(function() {
      $t = $(this);
      $t.data("tableSingleSelection",new SingleSelection($t,options));
    })
  }

  function SingleSelection($el, options){

    var self = this;

    this.config = $.extend(true,{},defaultSettings,options);

    $el.on("click", self.config.targetSelector, {selectedClass: self.config.selectedClass,
                                                 targetSelector: self.config.targetSelector,
                                                 onSelected: self.config.onSelected,
                                                 isDisabled: self.config.isDisabled}, onSelect);

    return this;
  };

  function onSelect(event){
    if(event.data.isDisabled()) return; //if the plugin is disabled
    if($(this).closest('tr').hasClass('selected')) return; //if the row is already selected...

    var tr = $(this).closest('tr');
    tr.siblings('.' + event.data.selectedClass).removeClass(event.data.selectedClass);

    tr.addClass(event.data.selectedClass);

    //fire selected method once element selected
    event.data.onSelected();
  }

}(jQuery));
