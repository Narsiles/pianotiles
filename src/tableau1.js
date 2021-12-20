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

        // met en place le Background et Ankama authentificathor
        this.background = this.add.image(864, 486, 'background')
        this.ankamaauth = this.add.image(864, 486, 'ankamaauth')
        this.bt=this.sound.add('dofusmusic',{ loop: true });
        this.bt.play()
        this.bt.volume=0.2

    }

    /**
     * Crée le décor
     */
    creerPaysage(){




            /**
             * Crée le background
             */


            this.tombe = this.add.image(864, 486, 'tombe')
            this.bouftouroyal = this.add.image(864, 486, 'bouftouroyal').setAlpha(0)
            this.perenoel = this.add.image(864, 486, 'perenoel').setAlpha(0)
            this.cadeau = this.add.image(864, 486, 'cadeau').setAlpha(0)
            this.dofusemeraude = this.add.image(884, 516, 'dofusemeraude').setAlpha(0)
            this.principal = this.add.image(864, 486, 'principal').setAlpha(0)
            this.tableau = this.add.image(864, 486, 'tableau')
            this.vendeur = this.add.image(864, 486, 'vendeur').setAlpha(0)

            this.iop = this.add.image(864, 486, 'iop1').setAlpha(0)
            this.iop1 = this.add.image(864, 486, 'iop2').setAlpha(0)

            this.elio = this.add.image(864, 486, 'elio1').setAlpha(0)
            this.elio1 = this.add.image(864, 486, 'elio2').setAlpha(0)

            this.osa = this.add.image(864, 486, 'osa1').setAlpha(0)
            this.osa1 = this.add.image(864, 486, 'osa2').setAlpha(0)

            this.ouginak = this.add.image(864, 486, 'ouginak1').setAlpha(0)
            this.ouginak1 = this.add.image(864, 486, 'ouginak2').setAlpha(0)

            this.panda = this.add.image(864, 486, 'panda1').setAlpha(0)
            this.panda1 = this.add.image(864, 486, 'panda2').setAlpha(0)

            this.sadi = this.add.image(864, 486, 'sadi1').setAlpha(0)
            this.sadi1 = this.add.image(864, 486, 'sadi2').setAlpha(0)

            this.eni = this.add.image(864, 486, 'eni1').setAlpha(0)
            this.eni1 = this.add.image(864, 486, 'eni2').setAlpha(0)

            this.roub = this.add.image(864, 486, 'roub1').setAlpha(0)
            this.roub1 = this.add.image(864, 486, 'roub2').setAlpha(0)

            this.steamer = this.add.image(864, 486, 'steamer1').setAlpha(0)
            this.steamer1 = this.add.image(864, 486, 'steamer2').setAlpha(0)

            this.enutrof = this.add.image(864, 486, 'enutrof1').setAlpha(0)
            this.enutrof1 = this.add.image(864, 486, 'enutrof2').setAlpha(0)

            this.sram = this.add.image(864, 486, 'sram1').setAlpha(0)
            this.sram1 = this.add.image(864, 486, 'sram2').setAlpha(0)

            this.sacrieur = this.add.image(864, 486, 'sacrieur1').setAlpha(0)
            this.sacrieur1 = this.add.image(864, 486, 'sacrieur2').setAlpha(0)

            this.zobal = this.add.image(864, 486, 'zobal1').setAlpha(0)
            this.zobal1 = this.add.image(864, 486, 'zobal2').setAlpha(0)

            this.eca = this.add.image(864, 486, 'eca1').setAlpha(0)
            this.eca1 = this.add.image(864, 486, 'eca2').setAlpha(0)

            this.xelor = this.add.image(864, 486, 'xelor1').setAlpha(0)
            this.xelor1 = this.add.image(864, 486, 'xelor2').setAlpha(0)

            this.hupper = this.add.image(864, 486, 'hupper1').setAlpha(0)
            this.hupper1 = this.add.image(864, 486, 'hupper2').setAlpha(0)


            this.ankamashield = this.add.image(864, 486, 'ankamashield').setAlpha(0)

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

    initKeyboard() {


        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {

                case Phaser.Input.Keyboard.KeyCodes.A:
                    if (me.ankamaauth.alpha === 1) {
                        me.ankamaauth.setAlpha(0)
                        me.creerPaysage();
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Z:
                    if (me.principal.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.principal.setAlpha(1)
                    }
                    else {
                        me.principal.setAlpha(0)
                    }

                    break;

                case Phaser.Input.Keyboard.KeyCodes.E:
                    if (me.dofusemeraude.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.dofusemeraude.setAlpha(1)

                    }
                    else {
                        me.dofusemeraude.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.R:
                    if (me.perenoel.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.perenoel.setAlpha(1)

                    }
                    else {
                        me.perenoel.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.T:
                    if (me.cadeau.alpha === 0 && me.perenoel.alpha === 1 && me.ankamashield.alpha === 0) {
                        me.cadeau.setAlpha(1)

                    }
                    else {
                        me.cadeau.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.bouftouroyal.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.bouftouroyal.setAlpha(1)

                    }
                    else {
                        me.bouftouroyal.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.vendeur.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.vendeur.setAlpha(1)

                    }
                    else {
                        me.vendeur.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.iop.alpha === 0 && me.iop1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.iop.setAlpha(1)
                        me.iop1.setAlpha(1)

                    }
                    else {
                        me.iop.setAlpha(0)
                        me.iop1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.elio.alpha === 0 && me.elio1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.elio.setAlpha(1)
                        me.elio1.setAlpha(1)

                    }
                    else {
                        me.elio.setAlpha(0)
                        me.elio1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.P:
                    if (me.osa.alpha === 0 && me.osa1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.osa.setAlpha(1)
                        me.osa1.setAlpha(1)

                    }
                    else {
                        me.osa.setAlpha(0)
                        me.osa1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    if (me.ouginak1.alpha === 0 && me.ouginak.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.ouginak.setAlpha(1)
                        me.ouginak1.setAlpha(1)

                    }
                    else {
                        me.ouginak.setAlpha(0)
                        me.ouginak1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.S:
                    if (me.panda.alpha === 0 && me.panda1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.panda.setAlpha(1)
                        me.panda1.setAlpha(1)

                    }
                    else {
                        me.panda.setAlpha(0)
                        me.panda1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                    if (me.sadi.alpha === 0 && me.sadi1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.sadi.setAlpha(1)
                        me.sadi1.setAlpha(1)

                    }
                    else {
                        me.sadi.setAlpha(0)
                        me.sadi1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.F:
                    if (me.eni.alpha === 0 && me.eni1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.eni.setAlpha(1)
                        me.eni1.setAlpha(1)

                    }
                    else {
                        me.eni.setAlpha(0)
                        me.eni1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.G:
                    if (me.roub.alpha === 0 && me.roub1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.roub.setAlpha(1)
                        me.roub1.setAlpha(1)

                    }
                    else {
                        me.roub.setAlpha(0)
                        me.roub1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.H:
                    if (me.steamer.alpha === 0 && me.steamer1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.steamer.setAlpha(1)
                        me.steamer1.setAlpha(1)

                    }
                    else {
                        me.steamer.setAlpha(0)
                        me.steamer1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J:
                    if (me.enutrof.alpha === 0 && me.enutrof1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.enutrof.setAlpha(1)
                        me.enutrof1.setAlpha(1)

                    }
                    else {
                        me.enutrof.setAlpha(0)
                        me.enutrof1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.K:
                    if (me.sram.alpha === 0 && me.sram1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.sram.setAlpha(1)
                        me.sram1.setAlpha(1)

                    }
                    else {
                        me.sram.setAlpha(0)
                        me.sram1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.L:
                    if (me.sacrieur.alpha === 0 && me.sacrieur1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.sacrieur1.setAlpha(1)
                        me.sacrieur.setAlpha(1)

                    }
                    else {
                        me.sacrieur1.setAlpha(0)
                        me.sacrieur.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.M:
                    if (me.zobal.alpha === 0 && me.zobal1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.zobal.setAlpha(1)
                        me.zobal1.setAlpha(1)

                    }
                    else {
                        me.zobal.setAlpha(0)
                        me.zobal1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.W:
                    if (me.eca.alpha === 0 && me.eca1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.eca.setAlpha(1)
                        me.eca1.setAlpha(1)

                    }
                    else {
                        me.eca.setAlpha(0)
                        me.eca1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    if (me.xelor.alpha === 0 && me.xelor1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.xelor.setAlpha(1)
                        me.xelor1.setAlpha(1)

                    }
                    else {
                        me.xelor.setAlpha(0)
                        me.xelor1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.C:
                    if (me.hupper.alpha === 0 && me.hupper1.alpha === 0 && me.ankamashield.alpha === 0) {
                        me.hupper.setAlpha(1)
                        me.hupper1.setAlpha(1)

                    }
                    else {
                        me.hupper.setAlpha(0)
                        me.hupper1.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.V:
                    if (me.ankamashield.alpha === 0) {
                        me.ankamashield.setAlpha(1)


                    }
                    else {
                        me.ankamashield.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.B:
                    if (me.ankamaauth.alpha === 0) {
                        me.ankamaauth.setAlpha(0)


                    }
                    else {
                        me.principal.setAlpha(0)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    if (me.ankamaauth.alpha === 0) {
                        me.ankamaauth.setAlpha(0)

                    }
                    else {
                        me.principal.setAlpha(0)
                    }
                    break;

            }
            for(let lettre of me.lettres){
                if(kevent.key === lettre){
                    /**
                     *
                     * @type {Phaser.GameObjects.Text}
                     */
                    let objetGraphique=me.children.getByName(lettre);
                    objetGraphique.toucheEnfoncee=true;

                }
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
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
            switch (kevent.keyCode) {

            }
        });

    }





    update() {
        //pour chacune des lettres on va tester si il faut faire des choses ou non
        for (let lettre of this.lettres) {

            //--- interaction sur le clavier ---

            /**
             * La touche qui correspond à la lettre
             * @type {Phaser.GameObjects.Text}
             */
            let touche = this.children.getByName(lettre);
            //si enfoncée le fond de touche est gris
            if (touche.toucheEnfoncee) {
                touche.setBackgroundColor("#888888")
            } else {
                touche.setBackgroundColor("#000000")
            }
            //si actif le texte est vert sinon blanc
            if (touche.actif) {
                touche.setColor("#00FF00")
            } else {
                touche.setColor("#FFFFFF")
            }
        }


    }


}