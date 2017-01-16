'use strict';

app.signUp = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('signUp');

// START_CUSTOM_CODE_signUp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signUp
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        signUpModel = kendo.observable({
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
            challengeAnswer: '',
            challengeQuestion: '',
            repassword: '',
            password: '',
            phone: '',
            email: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('signUpModel', signUpModel);
})(app.signUp);

// START_CUSTOM_CODE_signUpModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signUpModel