Ext.define('ModernApp.view.ClienteGrid', {

    extend: 'Ext.grid.Grid',
    alias: 'widget.grid_example',
    title: 'Listagem de Clientes',
    store: {
        type: 'Clientes',
        autoload: true
    },
    controller: 'GridCliente',
    data: [
        { nome: '❤️', sobrenome: '👍', email: 'dadasdasd@gmail.com', sexo: 'F' },
        { nome: 'esd', sobrenome: 'dsa', email: 'dadasdasd@gmail.com', sexo: 'F' },
        { nome: 'dsd', sobrenome: 'dsa', email: 'dadasdasd@gmail.com', sexo: 'F' },
        { nome: 'hg', sobrenome: 'dsad', email: 'dadasdasd@gmail.com', sexo: 'F' }
    ],

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'button',
            text: 'Add Novo',
            iconCls: 'x-fa fa-plus',
            listeners: {
                tap: function (button) {
                    console.log('NELSON')
                },
                single: 'false',
                delay: 3000,
                buffer: 2000
            }
        }, {
            xtype: 'spacer',
            flex: 1,
        }, {
            xtype: 'searchfield',
            placeholder: 'Buscar',
            listeners: {
                keypress: {
                    fn: 'onSearchFieldKeyPress',
                    buffer: 1000
                },
            }
        }]
    }],

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Nome',
        dataIndex: 'nome',
        flex: 1
    }, {
        text: 'Sobrenome',
        dataIndex: 'sobrenome',
        flex: 1
    }, {
        text: 'E-mail',
        dataIndex: 'email',
        flex: 1
    }, {
        text: 'Sexo',
        dataIndex: 'sexo',
        flex: 1
    }],

    listeners: {
        childtaphold: function (grid, location, eOpts) {
            Ext.Msg.alert('title', 'lenson');
        },

        childDoubleTap: function (grid, location, eOpts) {
            var msgBox = Ext.Msg.show({
                title: '<div style="color: #003366;"> &#10084; &nbsp <b>Título</b></div>',
                message: '&#10084 &nbsp&nbsp Nome : <b>' + location.record.get('nome') + '</b>'
                    + '<br>' + '&#10084 &nbsp&nbsp Sobrenome :  <b>' + location.record.get('sobrenome') + '</b>',
                styleHtmlContent: true,
                style: {
                    border: '5px solid #87CEFA'
                },
                buttons: Ext.MessageBox.OKCANCEL,
                buttonToolbar: {
                    style: {
                        background: '#87CEFA'
                    }
                },
                listeners: {
                    show: function (msgBox) {
                        msgBox.down('button[itemId=ok]').element.setStyle('color', '#003366');
                        msgBox.down('button[itemId=cancel]').element.setStyle('color', '#003366');
                    }
                }
            });
        }
    }
});

