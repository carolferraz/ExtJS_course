Ext.define('ModernApp.view.layouts.Center',{
    extend: 'Ext.Panel',
    requires:[
        'Ext.layout.Center'
    ],
    alias: 'widget.center_layout',
    title: 'Exemplo Center layout',
    layout: 'center',
    defaults: {
        border: 1,
        shadow: true,
    },
    items: [{
        xtype: 'panel',
        title: 'Centered Panel',
        width: '50%',
        height: '50%',
        html: 'Some content'
    }, {
        xtype: 'panel',
        title: 'Centered Panel 2',
        width: '50%',
        height: '50%',
        html: '22222 Some content <br> 333333 content'
    }]
})