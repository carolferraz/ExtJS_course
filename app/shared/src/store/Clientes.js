Ext.define('ModernApp.store.Clientes', {
    extend: 'Ext.data.Store',
    alias: 'store.Clientes',
    model: 'ModernApp.model.Cliente',
    pagesize: 100
});