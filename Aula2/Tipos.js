//quaando calcular calculos com , pode diferenciar os algarismos depois da virgula dizendo que por exemplo 0,1 e 0,1 são iguais quando são 0,01 e 0,11
//quando quiser concatenar uma variável usar Crase `

    //declaração de strings
    const  nome = 'Ana';
    const sobrenome = 'silva';
    const idade = 19;

    //concatenação 
    const nomecompleto = nome + ' ' + sobrenome;
    //ana silva 

    //começar e fechar com cráse
    const apresentação = `olá , me chamo ${nomecompleto} e tenho ${idade} anos. `;
    console.log(apresentação);