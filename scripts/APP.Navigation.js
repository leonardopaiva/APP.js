/**
 * APP Navigation Controler
 * Author: Leonardo Paiva
 *
 */

var APP  = APP || {};

APP.Navigation = {
	_mainNavSelector: ".nav-main",
	_activeModule: null, //store the active module
	_homeModule: "",	//set the first module to call setUp, sample: "contact"

	setUp: function() {
		this.startActiveModule();
		this.bindEvents();
	},

	bindEvents: function() {
		var that = this;

		if ("onhashchange" in window) {
			window.addEventListener("hashchange", function(){
				that.hashChangeHandler.apply(that, arguments);
			}, false);
		}else{
			alert('The browser doesnt supports the hashchange event!');
		}

	},

	hashChangeHandler: function(){
		this.startActiveModule();
	},

	/**
	 * show module page
	 * @param  {String} module selector
	 * @return void
 	*/
	refreshPage: function(moduleContainerSelector){

		var activeContainer = document.querySelector(".app-main.active");
		var newActiveContainer = document.querySelector(moduleContainerSelector);

		if(activeContainer.id == moduleContainerSelector){
			//here you should close the menu if necesary, something like APP.Navigation.close('menu');
		}else{
			this.showPage(activeContainer, newActiveContainer);
		}
	},

	/**
	 * change module page
	 * @param  {object} active page
	 * @param  {object} new active page
	 * @return void
 	*/
	showPage: function(activeContainer, newActiveContainer){
		activeContainer.classList.remove("active");
		newActiveContainer.classList.add("active");
	},


	/**
	 * will set active module, then call its setUp
	 * @return void
 	*/
	startActiveModule: function(){
		this.setActiveModule();
		var module = APP.Routes.getModuleByRoute(this._activeModule);
		if(!APP.Functions.empty(module)){
			if(module.hasOwnProperty('setUp') && typeof module.setUp == "function") {
				module.setUp();
			}
		}
	},

	/**
	 * based on hash will set the active module, if no hash, will set _homeModule as active
	 * @return void
 	*/
	setActiveModule: function(){
		var hash = window.location.hash;
		var indice = APP.Functions.strPos(hash,"-") + 1;
		var length = hash.length;
		if(indice !== false ){
			this._activeModule = hash.substr(indice,length);
			if(APP.Functions.empty(this._activeModule)){
				this._activeModule = this._homeModule;
			}
		}
	}

};