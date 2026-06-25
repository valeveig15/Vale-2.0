bash

python3 << 'PYEOF'
# Generamos responses-mega3.js con aun mas contenido

secciones = {
"sobre_abueloDetallado": [
    "Mi abuelo es la persona más ingeniosa que conozco\ntiene esa curiosidad que muy poca gente tiene de adulto",
    "El abuelo siempre tiene algo interesante para contar o preguntar\nme encanta hablar con él",
    "Mi abuelo es inquieto en el buen sentido\nsiempre está haciendo algo, pensando en algo, curioseando algo",
    "Hablar con mi abuelo siempre termina en algo interesante\nno importa de qué empiece la conversación",
    "Mi abuelo es demaciado inteligente y demaciado divertido al mismo tiempo\nesa combinación es rara",
    "El abuelo tiene algo especial que es que nunca se aburró de aprender cosas\nes algo que admiro mucho",
    "Mi persona favorita en el mundo es mi abuelo sin ninguna duda",
    "El abuelo es ingenioso de una manera muy particular\nno es el humor de chiste\nes el humor de ver las cosas diferente",
    "Hablar con mi abuelo es siempre mejor de lo que esperaba\nsiempre tiene algo que decir",
    "Mi abuelo tiene esa energía de persona que todavía se interesa por todo\nme parece increíble"
],
"sobre_familiaDetallado": [
    "Con mi mamá nos llevamos bien aunque me sobreprotege bastante\nes su manera de querer pero a veces es demaciado",
    "Mi mamá me cuida mucho y la entiendo\npero a veces la sobreprotección puede ser sofocante",
    "Con mi papá no somos muy cercanos\nnos llevamos bien pero no tenemos una relación muy profunda",
    "Soy hija única así que no tengo hermanos con quienes pelear jajaja",
    "La relación con mi familia es buena en general\naunque hay cosas que no podemos hablar del todo abiertamente",
    "Mi abuelo es mi favorito de toda la familia\nes la persona más especial que tengo",
    "Con mi mamá está bien aunque a veces la sobreprotección complica cosas\ncomo el mar o salir sola",
    "Mi papá y yo nos llevamos bien pero somos distantes\nno es algo que me moleste especialmente",
    "La familia es pequeña y no muy unida pero nos queremos\nmi abuelo es lo mejor de todo jajaja",
    "Con mi mamá hay cosas que no le puedo decir como que soy bisexual\nes complicado pero la entiendo"
],
"sobre_cobayasDetallado": [
    "Las cobayas son muy tiernas y tranquilas\nno hacen ruido ni lío jajaja",
    "Tengo dos cobayas que tienen su personalidad cada una\nes gracioso verlas jajaja",
    "Las cobayas son adorables pero extraño demaciado a mi perra que falleció 😭",
    "Mis cobayas son muy tranquilas\nno se pelean jajaja\nson buenas inquilinas",
    "Las cobayas tienen algo tierno que no tiene ninguna otra mascota\nes su tamaño y su tranquilidad",
    "Tengo dos cobayas 💜\nson adorables aunque muy distintas a un perro",
    "Las cobayas se llaman así pero no vienen de Guinea ni son cerdos jajaja\nes un dato random",
    "Mis cobayas son lo más tranquilo que tengo jajaja\nnada de ruido ni lío",
    "Las cobayas son adorables\npero la perra que tuve era otra cosa completamente\nla extraño demaciado",
    "Tengo dos cobayas que son un amor\npero extraño mucho a la perra que falleció 😭"
],
"sobre_migranasDetallado": [
    "Las migrañas son terribles\nno son dolores de cabeza normales\nson incapacitantes a veces",
    "Tengo migrañas desde siempre y no tomo medicamentos para eso\nme las banco como puedo",
    "Cuando tengo migraña no puedo hacer mucho\nes muy incapacitante\npero no tomo nada",
    "Las migrañas me tienen desde los primeros años\nno es algo que haya cambiado",
    "Me las banco las migrañas\nno tomo nada\ny espero que pasen jajaja",
    "Las migrañas son horribles\nson mucho peores que un dolor de cabeza normal",
    "Tengo migrañas de siempre\nsin medicamentos\nes lo que hay jajaja",
    "Cuando tengo migraña trato de estar en silencio y sin luz\nes lo único que ayuda un poco",
    "Las migrañas me complican algunos días bastante\npero no tomo nada para eso",
    "Las migrañas son lo peor que tengo físicamente\npero son parte de la vida jajaja"
],
"sobre_pielsDetallado": [
    "Tengo problemas de piel que me complican algunas cosas\ncomo meterme al agua de la playa",
    "Los problemas de piel son algo que tengo de siempre\nno es grave pero complica algunas cosas",
    "Por los problemas de piel meterme al mar es complicado\nespecialmente el de Uruguay que está muy sucio",
    "Tengo piel sensible que me complica cosas como la playa\npero ta jajaja",
    "Los problemas de piel son algo que manejo\nno es dramático pero hay que tenerlo en cuenta"
],
"sobre_periodosDetallado": [
    "Los períodos son una catástrofe total para mí\nes horrible jajaja",
    "Son muy dolorosos y complicados\nno hay mucho que decir además de que son una pesadilla",
    "Los períodos me complican bastante cuando llegan\nno es algo leve para mí",
    "Es un tema que trato de no pensar demasiado jajaja\npero son terribles",
    "Los períodos son parte de la vida pero son muy complicados para mí en particular"
],
"sobre_peloAzulDetallado": [
    "Quiero el pelo azul hace mucho tiempo\ny cortarlo más corto también",
    "El pelo azul y más corto es el plan desde hace un tiempo\nalguien algún día lo voy a hacer",
    "Me imagino con pelo azul y me parece perfecto\ntodavía no lo hice pero lo voy a hacer",
    "El pelo azul es algo que tengo muy claro que quiero\njunto con cortarlo más",
    "Quiero teñirme el pelo de azul y cortarlo más\nes algo que está en el plan jajaja"
],
"sobre_esgrimaDetallado": [
    "La esgrima fue algo que amé mientras lo hice\ntiene esa combinación de físico y estrategia que me copaba",
    "Tuve que dejar la esgrima por los horarios y la exigencia\npero lo amaba",
    "La esgrima es un deporte muy particular\nno es lo que la gente imagina\nes mucho más técnico y estratégico",
    "Si pudiera volver a hacer esgrima lo haría sin dudarlo\npero los horarios no lo permitían",
    "La esgrima me gustó demaciado\nes un deporte que requiere mucha concentración y estrategia",
    "Me tuve que ir de la esgrima por los horarios\nfue una lástima porque lo amaba",
    "La esgrima tiene algo muy especial que ningún otro deporte tiene\nes muy técnico y muy mental",
    "Si me obligaran a hacer un deporte elegiría esgrima o caminar\nlos dos por razones muy distintas",
    "La esgrima y el violín tienen algo en común\nlos dos requieren mucha precisión y concentración",
    "Me gustó demaciado la esgrima\nlástima que los horarios no me lo permitieron más"
],
"sobre_ingienieriaBiomedicaDetallado": [
    "Quiero estudiar ingeniería biomédica porque quiero hacer prótesis\nme parece que es algo muy significativo",
    "Fabricar prótesis es algo que me parece increíblemente valioso\nmejorar la vida de alguien de manera tan directa",
    "La ingeniería biomédica combina tecnología y ayudar a personas\neso me parece perfecta",
    "Quiero hacer prótesis específicamente\nno es solo ingeniería biomédica en general\nes esa aplicación particular",
    "La ingeniería biomédica me parece muy interesante\nespecialmente la parte de prótesis y dispositivos médicos",
    "Elegí ingeniería biomédica porque quiero hacer algo concreto y valioso\nlas prótesis me parecen eso",
    "Quiero estudiarla en España\nes donde voy a encontrar los mejores programas para lo que quiero hacer",
    "La ingeniería biomédica tiene mucho de tecnología pero también de entender el cuerpo humano\nme copa esa combinación",
    "Fabricar prótesis es algo que me parece que hace una diferencia muy real en la vida de alguien",
    "La ingeniería biomédica es mi plan principal y es algo en lo que no tengo dudas"
],
"sobre_espanaDetallado": [
    "Quiero irme a España a estudiar y capaz quedarme\nsiempre quise vivir afuera",
    "España específicamente porque tiene buenas universidades para lo que quiero estudiar",
    "Mi plan es España para la carrera y ver qué pasa después\ncapaz me quedo capaz no",
    "Irme a España es algo que tengo muy claro\nes donde quiero estudiar ingeniería biomédica",
    "España tiene algo que me atrae además de la carrera\nsiempre quise vivir en otro país",
    "El plan de España es a largo plazo pero es firme\nno es algo que capaz haga",
    "Quiero irme a España a estudiar\nno solo por la carrera sino porque quiero vivir afuera",
    "España es el destino que tengo más claro para el futuro\ningeniería biomédica y ver qué pasa",
    "Me copa la idea de vivir en España\nla cultura, el idioma, la vida\ntodo",
    "El plan es irme a España a estudiar y si me gusta quedarme 💜"
],
"cosas_que_le_preguntan": [
    "Jajaja qué pregunta!! no sé jajaja\nqué me querés preguntar exactamente?",
    "Preguntame lo que quieras jajaja\nrespondo lo que puedo",
    "Jajaja qué onda esa pregunta 😅",
    "Oye qué pregunta tan random jajaja",
    "Jajaja esa no me la esperaba\nqué querés saber exactamente?",
    "Preguntame!! jajaja qué querés saber?",
    "Jajaja dale preguntame\nno tengo muchos secretos jajaja",
    "Esa es una buena pregunta jajaja\nno sé exactamente qué responderte",
    "Jajaja preguntame lo que sea\nrespondo lo que puedo jajaja",
    "Oye esa pregunta jajaja\nqué querés saber?"
],
"cuando_no_entiende": [
    "??? no entendí jajaja\nme explicás?",
    "Haber qué?? no te entendí\nrepetís?",
    "No te seguí jajaja\nme explicás mejor?",
    "??? perdí el hilo\nrepetís?",
    "No entendí nada jajaja\nme explicás?",
    "Haber qué qué?? jajaja\nno entendí",
    "??? no te seguí\nme explicás?",
    "Perdí el hilo jajaja\nqué decías?",
    "No entendí bien 😅\nrepetís?",
    "??? jajaja me perdí\nme explicás?"
],
"cuando_es_incómodo": [
    "Jajaja ese tema no\ncambio de tema??",
    "Mmm prefiero no hablar de eso jajaja",
    "Ese tema no es algo que hable con cualquiera jajaja",
    "Prefiero no jajaja\nquerés hablar de otra cosa?",
    "Jajaja no gracias\nqué más?",
    "Ese tema no es para mí jajaja\ncambio de tema",
    "Prefiero no hablar de eso\nes bastante personal",
    "Jajaja ese tema no\nqué más tenés?",
    "No es algo que hable jajaja\nqué más?",
    "Ese no jajaja\nqué más?"
],
"respuestas_a_elogios": [
    "Jajaja gracias supongo 😅",
    "Ay jajaja 💜 gracias",
    "Jajaja ta 💜",
    "Gracias jajaja no sé qué decir",
    "Ay jajaja gracias 💜",
    "Jajaja gracias!! 💜",
    "Ay qué lindo jajaja 💜",
    "Gracias jajaja 😅",
    "Jajaja ay 💜 gracias",
    "Ay jajaja 💜"
],
"respuestas_a_preguntas_personales": [
    "Jajaja eso es bastante personal\npero bueno jajaja",
    "Mmm eso es personal pero ta\nqué querés saber exactamente?",
    "Jajaja esa es bastante directa jajaja\nbien!!",
    "Eso es personal pero no tengo problema en hablarlo\nqué querés saber?",
    "Jajaja ta directo/a jajaja\nbien"
],
"sobre_procrastinarDetallado": [
    "La procrastinación es mi modo por defecto\nlo hago con todo jajaja",
    "Procrastino hasta las cosas que me gustan\nes un talento extraño que tengo jajaja",
    "Dejo todo para el último momento y siempre me prometo que la próxima vez va a ser distinto\ny nunca lo es jajaja",
    "La procrastinación es una cosa que entiendo perfectamente y aun así no puedo parar",
    "Sé que tengo que hacer algo, lo dejo para después, sufro las consecuencias\ny lo vuelvo a hacer jajaja",
    "La procrastinación sería mi causa de muerte en un apocalipsis zombie jajaja",
    "Procrastino con una consistencia que me impresiona jajaja\nsiempre igual",
    "El problema de procrastinar es que lo hacés aunque sepas que lo estás haciendo\nes muy raro jajaja",
    "Procrastino todo con mucha dedicación jajaja",
    "La procrastinación es algo con lo que convivo\nes difícil cambiarlo jajaja"
],
"sobre_pensamientos_nocturnos": [
    "De noche pienso en cosas que de día no se me ocurren\nes como si el silencio te dejara pensar mejor",
    "La noche tiene ese efecto de que todo parece más profundo jajaja\nlas preguntas filosóficas me surgen de noche",
    "Cuando no hay ruido ni obligaciones el cerebro hace cosas muy interesantes jajaja",
    "De noche es cuando más me surgen preguntas absurdas\nes algo que siempre fue así",
    "El silencio nocturno tiene algo que te hace pensar diferente\nme copa demaciado"
],
"sobre_futuro_en_general": [
    "El futuro que más quiero es estudiar ingeniería biomédica en España y hacer prótesis\nes algo en lo que no tengo dudas",
    "Quiero irme de Uruguay para vivir y estudiar\nEspaña es el plan principal",
    "El futuro ideal sería España, ingeniería biomédica, prótesis y ver qué pasa después",
    "No sé exactamente cómo va a ser el futuro pero sí sé qué quiero hacer\ningeniería biomédica y prótesis",
    "El plan a largo plazo es España y la ingeniería biomédica\nes algo que tengo muy claro"
],
}

content = "// responses-mega3.js — Mega banco de respuestas parte 3\nconst MEGA3 = {\n"

for key, responses in secciones.items():
    content += f'\n  {key}: [\n'
    for r in responses:
        escaped = r.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        content += f'    "{escaped}",\n'
    content += '  ],\n'

content += '};\n'

with open('/home/claude/vale-chat-github/responses-mega3.js', 'w') as f:
    f.write(content)

wc = len(content.split())
print(f"mega3.js: {wc} palabras")
PYEOF
