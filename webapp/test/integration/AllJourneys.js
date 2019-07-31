/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/pae/holafiori1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/pae/holafiori1/test/integration/pages/Home",
	"com/pae/holafiori1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.pae.holafiori1.view.",
		autoWait: true
	});
});