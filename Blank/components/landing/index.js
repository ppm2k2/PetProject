'use strict';

app.landing = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('landing');

// START_CUSTOM_CODE_landing
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_landing
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        landingModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

        cancel: function() {}
    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('landingModel', landingModel);
})(app.landing);

// START_CUSTOM_CODE_landingModel

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_landingModel