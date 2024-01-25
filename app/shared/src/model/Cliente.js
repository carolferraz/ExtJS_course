Ext.define('ModernApp.model.Cliente', {
    extend: 'ModernApp.model.Base',
    requires: [
        'Ext.data.validator.Inclusion',
        'Ext.data.validator.Exclusion',
        'Ext.data.validator.Length',
        'Ext.data.validator.Presence'
        // 'Ext.data.proxy.Rest',
        // 'Ext.data.proxy.Ajax',
        // 'Ext.data.proxy.LocalStorage'
    ],
    idProperty: 'id',

    // proxy: {
    //     type: 'localstorage',
    //     id : 'clienteLocalStorage'
    // },
    
    fields: [{
        name: 'nome',
        type: 'string'
    }, {
        name: 'sobrenome',
        type: 'string'
    }, {
        name: 'nome completo',
        type: 'string',
        convert: function (value, record) {
            return record.get('nome') + record.get('sobrenome');
        }
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'data nasicmento',
        type: 'date'
    }, {
        name: 'ativo',
        type: 'boolean',
        defaultValue: true
    }, {
        name: 'idade',
        type: 'integer'
    }, {
        name: 'peso',
        type: 'float'
    }, {
        name: 'sexo',
        type: 'string',
        validators: [{
            type: 'presence'
        }, {
            type: 'inclusion',
            list: ['M', 'F']
        }]
    }],

    validators: {
        nome: [{
            type: 'presence',
        }, {
            type: 'length',
            min: 3,
            max: 50
        }, {
            type: 'exclusion',
            list: ['jose', 'maria']
        }],
        email: 'email'
    }

});