/* Généré depuis questions.json — fallback de chargement sans serveur (file://). */
window.QUIZ_DATA = {
  "categories": {
    "types": {
      "file": "types-valeurs.js",
      "label": "Types & valeurs"
    },
    "fn": {
      "file": "fonctions-closures.js",
      "label": "Fonctions & closures"
    },
    "async": {
      "file": "async-promises.js",
      "label": "Asynchrone (Promises / Event loop)"
    },
    "oop": {
      "file": "classes-oop.js",
      "label": "Classes & OOP"
    },
    "dom": {
      "file": "dom-events.js",
      "label": "DOM & événements"
    },
    "webapi": {
      "file": "web-apis.js",
      "label": "Web APIs (fetch/storage/websocket)"
    },
    "modules": {
      "file": "modules-es.js",
      "label": "Modules ES"
    },
    "tsbase": {
      "file": "typescript-base.ts",
      "label": "TypeScript — bases"
    },
    "tsadv": {
      "file": "typescript-avance.ts",
      "label": "TypeScript — avancé"
    },
    "obj": {
      "file": "objets-immutabilite.js",
      "label": "Objets & immutabilité"
    }
  },
  "tips": {
    "types": "Revois <b>typeof</b> (null &rarr; 'object', fonction &rarr; 'function'), la comparaison NaN (includes vs indexOf), la TDZ (temporal dead zone) de let/const et les coercitions avec +.",
    "fn": "Revois les <b>closures</b> (variables capturées par référence), le comportement de <b>this</b> (appel simple vs méthode vs bind/call/apply), et les paramètres par défaut/rest.",
    "async": "Revois l'ordre d'exécution <b>event loop</b> (synchrone → microtasks/Promises → macrotasks/setTimeout), <b>async/await</b> (try/catch, ne jamais oublier await), Promise.allSettled/withResolvers.",
    "oop": "Revois <b>new.target</b>, les méthodes <b>static</b> (non accessibles sur une instance), les champs privés <b>#</b> (accès uniquement depuis l'intérieur de la classe), super et les générateurs.",
    "dom": "Revois la <b>propagation d'événements</b> (capture → target → bubble), stopPropagation(), les collections live vs statiques, et le chargement des scripts (defer/async/module).",
    "webapi": "Revois les <b>WebSocket</b>/<b>EventSource</b>, fetch (méthode par défaut GET, body doit être sérialisé, response.ok pour 2xx), les cookies, localStorage et CORS.",
    "modules": "Revois les <b>exports</b> ES (un seul export default par fichier, exports nommés multiples) et l'import * as.",
    "tsbase": "Revois <b>readonly</b>, le mode <b>strict</b>, les propriétés optionnelles (?), le type <b>unknown</b>, les tuples, Record&lt;K,V&gt; et les déclarations de type dupliquées.",
    "tsadv": "Revois les <b>types conditionnels</b> (T extends U ? X : Y, distribution sur les unions, infer), <b>Awaited</b>/<b>ReturnType</b>, <b>Partial</b>, les mapped types (readonly) et les génériques contraints.",
    "obj": "Revois <b>Object.freeze</b>/<b>Object.assign</b> (copies superficielles), le spread, Object.create/hasOwn/entries/fromEntries, et les méthodes de tableau (map/filter/find/sort/reduce)."
  },
  "questions": [
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quel est le résultat de typeof sur la valeur parsée ?",
      "code": "const texte = '{\"score\": 99, \"nom\": \"Alice\"}';\nconst obj = JSON.parse(texte);\nconsole.log(typeof obj);",
      "options": [
        "\"string\"",
        "\"object\"",
        "undefined",
        "\"number\""
      ],
      "correct": 1,
      "explain": "JSON.parse reconstruit un objet JavaScript : typeof obj vaut donc \"object\"."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quelle est la séquence de résultats affichés dans la console ?",
      "code": "const temperature = null;\nconst mesure = undefined;\nconst actif = false;\nconsole.log(typeof temperature);\nconsole.log(typeof mesure);\nconsole.log(typeof actif);",
      "options": [
        "\"object\" / \"object\" / \"boolean\"",
        "\"null\" / \"undefined\" / \"false\"",
        "\"null\" / \"undefined\" / \"boolean\"",
        "\"object\" / \"undefined\" / \"boolean\""
      ],
      "correct": 3,
      "explain": "typeof null vaut historiquement \"object\" (bug connu de JS), typeof undefined vaut \"undefined\", typeof false vaut \"boolean\"."
    },
    {
      "cat": "types",
      "type": "text",
      "q": "Quel est le résultat de l'expression suivante (localStorage est vide) ? Réponds par le mot exact retourné par typeof.",
      "code": "typeof localStorage.getItem('inexistant')",
      "accept": [
        "object"
      ],
      "explain": "getItem() renvoie null pour une clé absente, et typeof null vaut \"object\"."
    },
    {
      "cat": "types",
      "type": "text",
      "q": "Quelle valeur exacte affiche console.log ?",
      "code": "const diviser = (a, b) => a / b;\nconsole.log(typeof diviser);",
      "accept": [
        "function"
      ],
      "explain": "Une fonction fléchée reste une fonction : typeof diviser vaut \"function\"."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quel est le résultat de ces expressions ?",
      "code": "console.log(null + 1);\nconsole.log(undefined + 1);\nconsole.log(true + true);\nconsole.log(false + 1);",
      "options": [
        "\"null1\" / NaN / 2 / 1",
        "1 / NaN / true / 1",
        "1 / NaN / 2 / 1",
        "NaN / NaN / 2 / 1"
      ],
      "correct": 2,
      "explain": "null est converti en 0 (0+1=1), undefined+1 = NaN, true+true = 1+1 = 2, false+1 = 0+1 = 1."
    },
    {
      "cat": "types",
      "type": "text",
      "q": "Quelle chaîne retourne cette expression ? Réponds sans guillemets.",
      "code": "typeof 42n",
      "accept": [
        "bigint"
      ],
      "explain": "Le suffixe n crée un BigInt ; typeof 42n vaut \"bigint\"."
    },
    {
      "cat": "types",
      "type": "text",
      "q": "Que valent a et b ? Tape les deux valeurs séparées par une virgule (ex : true, -1).",
      "code": "const valeurs = [1, NaN, 3, null];\nconst a = valeurs.includes(NaN);\nconst b = valeurs.indexOf(NaN);\nconsole.log(a);\nconsole.log(b);",
      "accept": [
        "true, -1",
        "true,-1"
      ],
      "explain": "includes() utilise SameValueZero et détecte NaN (true). indexOf() utilise === et NaN !== NaN, donc il ne le trouve jamais (-1)."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Que produit l'exécution de ce code ?",
      "code": "try {\n  console.log(delai);\n  let delai = 3000;\n  console.log(\"Après :\", delai);\n} catch (e) {\n  console.log(\"Erreur :\", e.constructor.name);\n}",
      "options": [
        "undefined puis \"Après : 3000\"",
        "\"Erreur : TypeError\"",
        "\"Erreur : ReferenceError\"",
        "\"Erreur : SyntaxError\""
      ],
      "correct": 2,
      "explain": "let n'est pas hissée comme var : accéder à delai avant sa déclaration se trouve dans la <b>temporal dead zone</b> et lève une ReferenceError, capturée par le catch."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Que retourne ce code ?",
      "code": "const cle1 = Symbol(\"id\");\nconst cle2 = Symbol(\"id\");\nconsole.log(cle1 === cle2);\nconsole.log(typeof cle1);\nconsole.log(cle1.description);",
      "options": [
        "false / \"object\" / \"id\"",
        "false / \"symbol\" / Symbol(id)",
        "false / \"symbol\" / \"id\"",
        "true / \"symbol\" / \"id\""
      ],
      "correct": 2,
      "explain": "Chaque Symbol() est unique même avec la même description : cle1 === cle2 est false. typeof d'un symbole vaut \"symbol\", et .description renvoie la chaîne passée au constructeur (\"id\")."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quel est le résultat de ce code ?",
      "code": "let vitesse = 0;\nlet direction = null;\nlet label = \"Nord\";\nvitesse ??= 50;\ndirection ??= \"Sud\";\nlabel ??= \"Est\";\nconsole.log(vitesse, direction, label);",
      "options": [
        "0 / \"Sud\" / \"Nord\"",
        "50 / \"Sud\" / \"Nord\"",
        "50 / \"Sud\" / \"Est\"",
        "0 / null / \"Nord\""
      ],
      "correct": 0,
      "explain": "??= n'affecte une valeur que si la variable vaut null ou undefined. vitesse (0) et label (\"Nord\") ne sont ni null ni undefined : ils restent inchangés. direction (null) devient \"Sud\"."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Que se passe-t-il lors de l'exécution de ce code ?",
      "code": "let statut = \"inactif\";\nif (true) {\n  let statut = \"actif\";\n  console.log(\"Intérieur :\", statut);\n}\nconsole.log(\"Extérieur :\", statut);",
      "options": [
        "\"Intérieur : actif\" puis \"Extérieur : actif\"",
        "\"Intérieur : inactif\" puis \"Extérieur : inactif\"",
        "Une erreur est levée car statut est déjà déclaré",
        "\"Intérieur : actif\" puis \"Extérieur : inactif\""
      ],
      "correct": 3,
      "explain": "Le bloc if {} crée sa propre portée de bloc : le let statut interne masque (shadow) la variable externe sans provoquer d'erreur. Le premier log affiche la valeur locale (\"actif\"), le second la valeur externe inchangée (\"inactif\")."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Quelles sont les deux valeurs affichées ?",
      "code": "function creerStock(initial) {\n  let quantite = initial;\n  return {\n    ajouter(n) { quantite += n; },\n    retirer(n) { quantite -= n; },\n    lire() { return quantite; }\n  };\n}\nconst stock = creerStock(100);\nstock.ajouter(50);\nstock.retirer(30);\nconsole.log(stock.lire());\nconsole.log(stock.quantite);",
      "options": [
        "100 puis undefined",
        "120 puis 120",
        "120 puis undefined",
        "Une ReferenceError est levée"
      ],
      "correct": 2,
      "explain": "quantite est capturée dans la closure (120), mais ce n'est pas une propriété de l'objet retourné : stock.quantite est donc undefined."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Que produit ce code (IIFE) ?",
      "code": "async function opération() {\n  const resultat = (function(base) {\n    const tva = 0.21;\n    return base * (1 + tva);\n  })(200);\n  console.log(resultat);\n  console.log(typeof tva);\n}\nopération();",
      "options": [
        "242 puis \"undefined\"",
        "242 puis une ReferenceError",
        "242 puis \"number\"",
        "200 puis \"number\""
      ],
      "correct": 1,
      "explain": "tva est une variable locale à l'IIFE : elle n'existe pas en dehors, donc typeof tva déclenche une ReferenceError (tva n'a jamais été déclarée dans ce scope)."
    },
    {
      "cat": "fn",
      "type": "text",
      "q": "Quelle valeur exacte affiche console.log ?",
      "code": "const config = (function() {\n  const version = 3;\n  return { version, stable: version >= 2 };\n})();\nconsole.log(config.stable);",
      "accept": [
        "true"
      ],
      "explain": "version vaut 3, donc version >= 2 est true, stocké dans stable."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Comment récupérer tous les paramètres excédentaires d'une fonction sous forme de tableau ?",
      "code": "function ma_fonction(a, b, ???) { /* ... */ }",
      "options": [
        "function ma_fonction(a, b, &reste)",
        "Utiliser l'objet arguments uniquement",
        "function ma_fonction(a, b, *reste)",
        "function ma_fonction(a, b, ...reste)"
      ],
      "correct": 3,
      "explain": "Le rest parameter (...reste) regroupe tous les arguments restants dans un vrai tableau."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Quelle est la valeur affichée par tva(0.06), sachant que tva n'est PAS une méthode de facture ?",
      "code": "let facture = { montant: 1000 };\nfunction tva(taux) {\n  return this.montant * taux;\n}\ntva(0.06);",
      "options": [
        "1060",
        "NaN",
        "60",
        "6"
      ],
      "correct": 1,
      "explain": "tva() est appelée comme fonction simple, pas comme méthode : this ne pointe pas vers facture, this.montant est undefined, undefined * 0.06 = NaN."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Quelle valeur est affichée ?",
      "code": "function puissance(base, exp) {\n  if (exp === 0) return 1;\n  return base * puissance(base, exp - 1);\n}\nconsole.log(puissance(3, 4));",
      "options": [
        "81",
        "La fonction boucle infiniment",
        "64",
        "12"
      ],
      "correct": 0,
      "explain": "3^4 = 81 grâce au cas de base exp === 0 qui arrête la récursion."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Quelle est la sortie affichée avec des paramètres par défaut ?",
      "code": "function formaterMontant(montant, devise = \"EUR\") {\n  return `${montant.toFixed(2)} ${devise}`;\n}\nconsole.log(formaterMontant(42.5));\nconsole.log(formaterMontant(100, \"USD\"));",
      "options": [
        "\"42.50 undefined\" puis \"100.00 USD\"",
        "\"42.50 EUR\" puis \"100.00 USD\"",
        "\"42.5 EUR\" puis \"100 USD\"",
        "Erreur de compilation"
      ],
      "correct": 1,
      "explain": "devise vaut \"EUR\" par défaut quand non fournie ; toFixed(2) formate toujours avec 2 décimales."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "function afficherInfo(departement, poste) {\n  console.log(`${this.prenom} ${this.nom} — ${departement} — ${poste}`);\n}\nconst employe = { prenom: \"Camille\", nom: \"Renard\" };\nconst afficherIT = afficherInfo.bind(employe, \"IT\");\nafficherIT(\"Développeur\");",
      "options": [
        "Une TypeError car afficherIT est appelé avec un argument alors que bind en a déjà fourni deux",
        "La fonction est appelée immédiatement lors du bind()",
        "\"Camille Renard — IT — Développeur\"",
        "\"Camille Renard — Développeur — undefined\""
      ],
      "correct": 2,
      "explain": "bind() fixe this=employe et pré-remplit departement=\"IT\" (application partielle) ; l'appel afficherIT(\"Développeur\") fournit le paramètre restant poste."
    },
    {
      "cat": "fn",
      "type": "text",
      "q": "Quelle valeur affiche console.log ?",
      "code": "function creerAccumulateur(debut) {\n  let total = debut;\n  return function(n) {\n    total += n;\n    return total;\n  };\n}\nconst acc = creerAccumulateur(10);\nacc(5);\nacc(3);\nconsole.log(acc(2));",
      "accept": [
        "20"
      ],
      "explain": "total est capturé par la closure : 10 + 5 + 3 + 2 = 20. Chaque appel s'ajoute au total conservé entre les appels."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant. Que s'affiche-t-il dans la console ?",
      "code": "const remise = taux => montant => montant * (1 - taux);\nconst remise10 = remise(0.10);\nconst remise25 = remise(0.25);\nconsole.log(remise10(200));\nconsole.log(remise25(200));\nconsole.log(remise(0.50)(80));",
      "options": [
        "180, 150, 40",
        "20, 50, 40",
        "Une TypeError car remise10 n'est pas une fonction",
        "180, 150, 80"
      ],
      "correct": 0,
      "explain": "remise est une fonction curryfiée (taux => montant => ...) : remise(0.10) renvoie bien une fonction. 200*0.9=180, 200*0.75=150, 80*0.5=40."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "function afficherInfo(langue, ponctuation) {\n  return `[${langue}] Je suis ${this.nom}${ponctuation}`;\n}\nconst robot = { nom: \"R2D2\" };\nconst drone = { nom: \"Phantom\" };\nconsole.log(afficherInfo.call(drone, \"FR\", \"!\"));\nconsole.log(afficherInfo.apply(robot, [\"EN\", \".\"]));",
      "options": [
        "\"[FR] Je suis Phantom!\" puis une TypeError car apply n'accepte pas de tableau",
        "\"[FR] Je suis undefined!\" puis \"[EN] Je suis undefined.\"",
        "\"[FR] Je suis R2D2!\" puis \"[EN] Je suis Phantom.\"",
        "\"[FR] Je suis Phantom!\" puis \"[EN] Je suis R2D2.\""
      ],
      "correct": 3,
      "explain": "call() prend les arguments un par un (this, arg1, arg2, ...) et apply() les prend sous forme de tableau (this, [arg1, arg2]) : les deux fixent this normalement."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que produit ce code ? (finally ne modifie pas la valeur transmise)",
      "code": "async function opération() {\n  return Promise.resolve(\"données\")\n    .then(val => val.toUpperCase())\n    .finally(() => \"ignoré\")\n    .then(val => console.log(val));\n}\nopération();",
      "options": [
        "undefined",
        "DONNÉES",
        "données",
        "ignoré"
      ],
      "correct": 1,
      "explain": ".finally() ne modifie jamais la valeur qui transite dans la chaîne : elle reçoit \"DONNÉES\" (toUpperCase) inchangée."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que produit l'appel à afficher() ? (le await a été oublié)",
      "code": "async function obtenirScore() {\n  return new Promise(resolve => setTimeout(() => resolve(100), 500));\n}\nasync function afficher() {\n  const score = obtenirScore(); // await oublié !\n  console.log(score + 10);\n}\nafficher();",
      "options": [
        "110",
        "[object Promise]10",
        "NaN",
        "Une erreur est lancée"
      ],
      "correct": 1,
      "explain": "Sans await, score est une Promise (pas encore résolue). Promise + 10 convertit la Promise en chaîne \"[object Promise]\" puis la concatène."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Dans quel ordre les messages sont-ils affichés dans la console ?",
      "code": "console.log(\"A\");\nsetTimeout(() => { console.log(\"B\"); }, 0);\nPromise.resolve().then(() => { console.log(\"C\"); });\nconsole.log(\"D\");",
      "options": [
        "A, D, C, B",
        "A, C, D, B",
        "A, D, B, C",
        "A, B, C, D"
      ],
      "correct": 0,
      "explain": "Le code synchrone passe d'abord (A, D), puis les microtasks (Promise → C), puis les macrotasks (setTimeout → B)."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Dans quel ordre s'affichent ces messages ?",
      "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\")).then(() => console.log(\"4\"));\nPromise.resolve().then(() => console.log(\"5\"));\nconsole.log(\"6\");",
      "options": [
        "1, 6, 3, 5, 4, 2",
        "1, 2, 3, 4, 5, 6",
        "1, 6, 2, 3, 5, 4",
        "1, 6, 3, 4, 5, 2"
      ],
      "correct": 0,
      "explain": "Synchrone d'abord (1, 6). Puis microtasks dans l'ordre de mise en file : \"3\" (déjà en file), \"5\" (déjà en file), puis \"4\" (ajouté seulement après exécution de \"3\"). Le setTimeout (2) passe en dernier."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que va afficher ce code ?",
      "code": "Promise.resolve(1)\n  .then(x => {\n    return new Promise(resolve => {\n      setTimeout(() => resolve(x + 1), 1000);\n    });\n  })\n  .then(x => console.log(x));",
      "options": [
        "2 (après 1 seconde)",
        "undefined",
        "1 (immédiatement)",
        "Promise {}"
      ],
      "correct": 0,
      "explain": "then() attend qu'une Promise retournée soit résolue avant de continuer la chaîne : après 1s, x+1 = 2 est loggé."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que produit ce code ? (abort() est appelé de façon synchrone)",
      "code": "const controller = new AbortController();\nconst { signal } = controller;\nconst opération = new Promise((resolve, reject) => {\n  signal.addEventListener(\"abort\", () => {\n    reject(new DOMException(\"Annulé\", \"AbortError\"));\n  });\n  setTimeout(() => resolve(\"terminé\"), 1000);\n});\ncontroller.abort();\nopération\n  .then(val => console.log(\"succès:\", val))\n  .catch(err => console.log(\"erreur:\", err.name, \"-\", err.message));",
      "options": [
        "erreur: Error - Annulé",
        "Rien n'est affiché",
        "erreur: AbortError - Annulé",
        "succès: terminé"
      ],
      "correct": 2,
      "explain": "abort() est appelé avant les 1000ms du setTimeout : le listener 'abort' rejette la Promise avec une DOMException nommée AbortError."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que fait Promise.race([p1, p2, p3]) ?",
      "code": "Promise.race([p1, p2, p3]);",
      "options": [
        "Retourne le résultat de la première promesse qui se termine (résolue ou rejetée)",
        "Attend que toutes les promesses soient résolues et retourne un tableau",
        "Retourne seulement les promesses résolues, ignore les rejetées",
        "Rejette systématiquement si une seule promesse échoue"
      ],
      "correct": 0,
      "explain": "Promise.race se règle dès que la première promesse du tableau se termine, peu importe si c'est un succès ou un échec."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Si la requête n'a pas le temps de se terminer en 50 ms, que s'affiche-t-il ?",
      "code": "const controller = new AbortController();\nsetTimeout(() => controller.abort(), 50);\ntry {\n  const response = await fetch('/api/rapport/generer', { signal: controller.signal });\n  const data = await response.json();\n  console.log('Succès:', data);\n} catch (err) {\n  console.log(err.name === 'AbortError' ? 'Annulé' : 'Autre erreur');\n}",
      "options": [
        "Succès: undefined",
        "Autre erreur",
        "Rien n'est affiché",
        "Annulé"
      ],
      "correct": 3,
      "explain": "fetch rejette avec une AbortError quand le signal est déclenché avant la fin de la requête → le catch affiche \"Annulé\"."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Comment gérer les erreurs avec async/await ?",
      "options": [
        "En utilisant .catch()",
        "En utilisant try/catch",
        "En utilisant .error()",
        "Les erreurs ne peuvent pas être gérées avec async/await"
      ],
      "correct": 1,
      "explain": "Dans une fonction async, on englobe les await susceptibles d'échouer dans un bloc try/catch classique pour intercepter les rejets de Promise."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Analysez ce code utilisant Promise.withResolvers(). Quel est l'affichage (dans l'ordre) ?",
      "code": "const { promise, resolve, reject } = Promise.withResolvers();\nsetTimeout(() => resolve(\"mission accomplie\"), 100);\npromise\n  .then(val => console.log(\"résultat:\", val))\n  .catch(err => console.log(\"erreur:\", err.message));\nconsole.log(\"en attente...\");",
      "options": [
        "en attente...\nrésultat: mission accomplie",
        "Seulement : en attente... (le .then n'est jamais exécuté)",
        "résultat: mission accomplie\nen attente...",
        "en attente...\nerreur: mission accomplie"
      ],
      "correct": 0,
      "explain": "Promise.withResolvers() renvoie une Promise et ses fonctions resolve/reject séparément. Le code synchrone (\"en attente...\") s'exécute d'abord ; après 100ms, resolve() déclenche le .then()."
    },
    {
      "cat": "async",
      "type": "text",
      "q": "Quel est l'état (en anglais) d'une Promise qui vient d'être créée avec new Promise() mais dont ni resolve ni reject n'ont encore été appelés ?",
      "accept": [
        "pending"
      ],
      "explain": "Une Promise nouvellement créée est dans l'état \"pending\" (en attente) jusqu'à ce qu'elle soit résolue ou rejetée."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Considérez ce code. Qu'affiche-t-il ?",
      "code": "const résultats = await Promise.allSettled([\n  Promise.resolve(42),\n  Promise.reject(new Error(\"ko\")),\n  Promise.resolve(\"ok\")\n]);\nconsole.log(résultats[1].status);\nconsole.log(résultats[1].reason.message);\nconsole.log(résultats[2].value);",
      "options": [
        "rejected\nko\nok",
        "false\nko\nok",
        "rejected\nko\nundefined",
        "Une exception est levée car une Promise est rejetée"
      ],
      "correct": 0,
      "explain": "Promise.allSettled() ne rejette jamais globalement : chaque résultat a un status (\"fulfilled\" ou \"rejected\"), avec .reason pour les rejets et .value pour les succès."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Ces deux fonctions chargent les mêmes données. Laquelle est la plus rapide si chaque fetch*() prend 1 seconde ?",
      "code": "// Version A\nasync function chargerA() {\n  const produits = await fetchProduits();\n  const stocks = await fetchStocks();\n  return { produits, stocks };\n}\n\n// Version B\nasync function chargerB() {\n  const [produits, stocks] = await Promise.all([\n    fetchProduits(),\n    fetchStocks()\n  ]);\n  return { produits, stocks };\n}",
      "options": [
        "Impossible à déterminer sans connaître le contenu des fonctions",
        "La version B est plus rapide (~1s contre ~2s)",
        "La version A est plus rapide car elle évite l'overhead de Promise.all()",
        "Les deux versions ont la même durée"
      ],
      "correct": 1,
      "explain": "La version A attend chaque fetch l'un après l'autre (séquentiel, ~2s). Promise.all() lance les deux requêtes en parallèle : la version B ne prend que ~1s."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "class FormeAbstraite {\n  constructor(couleur) {\n    if (new.target === FormeAbstraite) {\n      throw new Error('FormeAbstraite ne peut pas être instanciée directement');\n    }\n    this.couleur = couleur;\n  }\n}\nclass Cercle extends FormeAbstraite {\n  constructor(couleur, rayon) { super(couleur); this.rayon = rayon; }\n}\nconst c = new Cercle('rouge', 3);\nconsole.log(c.couleur);\nconsole.log(c instanceof FormeAbstraite);",
      "options": [
        "undefined puis true",
        "'rouge' puis true",
        "Une erreur est levée",
        "'rouge' puis false"
      ],
      "correct": 1,
      "explain": "new.target vaut Cercle (pas FormeAbstraite) lors de new Cercle(...), donc pas d'erreur. couleur est bien assignée, et Cercle hérite de FormeAbstraite."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ? (generer() n'est pas implémentée dans la sous-classe)",
      "code": "class Rapport {\n  constructor(titre) {\n    if (new.target === Rapport) throw new Error('Classe abstraite');\n    this.titre = titre;\n  }\n  generer() { throw new Error(\"generer() doit être implémentée\"); }\n  afficher() { return `Rapport : ${this.generer()}`; }\n}\nclass RapportVentes extends Rapport {\n  constructor(titre, montant) { super(titre); this.montant = montant; }\n  // generer() non implémentée\n}\nconst r = new RapportVentes('Q1', 50000);\nconsole.log(r.afficher());",
      "options": [
        "Affiche 'Rapport : Classe abstraite'",
        "L'instanciation réussit mais r.afficher() lève une erreur",
        "Affiche 'Rapport : undefined'",
        "Une erreur est levée dès new RapportVentes(...)"
      ],
      "correct": 1,
      "explain": "L'instanciation ne vérifie que new.target === Rapport (ce n'est pas le cas ici). L'erreur ne survient que plus tard, quand afficher() appelle generer() qui n'a pas été surchargée."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ? (celsiusToFahrenheit est une méthode static)",
      "code": "class ConvertisseurTemp {\n  static celsiusToFahrenheit(c) { return c * 9 / 5 + 32; }\n}\nconst conv = new ConvertisseurTemp();\nconsole.log(conv.celsiusToFahrenheit(100));",
      "options": [
        "Une TypeError : conv.celsiusToFahrenheit n'est pas une fonction",
        "Le code affiche undefined",
        "Le code affiche 212",
        "Le code affiche NaN"
      ],
      "correct": 0,
      "explain": "Une méthode static appartient à la classe elle-même, pas aux instances : elle n'existe pas sur conv, d'où la TypeError."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Quelle affirmation est correcte ?",
      "code": "class Animal { manger() { return \"Je mange\"; } }\nclass Chat extends Animal { miauler() { return \"Miaou\"; } }\nlet felix = new Chat();",
      "options": [
        "felix peut appeler manger() et miauler()",
        "felix peut seulement appeler miauler()",
        "felix ne peut appeler aucune méthode",
        "felix peut seulement appeler manger()"
      ],
      "correct": 0,
      "explain": "Chat hérite d'Animal : felix a donc accès aux méthodes des deux classes."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Comment déclarer une propriété réellement privée dans une classe ES2022 ?",
      "code": "class Compte { /* ??? */ = 0; }",
      "options": [
        "class Compte { #solde = 0; }",
        "class Compte { private solde = 0; }",
        "class Compte { _solde = 0; }",
        "class Compte { var solde = 0; }"
      ],
      "correct": 0,
      "explain": "Le préfixe # crée un champ réellement privé (inaccessible depuis l'extérieur), contrairement à private qui est une syntaxe TypeScript seulement vérifiée à la compilation."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Quel est le résultat de gen.next() lors du premier appel ?",
      "code": "function* compteur(debut) {\n  let i = debut;\n  while (true) { yield i++; }\n}\nconst gen = compteur(5);\nconsole.log(gen.next());",
      "options": [
        "{ value: 5, done: true }",
        "{ value: 5, done: false }",
        "5",
        "{ value: 6, done: false }"
      ],
      "correct": 1,
      "explain": "yield i++ retourne d'abord la valeur courante (5) puis incrémente. Le générateur n'est pas terminé (boucle infinie), donc done: false."
    },
    {
      "cat": "oop",
      "type": "text",
      "q": "Que retourne console.log(p.surface) ?",
      "code": "class Parcelle {\n  constructor(longueur, largeur) { this.longueur = longueur; this.largeur = largeur; }\n  get surface() { return this.longueur * this.largeur; }\n}\nconst p = new Parcelle(12, 5);\nconsole.log(p.surface);",
      "accept": [
        "60"
      ],
      "explain": "Le getter surface calcule longueur * largeur = 12 * 5 = 60, accessible comme une simple propriété."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Quel sera le résultat du code suivant ?",
      "code": "class Calculatrice {\n    static pi = 3.14;\n\n    static aire(rayon) {\n        return this.pi * rayon * rayon;\n    }\n}\nlet calc = new Calculatrice();\nconsole.log(calc.aire(5));",
      "options": [
        "TypeError: calc.aire is not a function",
        "78.5",
        "undefined",
        "NaN"
      ],
      "correct": 0,
      "explain": "aire() est une méthode static : elle appartient à la classe Calculatrice, pas aux instances. calc.aire est donc undefined, et l'appeler comme une fonction lève une TypeError."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "class Appareil {\n  constructor(marque) {\n    this.marque = marque;\n  }\n}\nclass Telephone extends Appareil {\n  constructor(marque, os) {\n    super(marque);\n    this.os = os;\n  }\n}\nclass Smartphone extends Telephone {\n  constructor(marque, os, ecran) {\n    super(marque, os);\n    this.ecran = ecran;\n  }\n}\nconst s = new Smartphone('Samsung', 'Android', 6.5);\nconsole.log(s instanceof Smartphone);\nconsole.log(s instanceof Telephone);\nconsole.log(s instanceof Appareil);\nconsole.log(s instanceof Object);",
      "options": [
        "true, false, false, true",
        "true, true, false, false",
        "true, true, true, false",
        "true, true, true, true"
      ],
      "correct": 3,
      "explain": "instanceof vérifie la chaîne de prototypes entière : Smartphone hérite de Telephone qui hérite de Appareil qui hérite d'Object. Les quatre vérifications sont donc true."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit l'exécution de ce code ?",
      "code": "class Capteur {\n  #valeur = 0;\n\n  constructor(valeur) {\n    this.#valeur = valeur;\n  }\n\n  lire() {\n    return this.#valeur;\n  }\n}\nconst c = new Capteur(42);\nconsole.log(c.lire());\nconsole.log(c.#valeur);",
      "options": [
        "Le code affiche 42 deux fois car le champ est accessible depuis l'instance.",
        "Une erreur de syntaxe est levée à cause de l'accès externe à #valeur.",
        "Le code affiche 42 puis undefined.",
        "Le code affiche 42 puis null."
      ],
      "correct": 1,
      "explain": "Un champ privé #valeur n'est accessible que depuis l'intérieur du corps de la classe. Y accéder depuis l'extérieur (c.#valeur) provoque une SyntaxError, pas simplement undefined."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "class Imprimante {\n  imprimer(doc) {\n    return `Impression de : ${doc}`;\n  }\n}\nclass ImprimanteReseau extends Imprimante {\n  imprimer(doc) {\n    const base = super.imprimer(doc);\n    return `[Réseau] ${base}`;\n  }\n}\nconst imp = new ImprimanteReseau();\nconsole.log(imp.imprimer('rapport.pdf'));",
      "options": [
        "Une TypeError est levée car super.imprimer n'est pas accessible depuis une méthode d'instance.",
        "Impression de : rapport.pdf",
        "[Réseau] Impression de : rapport.pdf",
        "[Réseau] [Réseau] Impression de : rapport.pdf"
      ],
      "correct": 2,
      "explain": "super.imprimer(doc) appelle la méthode du parent (Imprimante), dont le résultat est ensuite enrichi par la sous-classe : \"[Réseau] Impression de : rapport.pdf\"."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code exécuté en dehors du mode strict ?",
      "code": "class Commande {\n  #articles = ['stylo', 'cahier'];\n\n  get total() {\n    return this.#articles.length;\n  }\n}\nconst cmd = new Commande();\ncmd.total = 10;\nconsole.log(cmd.total);",
      "options": [
        "Une TypeError est levée car aucun setter n'est défini.",
        "Le code affiche undefined car le getter est écrasé par l'assignation.",
        "Le code affiche 2 : l'assignation est ignorée silencieusement.",
        "Le code affiche 10 : l'assignation remplace la valeur du getter."
      ],
      "correct": 2,
      "explain": "Une propriété avec un getter mais sans setter refuse toute écriture. En dehors du mode strict, l'assignation est simplement ignorée (pas d'erreur) : cmd.total reste calculé par le getter, soit 2."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "L'utilisateur clique sur le bouton \"Supprimer\". Qu'affiche la console ?",
      "code": "// <div id=\"conteneur\"><button id=\"supprimer\">Supprimer</button></div>\ndocument.getElementById('conteneur').addEventListener('click', () => console.log('conteneur cliqué'));\ndocument.getElementById('supprimer').addEventListener('click', (e) => {\n  e.stopPropagation();\n  console.log('bouton cliqué');\n});",
      "options": [
        "\"bouton cliqué\" puis \"conteneur cliqué\"",
        "Uniquement : \"bouton cliqué\"",
        "Rien n'est affiché",
        "Uniquement : \"conteneur cliqué\""
      ],
      "correct": 1,
      "explain": "stopPropagation() empêche l'événement de remonter (bubbling) vers #conteneur : seul le listener du bouton s'exécute."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "L'utilisateur clique sur #enfant. Dans quel ordre s'affichent les messages ?",
      "code": "const parent = document.getElementById('parent');\nconst enfant = document.getElementById('enfant');\n\nparent.addEventListener('click', () => console.log('parent-bubble'), false);\nparent.addEventListener('click', () => console.log('parent-capture'), true);\nenfant.addEventListener('click', () => console.log('enfant'));",
      "options": [
        "\"parent-bubble\" → \"enfant\" → \"parent-capture\"",
        "\"parent-capture\" → \"enfant\" → \"parent-bubble\"",
        "\"enfant\" → \"parent-bubble\" → \"parent-capture\"",
        "\"parent-capture\" → \"parent-bubble\" → \"enfant\""
      ],
      "correct": 1,
      "explain": "Phase de capture (top-down) d'abord : parent-capture (useCapture=true). Puis la cible : enfant. Puis la phase de bubbling (bottom-up) : parent-bubble."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Dans quel ordre s'affichent 'A' et 'B' lors du chargement d'une page avec des images volumineuses ?",
      "code": "document.addEventListener('DOMContentLoaded', () => console.log('A'));\nwindow.addEventListener('load', () => console.log('B'));",
      "options": [
        "'A' et 'B' simultanément",
        "'A' puis 'B'",
        "'B' puis 'A'",
        "L'ordre dépend de la taille des images"
      ],
      "correct": 1,
      "explain": "DOMContentLoaded se déclenche dès que le HTML est parsé (sans attendre les images). load attend que toutes les ressources (images incluses) soient chargées."
    },
    {
      "cat": "dom",
      "type": "text",
      "q": "Que retourne el.classList.contains('actif') à la fin ? Réponds par true ou false.",
      "code": "const el = document.createElement('button');\nel.classList.add('actif');\nel.classList.toggle('actif');\nel.classList.toggle('actif');\nconsole.log(el.classList.contains('actif'));",
      "accept": [
        "true"
      ],
      "explain": "add → présent. 1er toggle → retiré. 2e toggle → rajouté. Résultat final : présent, donc true."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Que s'affiche-t-il dans la console ? (l'événement est dispatché directement sur document)",
      "code": "document.addEventListener('commande:validee', (e) => console.log(e.detail.montant * 2));\nconst evt = new CustomEvent('commande:validee', { detail: { montant: 49, devise: 'EUR' }, bubbles: false });\ndocument.dispatchEvent(evt);",
      "options": [
        "49",
        "undefined",
        "98",
        "Rien — l'événement ne se déclenche pas car bubbles: false"
      ],
      "correct": 2,
      "explain": "bubbles: false empêche seulement la propagation vers des ancêtres. Ici l'événement est dispatché directement sur document, la cible du listener : il se déclenche normalement (49 * 2 = 98)."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Dans l'onglet A on enregistre un listener 'storage'. Dans l'onglet B (même domaine), on exécute localStorage.setItem('theme','sombre'). Que se passe-t-il dans l'onglet A ?",
      "code": "// Onglet A\nwindow.addEventListener('storage', (event) => {\n  console.log('Clé modifiée:', event.key);\n});\n// Onglet B\nlocalStorage.setItem('theme', 'sombre');",
      "options": [
        "L'événement se déclenche dans les deux onglets simultanément",
        "L'événement se déclenche dans l'onglet A",
        "L'événement se déclenche uniquement dans l'onglet B",
        "Rien ne se passe : storage ne fonctionne que pour sessionStorage"
      ],
      "correct": 1,
      "explain": "L'événement 'storage' se déclenche dans les AUTRES documents/onglets du même origin, jamais dans celui qui a effectué le changement."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Quelle affirmation est correcte concernant ces scripts ?",
      "code": "<script src=\"script1.js\"></script>\n<script src=\"script2.js\" defer></script>\n<script type=\"module\" src=\"script3.js\"></script>\n<script src=\"script4.js\" async></script>",
      "options": [
        "script1.js s'exécute après le chargement complet de la page",
        "script2.js et script3.js s'exécutent après le parsing complet du DOM",
        "script4.js s'exécute toujours en dernier",
        "Tous les scripts s'exécutent dans l'ordre de déclaration"
      ],
      "correct": 1,
      "explain": "script1 (sans attribut) bloque le parsing et s'exécute immédiatement. defer et type=\"module\" sont tous deux différés : ils s'exécutent après le parsing complet du DOM, avant DOMContentLoaded. async n'a pas d'ordre garanti."
    },
    {
      "cat": "dom",
      "type": "text",
      "q": "Considérez ce code (supposons un document sans aucun élément .inexistant). Quelle valeur affiche console.log ?",
      "code": "const resultat = document.querySelectorAll('.inexistant');\nconsole.log(resultat.length);",
      "accept": [
        "0"
      ],
      "explain": "querySelectorAll() renvoie toujours une NodeList, vide si aucun élément ne correspond : sa longueur est 0 (jamais null ou undefined)."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Considérez le HTML suivant et le script JavaScript ci-dessous. Que retourne console.log(a === b) ?",
      "code": "<div id=\"panneau\">\n  <p class=\"message\">Bienvenue</p>\n  <p class=\"message\">Au revoir</p>\n</div>\n\nconst a = document.querySelector('#panneau');\nconst b = document.getElementById('panneau');\nconsole.log(a === b);",
      "options": [
        "null",
        "false",
        "undefined",
        "true"
      ],
      "correct": 3,
      "explain": "querySelector('#panneau') et getElementById('panneau') ciblent le même élément unique du DOM : ils retournent la même référence, donc === vaut true."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Observez le code suivant. Supposons qu'il y avait 3 éléments .capteur dans le DOM au départ. Quelles valeurs affichent les lignes (C) et (D) après l'ajout du nouvel élément ?",
      "code": "const live = document.getElementsByClassName('capteur');\nconst statique = document.querySelectorAll('.capteur');\nconsole.log(live.length);      // (A) affiche 3\nconsole.log(statique.length);  // (B) affiche 3\n\nconst nouveau = document.createElement('div');\nnouveau.className = 'capteur';\ndocument.body.appendChild(nouveau);\n\nconsole.log(live.length);      // (C) ?\nconsole.log(statique.length);  // (D) ?",
      "options": [
        "(C) affiche 3, (D) affiche 3",
        "(C) affiche 3, (D) affiche 4",
        "(C) affiche 4, (D) affiche 4",
        "(C) affiche 4, (D) affiche 3"
      ],
      "correct": 3,
      "explain": "getElementsByClassName renvoie une HTMLCollection LIVE : elle se met à jour automatiquement (4). querySelectorAll renvoie une NodeList STATIQUE, figée au moment de l'appel (reste à 3)."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quelle méthode HTTP est utilisée par défaut lorsqu'aucune option n'est passée à fetch() ?",
      "code": "const response = await fetch('/api/commandes/42');",
      "options": [
        "PUT",
        "OPTIONS",
        "POST",
        "GET"
      ],
      "correct": 3,
      "explain": "Sans options, fetch() effectue une requête GET par défaut."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quel code envoie correctement des données JSON avec fetch ?",
      "code": "// candidats A, B, C, D — voir les options",
      "options": [
        "fetch('/api/users', { data: JSON.stringify({name:'Alice'}) }).then(r => r.json());",
        "fetch('/api/users', { method:'POST', body:{name:'Alice'} }).then(r => r.json());",
        "fetch.post('/api/users', { name: 'Alice' }).then(r => r.json());",
        "fetch('/api/users', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name:'Alice'}) }).then(r => r.json());"
      ],
      "correct": 3,
      "explain": "Il faut préciser method:'POST', l'en-tête Content-Type: application/json, et sérialiser le body avec JSON.stringify()."
    },
    {
      "cat": "webapi",
      "type": "text",
      "q": "Quelle valeur numérique vaut source.readyState quand onopen se déclenche sur un EventSource ?",
      "code": "const source = new EventSource('/flux/meteo');\nsource.onopen = () => console.log(source.readyState);",
      "accept": [
        "1"
      ],
      "explain": "1 correspond à la constante OPEN de EventSource (0 = CONNECTING, 1 = OPEN, 2 = CLOSED)."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quelle est la valeur de socket.readyState juste après la création du WebSocket (avant onopen) ?",
      "code": "const socket = new WebSocket('wss://api.exemple.com/temps-reel');\nconsole.log('A:', socket.readyState);",
      "options": [
        "0 (CONNECTING)",
        "undefined",
        "1 (OPEN)",
        "3 (CLOSED)"
      ],
      "correct": 0,
      "explain": "Juste après l'instanciation, la connexion n'est pas encore établie : readyState vaut 0 (CONNECTING)."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quel est le contexte d'exécution principal de la Cache API (avec caches.open(), cache.put(), cache.match()) ?",
      "options": [
        "Le thread principal JavaScript de la page, comme localStorage",
        "Les Service Workers (pour le mode hors ligne et les PWA)",
        "Le côté serveur Node.js",
        "Les Web Workers classiques"
      ],
      "correct": 1,
      "explain": "La Cache API est conçue pour être utilisée dans les Service Workers, notamment pour permettre le fonctionnement hors ligne des PWA."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quel est le type de value retourné par reader.read() lors de la lecture d'un flux (Response.body.getReader()) ?",
      "code": "const { done, value } = await reader.read();",
      "options": [
        "Une chaîne de caractères (string)",
        "Un objet JSON déjà parsé",
        "Un Uint8Array (tableau d'octets)",
        "Un ArrayBuffer brut"
      ],
      "correct": 2,
      "explain": "Le ReadableStreamDefaultReader lit des chunks binaires sous forme de Uint8Array."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Que se passe-t-il exactement quand un élément .panneau devient visible à 60% (seuil = 0.5) ?",
      "code": "const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.style.opacity = '1';\n      observer.unobserve(entry.target);\n    }\n  });\n}, { threshold: 0.5 });\ndocument.querySelectorAll('.panneau').forEach(el => observer.observe(el));",
      "options": [
        "L'opacité passe à 1 et TOUS les .panneau cessent d'être observés",
        "Rien ne se passe, le seuil est 0.5 et l'élément n'est visible qu'à 60%",
        "L'opacité passe à 1 et CET élément n'est plus observé",
        "Le callback est appelé en continu tant que l'élément est visible à plus de 50%"
      ],
      "correct": 2,
      "explain": "60% ≥ 50% donc isIntersecting est true : l'opacité passe à 1. unobserve() ne concerne que cet élément précis (entry.target), pas tous les .panneau."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quelle est la durée de vie de ce cookie (aucun attribut expires/max-age précisé) ?",
      "code": "document.cookie = \"session_id=abc123\";",
      "options": [
        "C'est un cookie de session : il disparaît à la fermeture du navigateur",
        "Le cookie disparaît à la fermeture de l'onglet seulement",
        "Le cookie est permanent",
        "Le cookie expire après 24 heures par défaut"
      ],
      "correct": 0,
      "explain": "Sans expires ni max-age, un cookie est un cookie de session : il est supprimé à la fermeture du navigateur."
    },
    {
      "cat": "webapi",
      "type": "text",
      "q": "Quelle méthode de localStorage supprime toutes les clés en une seule instruction ? Réponds avec uniquement le nom de la méthode.",
      "accept": [
        "clear"
      ],
      "explain": "localStorage.clear() vide entièrement le stockage local pour l'origine courante."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un site stocke un token dans localStorage. Un script injecté (XSS) lit localStorage.getItem('auth_token') puis l'exfiltre. Si un cookie HttpOnly avait été utilisé à la place, l'attaque aurait-elle fonctionné ?",
      "options": [
        "Non : un cookie HttpOnly est inaccessible à JavaScript, même via un script injecté",
        "Oui, le fetch() enverrait automatiquement le cookie à l'attaquant",
        "Oui : les cookies sont aussi accessibles via JavaScript",
        "Non, mais uniquement grâce à l'attribut Secure"
      ],
      "correct": 0,
      "explain": "L'attribut HttpOnly rend un cookie totalement invisible à document.cookie et à tout script JS, ce qui bloque ce type de vol de token même en cas de XSS."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Analysez ce code. Qu'arrive-t-il à l'appel socket.send() effectué avant l'établissement de la connexion ?",
      "code": "const socket = new WebSocket('wss://chat.exemple.com/ws');\n\n// Tentative d'envoi immédiat\nsocket.send(JSON.stringify({ type: 'PING' }));\n\nsocket.onopen = () => {\n  console.log('Connecté');\n  socket.send(JSON.stringify({ type: 'HELLO' }));\n};\n\nsocket.onmessage = (event) => {\n  console.log('Reçu:', event.data);\n};",
      "options": [
        "Une InvalidStateError est levée car la connexion n'est pas encore établie",
        "Le message est ignoré silencieusement sans erreur",
        "send() bloque l'exécution jusqu'à ce que la connexion soit établie, puis envoie le message",
        "Le message est mis en file d'attente et envoyé automatiquement dès l'ouverture"
      ],
      "correct": 0,
      "explain": "D'après la spécification WebSocket, appeler send() alors que readyState vaut CONNECTING (connexion pas encore OPEN) lève une InvalidStateError : il faut attendre onopen."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Observez ce code exécuté dans un navigateur. Que contient document.cookie après ces trois instructions ?",
      "code": "document.cookie = \"langue=fr\";\ndocument.cookie = \"region=wallonie\";\ndocument.cookie = \"langue=en\";\n\nconsole.log(document.cookie);",
      "options": [
        "Uniquement langue=en (les deux premières instructions ont été écrasées)",
        "Une chaîne vide, car la troisième instruction crée un conflit",
        "Une chaîne contenant les deux cookies : langue=en; region=wallonie (ou ordre inversé selon le navigateur)",
        "Une chaîne contenant les trois cookies : langue=fr; region=wallonie; langue=en"
      ],
      "correct": 2,
      "explain": "Chaque affectation à document.cookie ne crée ou ne met à jour QU'UN SEUL cookie (identifié par son nom). La 3e ligne met à jour le cookie \"langue\" existant (fr → en) sans en créer un nouveau : il reste 2 cookies au total."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Après ce code, quel est l'affichage dans la console ?",
      "code": "localStorage.setItem('a', '1');\nlocalStorage.setItem('b', '2');\nlocalStorage.setItem('c', '3');\n\nlocalStorage.removeItem('b');\n\nconsole.log(localStorage.length);\nconsole.log(localStorage.getItem('b'));\nconsole.log(localStorage.getItem('a'));",
      "options": [
        "2, undefined, '1'",
        "3, null, '1'",
        "2, null, '1'",
        "0, null, null"
      ],
      "correct": 2,
      "explain": "Après removeItem('b'), il reste 2 clés (length=2). getItem() sur une clé absente renvoie null (jamais undefined) ; getItem('a') renvoie toujours '1'."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Quel est le comportement de response.ok selon la spécification Fetch ? Que vaut response.ok si le status HTTP est 201 ?",
      "code": "const response = await fetch('/api/capteurs');\nconsole.log(response.ok);      // ?\nconsole.log(response.status);  // 201",
      "options": [
        "true",
        "false",
        "true, mais uniquement pour le status 200",
        "undefined"
      ],
      "correct": 0,
      "explain": "response.ok vaut true pour tout statut HTTP compris entre 200 et 299 inclus. 201 (Created) fait partie de cette plage : response.ok vaut true."
    },
    {
      "cat": "webapi",
      "type": "text",
      "q": "Pour autoriser une requête cross-origin depuis n'importe quelle origine, un serveur doit inclure un header HTTP spécifique dans sa réponse. Quel est le nom exact de ce header CORS (sans sa valeur) ?",
      "accept": [
        "Access-Control-Allow-Origin",
        "access-control-allow-origin"
      ],
      "explain": "Le serveur doit renvoyer l'en-tête Access-Control-Allow-Origin (avec une valeur comme * ou une origine précise) pour autoriser une requête cross-origin."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Examinez ce code d'envoi d'une commande. Quel problème ce code contient-il ?",
      "code": "const commande = { articleId: 7, quantite: 3, userId: 'u42' };\n\nconst response = await fetch('/api/commandes', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: commande\n});",
      "options": [
        "L'objet commande n'est pas sérialisé : il faut utiliser JSON.stringify(commande) dans body",
        "La méthode devrait être PUT et non POST pour envoyer des données",
        "Le header Content-Type est inutile pour un objet JavaScript",
        "Il manque l'option mode: 'cors'"
      ],
      "correct": 0,
      "explain": "fetch() attend une string (ou Blob/FormData/...) pour body, jamais un objet brut. Sans JSON.stringify(commande), le corps envoyé ne sera pas le JSON attendu par le serveur."
    },
    {
      "cat": "modules",
      "type": "text",
      "q": "Combien d'instructions export default peut-on placer dans un même fichier de module ES ? Réponds par un chiffre.",
      "accept": [
        "1",
        "un",
        "un seul"
      ],
      "explain": "Un module ES ne peut avoir qu'un seul export default (mais autant d'exports nommés que voulu)."
    },
    {
      "cat": "modules",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "// === calculs.js ===\nexport const TVA = 0.21;\nexport function htToTtc(ht) { return ht * (1 + TVA); }\nexport default function arrondir(n, decimales = 2) { return +n.toFixed(decimales); }\n\n// === main.js ===\nimport * as Calculs from './calculs.js';\nconsole.log(Calculs.TVA);\nconsole.log(Calculs.htToTtc(100));\nconsole.log(Calculs.default(121.3456));",
      "options": [
        "undefined, 121, 121.35",
        "0.21, 121, 121.35",
        "Une erreur car Calculs.default n'est pas valide",
        "0.21, 121, undefined"
      ],
      "correct": 1,
      "explain": "import * as Calculs regroupe tous les exports nommés ET l'export default sous la clé .default : les trois logs fonctionnent."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Quel mot-clé TypeScript est au cœur de l'erreur sur la dernière ligne ?",
      "code": "interface Paramètres { délai: number; tentatives: number; }\nconst config: Readonly<Paramètres> = { délai: 500, tentatives: 3 };\nconfig.délai = 1000; // Erreur",
      "accept": [
        "readonly"
      ],
      "explain": "Readonly<T> rend toutes les propriétés en lecture seule (readonly) : toute réaffectation est une erreur de compilation."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Avec strict: true, que se passe-t-il à la compilation ?",
      "code": "interface Commande { id: number; commentaire?: string; }\nfunction afficherCommentaire(cmd: Commande): string {\n  return cmd.commentaire.toUpperCase();\n}",
      "options": [
        "Le code compile, commentaire sera toujours une string si présente",
        "Le code compile sans erreur",
        "Erreur de compilation : cmd.commentaire peut être undefined",
        "Le code compile avec un simple avertissement"
      ],
      "correct": 2,
      "explain": "commentaire est optionnelle (?), donc typée string | undefined. Appeler .toUpperCase() dessus sans vérification est une erreur en mode strict."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Que produit ce code à la compilation ?",
      "code": "let capteur: unknown = getSensorData();\nconsole.log(capteur.toFixed(2));",
      "options": [
        "Le code compile et affiche NaN si ce n'est pas un nombre",
        "Erreur de compilation : toFixed n'existe pas sur le type unknown",
        "Erreur à l'exécution uniquement, la compilation réussit",
        "Le code compile sans erreur, unknown accepte toutes les méthodes"
      ],
      "correct": 1,
      "explain": "unknown exige une vérification de type (narrowing) avant toute utilisation : aucune méthode ne peut être appelée directement dessus."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Quel appel provoque une erreur de compilation ?",
      "code": "function extraireNom<T extends { nom: string }>(objet: T): string { return objet.nom; }\nextraireNom({ nom: \"Alice\", âge: 30 });\nextraireNom({ nom: \"Produit X\", ref: \"PX01\", prix: 9.99 });\nextraireNom({ id: 42 });",
      "options": [
        "Erreur sur le 1er appel : T ne peut avoir qu'une seule propriété",
        "Erreur sur le 2e appel : trop de propriétés",
        "Les trois appels sont valides",
        "Erreur sur le 3e appel : { id: 42 } ne satisfait pas la contrainte extends { nom: string }"
      ],
      "correct": 3,
      "explain": "La contrainte extends { nom: string } exige seulement la présence d'une propriété nom ; les propriétés en plus sont acceptées, mais { id: 42 } n'a pas de nom du tout."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Quelle valeur numérique est affichée par console.log ?",
      "code": "enum Niveau { Debutant, Intermediaire, Expert }\nconsole.log(Niveau.Expert);",
      "accept": [
        "2"
      ],
      "explain": "Un enum numérique commence à 0 par défaut : Debutant=0, Intermediaire=1, Expert=2."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Quelle est la sortie affichée ?",
      "code": "enum Priorite { Basse, Moyenne, Haute }\nconsole.log(Priorite.Moyenne);\nconsole.log(Priorite[1]);",
      "options": [
        "1 puis \"Moyenne\"",
        "\"Moyenne\" puis 1",
        "2 puis \"Haute\"",
        "1 puis undefined"
      ],
      "correct": 0,
      "explain": "Priorite.Moyenne vaut 1. Les enums numériques génèrent aussi un mapping inverse : Priorite[1] renvoie le nom \"Moyenne\"."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Considérez ce code. Que se passe-t-il à la compilation ?",
      "code": "type Langue = \"fr\" | \"en\" | \"nl\";\ntype Traductions = Record<Langue, string>;\n\nconst messages: Traductions = {\n  fr: \"Bonjour\",\n  en: \"Hello\",\n  nl: \"Hallo\"\n};\n\nconst msg: Traductions = {\n  fr: \"Au revoir\",\n  en: \"Goodbye\"\n};",
      "options": [
        "Erreur sur messages car on ne peut pas utiliser un union type comme clé de Record",
        "Les deux déclarations sont valides : les clés manquantes reçoivent undefined automatiquement",
        "Erreur sur la déclaration de msg : la clé \"nl\" est obligatoire mais absente",
        "Pas d'erreur car TypeScript considère les objets structurellement et les clés supplémentaires sont ignorées"
      ],
      "correct": 2,
      "explain": "Record<Langue, string> exige TOUTES les clés de l'union Langue (fr, en, nl). msg omet \"nl\" : c'est une erreur de compilation, TypeScript n'ajoute jamais undefined implicitement."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Considérez ce code TypeScript. Que se passe-t-il à la compilation avec le mode strict activé ?",
      "code": "let score = 100;\nscore = \"excellent\";",
      "options": [
        "Le code s'exécute normalement, score vaut \"excellent\"",
        "Erreur uniquement si on avait écrit let score: number = 100 avec annotation explicite",
        "Avertissement uniquement, le code compile quand même",
        "Erreur de compilation : le type string n'est pas assignable au type number"
      ],
      "correct": 3,
      "explain": "TypeScript infère le type number pour score dès son initialisation à 100 (même sans annotation explicite). Assigner ensuite une string est toujours une erreur de type, indépendamment du mode strict."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Considérez ce code TypeScript. Quel est le type de retour inféré par TypeScript pour cette fonction ? (répondez avec le nom du type TypeScript)",
      "code": "function estMajeur(age: number) {\n  return age >= 18;\n}",
      "accept": [
        "boolean"
      ],
      "explain": "L'expression age >= 18 est une comparaison, qui produit toujours un boolean : TypeScript infère automatiquement ce type de retour."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Considérez ce code TypeScript. Quelle valeur est affichée ?",
      "code": "type Coordonnee = [x: number, y: number, z: number];\nconst point: Coordonnee = [10, 20, 30];\nconsole.log(point[1]);",
      "accept": [
        "20"
      ],
      "explain": "Coordonnee est un type tuple : chaque position a un type précis. point[1] correspond à y, soit 20."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Considérez ce code TypeScript. Que produit-il à la compilation ?",
      "code": "type Capteur = {\n  id: number;\n};\n\ntype Capteur = {\n  valeur: number;\n};\n\nconst c: Capteur = { id: 1, valeur: 42 };",
      "options": [
        "Le code compile et la seconde déclaration écrase la première : Capteur n'a que valeur",
        "Erreur de compilation : l'identifiant Capteur est déclaré deux fois avec type",
        "Avertissement non bloquant, le code s'exécute avec les deux propriétés",
        "Le code compile et Capteur contient les deux propriétés id et valeur"
      ],
      "correct": 1,
      "explain": "Contrairement aux interfaces (qui fusionnent par déclaration multiple), un alias type ne peut être déclaré qu'une seule fois : la répétition de \"type Capteur\" est une erreur \"Duplicate identifier\"."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Quels sont les types A, B, C et D ?",
      "code": "type EstTexte<T> = T extends string ? \"oui\" : \"non\";\ntype A = EstTexte<string>;\ntype B = EstTexte<number>;\ntype C = EstTexte<\"bonjour\">;\ntype D = EstTexte<string | number>;",
      "options": [
        "A = \"oui\", B = \"non\", C = \"oui\", D = \"oui\" car l'union contient string",
        "A = \"oui\", B = \"non\", C = \"oui\", D = \"oui\" | \"non\"",
        "A = \"oui\", B = \"non\", C = \"non\" car \"bonjour\" est un literal, D = \"oui\" | \"non\"",
        "A = \"oui\", B = \"non\", C = \"oui\", D = \"non\""
      ],
      "correct": 1,
      "explain": "\"bonjour\" est un sous-type de string, donc C = \"oui\". Pour une union, le type conditionnel se distribue membre par membre : D = EstTexte<string> | EstTexte<number> = \"oui\" | \"non\"."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Quels sont les types A et B ?",
      "code": "interface Article { id: string; titre: string; }\nasync function chargerArticle(id: string): Promise<Article> { return { id, titre: \"TS avancé\" }; }\ntype A = ReturnType<typeof chargerArticle>;\ntype B = Awaited<ReturnType<typeof chargerArticle>>;",
      "options": [
        "Erreur, on ne peut pas combiner Awaited et ReturnType",
        "A = Article ; B = Article",
        "A = Promise<Article> ; B = Article",
        "A = Promise<Article> ; B = Promise<Article>"
      ],
      "correct": 2,
      "explain": "ReturnType donne le type de retour brut de la fonction, soit Promise<Article> pour A. Awaited déballe ensuite la Promise pour obtenir Article (B)."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Laquelle de ces affirmations est correcte pour Partial<Produit> ?",
      "code": "interface Produit { ref: string; nom: string; prix: number; stock: number; }\nfunction mettreAJour(ref: string, modifications: Partial<Produit>): void {}\nmettreAJour(\"P001\", { prix: 29.99 });\nmettreAJour(\"P002\", {});\nmettreAJour(\"P003\", { nom: \"Clavier\", stock: 50 });",
      "options": [
        "Erreur sur le 3e appel : deux propriétés dans Partial",
        "Erreur sur le 2e appel : {} n'est pas assignable à Partial<Produit>",
        "Erreur sur le 1er appel : ref est obligatoire dans Produit",
        "Les trois appels sont valides : Partial rend toutes les propriétés optionnelles"
      ],
      "correct": 3,
      "explain": "Partial<T> transforme toutes les propriétés en optionnelles : un objet vide {} est donc parfaitement valide."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Quel est le type inféré de résultat et que s'affiche-t-il ?",
      "code": "function fusionner<T, U>(a: T, b: U): T & U { return { ...a, ...b } as T & U; }\nconst résultat = fusionner({ code: \"A1\", quantité: 10 }, { libellé: \"Vis M6\", prix: 0.15 });\nconsole.log(résultat.quantité);\nconsole.log(résultat.libellé);\nconsole.log(résultat.code);",
      "options": [
        "Erreur : le spread ne fonctionne pas avec des objets typés TypeScript",
        "résultat a le type T | U, soit une union des deux objets",
        "Erreur à l'exécution car le spread ne fonctionne pas avec des objets typés TypeScript",
        "Le type est l'intersection des deux objets, les trois log affichent 10, \"Vis M6\", \"A1\""
      ],
      "correct": 3,
      "explain": "TypeScript infère T et U automatiquement depuis les arguments ; le type de retour T & U possède bien toutes les propriétés des deux objets."
    },
    {
      "cat": "tsadv",
      "type": "text",
      "q": "Quel mot-clé TypeScript doit remplacer E pour que ce type conditionnel infère correctement le type d'élément d'un tableau ?",
      "code": "type ExtraireÉlément<T> = T extends (___ E)[] ? E : T;\ntype Num = ExtraireÉlément<number[]>;  // number\ntype Bool = ExtraireÉlément<boolean>;  // boolean",
      "accept": [
        "infer"
      ],
      "explain": "Le mot-clé infer permet de capturer un type inconnu à l'intérieur d'un type conditionnel, ici le type d'élément E d'un tableau."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Quelle est la valeur des types ClésCapteur, ValeurId et ValeurNumérique ?",
      "code": "interface Capteur { id: string; température: number; actif: boolean; }\ntype ClésCapteur = keyof Capteur;\ntype ValeurId = Capteur[\"id\"];\ntype ValeurNumérique = Capteur[\"température\" | \"id\"];",
      "options": [
        "Erreur : on ne peut pas utiliser une union dans un index access type",
        "ClésCapteur = \"id\"|\"température\"|\"actif\" ; ValeurId = string ; ValeurNumérique = number",
        "ClésCapteur = \"id\"|\"température\"|\"actif\" ; ValeurId = string ; ValeurNumérique = number | string",
        "ClésCapteur = string ; ValeurId = \"id\" ; ValeurNumérique = number"
      ],
      "correct": 2,
      "explain": "keyof donne l'union des clés. Un index access type accepte une union de clés et retourne l'union des types correspondants : number | string."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Analysez cette fonction générique. Quel est le type inféré de résultat et que s'affiche-t-il ?",
      "code": "function fusionner<T, U>(a: T, b: U): T & U {\n  return { ...a, ...b } as T & U;\n}\n\nconst résultat = fusionner(\n  { code: \"A1\", quantité: 10 },\n  { libellé: \"Vis M6\", prix: 0.15 }\n);\n\nconsole.log(résultat.quantité);\nconsole.log(résultat.libellé);\nconsole.log(résultat.code);",
      "options": [
        "Le type est l'intersection des deux objets, les trois log affichent 10, \"Vis M6\", \"A1\"",
        "résultat a le type T | U, soit une union des deux objets",
        "Erreur à l'exécution car le spread ne fonctionne pas avec des objets typés TypeScript",
        "Erreur : il faut spécifier explicitement <T, U> lors de l'appel car TypeScript ne peut pas inférer deux paramètres"
      ],
      "correct": 0,
      "explain": "TypeScript infère T et U depuis les arguments passés (pas besoin de les préciser). Le type de retour T & U (intersection) possède toutes les propriétés des deux objets fusionnés : 10, \"Vis M6\", \"A1\"."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Analysez ce mapped type personnalisé. Que se passe-t-il lors de la compilation ?",
      "code": "type Immuable<T> = {\n  readonly [K in keyof T]: T[K];\n};\n\ninterface Coordonnées {\n  x: number;\n  y: number;\n  z: number;\n}\n\nconst point: Immuable<Coordonnées> = { x: 1, y: 2, z: 3 };\npoint.x = 10;",
      "options": [
        "Erreur uniquement à l'exécution : TypeScript ne vérifie pas readonly pour les types mappés personnalisés",
        "Le code compile sans erreur : readonly s'applique à l'objet mais pas à ses propriétés primitives",
        "Erreur de compilation sur point.x = 10 : toutes les propriétés sont readonly",
        "Erreur car un mapped type ne peut pas utiliser readonly, ce modificateur est réservé aux interfaces"
      ],
      "correct": 2,
      "explain": "Le mapped type applique readonly [K in keyof T]: T[K] à CHAQUE propriété de T. Toutes les propriétés de point deviennent en lecture seule : l'assignation point.x = 10 est une erreur de compilation."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quel est le résultat (mode non-strict) ? Object.freeze est superficiel.",
      "code": "const config = { version: \"1.0\", serveur: { host: \"localhost\", port: 3000 } };\nObject.freeze(config);\nconfig.version = \"2.0\";\nconfig.serveur.port = 8080;\nconfig.nouveau = \"test\";\nconsole.log(config.version);\nconsole.log(config.serveur.port);\nconsole.log(config.nouveau);",
      "options": [
        "\"2.0\", 8080, \"test\"",
        "\"1.0\", 8080, undefined",
        "\"1.0\", 3000, undefined",
        "Une TypeError est levée immédiatement"
      ],
      "correct": 1,
      "explain": "Object.freeze() est superficiel : version et nouveau (propriétés directes) restent protégées, mais serveur (objet imbriqué) n'est PAS gelé, donc port change bien à 8080."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Qu'affichent les deux console.log() ? (spread = copie superficielle)",
      "code": "const capteurA = { id: \"S01\", mesures: { min: 10, max: 80 } };\nconst capteurB = { ...capteurA, id: \"S02\" };\ncapteurB.mesures.max = 99;\nconsole.log(capteurA.id);\nconsole.log(capteurA.mesures.max);",
      "options": [
        "\"S02\" puis 80",
        "\"S01\" puis 99",
        "\"S01\" puis 80",
        "\"S02\" puis 99"
      ],
      "correct": 1,
      "explain": "Le spread copie id (valeur primitive, indépendante) mais mesures reste une RÉFÉRENCE partagée entre les deux objets : la modifier impacte capteurA aussi."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que vaut original[0].valeur après ce code ?",
      "code": "const original = [{ valeur: 10 }, { valeur: 20 }];\nconst copie = [...original];\ncopie[0].valeur = 99;\nconsole.log(original[0].valeur);",
      "options": [
        "undefined",
        "99",
        "Une TypeError est levée",
        "10"
      ],
      "correct": 1,
      "explain": "Le spread d'un tableau ne copie que le tableau lui-même : les objets à l'intérieur restent les mêmes références, partagées entre original et copie."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Qu'affichent les console.log() dans l'ordre ?",
      "code": "const materiau = { densite: 7.85, decrire() { return \"Matériau de base\"; } };\nconst acier = Object.create(materiau);\nacier.resistance = 400;\nconsole.log(acier.densite);\nconsole.log(Object.hasOwn(acier, \"densite\"));\nconsole.log(Object.hasOwn(acier, \"resistance\"));",
      "options": [
        "7.85, false, false",
        "7.85, false, true",
        "7.85, true, true",
        "undefined, false, true"
      ],
      "correct": 1,
      "explain": "densite est accessible via la chaîne de prototypes (Object.create) mais n'est pas une propriété PROPRE de acier : hasOwn renvoie false pour densite, true pour resistance (ajoutée directement)."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que vaut l'appel [1,2,3,4,5].reduce((x,y) => x+y, 10) ?",
      "options": [
        "15",
        "25",
        "20",
        "50"
      ],
      "correct": 1,
      "explain": "La somme du tableau (1+2+3+4+5=15) s'ajoute à la valeur initiale 10, soit 25."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que retourne ce code ?",
      "code": "let a = [5, 4, 3, 2, 1];\nlet result = a.filter((x, i) => i % 2 == 0);\nconsole.log(result);",
      "options": [
        "[4, 2]",
        "[5, 3, 1]",
        "[0, 2, 4]",
        "[5, 4, 3, 2, 1]"
      ],
      "correct": 1,
      "explain": "filter garde les éléments dont l'INDEX est pair (0,2,4) : a[0]=5, a[2]=3, a[4]=1 → [5, 3, 1]."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quel sera le résultat du code suivant ?",
      "code": "let array1 = [2, 3, 4];\nlet array2 = [1, ...array1, 5];\nconsole.log(array2.length);",
      "options": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correct": 3,
      "explain": "array2 = [1, 2, 3, 4, 5] : le spread insère les 3 éléments d'array1, plus 1 et 5, soit 5 éléments."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelle est la sortie produite par ces deux console.log ?",
      "code": "const a = new Array(4);\nconst b = Array.of(4);\nconsole.log(a.length);\nconsole.log(b.length);",
      "options": [
        "1 puis 1",
        "1 puis 4",
        "4 puis 4",
        "4 puis 1"
      ],
      "correct": 3,
      "explain": "new Array(4) crée un tableau VIDE de longueur 4. Array.of(4) crée un tableau contenant l'élément 4, donc de longueur 1."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que retourne ce code avec l'optional chaining et le nullish coalescing ?",
      "code": "const capteur = { id: \"C001\", mesure: null };\nconst valeur = capteur.mesure?.temperature ?? \"N/A\";\nconsole.log(valeur);",
      "options": [
        "undefined",
        "Une TypeError est levée",
        "\"N/A\"",
        "null"
      ],
      "correct": 2,
      "explain": "mesure vaut null : mesure?.temperature s'arrête et retourne undefined, ?? remplace alors par \"N/A\"."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Observez le code suivant. Que produisent les deux console.log() dans l'ordre ?",
      "code": "const ref = \"CAP-001\";\nconst stock = 42;\nconst prix = 9.99;\n\nconst article = { ref, stock, prix, tva: 0.21 };\nconsole.log(article.ref);\nconsole.log(article.stock + article.tva);",
      "options": [
        "\"ref\" puis 42.21",
        "\"CAP-001\" puis \"420.21\"",
        "undefined puis 42.21",
        "\"CAP-001\" puis 42.21"
      ],
      "correct": 3,
      "explain": "Les propriétés raccourcies { ref, stock, prix } prennent le nom et la valeur des variables. article.ref vaut \"CAP-001\", et stock + tva = 42 + 0.21 = 42.21."
    },
    {
      "cat": "obj",
      "type": "text",
      "q": "Que vaut idx ?",
      "code": "const temperatures = [22, 35, 18, 35, 29, 35, 21];\nconst idx = temperatures.findLastIndex(t => t === 35);\nconsole.log(idx);",
      "accept": [
        "5"
      ],
      "explain": "findLastIndex() parcourt le tableau depuis la fin et renvoie l'index de la DERNIÈRE occurrence correspondant au test : le dernier 35 est à l'index 5."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quel est le résultat du tri suivant ?",
      "code": "const mesures = [20, 100, 5, 3, 50];\nmesures.sort();\nconsole.log(mesures);",
      "options": [
        "[20, 100, 5, 3, 50]",
        "[100, 50, 20, 5, 3]",
        "[3, 5, 20, 50, 100]",
        "[100, 20, 3, 5, 50]"
      ],
      "correct": 3,
      "explain": "Sans fonction de comparaison, sort() convertit les éléments en chaînes et les trie lexicographiquement : \"100\" < \"20\" < \"3\" < \"5\" < \"50\", d'où [100, 20, 3, 5, 50]."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que retourne [1,2,3,4,5].filter(x => x < 3) ?",
      "options": [
        "3",
        "[true, true, false, false, false]",
        "[3,4,5]",
        "[1,2]"
      ],
      "correct": 3,
      "explain": "filter() garde les éléments qui satisfont la condition x < 3, soit 1 et 2 : le résultat est [1, 2], pas le complément [3,4,5]."
    },
    {
      "cat": "obj",
      "type": "text",
      "q": "Quel est le résultat de l'appel à console.log(copie.a.z) ?",
      "code": "let obj = { a: { x: 1, y: 2, z: 3 } };\nlet copie = Object.assign({}, obj);\nobj.a.z = 4;\nconsole.log(copie.a.z);",
      "accept": [
        "4"
      ],
      "explain": "Object.assign() effectue une copie SUPERFICIELLE : copie.a pointe vers le même objet que obj.a. Modifier obj.a.z modifie donc aussi copie.a.z (4)."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quel est le résultat de ce code ?",
      "code": "const capteurs = [\n  { id: 1, type: 'temp', actif: true },\n  { id: 2, type: 'temp', actif: false },\n  { id: 3, type: 'pression', actif: true }\n];\n\nconst a = capteurs.find(c => c.type === 'temp');\nconst b = capteurs.filter(c => c.type === 'temp');\n\nconsole.log(a.id);\nconsole.log(b.length);",
      "options": [
        "undefined puis 2",
        "1 puis 2",
        "[object Object] puis 2",
        "1 puis 1"
      ],
      "correct": 1,
      "explain": "find() renvoie le PREMIER élément correspondant (id: 1). filter() renvoie TOUS les éléments correspondants dans un nouveau tableau, ici 2 capteurs de type 'temp'."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelle est la valeur de resultat ?",
      "code": "const tarifs = { bronze: 10, argent: 25, or: 50 };\n\nconst resultat = Object.fromEntries(\n  Object.entries(tarifs)\n    .filter(([cle, val]) => val >= 25)\n    .map(([cle, val]) => [cle, val * 1.1])\n);\n\nconsole.log(resultat);",
      "options": [
        "Une TypeError car on ne peut pas chaîner filter sur Object.entries()",
        "{ bronze: 11, argent: 27.5, or: 55 }",
        "{ argent: 25, or: 50 }",
        "{ argent: 27.5, or: 55 }"
      ],
      "correct": 3,
      "explain": "Object.entries() transforme l'objet en tableau de paires [clé, valeur], filter() garde argent et or (≥25), map() les multiplie par 1.1, et Object.fromEntries() reconstruit un objet : { argent: 27.5, or: 55 }."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que fait data.map(function(v, i, a) { a[i] = v + 1 }) ?",
      "options": [
        "Modifie data pour que chaque élément soit incrémenté de 1",
        "Crée un nouveau tableau où chaque élément est incrémenté de 1",
        "Incrémente de 1 les éléments de data supérieurs à i",
        "Crée un tableau de booléens indiquant si chaque élément est incrémentable"
      ],
      "correct": 1,
      "explain": "map() prend le callback (valeur, index, tableauOriginal) et construit un nouveau tableau à partir des valeurs traitées : chaque élément se retrouve incrémenté de 1 dans le tableau résultant."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Que se passe-t-il à l'exécution de ce code ?",
      "code": "const grand = 9007199254740992n;\nconst normal = 1;\ntry {\n  const somme = grand + normal;\n  console.log(somme);\n} catch (e) {\n  console.log(\"Erreur :\", e.constructor.name);\n}\nconsole.log(grand + 1n);",
      "options": [
        "\"Erreur : RangeError\" puis 9007199254740993n",
        "\"Erreur : TypeError\" puis 9007199254740993n",
        "9007199254740993 puis 9007199254740993n",
        "9007199254740993n puis 9007199254740993n"
      ],
      "correct": 1,
      "explain": "On ne peut pas mélanger BigInt et Number avec les opérateurs arithmétiques : ça lève un TypeError. En revanche grand + 1n (deux BigInt) fonctionne et donne 9007199254740993n."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Analysez ce code et déterminez les valeurs affichées :",
      "code": "const config = {\n  timeout: 0,\n  retries: null\n};\nconst t1 = config.timeout || 5000;\nconst t2 = config.timeout ?? 5000;\nconst r1 = config.retries || 3;\nconst r2 = config.retries ?? 3;\nconsole.log(t1, t2, r1, r2);",
      "options": [
        "5000 / 0 / 3 / 3",
        "0 / 0 / 3 / 3",
        "5000 / 0 / null / 3",
        "5000 / 5000 / 3 / 3"
      ],
      "correct": 0,
      "explain": "|| considère 0 comme falsy et le remplace par 5000, alors que ?? ne remplace que null/undefined et garde donc 0. retries est null : || et ?? le remplacent tous deux par 3."
    },
    {
      "cat": "types",
      "type": "text",
      "q": "Quelle valeur est affichée par ce code ?",
      "code": "console.log(\"20\" - 8);",
      "accept": [
        "12"
      ],
      "explain": "Contrairement à +, l'opérateur - force la conversion numérique des deux opérandes : \"20\" devient 20, donc 20 - 8 = 12."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quel est le résultat affiché par ce code ?",
      "code": "const quantite = 10;\nconst rabais = \"5\";\nconst resultat = quantite + rabais;\nconsole.log(resultat);\nconsole.log(typeof resultat);",
      "options": [
        "15 / \"number\"",
        "\"105\" / \"string\"",
        "NaN / \"number\"",
        "10 / \"number\""
      ],
      "correct": 1,
      "explain": "Avec +, dès qu'un opérande est une chaîne, JavaScript convertit l'autre en chaîne et concatène : 10 + \"5\" donne \"105\", de type \"string\" (contrairement à -, *, / qui forcent une conversion numérique)."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Que s'affiche-t-il dans la console ?",
      "code": "console.log(typeof calculer);\nconsole.log(calculer(4));\nvar calculer = function(x) {\n  return x * x;\n};\nconsole.log(calculer(4));",
      "options": [
        "\"undefined\" puis une TypeError est levée.",
        "\"undefined\", undefined, 16",
        "Une ReferenceError est levée sur la première ligne car calculer n'existe pas encore.",
        "\"function\", 16, 16"
      ],
      "correct": 0,
      "explain": "var calculer est hoisté et vaut undefined tant que l'affectation n'a pas eu lieu : typeof calculer vaut \"undefined\" avant l'affectation. Mais ici l'appel calculer(4) est fait juste après, alors que calculer vaut encore undefined à ce moment précis (avant la ligne d'affectation) : appeler undefined(4) lève une TypeError. Le premier log affiche donc \"undefined\", puis l'exécution s'arrête avec une erreur avant d'atteindre le second et le troisième console.log."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Que va afficher ce code ?",
      "code": "console.log(0 ?? \"défaut\");",
      "options": [
        "null",
        "undefined",
        "\"défaut\"",
        "0"
      ],
      "correct": 3,
      "explain": "?? ne remplace que null ou undefined. 0 n'est ni l'un ni l'autre (contrairement à ||, qui l'aurait remplacé car 0 est falsy) : le résultat est donc 0."
    },
    {
      "cat": "types",
      "type": "text",
      "q": "Quelle valeur est affichée par ce code ?",
      "code": "console.log(parseInt(\"10\", 2));",
      "accept": [
        "2"
      ],
      "explain": "Le second argument de parseInt() est la base. \"10\" interprété en base 2 (binaire) vaut 1×2 + 0 = 2."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Un développeur récupère des données d'un formulaire HTML (toujours des chaînes) et effectue un calcul. Que valent total1, total2 et total3 ?",
      "code": "const prixSaisi = \"29\";\nconst quantiteSaisie = \"3\";\nconst total1 = prixSaisi + quantiteSaisie;\nconst total2 = prixSaisi * quantiteSaisie;\nconst total3 = Number(prixSaisi) + Number(quantiteSaisie);\nconsole.log(total1, typeof total1);\nconsole.log(total2, typeof total2);\nconsole.log(total3, typeof total3);",
      "options": [
        "\"293\" (string) / 87 (number) / 32 (number)",
        "32 (number) / 87 (number) / 32 (number)",
        "\"293\" (string) / \"87\" (string) / 32 (number)",
        "NaN / 87 (number) / 32 (number)"
      ],
      "correct": 0,
      "explain": "+ concatène deux chaînes (\"29\"+\"3\"=\"293\"). * force une conversion numérique implicite (29*3=87). Number() convertit explicitement avant d'additionner (29+3=32). La conversion explicite (total3) est l'approche la plus fiable et la plus lisible pour calculer un total."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant :",
      "code": "const handlers = [];\nfor (var i = 0; i < 3; i++) {\n  handlers.push(function() {\n    return i * 10;\n  });\n}\nconsole.log(handlers[0]());\nconsole.log(handlers[1]());\nconsole.log(handlers[2]());",
      "options": [
        "10, 20, 30",
        "0, 10, 20",
        "0, 0, 0",
        "30, 30, 30"
      ],
      "correct": 3,
      "explain": "var n'a pas de portée de bloc : les trois fonctions partagent la même variable i, qui vaut 3 à la fin de la boucle. i*10 = 30 pour chacune (avec let, on aurait obtenu 0, 10, 20)."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant :",
      "code": "function creerPaire() {\n  let score = 0;\n  const incrementer = () => ++score;\n  const lire = () => score;\n  return { incrementer, lire };\n}\nconst p1 = creerPaire();\nconst p2 = creerPaire();\np1.incrementer();\np1.incrementer();\np2.incrementer();\nconsole.log(p1.lire());\nconsole.log(p2.lire());",
      "options": [
        "3 puis 3",
        "2 puis 1",
        "0 puis 0",
        "2 puis 3"
      ],
      "correct": 1,
      "explain": "Chaque appel à creerPaire() crée une nouvelle closure avec sa propre variable score. p1 et p2 sont indépendants : p1 vaut 2 (deux incréments), p2 vaut 1 (un seul)."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Que s'affiche-t-il dans la console ?",
      "code": "const niveau = 2;\nswitch (niveau) {\n  case 1:\n    console.log(\"Débutant\");\n    break;\n  case 2:\n    console.log(\"Intermédiaire\");\n  case 3:\n    console.log(\"Avancé\");\n    break;\n  default:\n    console.log(\"Expert\");\n}",
      "options": [
        "\"Intermédiaire\" puis \"Avancé\"",
        "\"Intermédiaire\" uniquement",
        "\"Intermédiaire\", \"Avancé\", puis \"Expert\"",
        "\"Avancé\" uniquement"
      ],
      "correct": 0,
      "explain": "Sans break après case 2, l'exécution continue (fallthrough) dans le case suivant : \"Intermédiaire\" puis \"Avancé\" s'affichent, et le break de case 3 arrête ensuite l'exécution."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Quelle syntaxe est correcte pour créer un objet avec une méthode ?",
      "options": [
        "let obj = { nom: \"Test\", function afficher() { return this.nom; } };",
        "let obj = { nom: \"Test\", afficher: function() { return this.nom; } };",
        "let obj = new Object(nom: \"Test\", afficher: function() { return this.nom; });",
        "let obj = { nom: \"Test\", afficher() => { return this.nom; } };"
      ],
      "correct": 1,
      "explain": "Une méthode d'objet littéral s'écrit soit avec la syntaxe raccourcie afficher() {...}, soit en assignant une fonction à une propriété : afficher: function() {...}."
    },
    {
      "cat": "fn",
      "type": "text",
      "q": "Quelle valeur affiche console.log ?",
      "code": "function journaliser(niveau, ...messages) {\n  return messages.length;\n}\nconsole.log(journaliser(\"INFO\", \"Démarrage\", \"Connexion\", \"Prêt\"));",
      "accept": [
        "3"
      ],
      "explain": "Le paramètre rest ...messages capture tous les arguments après niveau, soit 3 éléments (\"Démarrage\", \"Connexion\", \"Prêt\")."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Que retourne l'appel à multiplie(2, 3) ?",
      "code": "let multiplie = (v, n) => { v * n };",
      "options": [
        "undefined",
        "6",
        "la fonction anonyme () => { 2 * 3 }",
        "NaN"
      ],
      "correct": 0,
      "explain": "Avec des accolades, le corps de la fonction fléchée est un bloc d'instructions classique : sans return explicite, la fonction renvoie undefined (le v * n est calculé mais jamais retourné)."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Dans ce code, quand le bloc catch sera-t-il exécuté ?",
      "code": "fetch('/api/users')\n  .then(response => {\n    if (!response.ok) throw new Error('Erreur HTTP');\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Problème:', error));",
      "options": [
        "Seulement si le serveur retourne un code 500",
        "Si fetch échoue OU si response.ok est false OU si le parsing JSON échoue",
        "Jamais, car fetch ne génère pas d'erreur",
        "Seulement si fetch échoue (erreur réseau)"
      ],
      "correct": 1,
      "explain": "catch() intercepte toute erreur survenant dans la chaîne : échec réseau du fetch, l'erreur levée manuellement quand response.ok est false, ou une erreur de parsing JSON."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Quelle méthode d'une promesse est utilisée pour gérer les erreurs ?",
      "options": [
        "then()",
        "catch()",
        "finally()",
        "error()"
      ],
      "correct": 1,
      "explain": "catch() est un raccourci de .then(undefined, onRejected) : il intercepte les rejets d'une Promise."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Dans quel ordre s'affichent ces messages ?",
      "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve()\n  .then(() => console.log(\"3\"))\n  .then(() => console.log(\"4\"));\nPromise.resolve().then(() => console.log(\"5\"));\nconsole.log(\"6\");",
      "options": [
        "1, 2, 3, 4, 5, 6",
        "1, 6, 2, 3, 5, 4",
        "1, 6, 3, 5, 4, 2",
        "1, 6, 3, 4, 5, 2"
      ],
      "correct": 2,
      "explain": "Le code synchrone passe en premier (1, 6). Puis les microtasks : le premier .then (\"3\") et le then du second Promise.resolve() (\"5\") étaient déjà en file, donc ils s'exécutent avant le second .then de la première chaîne (\"4\"), qui n'est mis en file qu'après l'exécution de \"3\". Enfin le setTimeout (\"2\"), un macrotask, passe en dernier."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que fait ce code ?",
      "code": "for (let i = 0; i < 3; i++) {\n  await fetch(`/api/data/${i}`);\n}",
      "options": [
        "Ne fonctionne pas, await ne peut pas être dans une boucle",
        "Exécute 3 requêtes séquentiellement (une après l'autre)",
        "Exécute 3 requêtes en parallèle"
      ],
      "correct": 1,
      "explain": "Chaque await met en pause l'exécution de la boucle jusqu'à la résolution de la requête en cours : les 3 fetch se font donc l'un après l'autre, pas en parallèle (contrairement à Promise.all)."
    },
    {
      "cat": "async",
      "type": "text",
      "q": "Quelle valeur est affichée par ce code ?",
      "code": "async function test() {\n  const val = await Promise.resolve(99)\n    .finally(() => 0)\n    .then(x => x + 1);\n  console.log(val);\n}\ntest();",
      "accept": [
        "100"
      ],
      "explain": "finally() ne modifie jamais la valeur transmise dans la chaîne : la valeur retournée par son callback (0) est ignorée. La Promise garde donc sa valeur résolue 99, et le .then() suivant l'incrémente : 99 + 1 = 100."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Quelle est la différence entre Promise.all et Promise.allSettled ?",
      "options": [
        "allSettled ne peut traiter que les promesses résolues",
        "allSettled est plus rapide que all",
        "allSettled attend toutes les promesses même en cas d'échec, all s'arrête au premier échec"
      ],
      "correct": 2,
      "explain": "Promise.all rejette dès qu'une seule promesse échoue, sans attendre les autres. Promise.allSettled attend toujours que toutes les promesses se terminent (résolues ou rejetées) et renvoie le détail de chacune."
    },
    {
      "cat": "async",
      "type": "text",
      "q": "Quel est l'affichage produit par ce code ?",
      "code": "async function run() {\n  const val = await Promise.resolve(7);\n  console.log(val * 3);\n}\nrun();",
      "accept": [
        "21"
      ],
      "explain": "await Promise.resolve(7) déballe la valeur résolue 7, puis val * 3 = 21."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Quelle est la bonne syntaxe pour définir une classe en ES6 ?",
      "options": [
        "class Personne { constructor(nom) { this.nom = nom; } }",
        "function Personne(nom) { this.nom = nom; }",
        "class Personne() { constructor(nom) { this.nom = nom; } }",
        "class Personne { function constructor(nom) { this.nom = nom; } }"
      ],
      "correct": 0,
      "explain": "Une classe ES6 se déclare avec class Nom { ... }, sans parenthèses après le nom, et le constructeur s'écrit constructor(...) sans le mot-clé function."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Considérez ce code TypeScript compilé et exécuté. Quelle est la sortie affichée ?",
      "code": "enum Etat {\n  Actif = \"ACTIF\",\n  Inactif = \"INACTIF\",\n  Suspendu = \"SUSPENDU\"\n}\nconst statut: Etat = Etat.Actif;\nconsole.log(statut === \"ACTIF\");\nconsole.log(statut);",
      "options": [
        "false puis \"Actif\"",
        "false puis \"ACTIF\"",
        "true puis \"ACTIF\"",
        "true puis 0"
      ],
      "correct": 2,
      "explain": "Un enum à valeurs string vaut littéralement la chaîne assignée : Etat.Actif est \"ACTIF\". La comparaison est donc true, et le second log affiche \"ACTIF\"."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Considérez ce code TypeScript :",
      "code": "const enum Saison {\n  Printemps,\n  Ete,\n  Automne,\n  Hiver\n}\nlet saisonActuelle = Saison.Ete;\nconsole.log(saisonActuelle);",
      "options": [
        "2",
        "\"Ete\"",
        "1",
        "Erreur à l'exécution car const enum n'existe pas en JavaScript"
      ],
      "correct": 2,
      "explain": "Un enum numérique commence à 0 par défaut : Printemps=0, Ete=1, Automne=2, Hiver=3. Saison.Ete vaut donc 1. Un const enum se comporte comme un enum classique à l'exécution, à la différence qu'il est entièrement supprimé à la compilation : sa valeur numérique (1) est inlinée directement dans le code JavaScript généré."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "const Archivable = (Base) => class extends Base {\n  archiver() {\n    return `${this.nom} archivé le ${new Date().getFullYear()}`;\n  }\n};\nclass Document {\n  constructor(nom) {\n    this.nom = nom;\n  }\n}\nclass Contrat extends Archivable(Document) {\n  constructor(nom, parties) {\n    super(nom);\n    this.parties = parties;\n  }\n}\nconst c = new Contrat('Bail', ['Alice', 'Bob']);\nconsole.log(c instanceof Document);\nconsole.log(typeof c.archiver);",
      "options": [
        "false, 'function'",
        "Une erreur est levée car Contrat ne peut pas étendre une fonction.",
        "true, 'undefined'",
        "true, 'function'"
      ],
      "correct": 3,
      "explain": "Archivable est un mixin : une fonction qui prend une classe de base et retourne une nouvelle classe qui en hérite. Contrat étend donc bien Document (instanceof true) et possède la méthode archiver (typeof 'function')."
    },
    {
      "cat": "oop",
      "type": "text",
      "q": "Dans le constructeur d'une classe enfant, quel mot-clé (suivi de parenthèses) permet d'appeler le constructeur de la classe parente ?",
      "accept": [
        "super()",
        "super"
      ],
      "explain": "super() appelle le constructeur de la classe parente ; il doit être appelé avant d'utiliser this dans le constructeur enfant."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Un développeur a écrit ce générateur censé produire les multiples d'un nombre jusqu'à une limite. Quel est le problème conceptuel de son utilisation des générateurs ?",
      "code": "function* multiplesJusqua(base, limite) {\n  const resultats = [];\n  let n = base;\n  while (n <= limite) {\n    resultats.push(n);\n    n += base;\n  }\n  yield resultats;\n}\nfor (const val of multiplesJusqua(3, 15)) {\n  console.log(val);\n}",
      "options": [
        "Aucun problème : le générateur fonctionne exactement comme prévu, il yield chaque multiple un par un.",
        "Le yield est placé en dehors de la boucle : au lieu de produire les valeurs une à une à la demande, le générateur construit tout le tableau puis ne le yield qu'une seule fois — l'intérêt même d'un générateur (paresse, itération valeur par valeur) est perdu.",
        "while ne peut pas être utilisé à l'intérieur d'une fonction génératrice.",
        "Il manque un return final après la boucle pour terminer le générateur correctement."
      ],
      "correct": 1,
      "explain": "La version idiomatique place yield n; à l'intérieur de la boucle (et retire le tableau intermédiaire) afin de produire chaque multiple un par un, au fur et à mesure : while (n <= limite) { yield n; n += base; }."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Analysez ce code. Quelle est la valeur de total après 3 clics ?",
      "code": "const btn = document.querySelector('#envoyer');\nlet total = 0;\nbtn.addEventListener('click', () => { total += 10; }, { once: true });\nbtn.addEventListener('click', () => { total += 1; });\n// L'utilisateur clique 3 fois sur le bouton\nconsole.log(total);",
      "options": [
        "13",
        "11",
        "33",
        "3"
      ],
      "correct": 0,
      "explain": "{ once: true } fait que le premier listener (+10) ne s'exécute qu'au premier clic, puis se retire automatiquement. Le second listener (+1) s'exécute à chaque clic : 10 + 1 + 1 + 1 = 13."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Considérez ce HTML et ce script (délégation d'événements). L'utilisateur clique sur le texte \"Produits\". Que s'affiche-t-il dans la console ?",
      "code": "<ul id=\"menu\">\n  <li data-id=\"1\">Accueil</li>\n  <li data-id=\"2\">Produits</li>\n  <li data-id=\"3\">Contact</li>\n</ul>\n\ndocument.getElementById('menu').addEventListener('click', function(event) {\n  console.log('target:', event.target.tagName);\n  console.log('currentTarget:', event.currentTarget.tagName);\n});",
      "options": [
        "target: \"LI\" / currentTarget: \"UL\"",
        "target: \"LI\" / currentTarget: \"LI\"",
        "target: \"UL\" / currentTarget: \"UL\"",
        "target: \"UL\" / currentTarget: \"LI\""
      ],
      "correct": 0,
      "explain": "event.target est l'élément réellement cliqué (le <li>), alors que event.currentTarget est l'élément sur lequel le listener est attaché (le <ul>, grâce à la délégation d'événements)."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Considérez ce HTML et ce script. Si la page est hébergée à https://exemple.be, que s'affiche-t-il dans la console ?",
      "code": "<a id=\"lien\" href=\"/accueil\">Accueil</a>\n\nconst lien = document.getElementById('lien');\nconsole.log(lien.getAttribute('href'));\nconsole.log(lien.href);",
      "options": [
        "null / undefined",
        "\"https://exemple.be/accueil\" / \"https://exemple.be/accueil\"",
        "\"/accueil\" / \"https://exemple.be/accueil\"",
        "\"/accueil\" / \"/accueil\""
      ],
      "correct": 2,
      "explain": "getAttribute('href') retourne la valeur brute écrite dans le HTML (\"/accueil\"), alors que la propriété .href retourne toujours l'URL absolue résolue par le navigateur (\"https://exemple.be/accueil\")."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Un développeur propose deux approches pour signaler visuellement les erreurs d'un formulaire : des styles inline (approche A) ou des classes CSS (approche B). Quel est le principal avantage de l'approche B sur l'approche A ?",
      "code": "// Approche A — styles inline\nfunction marquerErreurA(champ, message) {\n  champ.style.border = '2px solid red';\n  champ.style.backgroundColor = '#fff0f0';\n  champ.nextElementSibling.textContent = message;\n}\n// Approche B — classes CSS\nfunction marquerErreurB(champ, message) {\n  champ.classList.add('champ-erreur');\n  const msgEl = champ.nextElementSibling;\n  msgEl.classList.add('message-erreur');\n  msgEl.textContent = message;\n}",
      "options": [
        "Aucun avantage réel : les deux approches sont strictement équivalentes en pratique.",
        "L'approche B sépare mieux le style de la logique JS, centralise l'apparence dans le CSS (plus facile à maintenir, réutiliser et faire varier via un thème), et rend le style plus facile à surcharger (les styles inline ont une spécificité CSS très élevée). L'approche A peut rester justifiée pour un style ponctuel généré dynamiquement (ex. une couleur calculée à la volée) qui n'a pas de sens à définir dans une feuille CSS statique.",
        "L'approche A est toujours interdite en JavaScript moderne.",
        "L'approche B est plus rapide à exécuter dans tous les cas, sans exception."
      ],
      "correct": 1,
      "explain": "Les classes CSS séparent présentation et logique, sont plus faciles à maintenir/réutiliser/thémer, et évitent les problèmes de spécificité liés au style inline. Le style inline garde son intérêt pour des valeurs calculées dynamiquement (ex. une couleur issue d'un calcul) qui n'ont pas leur place dans une feuille de style statique."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un développeur utilise JSONP pour récupérer des données météo. Quelle est la principale faille de sécurité de cette approche ?",
      "code": "window.afficherMeteo = function(data) {\n  document.getElementById('temp').textContent = data.temperature;\n};\nconst script = document.createElement('script');\nscript.src = `https://meteo-api.com/data?callback=afficherMeteo`;\ndocument.head.appendChild(script);",
      "options": [
        "JSONP ne supporte que la méthode GET, ce qui empêche d'envoyer des données",
        "La fonction callback est trop lente car elle est dans l'objet window",
        "JSONP ne fonctionne qu'en HTTP, pas en HTTPS",
        "Le serveur peut retourner et exécuter du code JavaScript arbitraire dans le contexte de la page, permettant le vol de données ou la modification du DOM"
      ],
      "correct": 3,
      "explain": "JSONP charge un <script> depuis un domaine externe : ce script s'exécute avec les pleins pouvoirs dans la page. Si le serveur est compromis ou malveillant, il peut exécuter n'importe quel code JavaScript dans le contexte de la page."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Voici un code d'envoi de formulaire avec fichier. Ce code contient une erreur subtile. Laquelle ?",
      "code": "const formData = new FormData();\nformData.append('nom', 'Rapport Q3');\nformData.append('fichier', document.querySelector('#file-input').files[0]);\nconst response = await fetch('/api/documents/upload', {\n  method: 'POST',\n  headers: { 'Content-Type': 'multipart/form-data' },\n  body: formData\n});",
      "options": [
        "FormData ne supporte pas l'envoi de fichiers, il faut utiliser un Blob à la place",
        "La méthode doit être PUT et non POST pour envoyer un FormData",
        "Il faut appeler JSON.stringify(formData) avant de l'assigner à body",
        "Il ne faut pas définir Content-Type manuellement avec FormData : le navigateur doit le générer automatiquement avec le boundary correct"
      ],
      "correct": 3,
      "explain": "Avec FormData, le navigateur doit lui-même générer l'en-tête Content-Type avec le boundary multipart. En le fixant manuellement, le boundary manque et le serveur ne peut plus parser correctement le corps de la requête."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un développeur doit stocker des images de catalogue (plusieurs dizaines de Mo) côté client pour permettre la navigation hors ligne. Quelle solution est la plus adaptée ?",
      "options": [
        "localStorage, car il est simple à utiliser et disponible sur tous les navigateurs modernes",
        "Les cookies, car ils sont transmis automatiquement avec chaque requête HTTP",
        "sessionStorage, pour que les images soient supprimées à la fermeture de l'onglet",
        "La Cache API, conçue pour stocker des ressources HTTP volumineuses avec les Service Workers"
      ],
      "correct": 3,
      "explain": "localStorage est limité (~5-10 Mo) et bloquant (synchrone), et les cookies sont bien trop petits (~4 Ko) et envoyés à chaque requête. La Cache API, utilisée avec les Service Workers, est conçue pour stocker de grosses ressources HTTP et permettre le fonctionnement hors ligne."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un serveur envoie l'en-tête HTTP suivant au navigateur : Set-Cookie: auth_token=xyz789; HttpOnly; Secure; SameSite=Strict. Que se passe-t-il si console.log(document.cookie) est exécuté côté client ?",
      "options": [
        "Le cookie est visible dans document.cookie uniquement si la connexion est HTTPS (grâce à l'attribut Secure)",
        "Le cookie apparaît dans document.cookie mais en lecture seule (on ne peut pas le modifier)",
        "Une exception de sécurité est levée à l'exécution de document.cookie",
        "Le cookie auth_token n'apparaît pas dans document.cookie ; il est invisible pour JavaScript"
      ],
      "correct": 3,
      "explain": "L'attribut HttpOnly rend un cookie totalement inaccessible à JavaScript (document.cookie ne le montre jamais), ce qui protège contre le vol de session via une faille XSS."
    },
    {
      "cat": "webapi",
      "type": "text",
      "q": "Quelle est la taille maximale approximative d'un cookie (en Ko) ? Répondez par un nombre entier.",
      "accept": [
        "4"
      ],
      "explain": "Un cookie est limité à environ 4 Ko par la plupart des navigateurs, ce qui le rend inadapté au stockage de grosses quantités de données."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un développeur hésite entre Server-Sent Events (SSE) et WebSockets pour un tableau de bord affichant des métriques serveur actualisées toutes les 5 secondes. Le client n'a jamais besoin d'envoyer de données au serveur. Quelle affirmation est correcte concernant SSE dans ce contexte ?",
      "options": [
        "SSE est déprécié et remplacé par WebSockets dans tous les navigateurs modernes",
        "SSE est inutilisable car il ne supporte pas le format JSON",
        "SSE ne peut pas être utilisé car il nécessite que le client envoie des données régulièrement (heartbeat)",
        "SSE est parfaitement adapté : il permet une communication serveur → client unidirectionnelle avec reconnexion automatique"
      ],
      "correct": 3,
      "explain": "SSE est fait précisément pour ce cas : une communication unidirectionnelle serveur → client, avec reconnexion automatique intégrée, plus simple à mettre en place qu'un WebSocket quand le client n'a rien à envoyer."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Voici un extrait de la réponse envoyée par un serveur SSE, incluant un événement nommé alerte. Comment le client JavaScript récupère-t-il spécifiquement les messages de type alerte ?",
      "code": "data: {\"temperature\": 22.5, \"humidite\": 65}\n\nevent: alerte\ndata: {\"message\": \"Seuil dépassé\"}",
      "options": [
        "source.on('alerte', handler)",
        "source.onmessage reçoit tous les messages y compris les événements nommés",
        "source.addEventListener('alerte', (event) => { ... })",
        "source.onerror car les événements nommés sont traités comme des erreurs"
      ],
      "correct": 2,
      "explain": "onmessage ne capte que les messages sans champ event (ou event: message). Pour les événements nommés (event: alerte), il faut utiliser source.addEventListener('alerte', handler)."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Analysez ce code :",
      "code": "const capteur = { id: 42, actif: true, mesure: 18.5 };\nlocalStorage.setItem('capteur', capteur);\nconst lu = localStorage.getItem('capteur');\nconsole.log(lu);\nconsole.log(typeof lu);",
      "options": [
        "Une erreur est levée car setItem n'accepte pas d'objet",
        "{\"id\":42,\"actif\":true,\"mesure\":18.5} puis \"string\"",
        "null puis \"object\"",
        "[object Object] puis \"string\""
      ],
      "correct": 3,
      "explain": "localStorage.setItem() convertit toujours sa valeur en chaîne via String(), sans appeler JSON.stringify() automatiquement. Un objet devient donc la chaîne \"[object Object]\" (et non son JSON), de type \"string\". Il faut appeler JSON.stringify() soi-même avant de stocker un objet."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "const session = {\n  userId: 42,\n  token: \"abc123xyz\",\n  role: \"admin\",\n  expireAt: new Date(\"2026-12-31\")\n};\nconst json = JSON.stringify(session, (cle, valeur) => {\n  if (cle === \"token\") return undefined;\n  if (valeur instanceof Date) return valeur.getFullYear();\n  return valeur;\n});\nconsole.log(json);",
      "options": [
        "'{\"userId\":42,\"role\":\"admin\",\"expireAt\":2026}'",
        "Une TypeError car les Date ne sont pas sérialisables",
        "'{\"userId\":42,\"token\":\"abc123xyz\",\"role\":\"admin\",\"expireAt\":2026}'",
        "'{\"userId\":42,\"role\":\"admin\",\"expireAt\":\"2026-12-31T00:00:00.000Z\"}'"
      ],
      "correct": 0,
      "explain": "La fonction replacer de JSON.stringify() est appliquée à chaque paire clé/valeur : elle retire token (en retournant undefined) et remplace toute Date par son année. Le résultat ne contient donc que userId, role et expireAt=2026."
    },
    {
      "cat": "modules",
      "type": "mcq",
      "q": "Comment importer un export par défaut depuis un module JavaScript ?",
      "options": [
        "import MaClasse from './MonModule';",
        "import { MaClasse } from './MonModule';",
        "import default as MaClasse from './MonModule';",
        "const MaClasse = require('./MonModule');"
      ],
      "correct": 0,
      "explain": "Un export default s'importe sans accolades, avec le nom de son choix : import NomChoisi from '...'."
    },
    {
      "cat": "modules",
      "type": "mcq",
      "q": "Comment importer une classe en la renommant ?",
      "options": [
        "import { Personne as Person } from './personne.mjs';",
        "import Personne rename Person from './personne.mjs';",
        "import { Personne: Person } from './personne.mjs';",
        "import Personne => Person from './personne.mjs';"
      ],
      "correct": 0,
      "explain": "Le mot-clé as permet de renommer un export nommé lors de l'import : import { NomOriginal as NouveauNom } from '...'."
    },
    {
      "cat": "modules",
      "type": "mcq",
      "q": "Considérez ces deux fichiers. Que se passe-t-il lors de l'exécution de main.js ?",
      "code": "// === utils.js ===\nexport const VERSION = '2.0';\nexport default function saluer(nom) {\n  return `Bonjour, ${nom} !`;\n}\n\n// === main.js ===\nimport { saluer, VERSION } from './utils.js';\nconsole.log(saluer('Alice'));\nconsole.log(VERSION);",
      "options": [
        "Une erreur est levée : saluer ne peut pas être importé avec des accolades car c'est un export default.",
        "Le code affiche undefined puis 2.0.",
        "Le code affiche Bonjour, Alice ! puis 2.0.",
        "Le code affiche Bonjour, Alice ! puis undefined car VERSION est un export nommé."
      ],
      "correct": 0,
      "explain": "Un export default crée une liaison nommée \"default\", pas \"saluer\" : il n'existe donc aucun export nommé saluer dans le module. import { saluer } échoue au chargement du module (erreur de liaison, avant même l'exécution du code). Pour l'importer correctement, il aurait fallu écrire import saluer, { VERSION } from './utils.js'."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Quel est le résultat de ce code ?",
      "code": "const dico = Object.create(null);\ndico.cle = \"valeur\";\nconsole.log(typeof dico);",
      "accept": [
        "object"
      ],
      "explain": "typeof retourne toujours \"object\" pour un objet, même créé avec Object.create(null) (qui n'a simplement pas de prototype, donc pas de méthodes héritées comme toString)."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Observez ces déclarations TypeScript. Quelle relation existe entre FichePublique et SansConfidentiel ?",
      "code": "interface Employé {\n  id: number;\n  nom: string;\n  email: string;\n  salaire: number;\n  dateNaissance: Date;\n}\ntype FichePublique = Pick<Employé, \"id\" | \"nom\" | \"email\">;\ntype SansConfidentiel = Omit<Employé, \"salaire\" | \"dateNaissance\">;",
      "options": [
        "Les deux types sont structurellement identiques : ils contiennent exactement id, nom, email",
        "SansConfidentiel contient toutes les propriétés de Employé sauf les exclues, ce qui inclut les 5 propriétés originales moins 2",
        "FichePublique étend SansConfidentiel et ajoute des propriétés supplémentaires",
        "Pick et Omit ne peuvent pas aboutir au même résultat, ils opèrent différemment"
      ],
      "correct": 1,
      "explain": "Pick<T, K> sélectionne uniquement les clés listées (ici id, nom, email : 3 propriétés). Omit<T, K> retire les clés listées et garde le reste (ici 5 - 2 = 3 propriétés : id, nom, email aussi). Les deux types obtenus sont donc structurellement identiques."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Analysez ces types TypeScript. Quelles assignations provoquent une erreur TypeScript ?",
      "code": "type Événement = \"créer\" | \"modifier\" | \"supprimer\";\ntype Gestionnaire = `on${Capitalize<Événement>}`;\nconst h1: Gestionnaire = \"onCréer\";\nconst h2: Gestionnaire = \"oncréer\";\nconst h3: Gestionnaire = \"supprimer\";",
      "options": [
        "h2 et h3 provoquent une erreur ; h1 est valide",
        "Les trois assignations provoquent une erreur car on ne peut pas utiliser des accents dans des template literal types",
        "h3 provoque une erreur ; h1 et h2 sont valides",
        "Les trois assignations sont valides car TypeScript n'est pas sensible à la casse pour les string literals"
      ],
      "correct": 0,
      "explain": "Gestionnaire vaut \"onCréer\" | \"onModifier\" | \"onSupprimer\" (Capitalize met en majuscule la première lettre). h1 est valide. h2 (\"oncréer\", sans majuscule) et h3 (\"supprimer\", sans le préfixe \"on\") ne correspondent à aucune des valeurs autorisées : TypeScript est sensible à la casse pour les string literal types."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Considérez ces types. Quelle affirmation décrit correctement les deux types obtenus ?",
      "code": "type Rôle = \"admin\" | \"éditeur\" | \"lecteur\" | \"invité\";\ntype RôleActif = Exclude<Rôle, \"invité\">;\ntype RôlePrivilégié = Extract<Rôle, \"admin\" | \"éditeur\">;",
      "options": [
        "RôleActif = \"admin\" | \"éditeur\" | \"lecteur\" ; RôlePrivilégié = \"admin\" | \"éditeur\"",
        "RôleActif = \"invité\" ; RôlePrivilégié = \"lecteur\" | \"invité\"",
        "RôleActif = \"lecteur\" | \"invité\" ; RôlePrivilégié = \"lecteur\"",
        "RôleActif = \"admin\" | \"éditeur\" | \"lecteur\" | \"invité\" ; RôlePrivilégié = \"admin\" | \"éditeur\" | \"lecteur\" | \"invité\""
      ],
      "correct": 0,
      "explain": "Exclude<T, U> retire de T les membres présents dans U : RôleActif retire \"invité\" et garde les 3 autres. Extract<T, U> garde uniquement les membres de T présents dans U : RôlePrivilégié ne garde que \"admin\" et \"éditeur\"."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelle est la sortie du console.log() ?",
      "code": "const capteur = \"temperature\";\nconst unite = \"C\";\nconst rapport = {\n  [capteur]: 36.6,\n  [`${capteur}_unite`]: unite\n};\nconsole.log(Object.keys(rapport));",
      "options": [
        "[\"temperature\", \"C\"]",
        "Une erreur de syntaxe est levée",
        "[\"capteur\", \"capteur_unite\"]",
        "[\"temperature\", \"temperature_unite\"]"
      ],
      "correct": 3,
      "explain": "Les crochets [capteur] créent une clé calculée dynamiquement : sa valeur (\"temperature\") devient le nom de la propriété, pas le nom \"capteur\" lui-même. Object.keys renvoie donc [\"temperature\", \"temperature_unite\"]."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que vaut la variable resultat après ce code ?",
      "code": "const commandes = ['cmd1', 'cmd2'];\nconst resultat = commandes.push('cmd3', 'cmd4');\nconsole.log(resultat);",
      "options": [
        "undefined",
        "4",
        "['cmd1', 'cmd2', 'cmd3', 'cmd4']",
        "2"
      ],
      "correct": 1,
      "explain": "push() ajoute les éléments au tableau (qui devient ['cmd1','cmd2','cmd3','cmd4']) et retourne la nouvelle longueur du tableau, soit 4 — pas le tableau lui-même."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que vaut chaque variable après ce destructuring ?",
      "code": "const produit = { nom: \"Clavier\", prix: 49.99 };\nconst { nom: libelle, prix: montant, tva = 0.21 } = produit;\nconsole.log(libelle, montant, tva);",
      "options": [
        "Une ReferenceError est levée car libelle n'est pas une propriété de produit",
        "\"Clavier\" 49.99 0.21",
        "undefined undefined 0.21",
        "\"Clavier\" 49.99 undefined"
      ],
      "correct": 1,
      "explain": "nom: libelle renomme la propriété nom dans la variable libelle. prix: montant fait de même pour prix. tva n'existe pas dans produit, donc la valeur par défaut 0.21 est utilisée."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que vaut c (alt) à la fin de ce code ?",
      "code": "const coordonnees = [48.85, 2.35];\nconst [lat, lng, alt = 0] = coordonnees;\nconsole.log(alt);",
      "options": [
        "undefined",
        "Une RangeError est levée",
        "null",
        "0"
      ],
      "correct": 3,
      "explain": "Le tableau n'a que 2 éléments : la 3e position (alt) est undefined, donc la valeur par défaut 0 s'applique."
    },
    {
      "cat": "obj",
      "type": "text",
      "q": "Quelle valeur est assignée à resultat ?",
      "code": "const appareil = { marque: \"Bosch\" };\nconst resultat = appareil.demarrer?.() ?? \"Indisponible\";\nconsole.log(resultat);",
      "accept": [
        "Indisponible",
        "\"Indisponible\""
      ],
      "explain": "demarrer n'existe pas sur appareil : l'optional chaining ?. empêche l'erreur et retourne undefined au lieu d'appeler une fonction inexistante. ?? remplace ensuite ce undefined par \"Indisponible\"."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Voici deux implémentations d'une même opération (Version A avec forEach, Version B avec map). Quelle affirmation décrit le mieux la comparaison entre les deux ?",
      "code": "// Version A\nconst labels = [];\nstocks.forEach(s => {\n  labels.push(`${s.produit}: ${s.qte} unités`);\n});\n// Version B\nconst labelsB = stocks.map(s => `${s.produit}: ${s.qte} unités`);",
      "options": [
        "Les deux versions produisent des résultats différents : forEach ne peut pas transformer un tableau.",
        "Les deux versions produisent le même résultat, mais map() est généralement préférable ici : plus concis, plus lisible, et il exprime directement l'intention de transformer un tableau en un autre sans variable intermédiaire ni push manuel. forEach() reste pertinent quand on effectue des effets de bord (logs, appels API, etc.) sans construire de nouveau tableau.",
        "forEach() est toujours plus performant que map() car il ne crée pas de nouveau tableau.",
        "map() modifie le tableau original alors que forEach() ne le modifie jamais."
      ],
      "correct": 1,
      "explain": "map() est idiomatique pour transformer un tableau en un autre : il évite la déclaration d'un tableau intermédiaire et les push manuels. forEach() garde son intérêt pour des effets de bord (ex. logger, envoyer une requête pour chaque élément) sans vouloir produire un nouveau tableau."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelle est la valeur de result1 et result2 ?",
      "code": "let arr = [1, 2, 3];\nlet result1 = arr.forEach(x => x * 2);\nlet result2 = arr.map(x => x * 2);\nconsole.log(result1, Array.isArray(result2));",
      "options": [
        "undefined true",
        "true true",
        "[2,4,6] true",
        "undefined false"
      ],
      "correct": 0,
      "explain": "forEach() ne retourne jamais rien d'utile : result1 vaut undefined. map() retourne toujours un nouveau tableau : Array.isArray(result2) vaut true."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quel est le résultat de ce code ?",
      "code": "const notes = [12, 15, 18];\nconst calculer = function(x) { return x * 2; };\nconsole.log(typeof notes);\nconsole.log(typeof calculer);\nconsole.log(notes instanceof Array);",
      "options": [
        "\"object\" / \"function\" / false",
        "\"object\" / \"object\" / true",
        "\"array\" / \"function\" / true",
        "\"object\" / \"function\" / true"
      ],
      "correct": 3,
      "explain": "typeof d'un tableau vaut \"object\" (il n'existe pas de type \"array\" en JavaScript), typeof d'une fonction vaut \"function\", et instanceof Array vaut true car notes est bien un tableau."
    },
    {
      "cat": "types",
      "type": "mcq",
      "q": "Quel est le résultat de ce code ?",
      "code": "const a = 0;\nconst b = \"\";\nconst c = false;\nconsole.log(a == b);\nconsole.log(b == c);\nconsole.log(a === b);",
      "options": [
        "true / true / true",
        "false / false / false",
        "false / true / false",
        "true / true / false"
      ],
      "correct": 3,
      "explain": "Avec l'égalité faible (==), 0, \"\" et false sont tous convertis en 0 pour la comparaison : a==b et b==c valent donc true. Avec l'égalité stricte (===), aucune conversion n'a lieu : 0 (number) et \"\" (string) sont de types différents, donc a===b vaut false."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Soit ce code utilisant la convention error-first. Que produit-il ?",
      "code": "function chargerConfig(chemin, callback) {\n  setTimeout(() => {\n    if (!chemin) {\n      callback(new Error(\"Chemin requis\"), null);\n    } else {\n      callback(null, { mode: \"prod\", debug: false });\n    }\n  }, 0);\n}\nchargerConfig(\"app.json\", (err, config) => {\n  if (err) {\n    console.log(\"erreur:\", err.message);\n    return;\n  }\n  console.log(\"mode:\", config.mode);\n});",
      "options": [
        "mode: prod",
        "erreur: Chemin requis",
        "mode: undefined",
        "Le code plante car null.message est appelé"
      ],
      "correct": 0,
      "explain": "\"app.json\" est une chaîne non vide (truthy), donc le chemin else s'exécute : callback(null, {mode:\"prod\", debug:false}). err vaut null (falsy), le bloc if(err) est ignoré, et \"mode: prod\" est affiché."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant. Quel est l'affichage complet ?",
      "code": "function planifierTache(titre, priorite = \"normale\", delai = 7) {\n  return `${titre} | ${priorite} | ${delai}j`;\n}\nconsole.log(planifierTache(\"Livraison\"));\nconsole.log(planifierTache(\"Réunion\", undefined, 3));\nconsole.log(planifierTache(\"Audit\", \"haute\"));",
      "options": [
        "Livraison | normale | 7j\nRéunion | undefined | 3j\nAudit | haute | 7j",
        "Livraison | normale | 7j\nRéunion | normale | 3j\nAudit | haute | undefined",
        "Livraison | normale | 7j\nRéunion | normale | 3j\nAudit | haute | 7j",
        "Livraison | normale | 7j\nRéunion | normale | 7j\nAudit | haute | 7j"
      ],
      "correct": 2,
      "explain": "Passer explicitement undefined pour un paramètre déclenche sa valeur par défaut, exactement comme si l'argument était omis. priorite vaut donc \"normale\" pour l'appel \"Réunion\", et delai vaut 7 par défaut quand il n'est pas fourni (\"Audit\")."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez les deux fonctions suivantes. Que s'affiche-t-il dans la console ?",
      "code": "const creerA = id => { valeur: id };\nconst creerB = id => ({ valeur: id });\nconsole.log(creerA(10));\nconsole.log(creerB(10));",
      "options": [
        "Une SyntaxError sur la première arrow function.",
        "undefined puis undefined",
        "{ valeur: 10 } puis { valeur: 10 }",
        "undefined puis { valeur: 10 }"
      ],
      "correct": 3,
      "explain": "{ } juste après => est interprété comme un bloc de fonction, pas un objet littéral : \"valeur: id\" devient une instruction étiquetée (label) sans return, donc creerA(10) renvoie undefined. Entourer l'objet de parenthèses (creerB) lève l'ambiguïté et retourne bien l'objet { valeur: 10 }."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Qu'affiche ce code (en mode strict) ?",
      "code": "const compteur = {\n  total: 0,\n  ajouter(valeurs) {\n    valeurs.forEach(function(v) {\n      this.total += v;\n    });\n  }\n};\ncompteur.ajouter([10, 20, 30]);\nconsole.log(compteur.total);",
      "options": [
        "60",
        "0",
        "NaN",
        "Une TypeError est levée car this est undefined dans le callback"
      ],
      "correct": 3,
      "explain": "La fonction passée à forEach est une function classique (pas une arrow function) et forEach() ne lui fournit aucun thisArg : en mode strict, this vaut donc undefined à l'intérieur, et this.total lève une TypeError."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que produit ce code dans la console ?",
      "code": "console.log(\"début\");\nconst id1 = setTimeout(() => console.log(\"timer1\"), 100);\nconst id2 = setTimeout(() => console.log(\"timer2\"), 200);\nconst id3 = setTimeout(() => console.log(\"timer3\"), 300);\nclearTimeout(id2);\nconsole.log(\"fin\");",
      "options": [
        "début, fin, timer1, timer2, timer3",
        "début, timer1, fin, timer3",
        "début, fin, timer1, timer3",
        "début, fin, timer3"
      ],
      "correct": 2,
      "explain": "Le code synchrone (\"début\", \"fin\") s'exécute en premier. clearTimeout(id2) annule timer2 avant même qu'il ne se déclenche. Il ne reste donc que timer1 (100ms) puis timer3 (300ms), dans cet ordre."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Quel est l'output de ce code ?",
      "code": "Promise.resolve(\"données\")\n  .then(val => {\n    throw new Error(\"problème\");\n    return val.toUpperCase();\n  })\n  .then(val => console.log(\"then:\", val))\n  .catch(err => console.log(\"catch:\", err.message))\n  .then(() => console.log(\"finally-like\"));",
      "options": [
        "Rien n'est affiché (erreur non gérée)",
        "catch: problème",
        "then: données\nfinally-like",
        "catch: problème\nfinally-like"
      ],
      "correct": 3,
      "explain": "Le throw dans le premier .then() rejette la promesse : le .then() suivant est sauté, et .catch() intercepte l'erreur (\"catch: problème\"). Comme .catch() renvoie une promesse résolue, le .then() final s'exécute normalement ensuite (\"finally-like\")."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Que retourne une fonction déclarée avec async ?",
      "options": [
        "La valeur retournée par return",
        "undefined si pas de return explicite",
        "Toujours une promesse"
      ],
      "correct": 2,
      "explain": "Une fonction async retourne toujours une Promise, qu'elle contienne un return explicite ou non : la valeur de retour (ou undefined) devient la valeur de résolution de cette promesse."
    },
    {
      "cat": "async",
      "type": "text",
      "q": "Observez ce code. Quelle valeur affiche console.log ? Répondez avec les guillemets si la valeur est une chaîne.",
      "code": "const response = await fetch('/api/stock/42');\nconst resultat = response.json();\nconsole.log(typeof resultat);",
      "accept": [
        "object",
        "\"object\""
      ],
      "explain": "response.json() est appelé sans await : resultat est donc la Promise elle-même (pas encore résolue), et typeof sur une Promise vaut toujours \"object\"."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Analysez ce code. Quel est l'affichage complet, dans l'ordre, produit par ce code ?",
      "code": "async function étapeA() {\n  throw new Error(\"échec de A\");\n}\nasync function étapeB() {\n  console.log(\"B démarre\");\n  await étapeA();\n  console.log(\"B termine\");\n}\nasync function principale() {\n  try {\n    await étapeB();\n    console.log(\"principale continue\");\n  } catch (err) {\n    console.log(\"principale catch:\", err.message);\n  }\n  console.log(\"principale fin\");\n}\nprincipale();",
      "options": [
        "B démarre\nB termine\nprincipale catch: échec de A\nprincipale fin",
        "B démarre\nprincipale catch: échec de A\nprincipale fin",
        "B démarre\néchec de A\nprincipale continue\nprincipale fin",
        "B démarre\nprincipale fin (l'erreur n'est jamais interceptée)"
      ],
      "correct": 1,
      "explain": "étapeA() lève une erreur, ce qui rejette la promesse de await étapeA() dans étapeB() : le reste de étapeB() (\"B termine\") n'est jamais exécuté. Cette rejection remonte via await étapeB() dans principale(), interceptée par le catch, qui affiche err.message. \"principale continue\" n'est donc jamais atteint, mais le code après le try/catch (\"principale fin\") s'exécute normalement."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Dans le code précédent (étapeA lève une erreur, étapeB l'attend, principale l'entoure d'un try/catch), pourquoi les lignes \"B termine\" et \"principale continue\" ne s'affichent-elles jamais ?",
      "options": [
        "Parce que console.log() est asynchrone et n'a pas le temps de s'exécuter avant la fin du script",
        "Parce que l'erreur levée dans étapeA() rejette la promesse de await étapeA(), ce qui interrompt immédiatement la suite de étapeB() ; cette rejection remonte ensuite via await étapeB() et interrompt le bloc try de principale() avant la ligne suivante",
        "Parce que étapeB() est appelée sans le mot-clé await dans principale()",
        "Parce que étapeA() ne retourne aucune valeur"
      ],
      "correct": 1,
      "explain": "Une erreur non interceptée dans une fonction async rejette sa promesse. Un await sur une promesse rejetée relance immédiatement l'erreur à l'endroit de l'await, sautant tout le code qui suit jusqu'au prochain catch englobant."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "class Joueur {\n  score = 0;\n  niveau = 1;\n  actif = true;\n  constructor(pseudo) {\n    this.pseudo = pseudo;\n  }\n  gagnerPoints(pts) {\n    this.score += pts;\n    if (this.score >= 100) this.niveau++;\n  }\n}\nconst j1 = new Joueur('Alice');\nconst j2 = new Joueur('Bob');\nj1.gagnerPoints(120);\nconsole.log(j1.niveau);\nconsole.log(j2.niveau);\nconsole.log(j1.score === j2.score);",
      "options": [
        "2, 2, false",
        "1, 1, true",
        "2, 1, false",
        "2, 1, true"
      ],
      "correct": 2,
      "explain": "Les champs de classe (score, niveau, actif) sont réinitialisés indépendamment pour chaque instance. j1.gagnerPoints(120) porte son score à 120 (≥100), donc j1.niveau passe à 2. j2 n'est jamais touché : niveau reste 1, score reste 0 (≠ 120)."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Comment modifier le contenu textuel d'un élément en JavaScript ?",
      "options": [
        "element.text = \"Nouveau texte\"",
        "element.setText(\"Nouveau texte\")",
        "element.content = \"Nouveau texte\"",
        "element.textContent = \"Nouveau texte\""
      ],
      "correct": 3,
      "explain": "textContent est la propriété standard pour lire/écrire le contenu textuel d'un élément. .text n'existe pas sur les éléments HTML génériques, .content et .setText() ne sont pas des API DOM valides ici."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Analysez ce code : une liste est construite dynamiquement puis ajoutée au document.",
      "code": "const liste = document.createElement('ul');\nfor (let i = 1; i <= 3; i++) {\n  const item = document.createElement('li');\n  item.textContent = 'Étape ' + i;\n  liste.appendChild(item);\n}\ndocument.getElementById('conteneur').appendChild(liste);\nconsole.log(document.querySelectorAll('#conteneur li').length);",
      "options": [
        "1",
        "Une erreur : on ne peut pas querySelector avant que l'élément soit dans le document",
        "0",
        "3"
      ],
      "correct": 3,
      "explain": "Les 3 <li> sont créés puis attachés à <ul>, qui est lui-même attaché à #conteneur avant l'appel à querySelectorAll. Le DOM contient donc bien 3 éléments li au moment de la requête."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Que se passe-t-il avec ce code lorsqu'on clique sur le bouton ?",
      "code": "<div id=\"parent\">\n  <button id=\"child\">Cliquez-moi</button>\n</div>\n<script>\n  document.getElementById('parent').addEventListener('click', () => {\n    console.log('Parent cliqué');\n  });\n  document.getElementById('child').addEventListener('click', (e) => {\n    console.log('Enfant cliqué');\n    e.stopPropagation();\n  });\n</script>",
      "options": [
        "Rien ne s'affiche",
        "Seul \"Enfant cliqué\" s'affiche",
        "\"Enfant cliqué\" puis \"Parent cliqué\" s'affichent",
        "\"Parent cliqué\" puis \"Enfant cliqué\" s'affichent"
      ],
      "correct": 1,
      "explain": "Le handler du bouton s'exécute d'abord (\"Enfant cliqué\"), puis e.stopPropagation() empêche l'événement de remonter (bubbling) jusqu'au parent : le handler de #parent ne se déclenche donc jamais."
    },
    {
      "cat": "dom",
      "type": "text",
      "q": "Considérez ce code. Quelle valeur numérique est affichée par console.log ?",
      "code": "const div = document.createElement('div');\nconsole.log(div.nodeType);",
      "accept": [
        "1"
      ],
      "explain": "1 correspond à la constante Node.ELEMENT_NODE : tout élément HTML créé via createElement a un nodeType de 1."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Voici un code de lecture de préférences. Que s'affiche-t-il ?",
      "code": "const defaut = { volume: 50, notifications: true };\nlocalStorage.setItem('config', JSON.stringify(defaut));\nconst raw = localStorage.getItem('config');\nconst config = JSON.parse(raw);\nconsole.log(config.volume + 10);\nconsole.log(typeof config.notifications);",
      "options": [
        "60 puis \"boolean\"",
        "60 puis \"string\"",
        "Une erreur SyntaxError est levée lors du JSON.parse",
        "\"5010\" puis \"string\""
      ],
      "correct": 0,
      "explain": "JSON.stringify convertit l'objet en chaîne JSON valide, et JSON.parse la reconstruit fidèlement : config.volume reste un number (50+10=60) et config.notifications reste un boolean, pas une string."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Que représente response.ok dans une réponse fetch ?",
      "options": [
        "true si le statut HTTP est entre 200 et 299",
        "true si la réponse contient des données",
        "true si la requête n'a pas généré d'erreur réseau"
      ],
      "correct": 0,
      "explain": "response.ok est un booléen calculé automatiquement par l'API Fetch : il vaut true uniquement si le code de statut HTTP est dans la plage 200-299 (succès). Une réponse 404 ou 500 est reçue normalement (pas d'erreur réseau) mais response.ok vaudra false."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Comment envoyer des données JSON dans le corps d'une requête avec Fetch ?",
      "options": [
        "En passant l'objet JavaScript directement à l'option body",
        "En passant l'objet JavaScript à l'option json",
        "En sérialisant l'objet en JSON et en le passant à l'option body",
        "Fetch ne permet pas d'envoyer des données JSON"
      ],
      "correct": 2,
      "explain": "L'option body de fetch() attend une chaîne (ou un autre type spécifique comme FormData/Blob), pas un objet brut. Il faut donc appeler JSON.stringify(objet) avant de le passer à body, généralement avec l'en-tête Content-Type: application/json."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un utilisateur ouvre deux onglets sur la même page https://app.example.com. Dans l'onglet 1, il exécute ce code. Quelle affirmation est correcte concernant l'onglet 2 ?",
      "code": "// Onglet 1\nlocalStorage.setItem('mode', 'sombre');\nsessionStorage.setItem('etape', '3');",
      "options": [
        "L'onglet 2 ne peut lire ni l'un ni l'autre car les onglets sont isolés",
        "L'onglet 2 peut lire etape=3 dans sessionStorage, mais pas le localStorage qui est privé à l'onglet 1",
        "L'onglet 2 peut lire mode=sombre dans localStorage, mais sessionStorage.getItem('etape') retourne null",
        "L'onglet 2 peut lire les deux valeurs : localStorage et sessionStorage sont tous les deux partagés"
      ],
      "correct": 2,
      "explain": "localStorage est partagé entre tous les onglets d'une même origine : l'onglet 2 lit bien mode=sombre. sessionStorage, en revanche, est propre à chaque onglet/tab (même origine) : l'onglet 2 a son propre sessionStorage vide, donc getItem('etape') renvoie null."
    },
    {
      "cat": "modules",
      "type": "mcq",
      "q": "Considérez cette structure de fichiers utilisant un barrel file. Que produit ce code ?",
      "code": "// === services/email.js ===\nexport class EmailService {\n  envoyer(dest, msg) { return `Email à ${dest}: ${msg}`; }\n}\n// === services/sms.js ===\nexport class SmsService {\n  envoyer(dest, msg) { return `SMS à ${dest}: ${msg}`; }\n}\n// === services/index.js ===\nexport { EmailService } from './email.js';\nexport { SmsService } from './sms.js';\n// === main.js ===\nimport { EmailService, SmsService } from './services/index.js';\nconst email = new EmailService();\nconsole.log(email.envoyer('alice@test.be', 'Bonjour'));",
      "options": [
        "Email à alice@test.be: Bonjour",
        "Une erreur est levée car on ne peut pas importer depuis un barrel file.",
        "undefined",
        "Une erreur est levée car EmailService ne peut pas être re-exporté depuis un autre module."
      ],
      "correct": 0,
      "explain": "export { X } from './fichier.js' est une syntaxe standard de re-export ES modules : services/index.js agit comme un \"barrel file\" qui regroupe les exports. L'import fonctionne normalement et affiche \"Email à alice@test.be: Bonjour\"."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Analysez la fonction suivante en TypeScript.",
      "code": "function formatMesure(valeur: string | number): string {\n  if (typeof valeur === \"number\") {\n    return valeur.toFixed(1) + \" kg\";\n  }\n  return valeur.trim().toUpperCase();\n}\nconsole.log(formatMesure(72.456));\nconsole.log(formatMesure(\" température \"));",
      "options": [
        "\"72.5 kg\" puis \"TEMPÉRATURE\"",
        "\"72.5 kg\" puis \" température \"",
        "\"72.456 kg\" puis \"TEMPÉRATURE\"",
        "Une erreur TypeScript à la compilation"
      ],
      "correct": 0,
      "explain": "Le type guard typeof valeur === \"number\" affine (narrowing) le type union string | number. Pour 72.456 : toFixed(1) arrondit à \"72.5\" + \" kg\". Pour la chaîne : trim() retire les espaces puis toUpperCase() met en majuscules → \"TEMPÉRATURE\"."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Considérez ce code TypeScript compilé et exécuté en JavaScript. Quelle valeur affiche console.log ? (répondez avec les guillemets si la valeur est une chaîne)",
      "code": "let actif: boolean = false;\nconsole.log(typeof actif);",
      "accept": [
        "boolean",
        "\"boolean\""
      ],
      "explain": "Le typage TypeScript disparaît à la compilation : à l'exécution, actif est simplement un booléen JavaScript, donc typeof actif vaut la chaîne \"boolean\"."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Considérez ce code TypeScript utilisant un type union discriminé. Que se passe-t-il à l'exécution ?",
      "code": "type Notification =\n  | { type: \"sms\"; phone: string }\n  | { type: \"email\"; address: string }\n  | { type: \"push\"; deviceId: string };\n\nfunction sendNotification(n: Notification): string {\n  switch (n.type) {\n    case \"sms\": return `SMS vers ${n.phone}`;\n    case \"email\": return `Email vers ${n.address}`;\n    case \"push\": return `Push sur ${n.deviceId}`;\n    default:\n      const check: never = n;\n      return check;\n  }\n}\nconsole.log(sendNotification({ type: \"email\", address: \"bob@test.com\" }));",
      "options": [
        "Affiche \"Email vers bob@test.com\" sans erreur",
        "Affiche \"undefined\" car le switch ne retourne pas dans tous les cas",
        "Erreur de compilation car le bloc default est inaccessible",
        "Erreur à l'exécution car never n'est pas un type runtime"
      ],
      "correct": 0,
      "explain": "L'objet correspond au cas \"email\" : le switch retourne directement \"Email vers bob@test.com\", sans jamais atteindre le bloc default. Le const check: never sert uniquement à un contrôle exhaustif à la compilation (si un nouveau membre de l'union n'était pas géré, TypeScript signalerait une erreur ici) ; il n'a aucun effet à l'exécution."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "const langages = ['JS', 'TS', 'Python'];\nlangages.version = '2024';\nfor (const cle in langages) {\n  console.log(cle);\n}",
      "options": [
        "'JS', 'TS', 'Python', '2024' (4 lignes)",
        "'JS', 'TS', 'Python' (3 lignes)",
        "0, 1, 2 (3 lignes)",
        "0, 1, 2, version (4 lignes)"
      ],
      "correct": 3,
      "explain": "Un tableau reste un objet : on peut lui ajouter des propriétés arbitraires comme version. for...in énumère toutes les propriétés énumérables (y compris les indices, sous forme de chaînes, et les propriétés ajoutées manuellement), donc \"0\", \"1\", \"2\", \"version\"."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que vaut ville et pays après ce code ?",
      "code": "const livraison = {\n  destinataire: \"Dupont\",\n  adresse: {\n    rue: \"Av. des Pins 12\",\n    codePostal: \"4000\"\n  }\n};\nconst {\n  adresse: {\n    ville = \"Non spécifiée\",\n    pays = \"Belgique\"\n  }\n} = livraison;\nconsole.log(ville, pays);",
      "options": [
        "Une TypeError car ville n'existe pas dans adresse",
        "\"Non spécifiée\" \"Belgique\"",
        "\"Av. des Pins 12\" \"4000\"",
        "undefined undefined"
      ],
      "correct": 1,
      "explain": "ville et pays n'existent pas dans livraison.adresse (qui ne contient que rue et codePostal) : les propriétés manquantes valent undefined lors de la déstructuration, ce qui déclenche leurs valeurs par défaut respectives."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelle valeur est affichée pour chaque variable ?",
      "code": "const commandes = [\n  { id: 1, client: { nom: \"Leroy\", adresse: { ville: \"Liège\" } } },\n  { id: 2, client: { nom: \"Petit\" } },\n  { id: 3 }\n];\nconst c1 = commandes[0].client?.adresse?.ville ?? \"Inconnue\";\nconst c2 = commandes[1].client?.adresse?.ville ?? \"Inconnue\";\nconst c3 = commandes[2].client?.adresse?.ville ?? \"Inconnue\";\nconsole.log(c1, c2, c3);",
      "options": [
        "\"Liège\" undefined \"Inconnue\"",
        "\"Liège\" \"Inconnue\" \"Inconnue\"",
        "Une TypeError est levée à l'accès à commandes[2].client.adresse",
        "\"Liège\" \"Inconnue\" undefined"
      ],
      "correct": 1,
      "explain": "c1 : la chaîne complète existe → \"Liège\". c2 : client existe mais pas adresse → l'optional chaining renvoie undefined, remplacé par \"Inconnue\" via ??. c3 : client lui-même n'existe pas (commandes[2] n'a qu'un id) → même résultat, \"Inconnue\"."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Considérez ce code TypeScript. Quelle valeur est affichée ?",
      "code": "type Etudiant = {\n  nom: string;\n  note: number;\n};\nconst promotion: Etudiant[] = [\n  { nom: \"Alice\", note: 15 },\n  { nom: \"Bob\", note: 12 },\n  { nom: \"Clara\", note: 18 }\n];\nconst moyenne = promotion.reduce((acc, e) => acc + e.note, 0) / promotion.length;\nconsole.log(moyenne);",
      "options": [
        "45",
        "Erreur de compilation car on ne peut pas utiliser reduce sur un tableau typé",
        "NaN",
        "15"
      ],
      "correct": 3,
      "explain": "reduce() fonctionne normalement sur un tableau typé : 15 + 12 + 18 = 45, puis 45 / 3 (promotion.length) = 15. Le typage TypeScript ne change rien au comportement à l'exécution."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Après exécution de ce code, quelle assertion est vraie ?",
      "code": "const original = {\n  nom: \"Rapport Q1\",\n  sections: [\"intro\", \"données\", \"conclusion\"],\n  meta: { auteur: \"Alice\", version: 1 }\n};\nconst clone = structuredClone(original);\nclone.sections.push(\"annexe\");\nclone.meta.version = 2;\nclone.nom = \"Rapport Q2\";",
      "options": [
        "original.nom vaut \"Rapport Q2\"",
        "original.sections contient toujours [\"intro\", \"données\", \"conclusion\"] et original.meta.version vaut toujours 1",
        "original.meta.version vaut 2",
        "original.sections contient [\"intro\", \"données\", \"conclusion\", \"annexe\"]"
      ],
      "correct": 1,
      "explain": "structuredClone() effectue une copie profonde (deep clone) : contrairement au spread ou à Object.assign (copies superficielles), tous les niveaux imbriqués sont dupliqués. Modifier clone n'affecte donc jamais original, à aucun niveau."
    },
    {
      "cat": "obj",
      "type": "text",
      "q": "Quelle est la valeur affichée par console.log(retrait) ? Saisissez la valeur exacte (notation tableau).",
      "code": "const etapes = ['init', 'config', 'build', 'test', 'deploy'];\nconst retrait = etapes.splice(1, 2);\nconsole.log(retrait);",
      "accept": [
        "['config', 'build']",
        "[\"config\", \"build\"]",
        "[config, build]"
      ],
      "explain": "splice(1, 2) retire 2 éléments à partir de l'index 1 ('config' et 'build') et modifie etapes sur place ; splice() retourne un tableau contenant les éléments retirés, pas le tableau modifié."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Un développeur hésite entre Object.seal() et Object.freeze() pour protéger un objet de configuration. Quelle affirmation décrit correctement la différence entre les deux ?",
      "code": "const appConfig = {\n  appName: \"MonApp\",\n  maxConnections: 100,\n  debug: false,\n  database: {\n    host: \"db.local\",\n    port: 5432\n  }\n};",
      "options": [
        "Les deux empêchent l'ajout et la suppression de propriétés ; seul freeze() empêche en plus la modification des valeurs des propriétés existantes (seal() les autorise)",
        "seal() et freeze() sont strictement équivalents",
        "seal() empêche toute modification y compris des valeurs, alors que freeze() autorise l'ajout de nouvelles propriétés",
        "freeze() fonctionne uniquement sur les tableaux, seal() uniquement sur les objets"
      ],
      "correct": 0,
      "explain": "Object.seal() bloque l'ajout/suppression de propriétés mais laisse les valeurs existantes modifiables (si writable). Object.freeze() va plus loin : il bloque en plus toute modification des valeurs des propriétés existantes."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "En reprenant appConfig et Object.freeze(appConfig), l'instruction appConfig.database.port = 9999 fonctionne-t-elle ?",
      "code": "Object.freeze(appConfig);\nappConfig.database.port = 9999;",
      "options": [
        "Non, car freeze() protège aussi automatiquement tous les objets imbriqués",
        "Oui : Object.freeze() est superficiel (shallow), il ne gèle que le premier niveau — database reste mutable",
        "Non, car JavaScript interdit par défaut toute mutation d'objet imbriqué",
        "Oui, mais uniquement si le code s'exécute en mode non strict"
      ],
      "correct": 1,
      "explain": "Object.freeze() est shallow (superficiel) : il ne rend immuables que les propriétés directes de l'objet gelé. L'objet database, imbriqué, reste parfaitement mutable tant qu'il n'est pas lui-même gelé explicitement."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Pour rendre appConfig complètement immuable, y compris ses propriétés imbriquées comme database, que faut-il faire ?",
      "options": [
        "Appliquer Object.freeze() sur l'objet racine : cela suffit, la protection est automatiquement récursive",
        "Appliquer récursivement Object.freeze() sur chaque objet imbriqué (par exemple via une fonction utilitaire deepFreeze)",
        "Utiliser Object.seal() à la place, qui est récursif contrairement à freeze()",
        "C'est impossible : aucun mécanisme natif ne permet l'immuabilité profonde en JavaScript"
      ],
      "correct": 1,
      "explain": "Comme freeze() n'agit que sur le premier niveau, il faut geler chaque objet imbriqué individuellement — typiquement via une fonction récursive (deepFreeze) qui parcourt toutes les propriétés objet et leur applique Object.freeze()."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant. Que s'affiche-t-il dans la console ?",
      "code": "function resumer(label, ...valeurs) {\n  console.log(typeof valeurs);\n  console.log(Array.isArray(valeurs));\n  console.log(valeurs.length);\n}\nresumer(\"températures\", 18, 22, 25, 19);",
      "options": [
        "array\ntrue\n4",
        "object\ntrue\n4",
        "object\nfalse\n4",
        "object\ntrue\n5"
      ],
      "correct": 1,
      "explain": "Le paramètre rest (...valeurs) est toujours un véritable tableau : typeof vaut \"object\" (il n'existe pas de type \"array\"), Array.isArray() vaut true, et valeurs ne contient que les arguments après label, soit [18, 22, 25, 19] → longueur 4."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant. Que s'affiche-t-il dans la console ?",
      "code": "const Vehicule = (marque, annee) => {\n  this.marque = marque;\n  this.annee = annee;\n};\ntry {\n  const v = new Vehicule(\"Toyota\", 2023);\n  console.log(v.marque);\n} catch (e) {\n  console.log(e.constructor.name);\n}",
      "options": [
        "Toyota",
        "SyntaxError",
        "TypeError",
        "undefined"
      ],
      "correct": 2,
      "explain": "Les arrow functions n'ont pas de mécanisme interne [[Construct]] : elles ne peuvent jamais être utilisées avec new. new Vehicule(...) lève donc une TypeError (\"Vehicule is not a constructor\"), interceptée par le catch qui affiche le nom de la classe d'erreur."
    },
    {
      "cat": "fn",
      "type": "mcq",
      "q": "Observez le code suivant. Que s'affiche-t-il dans la console ?",
      "code": "const resultat = (function(base) {\n  const tva = 0.21;\n  return base * (1 + tva);\n})(200);\nconsole.log(resultat);\nconsole.log(typeof tva);",
      "options": [
        "242 puis une ReferenceError",
        "200 puis \"number\"",
        "242 puis \"number\"",
        "242 puis \"undefined\""
      ],
      "correct": 1,
      "explain": "resultat = 200 * 1.21 = 242. tva est déclarée avec const uniquement à l'intérieur de l'IIFE : elle n'existe pas dans la portée extérieure. Or typeof est spécialement conçu pour NE PAS lever de ReferenceError sur un identifiant non résolu : il renvoie simplement la chaîne \"undefined\"."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Ce code enchaîne trois opérations asynchrones avec des callbacks (callback hell). Pour le refactoriser en Promises + async/await, quelle est l'approche correcte de \"promisification\" d'une fonction comme connecterBD(callback) ?",
      "code": "function connecterBD(callback) {\n  setTimeout(() => callback(null, { connexion: \"active\" }), 100);\n}",
      "options": [
        "Envelopper l'appel dans une Promise, en résolvant ou rejetant selon le résultat du callback : new Promise((resolve, reject) => connecterBD((err, res) => err ? reject(err) : resolve(res)))",
        "Ajouter simplement le mot-clé async devant connecterBD sans autre modification",
        "Remplacer setTimeout par Promise.resolve() à l'intérieur de connecterBD",
        "Appeler connecterBD().then() directement, car toute fonction avec callback retourne déjà une Promise"
      ],
      "correct": 0,
      "explain": "Une fonction basée sur un callback error-first ne devient pas une Promise automatiquement. Il faut l'envelopper explicitement dans un new Promise(...), en appelant resolve() ou reject() selon que le callback reçoit une erreur ou un résultat."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Une fois connecterBD, requêter et formater promisifiées, comment les enchaîner proprement avec async/await tout en gérant les erreurs ?",
      "options": [
        "Dans une fonction async, avec un await devant chaque appel, le tout entouré d'un bloc try/catch : toute erreur rejetée par une étape est interceptée par le catch",
        "En gardant les callbacks imbriqués : async/await ne peut pas remplacer les callbacks",
        "En ajoutant un .then() après chaque await, ce qui est obligatoire avec async/await",
        "En appelant les trois fonctions en parallèle avec Promise.all(), peu importe qu'elles dépendent les unes des autres"
      ],
      "correct": 0,
      "explain": "async/await transforme les appels chaînés en code séquentiel lisible : chaque étape est attendue avec await, et try/catch remplace élégamment la répétition de vérifications d'erreur (if (err) { ... return; }) à chaque niveau de callback."
    },
    {
      "cat": "async",
      "type": "mcq",
      "q": "Ces deux fonctions chargent les mêmes données. Laquelle est la plus rapide si chaque fetch*() prend 1 seconde ?",
      "code": "// Version A\nasync function chargerA() {\n  const produits = await fetchProduits();\n  const stocks = await fetchStocks();\n  return { produits, stocks };\n}\n// Version B\nasync function chargerB() {\n  const [produits, stocks] = await Promise.all([\n    fetchProduits(),\n    fetchStocks()\n  ]);\n  return { produits, stocks };\n}",
      "options": [
        "Impossible à déterminer sans connaître le contenu des fonctions",
        "La version A est plus rapide car elle évite le overhead de Promise.all()",
        "Les deux versions ont la même durée",
        "La version B est plus rapide (~1s contre ~2s)"
      ],
      "correct": 3,
      "explain": "chargerA attend fetchProduits() (1s) avant même de démarrer fetchStocks() : exécution séquentielle, ~2s au total. chargerB lance les deux requêtes en parallèle via Promise.all(), qui attend la plus longue des deux : ~1s au total."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Que produit ce code ?",
      "code": "class Compte {\n  #solde = 0;\n  constructor(solde) {\n    this.#solde = solde;\n  }\n  getSolde() {\n    return this.#solde;\n  }\n}\nclass CompteEpargne extends Compte {\n  afficherSolde() {\n    return this.#solde; // accès depuis la sous-classe\n  }\n}\nconst ce = new CompteEpargne(1000);\nconsole.log(ce.getSolde());\nconsole.log(ce.afficherSolde());",
      "options": [
        "Une erreur de syntaxe est levée car #solde n'est pas accessible dans la sous-classe CompteEpargne.",
        "Le code affiche 1000 puis 1000 car les sous-classes héritent des champs privés.",
        "Le code affiche 1000 puis 0 car le champ privé est réinitialisé dans la sous-classe.",
        "Le code affiche 1000 puis undefined."
      ],
      "correct": 0,
      "explain": "Les champs privés (#solde) sont strictement scopés à la classe qui les déclare : ils ne sont PAS hérités ni accessibles depuis une sous-classe. Référencer this.#solde dans CompteEpargne (où #solde n'est jamais déclaré) est une erreur de syntaxe détectée à l'analyse du code, avant même l'exécution."
    },
    {
      "cat": "oop",
      "type": "mcq",
      "q": "Quel sera le résultat de ce code ?",
      "code": "class Compte {\n  #solde = 100;\n\n  getSolde() {\n    return this.#solde;\n  }\n}\nlet compte = new Compte();\nconsole.log(compte.#solde);",
      "options": [
        "SyntaxError: Private field '#solde' must be declared in an enclosing class",
        "100",
        "undefined",
        "null"
      ],
      "correct": 0,
      "explain": "Un champ privé (#solde) n'est accessible que depuis l'intérieur de la classe qui le déclare. Y accéder depuis l'extérieur (ici, au niveau du script, hors de toute classe) est une erreur de syntaxe détectée avant même l'exécution — pas une simple undefined ou une erreur d'exécution."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Quel code ajoute correctement un paragraphe à la fin du body ?",
      "options": [
        "document.body.innerHTML += 'Hello';",
        "let p = document.createElement('p'); p.textContent = 'Hello'; document.body.appendChild(p);",
        "document.body.appendChild('<p>Hello</p>');",
        "document.createElement('<p>Hello</p>');"
      ],
      "correct": 1,
      "explain": "appendChild() attend un vrai Node, pas une chaîne : passer une string (option c) lève une TypeError. createElement() attend un nom de balise (\"p\"), pas du HTML (option d). L'option a ajoute du texte brut sans créer d'élément <p>. La méthode correcte crée l'élément, fixe son texte, puis l'attache au DOM."
    },
    {
      "cat": "dom",
      "type": "mcq",
      "q": "Considérez ce HTML et ce script. Que retourne zone.textContent ?",
      "code": "<div id=\"zone\">\n  <strong>Alerte</strong> : mise à jour requise\n</div>\n\nconst zone = document.getElementById('zone');\nconsole.log(zone.textContent);",
      "options": [
        "Uniquement \"Alerte\" (le texte dans le strong)",
        "La chaîne HTML \"<strong>Alerte</strong> : mise à jour requise\"",
        "null",
        "Le texte brut \"Alerte : mise à jour requise\" (sans balises HTML, avec éventuels espaces/sauts de ligne)"
      ],
      "correct": 3,
      "explain": "textContent concatène tout le texte des nœuds descendants, en ignorant les balises HTML mais en conservant les espaces/retours à la ligne du code source. Contrairement à innerHTML, il ne renvoie jamais le balisage."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Analysez ce code. Que s'affiche-t-il dans la console ?",
      "code": "const capteur = { id: 42, actif: true, mesure: 18.5 };\nlocalStorage.setItem('capteur', capteur);\nconst lu = localStorage.getItem('capteur');\nconsole.log(lu);\nconsole.log(typeof lu);",
      "options": [
        "null puis \"object\"",
        "Une erreur est levée car setItem n'accepte pas d'objet",
        "[object Object] puis \"string\"",
        "{\"id\":42,\"actif\":true,\"mesure\":18.5} puis \"string\""
      ],
      "correct": 2,
      "explain": "localStorage.setItem() convertit systématiquement sa valeur en chaîne (via String()), sans JSON.stringify automatique. Pour un objet simple, cette conversion appelle son toString() par défaut, qui renvoie \"[object Object]\" — pas sa représentation JSON. localStorage.getItem() retourne toujours une string."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Un script JavaScript sur https://app.helmo.be effectue cette requête. Pourquoi déclenchera-t-elle une requête preflight (OPTIONS) ?",
      "code": "const response = await fetch('https://api.externe.com/donnees', {\n  method: 'DELETE',\n  headers: {\n    'Content-Type': 'application/json',\n    'X-Custom-Token': 'abc123'\n  }\n});",
      "options": [
        "Le preflight est déclenché car la requête utilise HTTPS",
        "La méthode DELETE et le header personnalisé X-Custom-Token ne font pas partie des critères d'une requête simple",
        "Toutes les requêtes cross-origin déclenchent toujours un preflight, quelle que soit la méthode",
        "Le preflight est déclenché uniquement parce que le Content-Type est application/json"
      ],
      "correct": 1,
      "explain": "Une requête cross-origin \"simple\" (sans preflight) doit utiliser GET/HEAD/POST et des headers limités à une liste précise. Ici, DELETE n'est pas une méthode simple, et X-Custom-Token n'est pas un header autorisé sans preflight : chacun de ces deux éléments suffirait à lui seul à déclencher la requête OPTIONS préalable."
    },
    {
      "cat": "webapi",
      "type": "mcq",
      "q": "Exécutez mentalement ce code (localStorage est vide au départ). Que s'affiche-t-il ?",
      "code": "localStorage.setItem('couleur', 'bleu');\nlocalStorage.setItem('taille', 'M');\nlocalStorage.setItem('couleur', 'rouge');\nconsole.log(localStorage.length);",
      "options": [
        "2",
        "1",
        "3",
        "0"
      ],
      "correct": 0,
      "explain": "setItem() sur une clé déjà existante écrase seulement sa valeur, sans créer de nouvelle entrée. Il n'y a donc que 2 clés distinctes au final : couleur (valeur \"rouge\") et taille."
    },
    {
      "cat": "tsbase",
      "type": "mcq",
      "q": "Considérez ce code TypeScript compilé et exécuté. Quelle est la sortie affichée ?",
      "code": "enum Priorite {\n  Basse,\n  Moyenne,\n  Haute\n}\nconsole.log(Priorite.Moyenne);\nconsole.log(Priorite[1]);",
      "options": [
        "1 puis undefined",
        "\"Moyenne\" puis 1",
        "1 puis \"Moyenne\"",
        "2 puis \"Haute\""
      ],
      "correct": 2,
      "explain": "Un enum numérique par défaut commence à 0 : Basse=0, Moyenne=1, Haute=2. Priorite.Moyenne vaut donc 1. Les enums numériques génèrent aussi un mapping inversé automatique : Priorite[1] renvoie le nom \"Moyenne\"."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Que vaut le type Clés dans ce code ? Donnez la valeur exacte du type.",
      "code": "interface Facture {\n  numéro: string;\n  montant: number;\n  payée: boolean;\n}\ntype Clés = keyof Facture;",
      "accept": [
        "\"numéro\" | \"montant\" | \"payée\"",
        "numéro | montant | payée",
        "'numéro' | 'montant' | 'payée'"
      ],
      "explain": "keyof produit une union des noms de propriétés de l'interface, sous forme de types littéraux de chaîne : \"numéro\" | \"montant\" | \"payée\"."
    },
    {
      "cat": "tsbase",
      "type": "text",
      "q": "Quel est le nom du fichier de configuration standard qui contient les options de compilation d'un projet TypeScript ?",
      "accept": [
        "tsconfig.json"
      ],
      "explain": "tsconfig.json est le fichier standard placé à la racine d'un projet TypeScript : il définit les options du compilateur (target, module, strict, outDir, etc.) et quels fichiers inclure/exclure."
    },
    {
      "cat": "tsadv",
      "type": "mcq",
      "q": "Observez ce code TypeScript. Quel est le type exact de Session ?",
      "code": "function créerSession(userId: string, durée: number) {\n  return {\n    token: Math.random().toString(36),\n    userId,\n    expiresIn: durée * 60\n  };\n}\ntype Session = ReturnType<typeof créerSession>;\nconst s: Session = {\n  token: \"abc123\",\n  userId: \"U01\",\n  expiresIn: 3600\n};",
      "options": [
        "typeof créerSession retourne le type de la valeur retournée par l'appel, pas le type de la fonction",
        "{ token: string; userId: string; expiresIn: number }",
        "Erreur car ReturnType ne fonctionne pas avec typeof, il faut annoter le type de retour explicitement",
        "{ token: number; userId: string; expiresIn: number } car Math.random() retourne un number"
      ],
      "correct": 1,
      "explain": "typeof créerSession donne le type de la fonction elle-même. ReturnType<...> extrait ensuite le type de sa valeur de retour : { token: string; userId: string; expiresIn: number }, puisque Math.random().toString(36) est une string."
    },
    {
      "cat": "tsadv",
      "type": "text",
      "q": "Quel est le type résultant de cette expression TypeScript ? Donnez le type exact de Texte (sous forme de l'union réduite).",
      "code": "type MaybeTexte = string | null | undefined | number;\ntype Texte = NonNullable<MaybeTexte>;",
      "accept": [
        "string | number",
        "number | string"
      ],
      "explain": "NonNullable<T> retire null et undefined d'un type union, sans toucher aux autres membres. MaybeTexte perd donc null et undefined, et Texte devient string | number."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Que produit ce code (en mode non-strict) ?",
      "code": "const capteur = {};\nObject.defineProperty(capteur, \"id\", {\n  value: \"SEN-007\",\n  writable: false,\n  enumerable: true,\n  configurable: false\n});\ncapteur.id = \"SEN-999\";\ncapteur.mesure = 21.3;\nconsole.log(capteur.id);\nconsole.log(capteur.mesure);\nconsole.log(Object.keys(capteur));",
      "options": [
        "\"SEN-007\", 21.3, [\"id\", \"mesure\"]",
        "\"SEN-007\", 21.3, [\"mesure\"]",
        "Une TypeError est levée lors de capteur.id = \"SEN-999\"",
        "\"SEN-999\", 21.3, [\"id\", \"mesure\"]"
      ],
      "correct": 0,
      "explain": "writable: false rend la propriété en lecture seule. En mode NON strict, une tentative d'écriture échoue silencieusement (pas d'erreur) : capteur.id reste \"SEN-007\". capteur.mesure est ajoutée normalement. Object.keys() retourne les propriétés énumérables propres : id (enumerable: true) et mesure."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Examinez ce code. Que produit chaque console.log() ?",
      "code": "const registre = {};\nObject.defineProperty(registre, \"version\", {\n  value: \"2.1.0\",\n  writable: false,\n  enumerable: false,\n  configurable: false\n});\nObject.defineProperty(registre, \"compteurAcces\", {\n  value: 0,\n  writable: true,\n  enumerable: false,\n  configurable: false\n});\nregistre.nom = \"Registre principal\";\nconsole.log(registre.version);\nconsole.log(Object.keys(registre));\nconsole.log(JSON.stringify(registre));",
      "options": [
        "\"2.1.0\" / [\"nom\"] / {\"nom\":\"Registre principal\"}",
        "\"2.1.0\" / [\"version\",\"compteurAcces\",\"nom\"] / {\"version\":\"2.1.0\",\"compteurAcces\":0,\"nom\":\"Registre principal\"}",
        "undefined / [\"nom\"] / {\"nom\":\"Registre principal\"}",
        "\"2.1.0\" / [] / \"{}\""
      ],
      "correct": 0,
      "explain": "L'accès direct registre.version fonctionne toujours (\"2.1.0\"), peu importe enumerable. En revanche, Object.keys() et JSON.stringify() n'incluent que les propriétés énumérables : version et compteurAcces (enumerable: false) sont ignorées, seule nom (ajoutée normalement, donc énumérable par défaut) apparaît."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Dans le code précédent (registre avec version et compteurAcces définies via Object.defineProperty), quel est l'intérêt de mettre enumerable: false sur ces deux propriétés ?",
      "options": [
        "Cela empêche complètement toute lecture de ces propriétés depuis l'extérieur de l'objet",
        "Cela masque ces propriétés \"techniques\"/internes des boucles for...in, de Object.keys() et de la sérialisation JSON, tout en les laissant accessibles directement via registre.version",
        "Cela rend automatiquement les propriétés en lecture seule (non modifiables)",
        "Cela empêche la propriété d'être héritée par les objets qui héritent de registre"
      ],
      "correct": 1,
      "explain": "enumerable: false ne bloque pas l'accès direct (registre.version fonctionne toujours), mais masque la propriété des mécanismes d'énumération courants (for...in, Object.keys, JSON.stringify) : utile pour des métadonnées internes qu'on ne veut pas voir apparaître dans une sérialisation ou un parcours de l'objet."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Toujours avec registre (version définie via defineProperty avec writable: false), si on tente registre.version = \"3.0.0\" en mode strict, que se passe-t-il ?",
      "code": "\"use strict\";\nregistre.version = \"3.0.0\";",
      "options": [
        "La valeur est modifiée silencieusement, sans erreur",
        "Rien ne se passe, l'assignation est simplement ignorée",
        "Une TypeError est levée car la propriété est writable: false",
        "Une SyntaxError est levée à la compilation"
      ],
      "correct": 2,
      "explain": "En mode strict, toute tentative d'écriture sur une propriété non-writable lève une TypeError (contrairement au mode non-strict où l'échec est silencieux)."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelle est la valeur de tableau ?",
      "code": "const tableau = Array.from({ length: 4 }, (_, i) => i * 3 + 1);\nconsole.log(tableau);",
      "options": [
        "[3, 6, 9, 12]",
        "[1, 4, 7, 10, 13]",
        "[0, 3, 6, 9]",
        "[1, 4, 7, 10]"
      ],
      "correct": 3,
      "explain": "Array.from({length:4}, ...) crée 4 éléments (indices i = 0,1,2,3), chacun calculé par i*3+1 : 1, 4, 7, 10."
    },
    {
      "cat": "obj",
      "type": "text",
      "q": "Quelle valeur est affichée dans la console ? Répondez par le mot exact affiché.",
      "code": "const appareil = {\n  nom: \"Thermomètre\"\n};\nconsole.log(appareil.config?.seuil);",
      "accept": [
        "undefined"
      ],
      "explain": "appareil.config n'existe pas : l'optional chaining (?.) court-circuite immédiatement et renvoie undefined, sans tenter d'accéder à .seuil."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quelles sont les valeurs de x, y et reste après ce code ?",
      "code": "let x = 10, y = 20;\n[x, y] = [y, x];\nconst tableau = [1, 2, 3, 4, 5];\nconst [, second, ...reste] = tableau;\nconsole.log(x, y);\nconsole.log(second, reste);",
      "options": [
        "20 10 puis 2 [3, 4, 5]",
        "20 10 puis 1 [2, 3, 4, 5]",
        "10 20 puis 2 [3, 4, 5]",
        "20 10 puis 2 [4, 5]"
      ],
      "correct": 0,
      "explain": "La déstructuration [x, y] = [y, x] échange les valeurs : x=20, y=10. Pour tableau, la virgule vide saute le premier élément (1), second capture le deuxième (2), et ...reste (rest pattern) récupère tous les éléments restants : [3, 4, 5]."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Comment vérifier si la propriété \"age\" existe dans l'objet personne ?",
      "options": [
        "personne.exists(\"age\")",
        "\"age\" in personne",
        "personne.hasOwnProperty(\"age\")",
        "typeof personne.age !== \"undefined\""
      ],
      "correct": 1,
      "explain": "\"age\" in personne est l'opérateur standard pour tester l'existence d'une propriété (propre ou héritée). personne.exists() n'est pas une méthode JavaScript. hasOwnProperty() est aussi valide mais ne teste que les propriétés propres (pas héritées). Le test via typeof a un piège : il renvoie faussement false si la propriété existe mais vaut explicitement undefined."
    },
    {
      "cat": "obj",
      "type": "mcq",
      "q": "Quel est l'affichage produit par ce code ?",
      "code": "const capteurs = ['temp', 'pression', 'humidite', 'luminosite'];\nconsole.log(capteurs.at(-2));\nconsole.log(capteurs.at(10));",
      "options": [
        "'humidite' puis undefined",
        "'pression' puis undefined",
        "'luminosite' puis undefined",
        "'humidite' puis null"
      ],
      "correct": 0,
      "explain": "at() accepte des index négatifs pour compter depuis la fin : at(-2) correspond à l'avant-dernier élément, soit 'humidite' (index 2 sur un tableau de longueur 4). at(10) est hors limites et renvoie undefined (jamais une erreur, ni null)."
    }
  ]
};
