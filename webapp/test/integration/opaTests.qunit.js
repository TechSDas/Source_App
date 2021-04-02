/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sender/Sender_Application/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});