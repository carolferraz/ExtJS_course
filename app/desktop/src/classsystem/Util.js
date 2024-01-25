Ext.define('ModernApp.classsystem.Util', {
    alternateClassName: 'Util',
    singleton: true,
    alertaSucesso: function () {
        Ext.Msg.alert('Sucesso', 'Operação realizada com sucesso!');
    },
    log: function (msg) {
        console.log(msg);
    }
})