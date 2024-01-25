Ext.define('ModernApp.view.layouts.Accordion', {
    extend: 'Ext.panel.Accordion',
    alias: 'widget.accordion_layout',
    title: 'Exemplo Accordion layout',
    oppenable: 2,
    defaults: {
        border: 1,
        margin: 10,
        shadow: true,
    },
    items: [{
        xtype: 'panel',
        title: 'Panel 1',
        html: 'Texto 1'
    },
    {
        xtype: 'panel',
        title: 'Panel 2',
        html: 'Texto 2'
    },
    {
        xtype: 'panel',
        title: 'Panel 3',
        html: 'Texto 3'
    }]
})