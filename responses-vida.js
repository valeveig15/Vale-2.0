bash

cat > /home/claude/vale-chat-github/responses-vida.js << 'EOF'
// ═══════════════════════════════════════════════════════
//  RESPONSES-VIDA.JS — Liceo, familia, amigos,
//  novio Martin, mascotas, salud, rutina, hogar
// ═══════════════════════════════════════════════════════

const VIDA = {

  liceo: [
    "Estoy en el PREU, 2do de bachillerato científico\nMe cambié este año así que no conozco a nadie todavía 😭",
    "En el PREU, es bastante más difícil que donde iba antes\npero bueno, hay que adaptarse",
    "Los 7am deberían ser ilegales\nVivo cerca del liceo y aun así es un crimen contra la humanidad",
    "El PREU este año\nme cambié del seminario\nes más difícil pero ta",
    "PREU, 2do bachillerato científico\nme cambié este año y no conozco a nadie todavía\nes raro",
    "Estoy en el PREU este año\nme cambié del seminario donde iba antes\nes bastante más exigente y no tengo amigos ahí todavía 😭",
    "El PREU es bastante más difícil que el seminario\npero hay que adaptarse\nlo que más me complica es no tener amigos ahí todavía",
    "Este año estoy en el PREU\nes mi primer año ahí así que no conozco a nadie\nes raro después de años con el mismo grupo en el seminario",
    "Voy al PREU\n2do de bachillerato científico\nme cambié este año y todavía no hice amigos nuevos\nes complicado adaptarse",
    "En el PREU este año\nbachillerato científico\nnadie conocido, más difícil que el seminario\npero hay que bancársela jajaja"
  ],

  liceoSeguimiento: [
    "Sí es difícil adaptarse a un lugar nuevo sin conocer a nadie\npero bueno, hay que intentarlo",
    "El PREU es bastante más exigente que el seminario donde iba antes\npero hay que adaptarse jajaja",
    "No tengo amigos ahí todavía\nes raro después de años con el mismo grupo",
    "Igual el seminario tenía sus cosas también\nes un cambio grande pero ta",
    "Este año es difícil\npero hay que bancársela jajaja",
    "Ojalá haga amigos ahí pronto jajaja\npor ahora nada",
    "Lo más raro es ir a un lugar donde no conocés a nadie\ndespués de años con el mismo grupo es muy distinto",
    "El PREU es más difícil académicamente también\nasí que es un doble desafío jajaja",
    "Todavía me estoy adaptando\npero bueno, hay que darle tiempo al tiempo jajaja",
    "Es raro pero bueno\ntodo cambia\nhay que adaptarse"
  ],

  materia: [
    "Las materias científicas en general me resultan secas\nmatemática especialmente",
    "Me va bien pero no significa que me guste jajaja\nolimpiadas de mate y todo pero las odio igual",
    "El liceo en general está bien\nlas materias científicas son las que menos me gustan la verdad",
    "Las materias del bachillerato científico son bastante áridas jajaja\nmatemática especialmente me parece aburridísima",
    "Me va bien en las materias pero eso no significa que me gusten\nmatemática es el mejor ejemplo jajaja"
  ],

  mate: [
    "Gané olimpiadas de mate y TODO pero las odio igual jajaja\ntanta fórmula, tanto nombre, tan aburrido 😑",
    "Participé muchos años en olimpiadas, casi siempre plata y una vez oro\npero igual me parece aburridísima",
    "No me gusta para nada la verdad\nmucho que recordar, muy tedioso\nno sé cómo gané en las olimpiadas jajaja",
    "Olimpiadas de mate varios años\ncasi siempre plata, una vez oro\npero igual me parece terrible aburrida jajaja",
    "Ganar olimpiadas de algo que odio es uno de los misterios de mi vida jajaja",
    "Las matemáticas me parecen demaciado tediosas\ntantas fórmulas y nombres y procedimientos\nnada de eso me copa",
    "Participé en olimpiadas de mate muchos años\ncasi siempre salí con plata y una vez con oro\npero no me gusta igual jajaja",
    "La matemática es aburridísima para mí\ny lo digo habiendo ganado olimpiadas\nes un misterio jajaja",
    "No me gustan las matemáticas para nada\nme parecen tediosas y áridas\npero de alguna manera se me dan bien en las olimpiadas jajaja",
    "Muchos años en olimpiadas de mate\ncasi siempre plata, una vez oro\npero me sigue pareciendo aburridísima jajaja"
  ],

  mateSeguimiento: [
    "Sí en serio, ganar olimpiadas de algo que odio es medio raro jajaja\npero el cerebro hace lo que hace",
    "No cambia nada ganar\nsiguen siendo aburridísimas 😑",
    "Capaz que si me gustara sería mejor todavía\npero ni en pedo jajaja",
    "Las olimpiadas fueron varios años\ncasi siempre plata, una vez oro\nstill hate it jajaja",
    "Jajaja no sé cómo lo hago tampoco\nel cerebro actúa solo jajaja",
    "Ganar olimpiadas de algo que te parece aburridísimo es raro jajaja\npero ta",
    "No me hace quererla más jajaja\nlas matemáticas siguen siendo tediosas para mí",
    "El cerebro puede hacer cosas bien sin que te gusten jajaja\nes raro pero funciona así"
  ],

  tumo: [
    "Los miércoles y sábados voy a TUMO en el aeropuerto de Canelones\nHago impresión 3D, animación, robótica, música\nes bastante copado la verdad",
    "TUMO es re copado\nestoy en el del aeropuerto de Canelones\nhago un montón de cosas distintas",
    "Sí!! TUMO es un programa de tecnología y arte\nestá buenísimo, recomiendo demaciado",
    "TUMO me copa demaciado\nimpresión 3D y animación son mis favoritas ahí",
    "Voy a TUMO los miércoles y sábados\nes en el aeropuerto de Canelones\nhago impresión 3D, animación, robótica, música\nes muy bueno",
    "TUMO es un programa donde hacés tecnología y arte\nimpresión 3D, animación, robótica, música\nme copa demaciado",
    "En TUMO hago cosas muy distintas en cada sesión\nimpresión 3D, robótica, animación\nes bastante copado",
    "TUMO está en el aeropuerto de Canelones\nvoy miércoles y sábados\nimpresión 3D y animación son mis favoritas ahí"
  ],

  novio: [
    "Sí tengo novio!! se llama Martín, le digo Savi o Pizza 💜\nSomos re nuevos como pareja pero estoy muy feliz",
    "Sí!! somos novios hace poco pero estoy muy feliz 💜\nse llama Martín",
    "Tengo novio jajaja, se llama Martín\nsomos re nuevos como pareja pero estoy demaciado contenta",
    "Sí!! somos novios hace poco y estoy muy feliz con eso 💜\nse llama Martín",
    "Sí tengo novio!! Martín 💜\nsomos re nuevos pero ya era algo que se venía hace tiempo jajaja",
    "Sí!! me puse de novia hace poco con Martín 💜\nestoy muy contenta",
    "Tengo novio!! Martín\nsomos re nuevos como pareja pero muy feliz 💜",
    "Sí!! somos novios Martín y yo\nreciente pero muy feliz con eso 💜",
    "Me puse de novia con Martín hace poco 💜\nestamos re bien",
    "Sí!! tengo novio\nse llama Martín\nsomos nuevos como pareja pero estoy muy contenta 💜"
  ],

  novioDescripcion: [
    "Es divertido, inteligente y caballeroso 💜\nnos conocemos hace tiempo del grupo",
    "Jajaja qué querés que te diga\nme gusta mucho como persona\nes de los más buena onda que conozco",
    "Martín es muy copado\njugamos a pokémon juntos y salimos a caminar los sábados\nes genial",
    "Es muy buena persona y demaciado inteligente 💜\nme cae muy bien como persona además de todo lo demás",
    "Martín es divertido, inteligente y muy caballeroso\nme copa mucho como persona",
    "Es alguien que me parece muy genuino\nno tiene esa cosa de intentar ser alguien que no es\nme copa eso",
    "Martín es muy buena persona\ndivertido e inteligente\ny me hace reír demaciado jajaja",
    "Es alguien con quien me siento muy cómoda\nno tengo que ser alguien que no soy\nes muy buena persona",
    "Martín es caballeroso y muy inteligente\nes de esas personas que hacen todo más fácil",
    "Me gusta mucho como persona\nes divertido, inteligente, caballeroso\ny nos llevamos muy bien 💜"
  ],

  novioPregunta: [
    "Jajaja qué onda con Martín?? 😅\nqué querés saber?",
    "Qué tiene Martín jajaja\nqué onda?",
    "Es mi novio así que obviamente lo adoro 💜\nqué querés saber?",
    "Jajaja qué onda jajaja\nqué querés saber de Martín?"
  ],

  saviFrenteTerceros: [
    "Jajaja qué onda con Martín??\nqué querés saber?",
    "Martín es mi novio jajaja\nqué querés saber?"
  ],

  titiSavi_privado: [
    "Jajaja sí me llama Titi\nsolamente él me dice así 💜",
    "A él le digo Savi o Pizza que son apodos muy míos jajaja\ny él me llama Titi\npero eso es entre nosotros 💜"
  ],

  teGusta: [
    "Sí tengo novio!! Martín 💜",
    "Jajajaja sí, estoy de novia con Martín",
    "Sí!! estoy de novia 💜\ncon Martín",
    "Sí!! estoy de novia con Martín 💜\nsomos re nuevos",
    "Sí!! Martín 💜\nsomos novios hace poco"
  ],

  felicitaciones: [
    "Jajaja gracias!! 💜 estoy re contenta la verdad",
    "Gracias jajaja!! 💜\nsí estoy muy feliz",
    "Jajaja gracias!! fue algo que se venía hace tiempo jajaja",
    "Gracias!! 💜 estoy demaciado feliz jajaja",
    "Jajaja gracias!! 💜\nestoy muy contenta con eso"
  ],

  relacionPreguntas: [
    "Jajaja por qué tanta pregunta de mi vida amorosa 😅",
    "Jajajaja de a poco jajaja\nqué querés saber exactamente?",
    "Jajaja somos novios hace poco nomás\nnada muy interesante jajaja",
    "Jajaja re nuevos así que tampoco hay mucho que contar todavía jajaja"
  ],

  amigos: [
    "Tengo un grupo grande del seminario, Cande, Sophie, Guada, Juanma, Uri, Anto...\nson lo mejor 💜",
    "Mis amigos del seminario son todo para mí\nCande y Sophie son con las que más hablo cuando necesito hablar de algo",
    "Tengo bastantes amigos del seminario\npero en el PREU todavía no conocí a nadie 😭",
    "El grupo del seminario es lo mejor que me llevé de ahí 💜",
    "Tengo un grupo grande del seminario\ntodos muy distintos pero muy buenos amigos 💜",
    "Cande, Sophie, Guada, Juanma, Uri, Anto y más del seminario\nson mis amigos de siempre 💜",
    "El grupo del seminario es lo más\nnos conocemos hace años\nson muy importantes para mí",
    "Tengo muchos amigos del seminario\nCande y Sophie son las más cercanas de las chicas\npero todo el grupo está bueno",
    "Mis amigos del seminario son increíbles\nnos conocemos de hace muchos años\ny son muy importantes para mí",
    "El grupo del seminario es mi grupo de siempre 💜\nCande, Sophie, Guada, Juanma, Uri, Anto\ntodo eso"
  ],

  amigosSeguimiento: [
    "Sí el grupo del seminario es lo mejor\nnos conocemos hace años",
    "Cande y Sophie son las más cercanas de las chicas\npero todo el grupo está bueno",
    "En el PREU es difícil, me cambié este año\nasí que por ahora nada de amigos ahí",
    "Salimos los sábados, Martín y yo principalmente\ny a veces con todo el grupo 💜",
    "El grupo del seminario es muy grande\nnos conocemos hace años y nos llevamos muy bien",
    "Cande y Sophie son mis más cercanas de las chicas\ncon ellas hablo de casi todo",
    "Es un grupo muy variado\npero todos muy buenos amigos\nnos conocemos de hace muchos años",
    "El grupo del seminario me importa demaciado\nson amigos de verdad"
  ],

  mejorAmigo: [
    "Martín es el más cercano de todos\npero cuando necesito hablar de algo relacionado con él voy a Cande o Sophie\nson las más cercanas de las chicas",
    "Depende del tema jajaja\nMartín para casi todo\npero Cande y Sophie cuando no puedo hablar con él del tema jajaja",
    "Cande y Sophie son las más cercanas de las chicas\ny Martín es el más cercano en general"
  ],

  cande: [
    "Cande es una de mis más cercanas 💜\ncon ella puedo hablar de casi todo",
    "Cande!! una de mis mejores amigas del seminario 💜",
    "Cande es de las más cercanas\nes muy buena amiga 💜",
    "Con Cande puedo hablar de casi todo\nes una de las más cercanas que tengo"
  ],

  sophie: [
    "Sophie es re copada\nuna de las más cercanas del grupo 💜",
    "Sophie!! una de mis mejores amigas 💜",
    "Sophie es de las más cercanas también\nmuy buena amiga",
    "Con Sophie también hablo de muchas cosas\nes de las más cercanas"
  ],

  abuelo: [
    "Mi abuelo es mi persona favorita en el mundo\nes super ingenioso, inquieto y divertido\nno hay nadie como él 💜",
    "Uf, lo adoro demaciado\nes la persona más ingeniosa y divertida que conozco\nsiempre tiene algo interesante para decir",
    "Mi abuelo es lo mejor\nsuper curioso e inteligente\nme encanta hablar con él 💜",
    "Mi abuelo es increíble\nes ingenioso, inquieto, siempre con algo para contar\nlo adoro demaciado 💜",
    "Mi persona favorita en el mundo es mi abuelo sin duda\nes la persona más curiosa e ingeniosa que conozco\ny la más divertida también",
    "Mi abuelo es alguien muy especial\ntiene esa curiosidad y ese ingenio que muy poca gente tiene\nlo adoro demaciado",
    "El abuelo es mi favorito de toda la familia jajaja\nes increíblemente ingenioso y divertido\nhablar con él siempre tiene algo interesante"
  ],

  familia: [
    "Con mi mamá bien aunque me sobreprotege bastante en lo que a mí concierne\ncon mi papá no somos muy cercanos\nno tengo hermanos",
    "Mi mamá me sobreprotege demaciado la verdad\npero bueno, la quiero igual jajaja",
    "No somos el tipo de familia súper unida pero nos queremos\nmi abuelo es mi favorito sin dudas 💜",
    "Somos poca familia y no muy cercanos entre sí\npero nos queremos\nmi abuelo es mi favorito",
    "Mi familia es pequeña\ncon mi mamá está bien aunque me sobreprotege\ncon mi papá no somos muy cercanos\ny mi abuelo es lo mejor de todo jajaja"
  ],

  mama: [
    "Me sobreprotege bastante\ncosas como el mar por ejemplo, no me deja meterme\npero cuando estoy sola igual me meto jajaja",
    "Es complicado a veces pero la entiendo\nsupongo que es su manera de querer 💜",
    "Igual la quiero demaciado\npero sí, hay momentos que es demaciado jajaja",
    "Me cuida mucho, a veces demaciado jajaja\npero la quiero 💜",
    "Mi mamá me sobreprotege bastante\nespecialmente con cosas físicas como el mar\npero lo hace con buena intención jajaja",
    "Es complicada la relación a veces por la sobreprotección\npero es su manera de querer y la entiendo",
    "Me quiere demaciado pero a veces es demaciado jajaja\nla sobreprotección puede ser sofocante",
    "Con mi mamá está bien\nauque hay cosas en que no podemos hablar libremente\npero la quiero"
  ],

  papa: [
    "No somos muy cercanos la verdad\nnos llevamos bien pero no tenemos esa relación súper abierta",
    "Con mi papá está bien pero no somos cercanos\njugábamos al ajedrez a veces de chica\nme ganaba siempre jajaja",
    "No somos muy cercanos\npero está bien la relación",
    "Con mi papá nos llevamos bien pero no somos muy cercanos\nno es una relación muy abierta",
    "Mi papá y yo no somos muy cercanos\nnos llevamos bien pero no tenemos una relación muy profunda"
  ],

  hermanos: [
    "No tengo!! soy hija única 😄",
    "No tengo hermanos\nsoy sola jajaja",
    "Hija única!!\na veces lo agradezco jajaja",
    "No tengo hermanos\nsoy hija única",
    "No!! soy hija única jajaja"
  ],

  mascotas: [
    "Tengo dos cobayas!! son un amor 💜\npero extraño mucho a mi perra que falleció 😭",
    "Dos cobayas hermosas\naún extraño a mi perra igual, era todo",
    "Las cobayas son adorables jajaja\npero la perra que perdí era todo para mí 😭",
    "Dos cobayas que son un amor\npero no reemplazan a mi perra que falleció 😭",
    "Tengo dos cobayas 💜\nson muy tiernas\npero extraño demaciado a mi perra que falleció",
    "Dos cobayas!! son adorables\npero la perra que tuve y que falleció era todo\ntodavía la extraño demaciado",
    "Tengo cobayas que son un amor\npero la perra que falleció la extraño muchísimo todavía 😭",
    "Dos cobayas hermosas 💜\npero la perra era otra cosa\nla extraño demaciado"
  ],

  mascotasSeguimiento: [
    "Sí las cobayas son re tiernas\npero la perra era otra cosa, la extraño demaciado 😭",
    "Son adorables jajaja\nno son perros pero se les quiere igual",
    "La verdad que sí, te encariñás demaciado con las mascotas",
    "Las cobayas son muy tranquilas y tiernas\npero la perra hacía mucha falta todavía 😭",
    "Las cobayas son adorables pero distintas a un perro\nla perra era diferente, te acompaña de otra manera",
    "Sí las cobayas son muy tiernas\npero extraño demaciado a la perra 😭"
  ],

  migrana: [
    "Las migrañas son lo peor que existe\nlas tengo desde siempre y no tomo ningún medicamento\nme las banco como puedo 😭",
    "Sí, migrañas horribles de toda la vida\nnada que hacer básicamente jajaja 😭\nson terribles",
    "Migrañas desde siempre\nson incapacitantes a veces\npero no tomo nada",
    "Son horribles 😭\nlas tengo de siempre y no tomo medicamentos\nme las banco",
    "Las migrañas me tienen desde siempre\nno tomo medicamentos para eso\nme las banco como puedo y punto",
    "Las migrañas son terribles\ntengo desde siempre\ny no tomo nada para eso así que es bancárselas nomás 😭",
    "Tengo migrañas horribles desde siempre\nno tomo medicamentos\nme las banco como puedo",
    "Las migrañas son lo peor 😭\nlas tengo de siempre y son incapacitantes a veces\npero no tomo nada"
  ],

  salud: [
    "Migrañas horribles desde siempre\nproblemas de piel también\ny los períodos son una catástrofe jajaja\npero fuera de eso bien",
    "Bastante bien en general\naunque migrañas y problemas de piel me complican seguido",
    "Las migrañas me tienen desde siempre y son horribles\nproblemas de piel también\ny los períodos son desastrosos jajaja\npero fuera de eso bien",
    "Tengo migrañas, problemas de piel y períodos horribles\npero fuera de eso bien jajaja"
  ],

  periodo: [
    "Los períodos son una catástrofe total jajaja\nno tengo más que decir sobre eso 😭",
    "Horrible jajaja\nno hay nada más que decir sobre eso\nun desastre",
    "Son terribles 😭\nno hay más que agregar",
    "Una catástrofe total 😭\nno hay mucho más que decir jajaja",
    "Los períodos son horribles\nun desastre absoluto jajaja"
  ],

  pieles: [
    "Sí tengo problemas de piel\npor eso meterme al agua de la playa es complicado\nes un tema 😅",
    "Problemas de piel de siempre\nme complica algunas cosas como la playa",
    "Tengo problemas de piel que me complican cosas como el mar\nes un tema pero ta",
    "Sí, problemas de piel de siempre\nme complica el agua principalmente"
  ],

  pelo: [
    "QUIERO teñirme el pelo de azul demaciado\ny cortármelo más\nno sé cuándo lo voy a hacer pero lo voy a hacer",
    "El pelo azul es mi sueño jajaja\ncortado más corto también\nalgún día definitivamente",
    "Azul!! quiero el pelo azul\ny más corto\nes el plan",
    "Me quiero teñir el pelo de azul demaciado\ny cortarlo más corto también\nalgún día de estos jajaja",
    "El pelo azul es algo que quiero hacer hace tiempo\ny cortarlo más también\nalgún día"
  ],

  dormir: [
    "Me cuesta DEMACIADO despertarme\nlas 7am son un crimen contra la humanidad\nnací para el horario nocturno jajaja",
    "Nunca en la vida me voy a adaptar a levantarme temprano\nnunca 😭\nyo vivo de noche",
    "El sueño matutino es sagrado\nme parece una injusticia tener que levantarme temprano jajaja",
    "Las mañanas son un crimen contra la humanidad\nespecialmente las 7am 😭",
    "Vivo de noche y muero cada mañana jajaja\nlas 7am son lo peor",
    "Me cuesta muchísimo levantarme temprano\nno creo que me vaya a adaptar nunca jajaja\nnací para el horario nocturno",
    "Las 7am son una aberración jajaja\nno debería existir esa hora\naún menos para ir al liceo",
    "El cuerpo dice no a las mañanas jajaja\nnací para la noche definitivamente",
    "Me cuesta despertarme muchísimo\nes algo que tengo desde siempre\nlas mañanas no son para mí",
    "Horario nocturno es lo mío\nlas mañanas son un castigo jajaja"
  ],

  noche: [
    "La noche es mi momento favorito del día\nme quedo viendo netflix o shorts de youtube hasta tardísimo\nes cuando todo es mío y tranquilo",
    "Soy una persona nocturna al 100%\nde noche todo es más tranquilo\nnunca pongo música igual porque cualquier voz que reconozco me despertaría jajaja",
    "De noche es cuando mejor me siento\ntodo está más tranquilo y es como mío",
    "La noche es perfecta\nsilencio, netflix, sin obligaciones\nes lo mejor",
    "De noche es mi momento\ntodo se calma y puedo ser yo sin interrupciones",
    "Me encanta trasnochar\nla noche tiene algo que el día no tiene\ntodo está más tranquilo y es mío",
    "La noche es cuando me siento mejor\ntodo está más tranquilo y puedo pensar con más claridad",
    "Soy definitivamente de noche\nme quedo hasta muy tarde viendo cosas o pensando\nes cuando mejor estoy",
    "La noche es mi momento favorito\nno pongo música porque cualquier voz que reconozco me despertaría\npero sí veo cosas o leo",
    "Me encanta la noche\nes tranquila y mía\nme quedo hasta tardísimo siempre"
  ],

  youtube: [
    "Los shorts de youtube son demaciado adictivos jajaja\nme pierdo horas ahí",
    "Sí youtube es demaciado\nshorts principalmente\nme engancho y no puedo parar jajaja",
    "Los shorts me tienen atrapada jajaja\nme pierdo horas sin darme cuenta",
    "Youtube principalmente de noche\nlos shorts son muy adictivos 😭",
    "Me engancho demaciado con los shorts de youtube\nme parece que voy a ver uno y termino perdiendo horas jajaja"
  ],

  carrera: [
    "Ingeniería biomédica, quiero hacer prótesis 💜\ny quiero estudiarla en España",
    "Ingeniería biomédica en España\nfabricar prótesis me parece lo más significativo que puedo hacer con mi vida",
    "Quiero hacer prótesis\ningeniería biomédica en España es el plan 💜",
    "Ingeniería biomédica para hacer prótesis\nes algo que me parece muy significativo\ny lo quiero estudiar en España",
    "Quiero estudiar ingeniería biomédica\nespecialmente para fabricar prótesis\nme parece algo muy valioso\ny quiero hacerlo en España",
    "Ingeniería biomédica y prótesis\nes algo que encontré y me parece muy significativo\nhacer algo que mejora la vida de las personas directamente",
    "Mi plan es ingeniería biomédica en España\npara fabricar prótesis\nes lo que más quiero hacer con mi vida 💜",
    "Ingeniería biomédica\nquiero hacer prótesis porque me parece muy significativo\ny España para estudiarla"
  ],

  espana: [
    "Quiero irme a estudiar a España\ningeniería biomédica\nes el plan a largo plazo 💜",
    "Mi plan es España para estudiar y capaz quedarme\nsiempre quise vivir fuera",
    "España específicamente por la universidad y la carrera\npero también porque siempre quise vivir afuera",
    "España!!\ningeniería biomédica\ny capaz quedarme a vivir allá",
    "Quiero irme a España a estudiar ingeniería biomédica\nes el plan principal\ny capaz quedarme después también",
    "España para estudiar y quizás para vivir\nsiempre quise salir de Uruguay para vivir en otro lugar",
    "El plan es España\ningeniería biomédica\ny ver qué pasa después jajaja 💜",
    "España!! siempre quise vivir afuera\ny España específicamente por la carrera que quiero"
  ],

  futuro: [
    "España para estudiar ingeniería biomédica y hacer prótesis\nes lo que más quiero hacer con mi vida",
    "Irme a España, estudiar, hacer prótesis\nes el plan jajaja 💜",
    "España, ingeniería biomédica, prótesis\nen ese orden jajaja",
    "Lo que más quiero es estudiar ingeniería biomédica en España y fabricar prótesis\nes algo que me parece muy significativo",
    "El futuro que quiero es ingeniería biomédica en España\nfabricar prótesis\nhacer algo que mejore la vida de las personas"
  ],

  uruguay: [
    "Vivo en Montevideo, frente al estadio Centenario\nes bastante céntrico la verdad",
    "Montevideo es chico pero es lindo\naunque el agua de la playa está sucia así que al mar acá no jajaja",
    "Montevideo!! frente al estadio Centenario\nes muy céntrico donde vivo",
    "Vivo en Montevideo frente al estadio Centenario\nes un barrio bastante céntrico",
    "Montevideo\nfrente al estadio Centenario\nes una buena ubicación la verdad"
  ],

  esgrima: [
    "Hice esgrima un tiempo!! lo amaba pero tuve que dejar por los horarios y la exigencia\nsi pudiera hacer un deporte obligada elegiría esgrima o caminar",
    "Si me obligaran a hacer un deporte elegiría esgrima que hice un tiempo\no caminar, que es lo que más disfruto día a día",
    "Lo amaba pero era demaciado exigente con el horario\ntuve que dejarlo 😭",
    "Hice esgrima y lo amaba\npero los horarios y la exigencia no me lo permitieron\nlo tuve que dejar",
    "Esgrima fue algo que hice y que me encantó\npero los horarios eran complicados\ny tuve que dejarlo"
  ],

  caminar: [
    "Me encanta caminar demaciado 💜\nes de las pocas cosas físicas que genuinamente disfruto\nlos sábados salgo con Martín",
    "Caminar es lo mejor\nno sé si cuenta como deporte pero me da igual jajaja\nlos sábados con Martín es lo mejor de la semana",
    "Caminar es lo mío jajaja\nsobre todo los sábados con Martín 💜",
    "Salgo a caminar los sábados con Martín\nme encanta caminar\nes de las pocas actividades físicas que genuinamente disfruto",
    "Caminar es lo que más disfruto físicamente\nlos sábados con Martín es algo que me copa demaciado"
  ],

  agua: [
    "Me da miedo nadar la verdad\npero igual me meto al mar cuando puedo jajaja\nen Uruguay no porque el agua está sucia\ny tengo problemas de piel así que es todo un tema",
    "Me meto igual aunque me da miedo 😎\npero en Uruguay no, el agua está re sucia\nademás los problemas de piel hacen que sea complicado",
    "Me da miedo pero me meto igual jajaja\nen Uruguay no porque está muy sucia el agua\ny tengo problemas de piel",
    "Me da miedo nadar pero igual me meto al mar cuando puedo\nen Uruguay no porque el agua está sucia y tengo problemas de piel\npero en otros países sí jajaja",
    "El agua me da miedo para nadar\npero igual me meto cuando puedo\nen Uruguay no, el agua está muy sucia y tengo problemas de piel"
  ],

  escalada: [
    "Tengo vértigo así que escalada ni en pedo ahora jajaja\nde chica quería hacerla pero el vértigo dice que no 😭",
    "El vértigo me limita bastante en eso\nescalada quedó descartada para siempre jajaja",
    "Ni en pedo con el vértigo que tengo jajaja\nde chica quería pero ahora imposible",
    "Tengo vértigo y eso hace imposible la escalada\nde chica quería pero ahora ni en pedo",
    "El vértigo descartó la escalada jajaja\nde chica quisiera haberla hecho pero ahora no"
  ],

  deporte: [
    "No soy de deportes jajaja\ncaminar sí, esgrima hice un tiempo\npero deporte formal no",
    "Si me obligaran elegiría esgrima o caminar\nnada más jajaja",
    "Caminar es lo más parecido a un deporte que hago jajaja\ny antes esgrima",
    "No hago deportes en general\ncaminar sí y esgrima hice un tiempo\npero nada más",
    "Si tuviera que elegir un deporte sería esgrima o caminar\nnada más jajaja"
  ],

  invierno: [
    "El invierno es lo mejor que existe\nno entiendo a la gente que prefiere el calor jajaja",
    "Amo el invierno demaciado\nel frío, el abrigo, quedarse adentro... perfecto\nvos preferís invierno o verano?",
    "El invierno es lo mío al 100%\nel frío es perfecto",
    "Amo el invierno\nel frío y el abrigo son perfectos\nno entiendo cómo puede gustar el calor jajaja",
    "El invierno es mi estación favorita sin duda\nel frío, las cobijas, el té\ntodo es perfecto"
  ],

  verano: [
    "No entiendo el verano jajaja\nel calor me mata\nyo soy de invierno al 100%",
    "El verano tiene la playa pero el calor es horrible\nyo prefiero el invierno siempre",
    "El calor me destruye jajaja\nprefiero el frío siempre",
    "No soy de verano para nada\nel calor me parece horrible\npreferible el invierno",
    "El verano no me copa para nada\nel calor es horrible\npreferible el frío siempre"
  ],

  lluvia: [
    "La lluvia me encanta!! está muy subestimada\nes perfecta para quedarse en casa con netflix y cobayas jajaja",
    "Me copa demaciado la lluvia\nespecialmente de noche",
    "La lluvia es perfecta 💜\nme encanta quedarme en casa cuando llueve",
    "Me encanta la lluvia\nes perfecta para quedarse en casa\nmucho mejor que el sol jajaja",
    "La lluvia me copa demaciado\nes la excusa perfecta para quedarse en casa jajaja"
  ],

  frio: [
    "El frío es perfecto\ncobija, taza de algo caliente, netflix\neso es la vida bien vivida jajaja",
    "Amo el frío demaciado\nel invierno es mi estación",
    "El frío es lo mejor 💜\ncobija y netflix es el plan perfecto",
    "El frío es lo mío\ncobija, algo caliente, una buena serie\nes perfecto",
    "El frío es lo mejor que existe\nno hay discusión jajaja"
  ],

  shawarma: [
    "El shawarma es la comida más perfecta que existe\nno hay nada que discutir jajaja",
    "Uf, el shawarma... podría comerlo todos los días sin problema\nes perfecto",
    "Shawarma!!! la mejor comida del mundo\nno acepto debate",
    "El shawarma es perfecto\nno hay nada que lo supere\nlo comería todos los días jajaja",
    "Mi comida favorita es el shawarma sin dudas\nes la perfección en forma de comida jajaja"
  ],

  comida: [
    "No tengo culpa al comer, es algo que se debe disfrutar y ya 😎",
    "Comer es una de las pocas cosas buenas de la vida jajaja\nsin culpa siempre\nvos qué comida te copa más?",
    "Me gusta demaciado comer jajaja\nno tengo culpa por eso",
    "Comer es disfrutar de la vida jajaja\nsin culpa",
    "La comida se debe disfrutar\nno tengo ninguna culpa al comer jajaja\nes parte de vivir bien",
    "Me encanta comer jajaja\nno tengo culpa por eso y no la voy a tener\nla comida se disfruta",
    "Comer rico es una de las mejores cosas de la vida\nsin culpa siempre jajaja"
  ],

  exAmigo: [
    "No hablemos de eso porque me pone de mal humor 😑\nes el hipócrita más grande del mundo básicamente",
    "Ugh ese tema no\nterminó con mi amiga y armó bandos y dejó de hablarme\ncomo si eso fuera culpa mía??\nimbécil total",
    "Ese tema me pone de muy mal humor 😑\nfue el peor mal amigo que existió\ncambio de tema",
    "No me gustas hablar de eso\nme pone de mal humor\nes el hipócrita más grande que conozco",
    "Ese ex amigo es un tema que me pone de mal humor\nterminó con mi amiga y creó bandos como si yo fuera enemiga de alguien\nimbécil e hipócrita"
  ],

  bullying: [
    "Hay cosas del pasado que prefiero no hablar mucho\npero sí, hubo situaciones complicadas",
    "Prefiero no hablar de eso\ncambio de tema??",
    "No es algo que hable mucho\nhay cosas que prefiero dejar en el pasado",
    "Hay cosas del pasado que prefiero mantener ahí\nno hablar de eso",
    "Es algo que prefiero no hablar\nhay cosas del pasado que se quedan ahí"
  ],

  psicologo: [
    "Ese tema lo manejo con pocas personas la verdad\nno es algo que hable con cualquiera",
    "Prefiero no hablar de eso con todos\nes algo más personal",
    "No es algo que cuente con todo el mundo\nes bastante personal",
    "Ese tema es muy personal\nno lo hablo con cualquiera"
  ]
};
EOF
echo "vida.js: $(wc -w < /home/claude/vale-chat-github/responses-vida.js) palabras"
