Ext.define('ModernApp.classsystem.Cantor', {
    extend: 'ModernApp.classsystem.Pessoa',
    //extend: 'Person',
    mixins: {
        musico: 'ModernApp.classsystem.Musico',
        //É possível adicionar quantas classes quiser e, por consequnte, irá replicar todo os métodos existentes nelas. É possível utilizar como objeto (chave : valor) para identificar exatamente de qual classe é o método chamado, ou como array [] declarando as classes diretamente. 
    },
    name: 'Jaloo',
    city: 'Belém',
    cantar: function () {
        console.log('Cantor está cantando');
    }
})