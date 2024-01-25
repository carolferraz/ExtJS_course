
// Ext.define() cria a classe
Ext.define('ModernApp.classsystem.Pessoa', {
    alternateClassName: 'Person',


    //Ao usar o config para os atributos, o framework gera autometicamente métodos get set apply e update para cada um dos parâmetros definidos no objeto 'config'.
    //Para isso funcionar corretamente é necessário definir o initConfig no construtor.
    config: {
        name: 'Carol',
        city: 'Porto Alegre',
        age: 0,

    },
    constructor: function(config){
        this.initConfig(config);
    },
    //Ao chamar o método getCity ele automaticamente chama o método applyCity. Ele é basicamente um set que é realizado sob determinada condição.
    applyCity: function(newValue, oldValue){
       //Só altera a cidade se for maior de 18 anos.
       if(this.getAge() >= 18) {
        return newValue;
       } return 'Cidade Natal';
    },
    //Após realizar o apply se ainda houver necessidade de verificar algo e alterar essa realização é feita no update.
    updateCity: function(newValue)
    {
        this.jaMudouDeCidade = true;
    },

    conversar: function(){
        console.log('Conversando...');
    }
});

//Ext.create() instancia a classe. Sendo o primeiro parâmetro o nome da classe, o segundo os atributos da classe e o terceiro uma função callback, que é opcional.
