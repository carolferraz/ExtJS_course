Ext.define('ModernApp.view.layouts.Absolute', {
    extend: 'Ext.Panel',
    alias: 'widget.absolute_layout',
    title: 'Absolute Layout',
    defaults:{
        margin: 10,
        shadow: true,
        border: 1,
        height: 100,
    },
    items: [{
        xtype: 'panel',
        title: 'Panel 1',
        width: '50%',
        left: 100,
        top: 100
    },{
        xtype: 'panel',
        title: 'Panel 2',
        width: '75%',
        left: 150,
        top: 260
    },{
        xtype: 'panel',
        title: 'Panel 3',
        width: '35%',
        right: 300,
        bottom: 300
    }]
})