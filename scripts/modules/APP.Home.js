/*======================================
App Home Controler
======================================*/
var APP = APP || {};

/**
 * APP's Module Namespace
 * @type {String}
 */

APP.Home = {

    _initialized: false,
    _moduleContainerSelector: "#app-home",

    setUp: function(){
        if(!this._initialized){
        	console.log(this._moduleContainerSelector + ": Started");
            this.bindEvents();
            this._initialized = true;
        }else{
        	alert(this._moduleContainerSelector + ": Already Started");
            console.log(this._moduleContainerSelector + ": Already Started");
        }

        APP.Navigation.refreshPage(this._moduleContainerSelector);
    },

    bindEvents: function(){
    }
}