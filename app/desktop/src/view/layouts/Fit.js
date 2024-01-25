Ext.define('ModernApp.view.layouts.Fit',{
    extend: 'Ext.Panel',
    alias: 'widget.fit_layout',
    title: 'Exemplo Fit layout',
    layout: 'fit',
    defaults: {
        border: 1,
        margin: 10,
        shadow: true,
    },
    items: [{
        xtype: 'panel',
        title: 'Panel 1'
    }]
})