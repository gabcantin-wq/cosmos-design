/* Prism animation kit — illustrative D layer. Original images stay unchanged.
   Timing is choreography, never observed cluster latency or performance.
   Classic script: works from file:// and static hosting without fetch/import. */
(function (root, factory) {
  var scenes = factory();
  if (typeof module === 'object' && module.exports) module.exports = scenes;
  else root.PrismScenes = scenes;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var C = {request:'#ffb365', work:'#75d8f8', memory:'#b8a0ff', receipt:'#a5efd4'};
  function L(fr,en){ return {fr:fr,en:en}; }
  function P(from,to,fr,en,copyFr,copyEn,focus){return {from:from,to:to,title:L(fr,en),copy:L(copyFr,copyEn),focus:focus||[]};}
  function R(id,d,start,end,kind,variants){return {id:id,d:d,start:start,end:end,kind:kind||'request',color:C[kind||'request'],variants:variants||null};}
  function N(x,y,rx,ry,kind){return {x:x,y:y,rx:rx||44,ry:ry||31,color:C[kind||'request']};}
  function V(id,fr,en){return {id:id,label:L(fr,en)};}
  var scenes = {};

  scenes['development-cycle'] = {
    id:'development-cycle',order:1,file:'development-cycle.png',width:1586,height:992,duration:39,
    title:L("De l'intention au résultat vérifié.","From intention to verified results."),
    subtitle:L("Un cycle lisible : cadrer, construire, vérifier, adopter, puis apprendre.","A readable cycle: define, build, verify, adopt, then learn."),
    alt:L("Un cycle en V relie le besoin et la conception à la réalisation, aux vérifications et au retour d'expérience.","A V-cycle connects the need and design to implementation, verification and lessons learned."),
    variants:[V('standard','Cycle complet','Complete cycle')],defaultVariant:'standard',
    nodes:{need:N(210,170,62,38),requirements:N(338,311,65,41),design:N(451,437,68,43),build:N(550,586,71,44),assembly:N(736,815,94,62),unit:N(949,579,64,46,'work'),system:N(1060,410,66,48,'work'),accept:N(1181,273,65,55,'receipt'),deploy:N(1399,158,126,52,'receipt')},
    phases:[
      P(0,4,'Cadrer','Define',"Le besoin devient une intention explicite, avec les critères qui permettront de reconnaître un résultat utile.","The need becomes an explicit intent, with criteria for recognising a useful outcome.",['need','requirements']),
      P(4,8,'Concevoir','Design',"Les exigences se traduisent en contrats, dépendances et choix de conception.","Requirements become contracts, dependencies and design choices.",['requirements','design']),
      P(8,15.5,'Construire','Build',"Les contributions et variantes sont comparées puis assemblées en un candidat traçable.","Contributions and variants are compared and assembled into a traceable candidate.",['build','assembly']),
      P(15.5,22,'Vérifier','Verify',"Le candidat passe par les vérifications unitaires et d'intégration. L'assemblage seul ne constitue pas une preuve.","The candidate goes through unit and integration checks. Assembly alone is not evidence.",['unit','system']),
      P(22,26,'Valider','Validate',"Le comportement est confronté au besoin et aux critères d'acceptation.","Behaviour is checked against the need and acceptance criteria.",['accept']),
      P(26,31,'Adopter','Adopt',"Une version admise peut être appliquée. Ses effets sont ensuite observés dans son environnement.","An admitted version may be applied. Its effects are then observed in its environment.",['deploy']),
      P(31,39,'Apprendre','Learn',"L'expérience revient vers le cadrage du prochain cycle. Ce retour conserve la provenance des constats.","Experience informs the next cycle. The feedback retains the provenance of its findings.",['need'])
    ],
    routes:[
      R('need-requirements','M 210 226 C 240 256 271 304 318 329',.3,3.8),
      R('requirements-design','M 338 367 L 408 448',4.15,7.8),
      R('design-build','M 451 505 L 509 576',8.1,10.8),
      R('build-candidate','M 548 651 C 569 674 604 683 644 696',10.8,12.7),
      R('candidate-assembly','M 656 736 C 702 743 720 766 728 805',12.8,15.3),
      R('variant-assembly','M 807 740 C 768 750 751 771 746 805',12.8,15.3,'memory'),
      R('assembly-unit','M 862 821 C 902 767 936 692 952 649',15.7,19),
      R('unit-system','M 1018 548 L 1060 480',19.1,21.8,'work'),
      R('system-acceptance','M 1153 425 L 1200 338',22.2,25.7,'work'),
      R('admitted-a','M 1260 266 C 1300 247 1320 220 1318 181',26.2,30.5,'receipt'),
      R('admitted-b','M 1268 282 C 1341 269 1389 240 1390 204',26.7,30.8,'receipt'),
      R('admitted-c','M 1277 299 C 1378 292 1445 266 1460 232',27.2,30.8,'receipt'),
      R('feedback','M 1232 194 C 1271 168 1261 115 1221 96 C 1189 80 1142 84 1072 84 L 382 84 C 292 81 251 86 214 124',31.2,38.7,'memory')
    ]
  };

  scenes['agent-cooperation'] = {
    id:'agent-cooperation',order:2,file:'agent-cooperation.png',width:1586,height:992,duration:29,
    title:L("Coopérer en gardant son identité.","Cooperate while retaining identity."),
    subtitle:L("Seule une contribution sélectionnée franchit le passage entre deux collectifs.","Only a selected contribution crosses between two collectives."),
    alt:L("Deux collectifs autonomes conservent leurs agents, leurs ressources et leurs mémoires privées. Un passage permet un échange sélectionné.","Two autonomous collectives retain their agents, resources and private memories. A passage allows a selected exchange."),
    variants:[V('accepted','Contribution acceptée','Contribution accepted'),V('declined','Adoption refusée','Adoption declined')],defaultVariant:'accepted',
    nodes:{source:N(490,526,82,41,'work'),export:N(660,481,34,66),import:N(949,484,33,65),recipient:N(1166,528,84,41,'work')},
    phases:[
      P(0,4.5,'Sélectionner','Select',"Le collectif prépare une contribution utile. Ses mémoires privées restent dans leur périmètre.","The collective prepares a useful contribution. Its private memories remain within their scope.",['source']),
      P(4.5,8.5,'Autoriser','Authorise',"L'objet, sa portée et les conditions de partage sont définis avant le transfert.","The object, scope and sharing conditions are defined before transfer.",['export']),
      P(8.5,13.5,'Transmettre','Transfer',"Un objet sélectionné traverse le passage. La connexion n'accorde aucun droit supplémentaire.","A selected object crosses the passage. Connectivity grants no additional authority.",['export','import']),
      P(13.5,18,'Examiner','Review',"Le destinataire examine la contribution selon ses propres règles et son besoin.","The recipient reviews the contribution against its own rules and needs.",['import']),
      P(18,23,'Adopter','Adopt',"Après sa décision, le destinataire peut utiliser la contribution dans son propre espace.","After its decision, the recipient may use the contribution within its own space.",['recipient']),
      P(23,29,'Retourner un reçu','Return a receipt',"Le retour distingue réception, décision et application. Un échange ne fusionne pas les deux collectifs.","The return distinguishes receipt, decision and application. An exchange does not merge the collectives.",['import','export'])
    ],
    overrides:{declined:{
      4:{title:L("Conserver la séparation","Keep the boundary"),copy:L("Le destinataire refuse l'adoption. L'objet reçu n'est pas appliqué à ses agents.","The recipient declines adoption. The received object is not applied to its agents."),focus:['import']},
      5:{copy:L("Le refus revient comme décision explicite. Aucune application ni copie de mémoire privée n'est représentée.","The refusal returns as an explicit decision. No application or private-memory copying is shown.")}
    }},
    routes:[
      R('prepare','M 419 519 C 449 496 486 493 525 516',.4,4.1,'work'),
      R('select-export','M 526 529 C 572 543 613 532 659 505',4.7,8.2),
      R('selected-transfer','M 692 482 L 926 482',8.7,13.2),
      R('adopt-local','M 966 500 C 1018 535 1097 553 1162 531',18.3,22.7,'work',['accepted']),
      R('application-receipt','M 1162 540 C 1101 565 1018 550 965 509',23.1,25,'receipt',['accepted']),
      R('decision-return','M 925 495 L 693 495',25.1,28.7,'receipt')
    ]
  };

  scenes['memory-reuse'] = {
    id:'memory-reuse',order:3,file:'memory-reuse.png',width:1672,height:941,duration:24,
    title:L("Résoudre une fois. Réévaluer avant de réutiliser.","Solve once. Reassess before reusing."),
    subtitle:L("La résolution initiale devient une expérience qui peut éclairer un nouveau besoin.","The first solution becomes experience that may inform a new need."),
    alt:L("À gauche, des contributions convergent vers un résultat vérifié, puis vers la mémoire. À droite, une nouvelle demande rencontre cette expérience et une réévaluation.","On the left, contributions converge into a verified result and memory. On the right, a new request meets that experience and reassessment."),
    variants:[V('compatible','Contexte compatible','Compatible context'),V('changed','Contexte modifié','Changed context')],defaultVariant:'compatible',
    variantSeek:12.4,
    nodes:{source:N(99,417),candidate:N(690,403,55,46),memory:N(917,657,51,40,'memory'),need:N(1055,423),gate:N(1310,445,50,67,'memory'),result:N(1533,408,58,49,'receipt'),explore:N(450,393,270,180,'work')},
    phases:[
      P(0,5.6,'Explorer','Explore',"Une demande mobilise plusieurs chemins de raisonnement. Les contributions convergent vers un résultat candidat.","A request activates several reasoning paths. Contributions converge into a candidate result.",['source']),
      P(5.6,8.8,'Vérifier','Verify',"Le résultat candidat est vérifié avant de devenir une expérience réutilisable.","The candidate result is checked before it becomes reusable experience.",['candidate']),
      P(8.8,12.4,'Mémoriser','Remember',"La méthode, les sources, les conditions et le résultat vérifié sont conservés ensemble.","The method, sources, conditions and verified result are retained together.",['memory']),
      P(12.4,16.3,'Rappeler','Retrieve',"Un nouveau besoin arrive. Une expérience pertinente est rappelée pour éclairer la situation.","A new need arrives. Relevant experience is retrieved to inform the situation.",['need','memory']),
      P(16.3,20,'Réévaluer','Reassess',"La pertinence, la validité et les conditions d'application sont réexaminées avant le réemploi.","Relevance, validity and conditions of use are reassessed before reuse.",['gate']),
      P(20,24,'Réutiliser','Reuse',"Les conditions sont compatibles. L'expérience vérifiée ouvre une voie plus directe vers le résultat.","The conditions are compatible. Verified experience opens a more direct route to the result.",['result'])
    ],
    overrides:{changed:{
      4:{copy:L("Les conditions ne concordent plus avec l'expérience rappelée. La réutilisation directe est suspendue.","The conditions no longer match the retrieved experience. Direct reuse is suspended.")},
      5:{title:L("Raisonner à nouveau","Reason again"),copy:L("Un nouveau raisonnement est nécessaire. L'expérience reste un contexte utile, sans garantir la réponse actuelle.","Fresh reasoning is needed. Experience remains useful context without guaranteeing the current answer."),focus:['gate','explore']}
    }},
    routes:[
      R('incoming','M 103 419 C 130 418 160 408 194 409',.2,1.3),
      R('upper','M 194 409 C 263 409 238 298 315 298 L 360 294 L 407 272 C 520 246 522 310 552 360 C 568 387 596 395 628 395',1.3,5.3,'work'),
      R('middle','M 194 409 L 291 409 L 332 407 C 375 407 400 387 437 381 L 475 378 C 532 378 570 399 628 399',1.45,4.9,'work'),
      R('lower','M 194 409 C 256 409 247 500 311 503 L 363 503 L 407 501 C 525 501 518 445 570 414 C 589 404 607 401 628 402',1.6,5.5,'work'),
      R('verified','M 628 398 L 686 408',7.2,8.7),
      R('store','M 777 503 C 855 509 883 584 916 657',9,12.2),
      R('new-need','M 1065 422 C 1129 415 1164 418 1206 437 C 1230 446 1250 447 1271 445 L 1306 446',12.6,16),
      R('recall','M 918 657 C 978 677 1034 679 1070 633 C 1099 605 1151 599 1203 581 C 1255 563 1271 551 1271 514 L 1271 484 L 1306 446',12.6,16.2,'memory'),
      R('reuse','M 1307 446 C 1360 446 1375 441 1401 431 C 1426 420 1448 416 1473 416 L 1531 410',20.2,23.7,'request',['compatible'])
    ]
  };

  scenes['spectral-work'] = {
    id:'spectral-work',order:4,file:'spectral-work.png',width:1586,height:992,duration:35,
    title:L("Un vaste corpus. Des étapes ciblées.","A large corpus. Focused steps."),
    subtitle:L("Sélectionner, répartir, consolider, puis poursuivre seulement si cela est utile.","Select, distribute and consolidate, then continue only when useful."),
    alt:L("Un corpus externe alimente un contexte borné, des sous-tâches et une mémoire de travail. Des résultats reliés à leurs sources sont consolidés.","An external corpus feeds bounded context, subtasks and working memory. Findings linked to their sources are consolidated."),
    variants:[V('iterate','Une étape supplémentaire','One further step'),V('enough','Résultat suffisant','Sufficient result')],defaultVariant:'iterate',variantSeek:25,
    nodes:{selection:N(350,466,44,100),parent:N(892,291,124,75,'work'),left:N(733,513,65,43,'work'),right:N(1096,507,65,43,'work'),nested:N(1132,600,36,22,'work'),memory:N(861,758,306,54,'memory'),result:N(1432,317,102,125,'receipt')},
    phases:[
      P(0,4.5,'Sélectionner','Select',"Quelques sources pertinentes sont sélectionnées. Le corpus complet reste à l'extérieur de chaque contexte d'appel.","Relevant sources are selected. The full corpus remains outside each call's context.",['selection']),
      P(4.5,9,'Borner le contexte','Bound the context',"L'objectif, les extraits utiles, les contraintes et les acquis forment une entrée maîtrisée.","The objective, relevant excerpts, constraints and prior findings form a bounded input.",['parent']),
      P(9,15.2,'Répartir','Distribute',"Le travail peut être décomposé en sous-tâches, chacune avec une portée et une entrée bornées.","Work may be split into subtasks, each with bounded scope and input.",['left','right','nested']),
      P(15.2,21,'Rapprocher les résultats','Connect findings',"Les sous-tâches rendent leurs résultats reliés aux sources. Le parent conserve les incertitudes à résoudre.","Subtasks return source-linked findings. The parent retains uncertainties still to resolve.",['parent']),
      P(21,25,'Conserver les acquis','Retain findings',"Les résultats intermédiaires et les points de reprise rejoignent la mémoire de travail.","Intermediate findings and recovery points enter working memory.",['memory']),
      P(25,29.5,'Consolider','Consolidate',"La synthèse est évaluée à partir des preuves, de la couverture et des incertitudes restantes.","The synthesis is assessed against evidence, coverage and remaining uncertainty.",['result']),
      P(29.5,35,'Préparer la suite','Prepare the next step',"Une étape utile réutilise les acquis pour construire son prochain contexte borné. Elle n'emporte pas tout le corpus.","A useful next step reuses findings to build its next bounded context. It does not carry the entire corpus.",['memory','selection'])
    ],
    overrides:{enough:{6:{title:L("S'arrêter quand cela suffit","Stop when sufficient"),copy:L("Le résultat est jugé suffisant pour le besoin. Les acquis restent disponibles sans déclencher une nouvelle itération.","The result is sufficient for the need. Findings remain available without triggering another iteration."),focus:['result','memory']}}},
    routes:[
      R('source-a','M 211 257 C 280 273 306 328 342 420',.3,4.2,'work'),
      R('source-b','M 176 351 C 242 366 288 431 343 471',.5,4.2,'request'),
      R('source-c','M 209 441 C 253 448 297 476 345 487',.7,4.3,'memory'),
      R('bounded-input','M 427 471 C 476 471 478 457 478 420 L 478 334 Q 478 307 510 307 L 704 307',4.7,8.8),
      R('delegate-left','M 819 380 C 819 418 746 402 740 449',9.2,12.5),
      R('delegate-right','M 982 380 C 981 418 1068 411 1068 449',9.5,12.8),
      R('nested-input','M 1099 514 C 1100 550 1139 566 1138 585',12.9,15.1),
      R('nested-return','M 1137 584 C 1137 558 1101 551 1100 518',15.3,17.4,'work'),
      R('left-return','M 832 467 C 863 465 858 417 858 387',15.4,18.5,'work'),
      R('right-return','M 1000 468 C 942 466 945 412 946 386',17.5,20.7,'work'),
      R('retain-left','M 734 599 C 734 650 700 639 700 693',21.2,24.7,'memory'),
      R('retain-right','M 1106 621 C 1106 653 1084 662 1084 694',21.4,24.8,'memory'),
      R('synthesis','M 1096 310 C 1184 310 1225 294 1249 327 C 1265 347 1286 343 1303 343',25.2,29.3,'receipt'),
      R('next-context','M 486 763 L 403 763 C 359 762 341 739 340 685 L 341 590',29.8,34.7,'memory',['iterate'])
    ]
  };

  scenes['spectral-memory'] = {
    id:'spectral-memory',order:5,file:'memory-reuse-diagram.png',width:1672,height:941,duration:25,
    title:L("Mémoire spectrale : réemploi vérifié.","Spectral memory: verified reuse."),
    subtitle:L("La même logique de réévaluation, appliquée au schéma explicatif.","The same reassessment logic, applied to the explanatory diagram."),
    alt:L("Première rencontre : raisonner, valider, mémoriser. Besoin récurrent : rappeler, vérifier, réutiliser. Le contexte doit correspondre.","First encounter: reason, validate, remember. Recurring need: retrieve, verify, reuse. The context must match."),
    variants:[V('compatible','Contexte compatible','Compatible context'),V('changed','Contexte modifié','Changed context')],defaultVariant:'compatible',variantSeek:12.8,
    nodes:{source:N(88,418,35,44),candidate:N(690,393,53,49),memory:N(575,631,47,41,'memory'),recalled:N(1155,539,46,40,'memory'),gate:N(1404,517,42,56,'work'),result:N(1574,509,49,50,'receipt'),reasoning:N(387,408,204,104,'work')},
    phases:[
      P(0,5.8,'Raisonner','Reason',"La demande traverse plusieurs contributions avant de produire un résultat candidat.","The request passes through several contributions before yielding a candidate result.",['source']),
      P(5.8,9,'Valider','Validate',"Le résultat est validé avec ses preuves et ses limites.","The result is validated with its evidence and limits.",['candidate']),
      P(9,12.8,'Mémoriser','Remember',"L'expérience conserve le résultat, sa méthode et les conditions de sa validité.","Experience retains the result, method and conditions of validity.",['memory']),
      P(12.8,17,'Rappeler','Retrieve',"Un besoin récurrent retrouve une expérience pertinente. Le rappel ne vaut pas encore autorisation de réemploi.","A recurring need retrieves relevant experience. Retrieval does not yet authorise reuse.",['recalled']),
      P(17,21,'Vérifier le contexte','Verify the context',"La vérification confirme que les conditions d'application concordent toujours.","Verification confirms that the conditions of use still match.",['gate']),
      P(21,25,'Réutiliser','Reuse',"Le résultat est obtenu par un chemin plus direct, après vérification.","The result follows a more direct path, after verification.",['result'])
    ],
    overrides:{changed:{
      4:{copy:L("La vérification constate un contexte différent. Le chemin de réemploi reste fermé.","Verification finds a changed context. The reuse path stays closed.")},
      5:{title:L("Rouvrir le raisonnement","Reopen reasoning"),copy:L("Une nouvelle analyse utilise la mémoire comme contexte. Le résultat antérieur n'est pas appliqué automatiquement.","Fresh analysis uses memory as context. The previous result is not applied automatically."),focus:['gate','reasoning']}
    }},
    routes:[
      R('incoming','M 135 418 L 190 418',.2,1.3),
      R('reason-top','M 245 403 C 275 399 259 335 314 336 L 375 335 C 418 334 411 365 431 371 L 475 375 C 505 376 503 401 526 402',1.3,5.6,'work'),
      R('reason-mid','M 245 414 C 277 414 279 400 310 401 L 365 401 C 414 403 410 374 431 372',1.5,4.7,'work'),
      R('reason-low','M 245 424 C 273 432 269 475 315 476 L 389 476 C 424 474 416 455 436 451 L 474 449 C 504 449 506 411 527 409',1.6,5.6,'work'),
      R('verified-result','M 581 407 L 631 407',7.1,8.8),
      R('store','M 683 448 C 685 493 665 523 623 532 C 582 540 568 559 571 589 L 575 630',9.2,12.6),
      R('recall','M 627 641 C 794 638 943 621 1052 589 L 1112 575 L 1156 540',13,16.8,'memory'),
      R('new-request','M 969 518 L 1005 518',13.2,15.7),
      R('reach-check','M 1286 519 L 1350 519',17.2,19.4,'memory'),
      R('reuse','M 1461 519 L 1518 519 L 1570 518',21.2,24.7,'request',['compatible'])
    ]
  };

  scenes['ray-federation'] = {
    id:'ray-federation',order:6,file:'ray-federation.png',width:1672,height:941,duration:35,
    title:L("Des rayons autonomes. Des échanges choisis.","Autonomous rays. Selected exchanges."),
    subtitle:L("Proposition, examen, adoption locale et retour de résultat restent distincts.","Proposal, review, local adoption and return of results remain distinct."),
    alt:L("Trois rayons orange, bleu et violet disposent de leurs propres ressources. Les liens transportent des contributions choisies et des reçus.","Three orange, blue and violet rays retain their own resources. Links carry selected contributions and receipts."),
    variants:[V('extend','Autre échange autorisé','Another authorised exchange'),V('limited','Échange limité à deux rayons','Exchange limited to two rays')],defaultVariant:'extend',variantSeek:25,
    nodes:{orange:N(352,271,64,32),blueReview:N(656,568,77,55),blueWork:N(823,696,77,42,'work'),violetReview:N(1269,164,70,48,'memory')},
    phases:[
      P(0,4,'Choisir une contribution','Select a contribution',"ORANGE sélectionne une proposition avec ses sources et ses preuves. Le reste de sa mémoire demeure dans son périmètre.","ORANGE selects a proposal with its sources and evidence. Its remaining memory stays within its scope.",['orange']),
      P(4,10,'Proposer à BLEU','Propose to BLEU',"La contribution sélectionnée rejoint BLEU par un échange admis.","The selected contribution reaches BLEU through an admitted exchange.",['orange','blueReview']),
      P(10,14,'Examiner localement','Review locally',"BLEU examine la proposition selon ses besoins et ses règles. La réception ne vaut pas adoption.","BLEU reviews the proposal against its needs and rules. Receipt does not imply adoption.",['blueReview']),
      P(14,19,'Adopter localement','Adopt locally',"Après sa décision, BLEU peut appliquer la contribution dans son propre périmètre.","Following its decision, BLEU may apply the contribution within its own scope.",['blueWork']),
      P(19,25,'Retourner le résultat','Return the outcome',"Un reçu retourne vers ORANGE et distingue application et résultat vérifié.","A receipt returns to ORANGE and distinguishes application from verified outcome.",['orange']),
      P(25,30.5,'Choisir un autre échange','Choose another exchange',"Un accord distinct permet à BLEU de sélectionner une contribution pour le rayon violet. Rien n'est diffusé automatiquement à tous.","A separate agreement lets BLEU select a contribution for the violet ray. Nothing is automatically broadcast to all.",['blueWork','violetReview']),
      P(30.5,35,'Garder sa décision','Retain the decision',"Le rayon violet examine la contribution reçue. Son adoption éventuelle reste sa propre décision.","The violet ray reviews the received contribution. Any subsequent adoption remains its own decision.",['violetReview'])
    ],
    overrides:{limited:{
      5:{title:L("Respecter la portée","Respect the scope"),copy:L("L'accord porte sur ORANGE et BLEU. Aucun objet ne part vers le rayon violet.","The agreement covers ORANGE and BLEU. No object is sent to the violet ray."),focus:['orange','blueWork']},
      6:{title:L("Préserver l'autonomie","Preserve autonomy"),copy:L("Le rayon violet conserve ses activités et sa mémoire. Une fédération n'impose pas une réplication générale.","The violet ray retains its own activity and memory. Federation does not imply global replication."),focus:[]}
    }},
    routes:[
      R('select','M 350 298 L 349 349',.3,3.8),
      R('orange-blue','M 349 362 C 345 430 480 487 538 541 L 561 567',4.2,9.8),
      R('blue-adoption','M 674 668 C 711 694 748 705 777 707',14.2,18.7,'work'),
      R('blue-receipt','M 561 559 C 502 499 391 455 362 404 L 350 366',19.3,24.7,'receipt'),
      R('blue-violet','M 1049 565 C 1063 516 1166 466 1280 402 C 1327 377 1349 372 1345 351',25.2,30.3,'work',['extend'])
    ]
  };

  scenes['prism-hero'] = {
    id:'prism-hero',order:7,file:'prism-hero.png',width:1914,height:822,duration:25,
    title:L("Donner une direction à l'intelligence.","Give intelligence a direction."),
    subtitle:L("Les capacités disponibles rejoignent les fonctions utiles à une mission.","Available capabilities reach the functions useful to a mission."),
    alt:L("La lumière traverse un prisme et rejoint plusieurs fonctions distinctes. Cette scène est une métaphore d'organisation, pas une topologie réseau.","Light crosses a prism and reaches distinct functions. The scene is an organisational metaphor, not a network topology."),
    variants:[V('standard','Mission illustrée','Illustrative mission')],defaultVariant:'standard',
    nodes:{source:N(1757,342,59,84),prism:N(1198,389,56,42),orange:N(731,416,79,34),cyan:N(888,567,83,40,'work'),blue:N(915,267,72,32,'work')},
    phases:[
      P(0,6,'Capacités disponibles','Available capabilities',"La lumière représente les capacités des modèles mises à disposition du travail.","Light represents model capabilities made available for work.",['source']),
      P(6,9,'Donner une direction','Set a direction',"La mission, le contexte et les règles orientent l'utilisation de ces capacités.","The mission, context and rules guide the use of those capabilities.",['prism']),
      P(9,17.5,'Mobiliser les fonctions','Activate useful functions',"Seules les fonctions utiles à cette mission sont mises en évidence. Une couleur ne fixe pas un modèle exclusif.","Only functions useful to this mission are highlighted. A colour does not prescribe an exclusive model.",['orange','cyan','blue']),
      P(17.5,21.5,'Contribuer au travail','Contribute to the work',"Les fonctions apportent des contributions complémentaires, chacune dans sa responsabilité.","Functions make complementary contributions, each within its responsibility.",['orange','cyan','blue']),
      P(21.5,25,'Garder le cap','Keep the direction',"La capacité des modèles devient un travail orienté. Le prisme reste une métaphore : aucun hub obligatoire n'est décrit.","Model capacity becomes directed work. The prism remains a metaphor: no mandatory hub is depicted.",['prism'])
    ],
    routes:[
      R('capabilities','M 1690 391 L 1525 392 L 1200 390',.4,5.7),
      R('orange-function','M 1195 390 C 1043 404 929 407 824 417 L 734 416',9.2,15.2),
      R('cyan-function','M 1195 390 L 1043 485 L 895 565',10.2,16.2,'work'),
      R('blue-function','M 1195 390 L 1030 324 L 920 273',11.2,17.3,'work')
    ]
  };
  Object.keys(scenes).forEach(function(id){
    var s=scenes[id];
    s.semantics='illustrative';
    s.playback={autoplay:'once-visible',loop:false,maximumConcurrentPackets:3};
  });
  return Object.freeze(scenes);
});
