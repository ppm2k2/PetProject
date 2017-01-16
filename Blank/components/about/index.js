'use strict';

app.about = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('about');

// START_CUSTOM_CODE_about
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_about
(function(parent) {
    var aboutModel = kendo.observable({});

    parent.set('aboutModel', aboutModel);
})(app.about);

// START_CUSTOM_CODE_aboutModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_aboutModel