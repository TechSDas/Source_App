sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MBox) {
	"use strict";

	return Controller.extend("sender.Sender_Application.controller.Home", {

		onInit: function () {

		},
		//Save Data to Local Storage
		onSet: function () {

			var name = this.byId("input1").getValue();
			var city = this.byId("input2").getValue();

			var json = {};
			json.name = name;
			json.city = city;

			var myStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);

			myStorage.clear();

			myStorage.put("local", json);
			MBox.success("Local Data saved");

		},

		//Function to Navigate to the other App
		onSend: function () {
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
			// generate the Hash to display a employee Id
			var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
				target: {
					shellHash: "Receiver_Application-display"
				},
			})) || "";
			//Generate a  URL for the second application
			var url = window.location.href.split('#')[0] + hash;
			//Navigate to second app
			sap.m.URLHelper.redirect(url, true);

		}
	});

});