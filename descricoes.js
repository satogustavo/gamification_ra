//Oi! O quê você está vendo aqui?

//ADA

AFRAME.registerComponent('ada_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('ada_desc', {
    init: function () {
        var el = this.el;
        const desc = "Augusta Ada Byron King, Condessa de Lovelace. \n \
                    Conhecida como Ada Lovelace. \n \
                    * 10/12/1815 - † 27/11/1852, \n \n \
                    Nascida em Byron. \n\n \
                    Reconhecida principalmente por \n \
                    ter escrito o primeiro algoritmo \n \
                    para ser processado por uma máquina. \n \
                    Este quadro tem 45,5cm de altura."
        el.setAttribute('value', desc);
    }
});



//DIRENE
AFRAME.registerComponent('direne_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('direne_desc', {
    init: function () {
        var el = this.el;
        const desc = " Alexandre Ibrahim Direne\n \
                         * 03/12/1960 - † 04/04/2017. \n\n\
                        Foi professor do Departamento de Informática\n \
                        da Universidade Federal do Paraná (UFPR). \n \
                        Este quadro tem 46cm de altura."
        el.setAttribute('value', desc);
    }
});



// Alexandra Asanovna Elbakyan
AFRAME.registerComponent('alexandra_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('alexandra_desc', {
    init: function () {
        var el = this.el;
        const desc = " Alexandra Asanovna Elbakyan \n \
                        * 06/11/1988 -  \n\n \
                        Programadora de computadores e\n \
                        criadora do site Sci-Hub. \n \
                        Este quadro tem 50cm de altura."
        el.setAttribute('value', desc);
    }
});




// Barbara Liskov
AFRAME.registerComponent('barbara_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('barbara_desc', {
    init: function () {
        var el = this.el;
        const desc = " Barbara Liskov \n \
                       Nascida em Califórnia, EUA \n \
                        * 07/11/1939  \n \n \
                       Primeira mulher a conseguir \n \
                       um doutorado em Ciência da Computação \n \
                       nos Estados Unidos \n \
                        Desenvolveu o Liskov Substitution Principle (LSP). \n \
                        Este quadro tem 45cm de altura."
        el.setAttribute('value', desc);
    }
});


//   Margaret Heafield Hamilton
AFRAME.registerComponent('margaret_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('margaret_desc', {
    init: function () {
        var el = this.el;
        const desc = "   Margaret Heafield Hamilton \n \
                        * 17/08/1936  \n \n \
                        Desenvolveu o programa de voo usado \n \
                        no projeto Apollo 11, a primeira \n \
                        missão tripulada à Lua. \n \
                        O software de Hamilton impediu que\n \
                        o pouso na Lua fosse abortado.\n \
                        Este quadro tem 44cm de altura."
        el.setAttribute('value', desc);
    }
});


//   Annie Jean Easley
AFRAME.registerComponent('annie_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2.6; height: 1");
    }
});

AFRAME.registerComponent('annie_desc', {
    init: function () {
        var el = this.el;
        const desc = "Annie Jean Easley \n \
                    * 23/04/1933 - † 25/06/2011 \n \n \
                    Desempenhou diversas profissões ao longo \n \
                    de sua vida, dentre elas farmacêutica, cientista \n\
                    e engenheira da computação e matemática. \n \
                    Uma das primeiras Afro-Americanas que trabalhou na NASA.\n \
                    Atuou como líder da equipe que planejou os foguetes Centauro.\n \
                    Este quadro tem 43cm de altura."
        el.setAttribute('value', desc);
    }
});


//   Grace Murray Hopper
AFRAME.registerComponent('grace_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('grace_desc', {
    init: function () {
        var el = this.el;
        const desc = " Grace Murray Hopper \n \
                        * 9/12/1906 - 01/01/1992 \n\n \
                    Criadora da linguagem de programação \n\
                    de alto nível Flow-Matic - base \n \
                    para a criação do COBOL\n \
                    Este quadro tem 42cm de altura.";
        el.setAttribute('value', desc);
    }
});



//   Alan Mathison Turing   
AFRAME.registerComponent('alan_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('alan_desc', {
    init: function () {
        var el = this.el;
        const desc = "Alan Mathison Turing \n \
                     * 23/06/1912 - † 07/06/1954 \n\n \
                    Formalizou conceitos de algoritmo \n \
                    e computação com a máquina de Turing, \n \
                    que pode ser considerada um modelo de \n \
                    um computador de uso geral\n \
                    Este quadro tem 41cm de altura.";
        el.setAttribute('value', desc);
    }
});




//   Hedy Lamarr
AFRAME.registerComponent('hedy_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('hedy_desc', {
    init: function () {
        var el = this.el;
        const desc = "   Hedy Lamarr \n\
        * 09/11/1914 - † 19/01/2000 \n\n \
        Inventora e atriz. \n \
        \'Mãe do Wi-fi\', \n\
        uma importante contribuinte para\n\
        as tecnologias de informação e comunicação.\n \
        Este quadro tem 40cm de altura.";
        el.setAttribute('value', desc);
    }
});



//   Hedy Lamarr
AFRAME.registerComponent('babbage_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('babbage_desc', {
    init: function () {
        var el = this.el;
        const desc = " Charles Babbage \n\
                    * 26/12/1791 - † 18/10/1871\n\n\ \
                    Originou o conceito de um computador\n\
                    programável junto à Condessa de Lovelace.\n \
                    Este quadro tem 38,5cm de altura.";
        el.setAttribute('value', desc);
    }
});


//   George Boole 
AFRAME.registerComponent('boole_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('boole_desc', {
    init: function () {
        var el = this.el;
        const desc = "   George Boole \n\
        * 02/11/1815 - † 08/12/1864 \n\n \
        Criou a lógica de Boole \n\
        Introduziu os conceitos de lógica simbólica \n\
        e demonstra  que a lógica também poderia \n\
        ser representada por equações algébricas.\n \
        Este quadro tem 37,5cm de altura.";
        el.setAttribute('value', desc);
    }
});



//   Donald Ervin Knuth
AFRAME.registerComponent('knuth_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2.6; height: 1");
    }
});

AFRAME.registerComponent('knuth_desc', {
    init: function () {
        var el = this.el;
        const desc = "Donald Ervin Knuth \n\
        * 10/01/1938 - \n\n\
        Praticamente criou o campo  de Análise de Algoritmos \
        Conhecido pela sua série de livros \n\
        'The Art of Computer Programming'. \n\
        Criador do sistema tipográfico TEX.\n \
        Este quadro tem 36cm de altura.";
        el.setAttribute('value', desc);
    }
});

//   Edsger Wybe dijkstra 
AFRAME.registerComponent('dijkstra_back', {
    init: function () {
        var el = this.el;
        el.setAttribute('geometry', "primitive: plane; width: 2; height: 1");
    }
});

AFRAME.registerComponent('dijkstra_desc', {
    init: function () {
        var el = this.el;
        const desc = "Edsger Wybe Dijkstra \n\
                        * 11/05/1930 — † 06/08/2002 \n\n\
                        Contribuiu nas áreas de desenvolvimento \n\
                        de algoritmos e programas,\n\
                        de linguagens de programação \n\
                        Criou o algoritmo de Dijkstra\n\
                        para busca de caminhos mais curtos\n\
                         em grafos\n \
                         Este quadro tem 34cm de altura.";
        el.setAttribute('value', desc);
    }
});
