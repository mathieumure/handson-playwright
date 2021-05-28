# Chapitre 3 - Les interactions

## Les boutons

- Attendre que le réseau ait terminé de charger.

> ℹ️ Playwright a un système d'attente assez développé pour la [disponibilité d'un élement](https://playwright.dev/docs/actionability) mais il dispose également d'API pour attendre [certains états](https://playwright.dev/docs/api/class-page?_highlight=waitforlo#pagewaitforloadstatestate-options)

- Cliquer sur le bouton contenant le texte `Getting started` et attendre une navigation en même temps avec `Promise.all`.

> ℹ️ Playwright dispose de [sélecteurs très puissants](https://playwright.dev/docs/selectors)

- Vérifier avec [assert](https://nodejs.org/api/assert.html#assert_assert_value_message) que l'URL de la page soit égale à `https://playwright.dev/docs/intro`.

- Faire un screenshot de la page dans `screenshots/getting_started.png`.

## La recherche

- Depuis la page getting started taper le texte `selector` dans la barre de recherche.

> ℹ️ Playwright propose deux façons de remplir un champ soit en utilisant l'event input avec la méthode [fill](https://playwright.dev/docs/api/class-page/#pagefillselector-value-options) ou encore en simulant la saisie utilisateur avec la méthode [type](https://playwright.dev/docs/api/class-page#pagetypeselector-text-options)

- Attendre que la popup avec le lien "See all results" soit visible

- Appuyer sur le bouton entrer.

- Attendre que le `h1` avec le texte `Selectors` soit visible.

- Vérifier avec [assert](https://nodejs.org/api/assert.html#assert_assert_value_message) que l'URL de la page est égale à `https://playwright.dev/docs/api/class-selectors?_highlight=selector`.

- Faire un screenshot de la page dans `screenshots/selectors.png`.

## Le light mode

- Aller le site `https://www.clubic.com` en simulant le mode light 

> ℹ️ Playwright propose une API pour [émuler plusieurs choses](https://playwright.dev/docs/emulation)

- Vérifier avec [assert](https://nodejs.org/api/assert.html#assert_assert_value_message) que la balise body du DOM à la classe 'light-mode'

## Le dark mode

- Aller le site `https://www.clubic.com` en simulant le mode dark

- Vérifier avec [assert](https://nodejs.org/api/assert.html#assert_assert_value_message) que la balise body du DOM à la classe 'dark-mode'
