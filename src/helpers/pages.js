import cover from '../assets/images/bg-cover.png';

export const definitions = {
  dialogue : 'Conversation entre deux ou plusieurs personnes sur un sujet défini',
  terrier: 'Abri',
  lasse: 'fatiguée',
  talus: 'terrain en pente',
  'coup-d-oeil': 'regardé'
}

export const pages = [
  {
    id: 0,
    cover: cover
  },
  {
    id: 1,
    text: `
      <h2><span class="rhese"><span class="syl">CHA</span><span class="syl">PITRE</span> <span class="syl">I</span></span></h2>
      <h1><span class="rhese"><span class="syl">Des</span><span class="syl">cente</span> <span class="syl">dans</span></span><br/><span class="rhese"><span class="syl">le</span> <span class='def' id="terrier"><span class="syl">te</span><span class="syl">rrier</span><span id="terrier-tooltip" class="tooltip-def"></span></span> <span class="syl">du</span> <span class="syl">la</span><span class="syl">pin</span></span></h1>
      <p class="paragraph">
        <span class="sentence">
          <span class="rhese">
            <span class="syl">A</span><span class="syl">lice</span> <span class="verb"><span class="syl">co</span><span class="syl">mmen</span><span class="syl">çait</span></span><br/>
          </span>
          <span class="rhese">
            <span class="syl">à</span> <span class="syl">se</span> <span class="syl">sen</span><span class="syl">tir</span> <span class="syl">très</span> <span class='def' id="lasse"><span id="lasse-tooltip" class="tooltip-def"></span><span class="syl">la</span><span class="syl">sse</span></span><br/>
          </span>
          <span class="rhese">
            <span class="syl">de</span> <span class="syl">res</span><span class="syl">ter</span> <span class="syl">a</span><span class="syl">ssise</span><br/>
          </span>
          <span class="rhese">
            <span class="syl">à</span> <span class="syl">cô</span><span class="syl">té</span> <span class="syl">de</span> <span class="syl">sa</span> <span class="syl">sœur</span>,<br/>
          </span>
          <span class="rhese">
            <span class="syl">sur</span> <span class="syl">le</span> <span class='def' id="talus"><span id="talus-tooltip" class="tooltip-def"></span><span class="syl">ta</span><span class="syl">lus</span></span>,<br/>
          </span>
          <span class="rhese">
            <span class="syl">et</span> <span class="syl">de</span> <span class="syl">n</span><span class="syl">’</span><span class="verb"><span class="syl">a</span><span class="syl">voir</span></span> <span class="syl"></span><span class="syl">rien</span> <span class="syl"></span><span class="syl">à</span> <span class="syl">faire</span> : <br/>
          </span>
          <span class="rhese">
            <span class="syl">une</span> <span class="syl">fois</span> <span class="syl">ou</span> <span class="syl">deux</span>,<br/>
          </span>
          <span class="rhese">
            <span class="syl">elle</span> <span class="syl">a</span><span class="syl">vait</span>
            <span class="def" id="coup-d-oeil">
              <span class="syl">je</span><span class="syl">té</span> <span class="syl">un</span> <span class="syl">coup</span> <span class="syl">d</span><span class="syl">’</span><span class="syl">œil</span><span id="coup-d-oeil-tooltip" class="tooltip-def"></span></span><br/>
          </span>
          <span class="rhese">  
            <span class="syl">sur</span> <span class="syl">le</span> <span class="syl">livre</span> <span class="syl">que</span> <span class="verb"><span class="syl">li</span><span class="syl">sait</span></span> <span class="syl">sa</span> <span class="syl">sœur</span>;<br/>
          </span>
          <span class="rhese">  
            <span class="syl">mais</span> <span class="syl">il</span> <span class="syl">ne</span> <span class="verb"><span class="syl">con</span><span class="syl">te</span><span class="syl">nait</span></span><br/>
          </span>
          <span class="rhese">  
            <span class="syl">ni</span> <span class="syl">i</span><span class="syl">mages</span> <span class="syl">ni</span> <span class="def" id="dialogue"><span class="syl">dia</span><span class="syl">lo</span><span class="syl">gues</span><span id="dialogue-tooltip" class="tooltip-def"></span></span> : <br/>
          </span>
          <span class="rhese">
            « <span class="syl">Et</span>,<span class="syl"></span><span class="verb"><span class="syl">pen</span><span class="syl">sait</span></span> <span class="syl">A</span><span class="syl">li</span><span class="syl">ce</span>,<br/>
          </span>
          <span class="rhese">
            <span class="syl">à</span> <span class="syl">quoi</span> <span class="syl">peut</span> <span class="syl">bien</span> <span class="syl">ser</span><span class="syl">vir</span> <span class="syl">un</span> <span class="syl">livre</span><br/>
          </span>
          <span class="rhese">
            <span class="syl">où</span> <span class="syl">il</span> <span class="syl">n</span>’<span class="syl">y</span> <span class="syl">a</span> <span class="syl">ni</span> <span class="syl">i</span><span class="syl">mag</span><span class="syl">es</span><br/>
          </span>
          <span class="rhese">
            <span class="syl">ni</span> <span class="syl">dia</span><span class="syl">lo</span><span class="syl">gues</span> ? <br/>
          </span>
        </span>
      <p/>
      <p class="paragraph">
        <span class="sentence">
          <span class="rhese">
          Elle se <span class="verb">demandait</span><br/>
          </span>
          <span class="rhese">
          (dans la mesure <br/>
          </span>
          <span class="rhese">
            où elle était capable de réfléchir,<br/>
          </span>
          <span class="rhese">
            car elle se sentait toute endormie<br/>
          </span>
          <span class="rhese">
            et toute stupide<br/>
          </span>
          <span class="rhese">
            à cause de la chaleur)<br/>
          </span>
          <span class="rhese">
            si le plaisir de tresser<br/>
          </span>
          <span class="rhese">
            valait la peine de se lever<br/>
          </span>
          <span class="rhese">
            et d’aller cueillir les pâquerettes,<br/>
          </span>
          <span class="rhese">
            lorsque, brusquement,<br/>
          </span>
          <span class="rhese">
            un Lapin Blanc aux yeux roses,<br/>
          </span>
          <span class="rhese">
            passa en courant<br/>
          </span>
          <span class="rhese">
            tout près d’elle.<br/>
          </span>
        </span>
      </p>
      <p class="paragraph">
        <span class="sentence">
          <span class="rhese">
            Ceci n’avait rien <br/>
          </span>
          <span class="rhese">
            de particulièrement remarquable ;<br/>
          </span>
          <span class="rhese">
            et Alice <br/>
          </span>
          <span class="rhese">
            ne trouva pas non plus tellement bizarre<br/>
          </span>
          <span class="rhese">
            d’entendre le Lapin se dire<br/>
          </span>
          <span class="rhese">
            à mi-voix :<br/>
          </span>
          <span class="rhese">
            « Oh, mon Dieu !<br/>
          </span>
          <span class="rhese">
            Oh, mon Dieu !<br/>
          </span>
          <span class="rhese">
            Je vais être en retard ! »<br/>
          </span>
          <span class="rhese">
            (Lorsqu’elle y réfléchit<br/>
          </span>
          <span class="rhese">
            par la suite,<br/>
          </span>
          <span class="rhese">
            il lui vint à l’esprit<br/>
          </span>
          <span class="rhese">
            qu’elle aurait dû s’en étonner,<br/>
          </span>
          <span class="rhese">
            mais, sur le moment,<br/>
          </span>
          <span class="rhese">
            cela lui sembla tout naturel);<br/>
          </span>
          <span class="rhese">
            cependant,<br/>
          </span>
          <span class="rhese">
            lorsque le Lapin tira bel et bien<br/>
          </span>
          <span class="rhese">
            une montre de la poche de son gilet,<br/>
          </span>
          <span class="rhese">
            regarda l’heure,<br/>
          </span>
          <span class="rhese">
            et se mit à courir de plus belle,<br/>
          </span>
          <span class="rhese">
            Alice se dressa d’un bond,<br/>
          </span>
          <span class="rhese">
            car, tout à coup,<br/>
          </span>
          <span class="rhese">
            l’idée lui était venue<br/>
          </span>
          <span class="rhese">
            qu’elle n’avait jamais vu de lapin<br/>
          </span>
          <span class="rhese">
            pourvu d’une poche de gilet,<br/>
          </span>
          <span class="rhese">
            ni d’une montre<br/>
          </span>
          <span class="rhese">
            à tirer de cette poche.<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            Dévorée de curiosité,<br/>
          </span>
          <span class="rhese">
            elle traversa le champ<br/>
          </span>
          <span class="rhese">
            en courant à sa poursuite,<br/>
          </span>
          <span class="rhese">
            et eut la chance d’arriver<br/>
          </span>
          <span class="rhese">
            juste à temps<br/>
          </span>
          <span class="rhese">
            pour le voir s’enfoncer comme une flèche<br/>
          </span>
          <span class="rhese">
            dans un large terrier<br/>
          </span>
          <span class="rhese">
            placé sous la haie.<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            Un instant plus tard,<br/>
          </span>
          <span class="rhese">
            elle y pénétrait à son tour,<br/>
          </span>
          <span class="rhese">
            sans se demander une seule fois<br/>
          </span>
          <span class="rhese">
            comment diable<br/>
          </span>
          <span class="rhese">
            elle pourrait bien en sortir.<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            Le terrier était d’abord creusé<br/>
          </span>
          <span class="rhese">
            horizontalement<br/>
          </span>
          <span class="rhese">
            comme un tunnel,<br/>
          </span>
          <span class="rhese">
            puis il présentait une pente<br/>
          </span>
          <span class="rhese">
            si brusque et si raide<br/>
          </span>
          <span class="rhese">
            qu’Alice n’eut même pas le temps<br/>
          </span>
          <span class="rhese">
            de songer à s’arrêter<br/>
          </span>
          <span class="rhese">
            avant de se sentir tomber dans un puits<br/>
          </span>
          <span class="rhese">
            apparemment très profond.<br/>
          </span>
        </span>
      </p>
    `
  },
  {
    id: 2,
    text: `
      <p class="paragraph">
        <span class="sentence">
          <span class="rhese">
            Soit que le puits fût très profond,<br/>
          </span>
          <span class="rhese">
            soit que Alice tombât très lentement,<br/>
          </span>
          <span class="rhese">
            elle s’aperçut<br/>
          </span>
          <span class="rhese">
            qu’elle avait le temps,<br/>
          </span>
          <span class="rhese">
            tout en descendant,<br/>
          </span>
          <span class="rhese">
            de regarder autour d’elle<br/>
          </span>
          <span class="rhese">
            et de se demander<br/>
          </span>
          <span class="rhese">
            ce qui allait se passer.<br/>
          </span>
          <span class="rhese">
            D’abord,<br/>
          </span>
          <span class="rhese">
            elle essaya de regarder en bas<br/>
          </span>
          <span class="rhese">
            pour voir où elle allait arriver,<br/>
          </span>
          <span class="rhese">
            mais il faisait trop noir<br/>
          </span>
          <span class="rhese">
            pour qu’elle pût rien distinguer.<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            Ensuite, <br/>
          </span>
          <span class="rhese">
            elle examina les parois du puits, <br/>
          </span>
          <span class="rhese">
            et remarqua <br/>
          </span>
          <span class="rhese">
            qu’elles étaient garnies de placards <br/>
          </span>
          <span class="rhese">
            et d’étagères ;<br/>
          </span>
          <span class="rhese">
            par endroits, <br/>
          </span>
          <span class="rhese">
            des cartes de géographie <br/>
          </span>
          <span class="rhese">
            et des tableaux <br/>
          </span>
          <span class="rhese">
            se trouvaient accrochés <br/>
          </span>
          <span class="rhese">
            à des pitons. <br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            En passant,<br/>
          </span>
          <span class="rhese">
            elle prit un pot sur une étagère ;<br/>
          </span>
          <span class="rhese">
            il portait une étiquette<br/>
          </span>
          <span class="rhese">
            sur laquelle on lisait :<br/>
          </span>
          <span class="rhese">
            MARMELADE D’ORANGES,<br/>
          </span>
          <span class="rhese">
            mais, à la grande déception d’Alice,<br/>
          </span>
          <span class="rhese">
            il était vide.<br/>
          </span>
          <span class="rhese">
            Elle ne voulut pas le laisser tomber<br/>
          </span>
          <span class="rhese">
            de peur de tuer quelqu’un<br/>
          </span>
          <span class="rhese">
            et elle s’arrangea,<br/>
          </span>
          <span class="rhese">
            pour le poser dans un placard<br/>
          </span>
          <span class="rhese">
            devant lequel elle passait,<br/>
          </span>
          <span class="rhese">
            tout en tombant.<br/>
          </span>
        </span>
      </p>
      <p class="paragraph">
        <span class="sentence">
          <span class="rhese">
            « Ma foi !<br/>
          </span>
          <span class="rhese">
            songea-t-elle,<br/>
          </span>
          <span class="rhese">
            après une chute pareille,<br/>
          </span>
          <span class="rhese">
            cela me sera bien égal,<br/>
          </span>
          <span class="rhese">
            quand je serai à la maison,<br/>
          </span>
          <span class="rhese">
            de dégringoler dans l’escalier !<br/>
          </span>
          <span class="rhese">
            Ce qu’on va me trouver courageuse !<br/>
          </span>
          <span class="rhese">
            Ma parole,<br/>
          </span>
          <span class="rhese">
            ême si je tombais du haut du toit,<br/>
          </span>
          <span class="rhese">
            je n’en parlerais à personne ! »<br/>
          </span>
          <span class="rhese">
            (Supposition des plus vraisemblables,<br/>
          </span>
          <span class="rhese">
            en effet)<br/>
          </span>
        <span>
      </p>
      <p class="paragraph">
        <span class="sentence">
          <span class="rhese">
            Plus bas, encore plus bas,<br/>
          </span>
          <span class="rhese">
            toujours plus bas.<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            Est-ce que cette chute<br/>
          </span>
          <span class="rhese">
            ne finirait jamais ?<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            « Je me demande<br/>
          </span>
          <span class="rhese">
            combien de kilomètres<br/>
          </span>
          <span class="rhese">
            j’ai pu parcourir ?<br/>
          </span>
          <span class="rhese">
            dit-elle à haute voix.<br/>
          </span>
        </span>
        <span class="sentence">
          <span class="rhese">
            Je ne dois pas être<br/>
          </span>
          <span class="rhese">
            bien loin du centre de la terre.<br/>
          </span>
        </span>
        <span class="sentence">
        <span class="rhese">
          Voyons :<br/>
        </span>
        <span class="rhese">
          cela ferait une chute<br/>
        </span>
        <span class="rhese">
          de six à sept mille kilomètres,<br/>
        </span>
        <span class="rhese">
          du moins je le crois…<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          (car, voyez-vous,<br/>
        </span>
        <span class="rhese">
          Alice avait appris en classe<br/>
        </span>
        <span class="rhese">
          pas mal de choses de ce genre,<br/>
        </span>
        <span class="rhese">
          et, quoique le moment fût mal choisi<br/>
        </span>
        <span class="rhese">
          pour faire parade de ses connaissances<br/>
        </span>
        <span class="rhese">
          puisqu’il n’y avait personne<br/>
        </span>
        <span class="rhese">
          pour l’écouter,<br/>
        </span>
        <span class="rhese">
          c’était pourtant un bon exercice<br/>
        </span>
        <span class="rhese">
          que de répéter tout cela)…<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          Oui,<br/>
        </span>
        <span class="rhese">
          cela doit être la distance exacte…<br/>
        </span>
        <span class="rhese">
          mais, par exemple,<br/>
        </span>
        <span class="rhese">
          je me demande à quelle latitude<br/>
        </span>
        <span class="rhese">
          et à quelle longitude<br/>
        </span>
        <span class="rhese">
          je me trouve ? »<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          (Alice n’avait pas la moindre idée<br/>
        </span>
        <span class="rhese">
          de ce qu’était la latitude,<br/>
        </span>
        <span class="rhese">
          pas plus d’ailleurs<br/>
        </span>
        <span class="rhese">
          que la longitude,<br/>
        </span>
        <span class="rhese">
          mais elle jugeait<br/>
        </span>
        <span class="rhese">
          que c’étaient de très jolis mots,<br/>
        </span>
        <span class="rhese">
          impressionnants à prononcer)<br/>
        </span>
      </span>
      </p>
    `
  },
  {
    id: 3,
    text: `
    <p class="paragraph">
      <span class="sentence">
        <span class="rhese">
          Bientôt, elle recommença :<br/>
        </span>
        <span class="rhese">
          « Je me demande<br/>
        </span>
        <span class="rhese">
          si je vais traverser la terre<br/>
        </span>
        <span class="rhese">
          d’un bout à l’autre !<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          Cela sera rudement drôle<br/>
        </span>
        <span class="rhese">
          d’arriver au milieu de ces gens<br/>
        </span>
        <span class="rhese">
          qui marchent la tête en bas !<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          On les appelle les Antipathies,<br/>
        </span>
        <span class="rhese">
          je crois<br/>
        </span>
        <span class="rhese">
          (cette fois, elle fut tout heureuse<br/>
        </span>
        <span class="rhese">
          de ce qu’il n’y eût personne<br/>
        </span>
        <span class="rhese">
          pour écouter,<br/>
        </span>
        <span class="rhese">
          car il lui sembla<br/>
        </span>
        <span class="rhese">
          que ce n’était pas du tout<br/>
        </span>
        <span class="rhese">
          le mot qu’il fallait) -<br/>
        </span>
        <span class="rhese">
          mais, je serai alors obligée<br/>
        </span>
        <span class="rhese">
          de leur demander<br/>
        </span>
        <span class="rhese">
          quel est le nom du pays, bien sûr.<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          S’il vous plaît, madame,<br/>
        </span>
        <span class="rhese">
          suis-je en Nouvelle-Zélande<br/>
        </span>
        <span class="rhese">
          ou en Australie ?<br/>
        </span>
        <span class="rhese">
          (et elle essaya<br/>
        </span>
        <span class="rhese">
          de faire la révérence tout en parlant<br/>
        </span>
        <span class="rhese">
          – imaginez ce que peut être<br/>
        </span>
        <span class="rhese">
          la révérence<br/>
        </span>
        <span class="rhese">
          pendant qu’on tombe dans le vide !<br/>
        </span>
        <span class="rhese">
          Croyez-vous<br/>
        </span>
        <span class="rhese">
          que vous en seriez capable? )<br/>
        </span>
        <span class="rhese">
          Et la dame pensera<br/>
        </span>
        <span class="rhese">
          que je suis une petite fille ignorante !<br/>
        </span>
      </span>
      <span class="sentence">
        <span class="rhese">
          Non,<br/>
        </span>
        <span class="rhese">
          il vaudra mieux ne rien demander ;<br/>
        </span>
        <span class="rhese">
          peut-être que je verrai le nom<br/>
        </span>
        <span class="rhese">
          écrit quelque part. »<br/>
        </span>
      </span>
    </p>
    `
  },
];

export default pages;
