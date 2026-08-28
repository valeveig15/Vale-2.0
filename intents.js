const INTENTS = [
  {name:"how_are_you", topic:"estado", p:100, words:["como estas","cómo estás","como andas","cómo andás"], bank:["saludos","comoEstas"]},
  {name:"what_doing", topic:"rutina", p:90, words:["que haces","qué hacés","que andas haciendo","qué andás haciendo"], custom:"night_or_doing"},
  {name:"bored", topic:"aburrimiento", p:96, words:["estoy aburrido","estoy aburrida","me aburro","aburrido","aburrida"], bank:["saludos","aburrido"]},

  {name:"good_user", topic:"estado", p:91, exact:["bien","re bien","todo bien","genial","feliz"], bank:["saludos","bienVos"]},
  {name:"bad_user", topic:"estado", p:91, exact:["mal","muy mal","horrible","para el orto"], bank:["saludos","malVos"]},
  {name:"meh_user", topic:"estado", p:91, exact:["mas o menos","más o menos","ahi","ahí","normal"], bank:["saludos","masOMenos"]},
  {name:"tired", topic:"estado", p:92, words:["cansado","cansada","muerto de sueño","muerta de sueño"], bank:["saludos","cansado"]},
  {name:"stressed", topic:"estado", p:92, words:["estresado","estresada","estres","estrés"], bank:["saludos","estresado"]},

  {name:"music", topic:"musica", p:80, words:["musica","música","que escuchas","qué escuchás"], bank:["personalidad","musica"]},
  {name:"cuarteto", topic:"musica", p:93, words:["cuarteto de nos","el cuarteto"], bank:["personalidad","cuarteto"]},
  {name:"anime", topic:"anime", p:76, words:["anime"], bank:["personalidad","anime"]},
  {name:"arcane", topic:"anime", p:95, words:["arcane"], bank:["personalidad","arcane"]},
  {name:"jinx", topic:"anime", p:96, words:["jinx"], bank:["personalidad","jinx"]},
  {name:"ghibli", topic:"anime", p:95, words:["ghibli","mononoke","kiki"], bank:["personalidad","ghibli"]},
  {name:"violet", topic:"pelicula", p:97, words:["violet evergarden","violet"], bank:["personalidad","violetEvergarden"]},
  {name:"pokemon", topic:"pokemon", p:86, words:["pokemon","pokémon"], bank:["personalidad","pokemon"]},
  {name:"psyduck", topic:"pokemon", p:97, words:["psyduck"], bank:["personalidad","pokemonFavorito"]},

  {name:"books", topic:"libros", p:80, words:["libro","libros","lees","leés","leer"], bank:["personalidad","libro"]},
  {name:"cronicas", topic:"libros", p:96, words:["cronicas lunares","crónicas lunares"], bank:["personalidad","cronicasLunares"]},
  {name:"series", topic:"series", p:79, words:["serie","series","netflix"], bank:["personalidad","seriesEnGeneral"]},
  {name:"gloria", topic:"series", p:97, words:["gloria","the glory"], bank:["personalidad","que_es_gloria"]},
  {name:"house", topic:"series", p:97, words:["dr house","doctor house","house"], bank:["personalidad","drHouse"]},

  {name:"violin", topic:"violin", p:90, words:["violin","violín","orquesta"], bank:["personalidad","violin"]},
  {name:"writing", topic:"escritura", p:88, words:["escribis","escribís","escritura","cuento","cuentos"], bank:["personalidad","escritura"]},

  {name:"school", topic:"liceo", p:84, words:["liceo","preu","colegio"], bank:["vida","liceo"]},
  {name:"math", topic:"materias", p:94, words:["matematica","matemática","matematica 1","matemática 1"], bank:["vida","mate"]},
  {name:"hard_subjects", topic:"materias", p:99, words:["que materia te cuesta","qué materia te cuesta","materias te cuestan","materias dificiles","materias difíciles","quimica","química","fisica","física"], custom:"hard_subjects"},
  {name:"tumo", topic:"tumo", p:96, words:["tumo"], bank:["vida","tumo"]},

  {name:"relationship", topic:"relacion", p:96, words:["tenes novio","tenés novio","estas de novia","estás de novia","tu novio","martin","martín"], custom:"relationship"},
  {name:"grandfather", topic:"abuelo", p:94, words:["abuelo"], bank:["vida","abuelo"]},

  {name:"night", topic:"noche", p:130, words:["de noche","noche","trasnochar","quedarte despierta"], custom:"night"},
  {name:"sleep", topic:"sueño", p:90, words:["dormir","despertarte","levantarte","7am","7 am"], bank:["vida","dormir"]},
  {name:"walking", topic:"deporte", p:93, words:["caminar","caminata"], bank:["vida","caminar"]},
  {name:"fencing", topic:"deporte", p:94, words:["esgrima"], bank:["vida","esgrima"]},
  {name:"climbing", topic:"deporte", p:95, words:["escalada","escalar"], bank:["vida","escalada"]},
  {name:"swim", topic:"agua", p:94, words:["nadar","playa","mar"], bank:["vida","agua"]},
  {name:"food", topic:"comida", p:78, words:["comida","comer","culpa al comer"], bank:["vida","comida"]},
  {name:"shawarma", topic:"comida", p:97, words:["shawarma"], bank:["vida","shawarma"]},
  {name:"winter", topic:"clima", p:92, words:["invierno","frio","frío"], bank:["vida","invierno"]},
  {name:"summer", topic:"clima", p:92, words:["verano","calor"], bank:["vida","verano"]},
  {name:"rain", topic:"clima", p:92, words:["lluvia","llueve"], bank:["vida","lluvia"]},

  {name:"einstein", topic:"opinion", p:99, words:["einstein"], bank:["opiniones","einstein"]},
  {name:"chess", topic:"juegos", p:94, words:["ajedrez"], bank:["opiniones","ajedrez"]},
  {name:"magic_cards", topic:"juegos", p:94, words:["magic","cartas magic"], bank:["opiniones","magic"]},
  {name:"pingpong", topic:"juegos", p:94, words:["ping pong","pingpong"], bank:["opiniones","pingpong"]},
  {name:"rodeo", topic:"juegos", p:96, words:["rodeo stampede"], bank:["opiniones","rodeo"]},
  {name:"technology", topic:"tecnologia", p:85, words:["tecnologia","tecnología","robotica","robótica","impresion 3d","impresión 3d"], bank:["opiniones","tecnologia"]},


  {name:"career", topic:"futuro", p:98, words:["ingenieria biomedica","ingeniería biomédica","protesis","prótesis","que queres estudiar","qué querés estudiar"], custom:"career"},
  {name:"spain", topic:"futuro", p:97, words:["estudiar en españa","estudiar en espana","irte a españa","irte a espana"], custom:"spain"},

  {name:"philosophy", topic:"filosofia", p:78, words:["filosofia","filosofía"], bank:["filosofia","filosofia"]},
  {name:"immanentism", topic:"filosofia", p:97, words:["inmanentismo","inmanentista","hermeneutica","hermenéutica"], bank:["filosofia","inmanentismo"]},
  {name:"alternate_reality", topic:"filosofia", p:95, words:["realidad alterna","realidades alternas","otra realidad","simulacion","simulación"], bank:["filosofia","realidadAlterna"]},
  {name:"butterfly", topic:"filosofia", p:96, words:["efecto mariposa"], bank:["filosofia","efectoMariposa"]},
  {name:"time_travel", topic:"filosofia", p:95, words:["viajar en el tiempo","viaje en el tiempo","renacimiento"], bank:["filosofia","viajeTiempo"]},
  {name:"lottery", topic:"futuro", p:95, words:["loteria","lotería","ganaras plata","ganaras dinero"], bank:["filosofia","loteria"]},
  {name:"zombies", topic:"hipotetica", p:96, words:["zombie","zombi","apocalipsis"], bank:["filosofia","zombies"]},
  {name:"trolley", topic:"dilema", p:98, words:["vias del tren","vías del tren","dilema del tren","trolley"], bank:["filosofia","dilemaTren"]},
  {name:"orphan_dilemma", topic:"dilema", p:99, words:["estornudos muera un huerfano","estornudos muera un huérfano","toses a un anciano","infarto al anciano"], bank:["filosofia","dilemaHuerfano"]},

  {name:"play", topic:"juegos", p:94, words:["jugamos","jugar a algo","queres jugar","querés jugar"], bank:["juegos","juegos"]},
  {name:"two_truths", topic:"juegos", p:98, words:["2 verdades","dos verdades","una mentira"], bank:["juegos","dosVerdades"]},
  {name:"truth_dare", topic:"juegos", p:98, words:["verdad o reto","verdad o atrevimiento"], bank:["juegos","verdadOAtrevimiento"]},

  {name:"thanks", topic:"social", p:93, words:["gracias","muchas gracias"], bank:["juegos","gracias"]},
  {name:"bye", topic:"social", p:93, words:["chau","chao","nos vemos","hasta luego"], bank:["juegos","chau"]},
  {name:"bot", topic:"meta", p:99, words:["sos un bot","eres un bot","sos una ia","eres una ia"], custom:"simulation_identity"}
];
