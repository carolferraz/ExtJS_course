Ext.define('ModernApp.view.layouts.Border', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.panel.Collapser'
    ],
    alias: 'widget.border_layout',
    title: 'Exemplo border layout',
    layout: {
        type: 'vbox' //organiza os componentes de forma vertical, com um flex column.
    },
    defaults: {
        border: 1,
        margin: 5,
        shadow: true
    },
    items: [{
        xtype: 'panel',
        docked: 'top', //fixa na região definida
        title: 'Top Panel',
        html: 'Header here'
    },{
        xtype: 'panel',
        docked: 'left',
        title: 'Left Panel',
        width: 250,
        collapsible: {
            animation: false,
            direction: 'left',
            collapsed: true,
        },
    },{
        xtype: 'panel',
        docked: 'left',
        title: 'Left Panel 2',
        width: 250,
        collapsible: true,
    },{
        xtype: 'panel',
        title: 'Center Panel',
        html: 'Bem vindo!',
        flex: 1
    },{
        xtype: 'panel',
        docked: 'bottom', //fixa na região definida
        title: 'Footer Panel',
        html: 'Footer',
        height: 100,
        weight: -200
    },]
})