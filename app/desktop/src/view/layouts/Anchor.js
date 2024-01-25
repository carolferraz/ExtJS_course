Ext.define('ModernApp.view.layouts.Anchor', {
    extend: 'Ext.Panel',
    alias: 'widget.anchor_layout',
    title: 'Anchor Layout',
    defaults:{
        margin: 10,
        shadow: true,
        border: 1
    },
    items: [{
        xtype: 'panel',
        title: 'Panel 1',
        width: '90%',
        height: '50%'
    },{
        xtype: 'panel',
        title: 'Panel 2',
        width: '75%',
        height: '15%'
    },{
        xtype: 'panel',
        title: 'Panel 3',
        width: '35%',
        height: 100
    }]
})