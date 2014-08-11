var APP = APP || {};

APP.Routes = {
	_initialized: false,
  	_routeSearch: null,
  	_moduleName: null,
  	_routeName: [
 		'home',
 		'contact'
  	],

	setUp: function () {
		if(!this._initialized){
			console.log("APP Routes: iniciado");
			this._moduleName = [
		      	APP.Home,
		      	APP.Contact
		    ]
		    this._initialized = true;
		}
	},

  	getModuleByRoute: function(routeSearch){
    	var findId = this.returnRoute(routeSearch);
    	return this._moduleName[findId];
  	},

	returnRoute: function(routeSearch){
		this._routeSearch = routeSearch || this._routeSearch;
		var findId = this._routeName.indexOf(this._routeSearch);
		if (findId != -1) {
			return findId;
		}else{
			return false;
		}
	}
};