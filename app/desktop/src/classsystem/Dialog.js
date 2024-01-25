Ext.define('ModernApp.classsystem.Dialog', {
    alternateClassName: 'Dialog',
    extend: 'Ext.Dialog',

    //requires define as classes que precisam ser carregadas ao gerar o componente. 
    requires:[
        'Ext.field.Text',
        'Ext.field.Date',
        'Ext.Button',
        'Ext.field.Radio',
        'Ext.field.Select',
        'Ext.field.Toggle',
        'Ext.field.Checkbox',
        'Ext.field.DatePicker',
    ],
    //uses traz as classes que serão usadas em métodos definidos no componente. Nesse caso 'Person' é chamada na function metodoDoComponente.
    uses: [
        'Person'
    ],
    title: 'Formulário de contato',
    closable: 'true',
    width: 400,
    height: 500,

    items: [{
        xtype: 'textfield',
        label: 'Nome:'
    },{
        xtype: 'datefield',
        label: 'Data de nascimento:'
    },
    {
        xtype: 'togglefield',
        label: 'Toggle',
    },{
        xtype: 'radiofield',
        label: 'Radio',
        name: 'Opção 1'
    },{
        xtype: 'checkboxfield',
        label: 'checkbox',
        name: 'Opção 1'
    },{
        xtype: 'datepickerfield',
        label: 'Data:'
    },{
        xtype: 'selectfield',
        label: 'Selecione',
        options: [{
            text: 'First Option',
            value: 'first'
        }, {
                text: 'Second Option',
                value: 'second'
        }]
    },{
        xtype: 'button',
        text: 'Ok'
    }],
    metodoDoComponente: function(){
        var teste = new Person();
    }
})