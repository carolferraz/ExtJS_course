Ext.define('ModernApp.model.Endereco', {
    extend: 'ModernApp.model.Base',
    idProperty: 'id',
    fields: [{
        name: 'id',
        type: 'int'
    },{
        name: 'cliente_id', // FOREIGN KEY
        type: 'int',
        reference: {
            type: 'Cliente',
            role : 'customer',
            inverse : {
                model : 'ModernApp.model.Endereco',
                role : 'adresses'
            }
        },
        validators: [{
            type: 'presence'
        }]
    },{
        name: 'logradouro',
        type: 'string',
        validators: [{
            type: 'presence'
        }]
    },{
        name: 'numero',
        type: 'int'
    },{
        name: 'bairro',
        type: 'string'
    },{
        name: 'cidade',
        type: 'string'
    },{
        name: 'estado',
        type: 'string'
    }]
});