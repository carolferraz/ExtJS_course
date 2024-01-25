Ext.define('ModernApp.view.Employee', {
    mixings: ['Ext.mixin.Observable'],
    config: {
        name: ''
    },

    constructor: function (config) {
        this.mixings.observable.constructor.call(this, config);
        console.log(this.getName());
    }
})