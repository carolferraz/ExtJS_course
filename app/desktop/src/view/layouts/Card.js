Ext.define('ModernApp.view.layouts.Card', {
    extend: 'Ext.Panel',
    alias: 'widget.card_layout',
    title: 'Exemplo Card Layout',
    layout: 'card',
    defaults:{
        margin: 5,
        shadow: true,
    },
    items: [{
        xtype: 'container',
        html: '<h2>Seja bem vindo/a!</h2>'
    }, {
        xtype: 'formpanel',
        layout: 'form',
        title: 'Preencha seus dados:',
        items: [{
            xtype: 'textfield',
            label: 'Nome:',
        }, {
            xtype: 'textfield',
            label: 'Email:'
        }]
    }, {
        xtype: 'container',
        html: '<h2> Parabéns você chegou ao final!</h2>'
    }],
    bbar: {
        items: [{
            xtype: 'button',
            text: 'Anterior',
            handler: function(button) {
                button.up('card_layout')                
            }
        },
        {
            xtype: 'button',
            text: 'Próximo'
        }]
    }
})