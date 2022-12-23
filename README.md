## AdventJS Challenges

![adventJs](https://i.imgur.com/iv17QFL.png)

## <img src="https://adventjs.dev/android-icon-192x192.png" width="20" height="20" /> <strong> [adventJS](https://adventjs.dev/es) es una iniciativa de [@midudev](https://midu.dev/)</strong>
 
Plantilla para el proyecto cogida de [Achalogy](https://github.com/Achalogy/advent-js-2022) y [whoknowsi](https://github.com/whoknowsi/adventJS-2022)
## 🎮 | Retos

|  #  |                  Nombre del Reto                  | Dificultad[^1] |                  Descripción                    |              Solución               | Puntuación[^2] |
| :-: | :-----------------------------------------------: | :------------: | :---------------------------------------------: | :--------------------------------:  | :------------: |
| 01  |    ¡Automatizando envolver regalos de navidad!    |       🟢       | [Ver](https://adventjs.dev/challenges/2022/1)  | [Spoiler](./challenges/challenge01) |       131      |
| 02  |         Nadie quiere hacer horas extra            |       🟢       | [Ver](https://adventjs.dev/challenges/2022/2)  | [Spoiler](./challenges/challenge02) |       121      |
| 03  | ¿Cuántas cajas de regalos puede llevar Papá Noel? |       🟢       | [Ver](https://adventjs.dev/challenges/2022/3)  | [Spoiler](./challenges/challenge03) |       140      |
| 04  |      Una caja dentro de otra caja y otra...       |       🟠       | [Ver](https://adventjs.dev/challenges/2022/4)  | [Spoiler](./challenges/challenge04) |       173      |
| 05  |            Optimizando viajes de Santa            |       🔴       | [Ver](https://adventjs.dev/challenges/2022/5)  | [Spoiler](./challenges/challenge05) |                |
| 06  |             Creando adornos navideños             |       🟠       | [Ver](https://adventjs.dev/challenges/2022/6)  | [Spoiler](./challenges/challenge06) |       160      |
| 07  |           Haciendo inventario de regalos          |       🟢       | [Ver](https://adventjs.dev/challenges/2022/7)  | [Spoiler](./challenges/challenge07) |       200      |
| 08  |              ¡Necesitamos un mecánico!            |       🟠       | [Ver](https://adventjs.dev/challenges/2022/8)  | [Spoiler](./challenges/challenge08) |       260      |
| 09  |             Las locas luces de Navidad            |       🟢       | [Ver](https://adventjs.dev/challenges/2022/9)  | [Spoiler](./challenges/challenge09) |       20       |
| 10  |          El salto del trineo de Papá Noel         |       🟠       | [Ver](https://adventjs.dev/challenges/2022/10) | [Spoiler](./challenges/challenge10) |       10       |
| 11  |              Papá Noel es Scrum Master            |       🔴       | [Ver](https://adventjs.dev/challenges/2022/11) | [Spoiler](./challenges/challenge11) |                |
| 12  |              Trineos eléctricos, ¡guau!           |       🟠       | [Ver](https://adventjs.dev/challenges/2022/12) | [Spoiler](./challenges/challenge12) |       360      |
| 13  |         Backup de los archivos de Papá Noel       |       🟢       | [Ver](https://adventjs.dev/challenges/2022/13) | [Spoiler](./challenges/challenge13) |       300      |
| 14  |                   El mejor camino                 |       🟠       | [Ver](https://adventjs.dev/challenges/2022/14) | [Spoiler](./challenges/challenge14) |                |
| 15  |         	Decorando el árbol de Navidad           |       🟠       | [Ver](https://adventjs.dev/challenges/2022/15) | [Spoiler](./challenges/challenge15) |                |
| 16  |         Arreglando las cartas de Papá Noel        |       🔴       | [Ver](https://adventjs.dev/challenges/2022/16) | [Spoiler](./challenges/challenge16) |                |
| 17  |         	Llevando los regalos en sacos           |       🟠       | [Ver](https://adventjs.dev/challenges/2022/17) | [Spoiler](./challenges/challenge17) |                |
| 18  |            	¡Nos quedamos sin tinta!              |       🟢       | [Ver](https://adventjs.dev/challenges/2022/18) | [Spoiler](./challenges/challenge18) |       200      |
| 19  |             	Ordenando los regalos               |       🟢       | [Ver](https://adventjs.dev/challenges/2022/19) | [Spoiler](./challenges/challenge19) |       300      |
| 20  |             	Más viajes retadores                |       🔴       | [Ver](https://adventjs.dev/challenges/2022/20) | [Spoiler](./challenges/challenge20) |                |
| 21  |          	Creando la tabla de regalos             |       🟠       | [Ver](https://adventjs.dev/challenges/2022/21) | [Spoiler](./challenges/challenge21) |                |

[^1]: **Dificultad**: 🟢 Facil 🟠 Media 🔴 Dificil 🟣 Muy Dificil
[^2]: **Puntos**: Los retos son puntuados dependiendo de la calidad de la solución, utilizando diferentes factores como la complejidad cognitiva y la velocidad de ejecución. El número de líneas no es un factor determinante.


## ⌨️ | Instalación

Instala Jest para las pruebas con:

```npm install```

## 🧪 | Tests

Puedes comprobar los retos usando en tu terminal el comando `npm run jest`.
Si quieres probar tus propios scripts, tienes dos opciones:

1. Cambiar de nombre el archivo `index.js` y crear tu propio `index.js`
2. Comentar la función en el archivo `index.js` y crear tu propia función

```bash
npm run test # Para correr todos los test de todos los retos

npm run test:n # n siendo el numero del reto, por ejemplo
npm run test:1 # Correra el test del reto 1
```