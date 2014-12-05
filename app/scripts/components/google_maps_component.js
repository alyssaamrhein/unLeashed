Unleashed.GoogleMapsComponent = Ember.Component.extend({
	insertMap: function() {
    	var container = this.$(".map-canvas");

    	var options = {
        	center: new google.maps.LatLng(this.get("latitude"), this.get("longitude")),
      		zoom: 17,
      		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};

    	new google.maps.Map(container[0], options);
  	}.on('didInsertElement'),
  
    coordinatesChanged: function() {
	    var map = this.get('map');

	    if (map) map.setCenter(new google.maps.LatLng(this.get('latitude'), this.get('longitude')));
    }.observes('latitude', 'longitude'),
});
