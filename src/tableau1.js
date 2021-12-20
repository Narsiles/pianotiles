class Tableau1 extends Phaser.Scene{


    loadFrames(prefix,url,length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            this.load.image(prefix + i, url + i + '.png')
        }
        return frames;
    }

    /**
     * Précharge les assets
     */
    preload(){
        this.loadFrames('back', 'asset/pngutile/guilde/backguilde/',34);
        this.loadFrames('front', 'asset/pngutile/guilde/frontguilde/front',15);
        this.loadFrames('eca', 'asset/pngutile/eca',2);
        this.loadFrames('elio', 'asset/pngutile/elio',2);
        this.loadFrames('eni', 'asset/pngutile/eni',2);
        this.loadFrames('enutrof', 'asset/pngutile/enutrof',2);
        this.loadFrames('fantome', 'asset/pngutile/fantome',3);
        this.loadFrames('hupper', 'asset/pngutile/hupper',2);
        this.loadFrames('iop', 'asset/pngutile/iop',2);
        this.loadFrames('osa', 'asset/pngutile/osa',2);
        this.loadFrames('ouginak', 'asset/pngutile/ouginak',2);
        this.loadFrames('panda', 'asset/pngutile/panda',2);
        this.loadFrames('roub', 'asset/pngutile/roub',2);
        this.loadFrames('sacrieur', 'asset/pngutile/sacrieur',2);
        this.loadFrames('sadi', 'asset/pngutile/sadi',2);
        this.loadFrames('sram', 'asset/pngutile/sram',2);
        this.loadFrames('steamer', 'asset/pngutile/steamer',2);
        this.loadFrames('xelor', 'asset/pngutile/xelor',2);
        this.loadFrames('zobal', 'asset/pngutile/zobal',2);

        this.load.image('ankamaauth', 'asset/pngutile/ankamaauth.png');
        this.load.image('ankamashield', 'asset/pngutile/ankamashield.png');
        this.load.image('bouftouroyal', 'asset/pngutile/bouftouroyal.png');
        this.load.image('cadeau', 'asset/pngutile/cadeau.png');
        this.load.image('dofusemeraude', 'asset/pngutile/dofusemeraude.png');
        this.load.image('perenoel', 'asset/pngutile/perenoel.png');
        this.load.image('principal', 'asset/pngutile/principal.png');
        this.load.image('tableau', 'asset/pngutile/tableau.png');
        this.load.image('tombe', 'asset/pngutile/tombe.png');
        this.load.image('vendeur', 'asset/pngutile/vendeur.png');
        this.load.image('background', 'asset/Background.png');

        this.load.audio('dofusmusic',['asset/musiquedofus.mp3']);


    }


    /**
     * Crée la scène
     */
    create(){


       /**
         * Crée le background
         */
        this.add.image(864,486,'background')

        this.add.image(864,486,'tombe')
        this.add.image(864,486,'bouftouroyal')
        this.add.image(864,486,'perenoel')
        this.add.image(864,486,'cadeau')
        this.add.image(884,516,'dofusemeraude')
        this.add.image(864,486,'principal')
        this.add.image(864,486,'tableau')
        this.add.image(864,486,'vendeur')

        this.add.image(864,486,'iop1')
        this.add.image(864,486,'iop2')

        this.add.image(864,486,'elio1')
        this.add.image(864,486,'elio2')

        this.add.image(864,486,'osa1')
        this.add.image(864,486,'osa2')

        this.add.image(864,486,'ouginak1')
        this.add.image(864,486,'ouginak2')

        this.add.image(864,486,'panda1')
        this.add.image(864,486,'panda2')

        this.add.image(864,486,'sadi1')
        this.add.image(864,486,'sadi2')

        this.add.image(864,486,'eni1')
        this.add.image(864,486,'eni2')

        this.add.image(864,486,'roub1')
        this.add.image(864,486,'roub2')

        this.add.image(864,486,'steamer1')
        this.add.image(864,486,'steamer2')

        this.add.image(864,486,'enutrof1')
        this.add.image(864,486,'enutrof2')

        this.add.image(864,486,'sram1')
        this.add.image(864,486,'sram2')

        this.add.image(864,486,'sacrieur1')
        this.add.image(864,486,'sacrieur2')

        this.add.image(864,486,'zobal1')
        this.add.image(864,486,'zobal2')

        this.add.image(864,486,'eca1')
        this.add.image(864,486,'eca2')

        this.add.image(864,486,'xelor1')
        this.add.image(864,486,'xelor2')

        this.add.image(864,486,'hupper1')
        this.add.image(864,486,'hupper2')

        this.add.image(864,486,'ankamaauth')
        this.add.image(864,486,'ankamashield')

        //initialise les écoutes de touches pressées et relâchées
        this.initKeyboard();

        /**
         * Liste des lettres
         * @type {string[]}
         */
        this.lettres="azertyuiopqsdfghjklmwxcvbn".split("")
        console.log("liste des touches prises en charge...");
        console.log(this.lettres);


        // pour chaque lettre on va créer un élément graphique
        this.creerClavier();


    }

    creerClavier(){
        //espacement entre les lettres = largeur de la scène / nombre de lettres
        let espacement = (this.game.config.width-2) / this.lettres.length; // -2 c'est pour avour une petite marge d'un pixel
        let x=1;
        for(let lettre of this.lettres){
            let objetGraphique=this.add.text(x,1,lettre,{
                color:"#FFFFFF", //blanc
                align:"center",
                backgroundColor:"#000000", //noir
                fixedWidth:espacement-1  // -1 c'est pour avoir une petite marge d'un pixel entre les lettres
            });
            //position X de la rouche suivante
            x+=espacement;
            //donne un nom à l'élément graphique
            objetGraphique.name=lettre;
        }
    }

    initKeyboard(){
        /**
         *
         * @type {Tableau1}
         */
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            console.log("keydown",kevent.key,kevent)
            for(let lettre of me.lettres){
                if(kevent.key === lettre){
                    /**
                     *
                     * @type {T}
                     */
                    let objetGraphique=me.children.getByName(lettre);
                    objetGraphique.toucheEnfoncee=true;

                }
            }

        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            console.log("keyup",kevent.key,kevent)
            for(let lettre of me.lettres){
                if(kevent.key === lettre){
                    /**
                     * Obtenir la touche à partir de la lettre
                     * @type {Phaser.GameObjects.Text}
                     */
                    let touche=me.children.getByName(lettre);
                    touche.toucheEnfoncee=false;
                    touche.actif=!touche.actif; //alterne un fois ce sera actif, une fois ça le sera plus.
                    //appelle une fonction
                    me.quandToucheRelachee(kevent.key,touche)
                }
            }

        });
    }

    createClasse(){

    }

    quandToucheRelachee(lettre,objetGraphique){


    }


    update(){

    }



}