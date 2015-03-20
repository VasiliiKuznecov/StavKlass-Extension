var StavKlassObject = function(successFunction, rejectFunction) {
	
	this.__successFunction = successFunction || function() {};
	this.__rejectFunction = rejectFunction || function() {};
	this.__rootNode = undefined;
	
	StavKlassObject.prototype.createNodes = function() {
		var container = $('<div>')
								.addClass('stavklass-container')
								.click(function(e) {
									e.stopPropagation();
									});
		var searchField = $('<input type="text">')
							.attr('id', 'stavklass-searchfield')
							.addClass('stavklass-searchfield')
							.attr('placeholder', '����� �����))))))');
		var searchButton = $('<button>')
							.attr('id', 'stavklass-searchbutton')
							.addClass('stavklass-searchbutton')
							.html('�����)))');
		container.append(searchField, searchButton);
		var opacityScreen = $('<div>')
								.addClass('stavklass-opacity')
								.append(container);
		this.__rootNode = $('<div>')
							.attr('id', 'stavklassobject')
							.addClass('stavklass-root')
							.append(opacityScreen)
							.click(function() {this.__rejectFunction()}.bind(this));
	};
	
	StavKlassObject.prototype.getRootNode = function() {
		return this.__rootNode;
	};

};