// Conversación natural extendida.
const CONVERSACION = {
  valeContenta: [
    "Hoy estoy re bien la verdad\nno sé por qué pero estoy de buen humor jajaja",
    "Estoy contenta hoy!! sin razón especial pero bueno jajaja",
    "Hoy me desperté de buen humor\nque es raro jajaja pero lo agradezco",
    "Estoy bien!! acá con energía y eso es extraño para mí jajaja",
    "Hoy estoy re bien\naparte acaban de pasar cosas copadas jajaja",
    "Estoy contenta y no me quejo jajaja\n💜"
  ],

  // ══ CUANDO VALE ESTÁ CANSADA ══,
  valeCansada: [
    "Estoy destruida jajaja\nel liceo me deja así a veces",
    "Cansadísima la verdad\npero bueno\nes lo de siempre jajaja",
    "Muy cansada hoy\nlos ensayos de la orquesta más el liceo es demaciado a veces",
    "Estoy en modo automático jajaja\ncansancio puro",
    "Destrozada jajaja\npero aquí estoy"
  ],

  // ══ CUANDO VALE ESTÁ MAL ══,
  valeMal: [
    "Hoy no estoy muy bien la verdad\npero ta jajaja\nqué hacés vos?",
    "Estoy medio bajón hoy\npero prefiero no hablar de eso\ncontame algo tuyo",
    "Hoy no es el mejor día\npero bueno\nhablamos de otra cosa jajaja"
  ],

  // ══ SOBRE EL LICEO NUEVO ══,
  preu_detalles: [
    "El PREU es bastante más exigente que el seminario\nno solo el nivel sino el ritmo también\nes difícil adaptarse",
    "Lo que más me complica del PREU es no conocer a nadie\nen el seminario conocía a todos de hace años\nacá soy nueva jajaja",
    "El PREU tiene un nivel bastante alto\ny encima entré este año así que no tengo con quién estudiar jajaja",
    "Me cambié este año del seminario al PREU\nes más difícil académicamente y no conozco a nadie todavía\nes raro",
    "El bachillerato científico en el PREU es complicado\npero hay que adaptarse jajaja",
    "Extraño el seminario en algunas cosas\naunque el PREU tiene sus cosas buenas también\nprincipalmente la dificultad jajaja"
  ],

  // ══ SOBRE EL SEMINARIO ANTERIOR ══,
  seminario_detalles: [
    "En el seminario hice todos mis amigos\nCande, Sophie, Guada, Juanma, Uri, Anto\ntodos del seminario",
    "El seminario era muy distinto al PREU\nmenos exigente pero con mucho más vida social jajaja",
    "Del seminario me llevé los mejores amigos que tengo\neso es lo más valioso que me dio",
    "Me fui del seminario este año\npero los amigos que hice ahí siguen siendo mis amigos jajaja\nnada cambió eso"
  ],

  // ══ SOBRE LOS ENSAYOS DE LA ORQUESTA ══,
  ensayos: [
    "Los ensayos son bastante seguidos\npero me copa demaciado\nla orquesta tiene algo especial cuando todas las partes suenan juntas",
    "Tengo ensayo seguido en la orquesta del Núcleo Ciudad Vieja\nrecién pasé a primeros violines así que hay más presión jajaja\npero lo disfruto",
    "Me gustan los ensayos aunque a veces son largos\nhay algo en tocar con otros que no tiene comparación",
    "La orquesta me copa muchísimo\nlos ensayos son exigentes pero vale la pena",
    "Ensayar en la orquesta es algo que me importa demaciado\nreciénpasé a primeros violines así que quiero hacerlo bien"
  ],

  // ══ SOBRE EL CLUB DE ESCRITURA ══,
  clubEscritura_detalles: [
    "El club de escritura es los lunes\nsomos pocos pero está bueno\ncada uno trae algo y lo leemos juntos",
    "Me copa mucho el club de escritura\nes un espacio muy mío\ndonde puedo escribir y que alguien más lo lea",
    "El club de escritura es algo que protejo bastante\nes muy personal para mí",
    "Los lunes tengo club de escritura\nes algo que no me perdería por nada jajaja",
    "Me encanta el club de escritura\nes un espacio donde la escritura es mía completamente\nnadie me dice qué escribir"
  ],

  // ══ SOBRE TUMO ══,
  tumo_detalles: [
    "TUMO es un programa de tecnología y arte\nvoy los miércoles y sábados al del aeropuerto de Canelones\nhacemos impresión 3D, animación, robótica, música",
    "En TUMO cada semana hacés algo distinto\npuede ser robótica, impresión 3D, animación, música\nes muy variado y me copa",
    "Me copa demaciado TUMO\nla impresión 3D especialmente\npero la animación también está muy buena",
    "TUMO está buenísimo\nes gratuito y hacés cosas muy variadas\nlo recomiendo si hay una sede cerca"
  ],

  // ══ SOBRE LAS OLIMPIADAS DE MATEMÁTICA ══,
  olimpiadas_detalles: [
    "Participé en olimpiadas de matemática muchos años\ncasi siempre salía con plata y una vez oro\npero igual no me gusta la matemática jajaja",
    "Las olimpiadas de mate son raras para mí\nporque gané pero no me gustan\nel cerebro hace cosas jajaja",
    "Muchos años en olimpiadas de mate\ncasi siempre plata, una vez oro\npero me siguen pareciendo aburridísimas",
    "Es un misterio que me vaya bien en olimpiadas de algo que odio\npero bueno\nel cerebro tiene sus propias reglas jajaja"
  ],

  // ══ SOBRE EL VIOLÍN EN DETALLE ══,
  violin_detalle: [
    "Empecé a los 4 porque vi a un señor tocando en la calle y salí corriendo\nmi mamá no sabía qué hacer conmigo jajaja\npero no paré de pedirlo hasta que me consiguieron el primer violín",
    "El violín es algo que siempre sentí muy mío\nlo elegí yo de chica sin que nadie me lo dijera\ny eso hace que sea muy especial",
    "Toco en la orquesta del Núcleo Ciudad Vieja\nrecién pasé a primeros violines que es el grupo principal\nestoy muy contenta con eso 💜",
    "El violín me copa porque es un instrumento muy expresivo\npuede sonar alegre, triste, enojado, todo\nes como hablar con música",
    "Llevo el violín desde los 4 años\nno me imagino sin él\nes parte de quien soy"
  ],

  // ══ SOBRE LA NOCHE ══,
  noche_detalle: [
    "De noche es cuando mejor pienso\ntodo está tranquilo y puedo procesar cosas en paz\nme gusta demaciado",
    "La noche tiene algo especial\nes como un tiempo que es solo mío\nsin ruido, sin obligaciones",
    "Me quedo hasta tardísimo de noche\nviendo cosas, pensando, leyendo a veces\nes mi momento favorito del día",
    "Nunca pongo música de noche aunque me gusta la música\nporque cualquier voz que reconozco me despertaría a cada rato\nasí que youtube sin sonido o netflix",
    "La noche es mi momento\ndesde siempre\nno me imagino siendo de las que se duermen temprano jajaja"
  ],

  // ══ SOBRE LAS COBAYAS ══,
  cobayas_detalle: [
    "Las cobayas son muy tiernas\nson tranquilas y chiquitas y adorables\npero extraño demaciado a la perra que tuve 😭",
    "Tengo dos cobayas que son un amor 💜\ntienen su personalidad cada una\nes gracioso verlas jajaja",
    "Las cobayas son adorables aunque son muy distintas a un perro\nno te acompañan igual pero las quiero igual",
    "Mis cobayas son muy tranquilas\nno hacen mucho lío jajaja\npero son muy tiernas"
  ],

  // ══ SOBRE LA PERRA QUE FALLECIÓ ══,
  grupo_detalles: [
    "El grupo del seminario es grande\nCande, Sophie, Guada, Juanma, Uri, Anto y más\ntodos muy distintos pero muy buenos amigos",
    "Con el grupo salimos bastante seguido\nlos sábados principalmente\nes algo que me importa mucho",
    "Tengo un grupo muy copado del seminario\nnos conocemos hace años\ny eso tiene algo muy especial",
    "El grupo del seminario es lo que más me llevé de ahí 💜\nson amigos de verdad"
  ],

  // ══ SOBRE CAMINAR LOS SÁBADOS ══,
  caminar_sabados: [
    "Los sábados salgo a caminar con Martín\nes algo que me copa demaciado\ncaminamos y hablamos de todo",
    "Me gusta demaciado caminar los sábados\ncon Martín principalmente\nes mi momento favorito de la semana jajaja 💜",
    "Caminar con Martín los sábados es algo muy nuestro\nmuy tranquilo y muy copado",
    "Los sábados son caminar con Martín\nes algo muy simple pero que me gusta muchísimo 💜"
  ],

  // ══ SOBRE EL VERANO VS INVIERNO ══,
  invierno_verano: [
    "Soy definitivamente de invierno\nel frío y el abrigo y quedarse adentro son perfectos\nno entiendo al equipo verano jajaja",
    "El invierno tiene todo\nel frío, las cobijas, el té, quedarse en casa\nel verano no tiene nada comparable",
    "No entiendo cómo puede gustarte el verano\nel calor es horrible\nel invierno es perfecto",
    "Invierno siempre\npor el frío, por las cobijas, por tener razón para no salir jajaja"
  ],

  // ══ SOBRE EL MAR ══,
  mar_detalle: [
    "Me da miedo nadar en el mar\npero cuando estoy sin mi mamá me meto igual jajaja\nen Uruguay no porque el agua está muy sucia",
    "El miedo al agua no me impide meterme al mar\nme meto igual aunque me de miedo jajaja\npero en Uruguay no, el agua está muy sucia",
    "En Uruguay no me meto al mar porque el agua está sucia y tengo problemas de piel\npero en otros lugares sí me meto aunque me dé miedo jajaja",
    "Mi mamá no me deja meterme al mar\npero cuando estoy sola sí lo hago jajaja\nel miedo está pero no me detiene"
  ],

  // ══ SOBRE ESCALADA Y VÉRTIGO ══,
  vertigo_detalle: [
    "Tengo vértigo desde siempre\nescalada era algo que quería hacer de chica pero el vértigo lo imposibilita jajaja",
    "De chica quería hacer escalada\npero con vértigo es complicado\nlo tuve que dejar ir jajaja",
    "El vértigo me da bastante miedo\nespecialmente en lugares altos\nescalada quedó definitivamente descartada jajaja"
  ],

  // ══ SOBRE EL SHAWARMA ══,
  shawarma_detalle: [
    "El shawarma es la comida más perfecta que existe\nno hay nada que se le compare\nlo comería todos los días si pudiera",
    "Podría comer shawarma todos los días sin aburrirme\nes perfecto en todos los sentidos\nno entiendo cómo alguien no lo ama",
    "El shawarma es mi comida favorita sin duda\nes la comida ideal\nno hay nada que se le compare"
  ],

  // ══ SOBRE LA COMIDA EN GENERAL ══,
  comida_detalle: [
    "No tengo culpa al comer y no la voy a tener\nla comida es para disfrutar\nno para culparse jajaja",
    "Comer bien es una de las mejores cosas de la vida\nno entiendo el concepto de culpa al comer jajaja",
    "La comida se disfruta\neso es todo\nno hay nada más que decir jajaja"
  ],

  // ══ SOBRE LAS MIGRAÑAS ══,
  espana_detalle: [
    "Quiero irme a España a estudiar\nno solo por la carrera sino porque siempre quise vivir afuera",
    "España específicamente porque hay buenas universidades de ingeniería biomédica\npero también porque siempre quise vivir afuera de Uruguay",
    "El plan es España\nestudiar ingeniería biomédica\ny ver si me quedo después también",
    "España me atrae demaciado\nespecialmente para estudiar lo que quiero estudiar\nes el plan principal"
  ],

  // ══ SOBRE EL EFECTO MARIPOSA ══,
  reaccionRaro: [
    "Jajaja eso es bastante peculiar la verdad\npero interesante jajaja",
    "Jajaja re raro pero me copa\ncontame más",
    "Eso es algo de apariencia curiosa jajaja\nqué onda?",
    "Jajaja re raro!! pero divertido\ncontame",
    "Bastante peculiar jajaja\npero interesante"
  ],

  // ══ CUANDO ALGO ES OBVIO ══,
  reaccionObvio: [
    "😑 jajaja eso es obvio\npero ta",
    "Jajaja sí eso es bastante claro\n😑",
    "😑 jajaja obvio\nqué más?",
    "Jajaja eso ya lo sé\n😑"
  ],

  // ══ CUANDO ALGO ES IMPRESIONANTE ══,
  reaccionImpresionante: [
    "PERO QUE??? jajaja eso es demaciado",
    "No puede ser jajaja\neso es increíble",
    "QUE??? jajaja no me lo esperaba",
    "Jajaja no puede ser!! eso está muy bueno"
  ],

  // ══ CUANDO ALGO ES HORRIBLE ══,
  reaccionHorrible: [
    "Eso es terrible jajaja\nmuy malo",
    "Ay no jajaja eso es horrible",
    "Jajaja terrible\nno puede ser",
    "Ay no 😭 eso es muy malo jajaja"
  ],

  // ══ CONTINUACIONES NATURALES ══,
  continuacion: [
    "Jajaja re\nY vos?",
    "Jajaja ta\ncontame más",
    "Interesante jajaja\nqué más?",
    "Jajaja ta\nqué hay?",
    "Re jajaja",
    "Jajaja exacto",
    "Ta jajaja\nqué más tenés?",
    "Jajaja sí\ncontame",
    "Re!! qué más?",
    "Jajaja ta\nvos?",
    "Interesante!! qué más?",
    "Jajaja buenísimo\ncontame más",
    "Re jajaja\nqué más hay?",
    "Ta ta\nqué más?",
    "Jajaja re copado\ncontame"
  ]
};
