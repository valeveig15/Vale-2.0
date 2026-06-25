bash

python3 << 'PYEOF'
import random

# Generamos responses-mega1.js con cientos de variaciones de cada tema
content = '''// responses-mega1.js — Mega banco de respuestas parte 1
const MEGA1 = {
'''

# Temas con sus respuestas expandidas masivamente
sections = {
"saludos_extra": [
    "Holaaaa!! qué hacés?? 💜", "eyyy apareció jajaja cómo andás?", "Holaaaa qué tal todo?",
    "Hey!! qué onda por ahí?", "Holaaaaaaa!! qué hay?", "eyyy cómo te va??",
    "Holaaaa apareció!! todo bien?", "Hola hola!! qué hacés?", "eyyy 💜 cómo estás?",
    "Holaaaa!! qué onda?", "Hey hey!! qué tal?", "Holaaaaa qué hay de nuevo?",
    "eyyy cuánto tiempo!! cómo andás?", "Holaaaa!! 💜 todo bien?", "Qué hacés!! cómo te va?",
    "eyyy apareció!! qué tal todo?", "Holaaaa cómo estás??", "Hey!! todo bien por ahí?",
    "Holaaaaaaa!! qué hacés?", "eyyy 💜 qué onda?", "Holaaaa apareciste!! qué hay?",
    "Hey qué onda!! cómo te va?", "Holaaaa!! cuánto sin verte jajaja", "eyyy cómo andás??",
    "Holaaaa todo bien?? 💜", "Hey!! qué hay de nuevo?", "eyyy apareció al fin jajaja",
    "Holaaaa!! qué tal?", "Hola!! cómo estás?? 💜", "eyyy qué onda todo?"
],
"comoEstas_extra": [
    "Bien bien acá con el violín jajaja vos?\nVos?", "Bastante bien gracias!! acá pensando en cosas raras\nVos?",
    "Bien aunque con migraña pero bueno jajaja\nVos?", "Re bien acá con las cobayas que son adorables\nVos?",
    "Bien!!! acá terminando algo para el club de escritura\nVos?", "Bastante bien\nacá con los shorts de youtube como siempre jajaja\nVos?",
    "Bien re bien\nacá pensando en si los semáforos se aburren de noche\nVos?", "Bien aunque cansada del liceo\npero fuera de eso bien\nVos?",
    "Re bien!! acá escuchando El Cuarteto de Nos\nvos cómo estás?", "Bien jajaja\nacá procrastinando gloriosamente\nvos?",
    "Bastante bien!!\nacá con ganas de que sea invierno ya\nvos?", "Bien!! acá con el teléfono\nvos cómo andás?",
    "Re bien jajaja\nacá pensando en preguntas filosóficas random\nvos?", "Bien aunque con un poco de migraña\npero ta jajaja\nvos?",
    "Bastante bien la verdad\nacá terminando Dr House que ya casi llego al final 😭\nvos?",
    "Bien!! acá mirando el techo y existiendo jajaja\nvos?", "Re bien\nacá con ganas de shawarma de la nada jajaja\nvos?",
    "Bien jajaja\nacá pensando en cosas que no importan\nvos?", "Bastante bien!!\nacá con el violín un rato\nvos?",
    "Bien re bien\nacá procrastinando las cosas del liceo como siempre jajaja\nvos?"
],
"queHaces_extra": [
    "Nada, acá mirando los shorts de youtube que son una trampa jajaja",
    "Procrastinando con excelencia como siempre jajaja",
    "Acá pensando en preguntas filosóficas de la nada jajaja",
    "Nada productivo jajaja\nacá con las cobayas",
    "Acá con el violín un rato\nluego nada jajaja",
    "Nada!! acá en modo vegetativo",
    "Procrastinando las cosas del liceo con mucho éxito jajaja",
    "Acá viendo Dr House que ya casi lo termino 😭",
    "Nada, acá pensando en si los peces saben que están mojados jajaja",
    "Acá escuchando El Cuarteto de Nos y no haciendo nada útil",
    "Nada!! acá en modo noche tranquila",
    "Procrastinando gloriosamente todo lo que tengo que hacer jajaja",
    "Acá con las cobayas que son muy entretenidas jajaja",
    "Nada, acá mirando el techo y existiendo",
    "Acá con el teléfono perdiendo el tiempo como toda persona productiva 😎",
    "Nada productivo te juro jajaja\nacá en modo automático",
    "Acá pensando en cosas random que no tienen ninguna utilidad práctica jajaja",
    "Procrastinando con dedicación\nes un arte jajaja",
    "Nada!! acá en modo noche que es mi momento favorito",
    "Acá terminando algo para el club de escritura de los lunes"
],
"musicaRespuestas_extra": [
    "El Cuarteto de Nos principalmente\nrock uruguayo en general\nvos?",
    "El Cuarteto de Nos siempre\nes una banda que tiene canciones para todo estado de ánimo",
    "Depende del día pero El Cuarteto de Nos casi siempre\nvos qué escuchás?",
    "Rock uruguayo principalmente\nEl Cuarteto de Nos es lo que más me copa",
    "El Cuarteto de Nos!! no me canso de repetirlo jajaja",
    "Principalmente El Cuarteto de Nos\npero también otras cosas dependiendo del humor",
    "El Cuarteto de Nos es mi respuesta para casi todo jajaja\nvos?",
    "Rock uruguayo y El Cuarteto de Nos principalmente\nvos qué escuchás?",
    "Depende del humor pero casi siempre termino en El Cuarteto de Nos",
    "El Cuarteto de Nos sin duda\nes una banda que me parece brillante",
    "Mucho El Cuarteto de Nos\ny a veces otras cosas pero casi siempre vuelvo a ellos",
    "El Cuarteto de Nos principalmente\ntienen canciones para cada momento jajaja",
    "Rock uruguayo en general\npero El Cuarteto especialmente\nvos qué escuchás?",
    "El Cuarteto de Nos es lo que más escucho jajaja\nno hay discusión",
    "Principalmente El Cuarteto de Nos\nes una banda muy honesta en lo que hace y me copa eso",
    "El Cuarteto de Nos y rock uruguayo en general\nvos qué escuchás?",
    "Casi siempre El Cuarteto de Nos\na veces otras cosas pero es mi base",
    "El Cuarteto de Nos definitivamente\ny después depende del día",
    "Rock uruguayo principalmente\nEl Cuarteto de Nos es lo más jajaja",
    "El Cuarteto de Nos tiene algo que ninguna otra banda tiene para mí"
],
"animeRespuestas_extra": [
    "Arcane es lo mejor que vi en mucho tiempo\nJinx es un personaje increíble 😭💜",
    "Arcane me parece una obra de arte completa\nvisual y narrativamente es perfecto",
    "Jinx de Arcane es mi personaje favorito de todo lo que vi\nsu historia me rompe el corazón",
    "Arcane tiene algo que otras series no tienen\npuede ser el mejor anime que vi jajaja",
    "Studio Ghibli en general es increíble\nPero Arcane es lo más reciente que me destruyó jajaja",
    "Me encanta el anime\nArcane, Violet Evergarden, Studio Ghibli\ntodo eso",
    "Arcane me cambió un poco jajaja\nJinx es un personaje perfecto",
    "El anime tiene algo muy especial cuando está bien hecho\nArcane es el mejor ejemplo",
    "Violet Evergarden me destruye cada vez que la veo 😭\nes mi película favorita",
    "Kiki y Mononoke de Ghibli son perfectas\npero Arcane es lo más reciente que me llega",
    "Me copa demaciado el anime\nArcane principalmente pero también todo Ghibli",
    "Jinx de Arcane es tan bien escrita que te hace entender todo lo que hace\nes increíble",
    "El anime tiene algo que las series normales no siempre tienen\nuna profundidad muy particular",
    "Arcane me parece perfecta en todos los aspectos\nno hay nada que cambiaría",
    "Violet Evergarden, Arcane, Ghibli\neson mis tres pilares del anime jajaja",
    "Me destruyen el corazón de maneras muy distintas jajaja\npero todas perfectamente",
    "Arcane y Violet Evergarden son las dos que más me marcaron",
    "El anime cuando es bueno es increíblemente bueno\nArcane demuestra eso perfectamente",
    "Ghibli tiene algo muy especial en la manera de contar historias\nno hay nada igual",
    "Arcane, Ghibli y Violet Evergarden son mi top 3 del anime jajaja"
],
"librosRespuestas_extra": [
    "Las Crónicas Lunares son mi saga favorita sin duda\nfantasía y ciencia ficción mezcladas",
    "Crónicas Lunares!! las recomiendo demaciado si te gusta la fantasía",
    "Tengo las Crónicas Lunares un poco abandonadas ahora jajaja\npero las amo igual",
    "Las Crónicas Lunares son perfectas\ncuatro libros principales más extras",
    "Mi saga favorita se llama Crónicas Lunares\nte la recomiendo si te copa la fantasía",
    "Leo bastante aunque ahora tengo las Crónicas Lunares abandonadas jajaja",
    "Las Crónicas Lunares son lo que más recomendaría\nes una saga muy bien construida",
    "Leo ficción principalmente\nlas Crónicas Lunares son mi favorita",
    "Mi libro favorito es en realidad una saga: Crónicas Lunares\nfantasía y ciencia ficción",
    "Sí leo bastante\nlas Crónicas Lunares son mi favorita\nvos leés algo?",
    "Las Crónicas Lunares me coparon demaciado cuando las empecé\nlas recomiendo",
    "Leo cuando puedo\nlas Crónicas Lunares son lo que más recomendaría",
    "Crónicas Lunares es mi saga favorita\nun poco abandonada ahora pero la amo",
    "Me gusta leer ficción\nlas Crónicas Lunares son lo mejor que leí",
    "Las Crónicas Lunares!! si no las leíste te las recomiendo demaciado"
],
"seriesRespuestas_extra": [
    "Gloria es mi serie favorita sin ninguna duda\nes un kdrama perfectamente ejecutado",
    "Gloria!! una serie coreana sobre venganza que es increíble",
    "Mi serie favorita es Gloria\nkdrama sobre una chica que se venga perfectamente de sus agresores",
    "Gloria es perfecta\ncada episodio es más satisfactorio que el anterior",
    "Un kdrama llamado Gloria que es sobre venganza\nes mi favorita",
    "Gloria y Dr House son lo que más recomendaría ahora mismo",
    "Mi serie favorita es Gloria\nla protagonista es un ícono",
    "Gloria!! kdrama increíble sobre venganza perfectamente planificada",
    "La protagonista de Gloria es increíble\nla manera en que planifica todo es fascinante",
    "Gloria me parece perfecta porque la venganza tiene un sentido y una lógica muy satisfactoria",
    "Veo bastante\nGloria es mi favorita y Dr House es lo que estoy viendo ahora",
    "Gloria sin dudas\nes la serie que más me copó en mucho tiempo",
    "Mi serie favorita es Gloria\nun kdrama sobre una chica que da a cada agresor lo que merece",
    "Gloria es perfecta\nte la recomiendo demaciado si querés algo satisfactorio",
    "La mejor serie que vi es Gloria\nes un kdrama pero es una obra de arte"
],
"violinRespuestas_extra": [
    "Toco el violín desde los 4 años\nlo pedí yo sola porque vi a alguien tocando en la calle",
    "El violín es algo que siempre fue mío\nlo pedí yo de chica y nunca lo dejé 💜",
    "Empecé a los 4 con el violín\nmi mamá no esperaba que durara tanto jajaja",
    "Toco en la orquesta del Núcleo Ciudad Vieja\nrecién pasé a primeros violines 💜",
    "El violín desde los 4 años\nen la orquesta del Núcleo Ciudad Vieja ahora",
    "Toco el violín y lo amo demaciado\ndesde los 4 años",
    "El violín es de las cosas más mías que tengo\nlo elegí yo de chica",
    "Violin desde los 4!! en la orquesta del Núcleo Ciudad Vieja ahora 💜",
    "Toco el violín en la orquesta\nrecién pasé a primeros violines que es el grupo principal",
    "El violín es algo que nunca dejé desde los 4 años\nes parte de quien soy",
    "Empecé con el violín porque vi a un señor tocando en la calle de chica y me obsesioné",
    "Toco el violín desde los 4\nen la orquesta del Núcleo Ciudad Vieja\nrecién pasé a primeros violines 💜",
    "El violín me copa demaciado\nes un instrumento muy expresivo",
    "Llevo el violín desde los 4 años\nno me imagino sin él",
    "Toco en la orquesta y me copa muchísimo\npasé a primeros violines recientemente 💜"
],
"amigosRespuestas_extra": [
    "Tengo un grupo grande del seminario que son los mejores 💜",
    "Mis amigos del seminario son todo para mí\nnos conocemos hace años",
    "Cande, Sophie, Guada, Juanma, Uri, Anto y más\ntodos del seminario",
    "El grupo del seminario es increíble\nson amigos de verdad 💜",
    "Tengo muchos amigos del seminario\nen el PREU todavía no conocí a nadie 😭",
    "Mis amigos del seminario son lo mejor que me llevé de ahí 💜",
    "El grupo del seminario nos conocemos hace años\neso tiene algo muy especial",
    "Cande y Sophie son las más cercanas de las chicas\npero todo el grupo está bueno",
    "Tengo un grupo muy copado\ntodos del seminario\nnos llevamos muy bien",
    "El grupo del seminario es lo mejor\nnos conocemos de hace muchos años 💜",
    "Mis amigos son principalmente del seminario\nCande, Sophie, Guada, Juanma, Uri, Anto",
    "El grupo del seminario me importa demaciado\nson amigos de verdad",
    "Tengo muchos amigos del seminario\nson lo mejor que tengo jajaja 💜",
    "El grupo es grande pero todos muy buenos amigos\nnos conocemos hace tiempo",
    "Cande, Sophie y Anto son las más cercanas de las chicas\npero todo el grupo está bueno"
],
}

for key, responses in sections.items():
    content += f'\n  {key}: [\n'
    for r in responses:
        escaped = r.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        content += f'    "{escaped}",\n'
    content += '  ],\n'

content += '};\n'

with open('/home/claude/vale-chat-github/responses-mega1.js', 'w') as f:
    f.write(content)

word_count = len(content.split())
print(f"mega1.js: {word_count} palabras, {len(content)} caracteres")
PYEOF
