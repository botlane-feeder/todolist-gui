# Svelte

Documentation à but de comprendre Svelte 5

## Sommaire

WIP

## Triptyque

Le triptyque de Svelte : composition des fichiers .svelte
- script (possibilité d’ajouter un script module) : pour le JS (avec lang=ts)
- markup : balises HTML pour construire le DOM
- style : pour le css

Ce triptyque est dans l'ordre d'écriture dans un composant Svelte.
D'abord le script, puis le markup et enfin le style, si on a besoin des trois.

## Markup

C'est de l'HTML basique, dans lequel on peut faire des liens avec des variables ou fonctions définies dans le script

## Script

C'est la partie où on retrouve le javascript du composant.
Dedans on retrouvera :
- des `import` comme : `import Square from "./Square.svelte"`
- des variables déclarées : attention à déclarer également s'il s'agit d'un `$state` ou autre `rune`
- des fonctions

## Runes

*A letter or mark used as a mystical or magic symbol.*

Les runes ne sont présentes que dans les fichiers .svelte, et sont des mots clés pour le compilateur.
Pas besoin de les importer, les runes seront utilisées par le compilateur pour aider dans le développement …

- `$state()` : Crée une *reactive state*, signifie que l’UI s’adaptera aux changements de cette variable
  - À l’association d’une variable à un `$state()`, le compilateur svelte utilise le proxy JS et fait profiter de la réactivité à l’UI, peu importe si on réaffecte une valeur à la variable.
  - `$state.raw()` : casse la réactivité et un changement ne sera pas réaffecté à l’UI. Cela permet un gain de performance
  - `$state.snapshot()` : génère un snapshot static
- `$derived()` : Crée un reactive state à l’écoute d’un change d’un autre state
  - Par une petite expression, `$derived()` associe sa valeur à qui il est affecté, écoutant et se mettant à jour si le state, à l’intérieur de son expression change
  - `$derived.by()` : permet d'avoir une fonction dans son expression
  - L'affectation représente un *derived state*. Quand le `$state()` change, le `$derived()` sera noté comme `dirty` puis se recalculera.
- `$effect()` : permet de générer soi même un effet, les mêmes que Svelte génère quand on crée un `$state()`
  - ? Dans un effect, on est dans la même zone de déclaration que les `$state()`
- `$props()` : signifie properties, c'est la déclaration des propriétés passées à un composant Svelte
  - [Doc](https://svelte.dev/docs/svelte/$props) à relire plusieurs fois !
- `$bindable()` : permet de déclarer une liaison d'une variable entre un parent et un enfant
- `$inspect()`
- `$host()`

### Exemples

#### $state()
```svelte
<script>
	let count = $state(0);
</script>

<button onclick={() => count++}>
	clicks: {count}
</button>
```

#### $derived()
```svelte
<script>
	let count = $state(0);
	let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
	{doubled}
</button>

<p>{count} doubled is {doubled}</p>
```
```svelte
<script>
	let numbers = $state([1, 2, 3]);
	let total = $derived.by(() => {
		let total = 0;
		for (const n of numbers) {
			total += n;
		}
		return total;
	});
</script>

<button onclick={() => numbers.push(numbers.length + 1)}>
	{numbers.join(' + ')} = {total}
</button>
```
#### $effect()

WIP

#### $props()

```svelte
//App.svelte
<script>
	import Child from './Child.svelte';

	let count = $state(0);
</script>

<button onclick={() => (count += 1)}>
	clicks (parent): {count}
</button>

<Child {count} />


//Child.svelte
<script lang="ts">
	let properties: {any} = $props();
  let count: number = properties.count;
  //Les deux expressions donnent le même résultat
  let { count }: {count: number} = $props(); // En utilisant le destructuring / la décomposition : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
</script>

<button onclick={() => (count += 1)}>
	clicks (child): {count}
</button>
```

## Events

La [documentation](https://svelte.dev/docs/svelte/basic-markup#Events) Svelte 5 sur les events.

## Bind

Les données sont habituelles envoyées d'un composant Parent à un composant Enfant, afin que la gestion de l'affichage soit géré par ce composant Enfant.  
Cependant, on peut souhaiter que le composant Enfant puisse modifier le contenu de la donnée, alors on `bind:` la donnée :  
- côté Parent, la donnée passée en paramètre de la balise doit être `bind:` : `<Child bind:count={myPArentCount}>`
  - si la donnée a le même nom côté Parent qu'Enfant, on peut raccourcir l'écriture : `<Child bind:count>`
- côté Enfant, la donnée doit être récupérée comme `$bindable()`, dans l'espace script : `let {count = $bindable()} = $props()`

L'intérêt du *bind* est dans l'utilisation avec une balise <input> ou <selected>, afin de mettre à jour immédiatement *reactivity* le champ et la variable.

### Exemples

child.svelte
```svelte
<script>
let {inputValue = $bindable()} = $props;
</script>
<input type="range" value={inputValue}/>
```

parent.svelte
```svelte
<script type="ts">
  let percentage:number = $state(0);
</script>
<div>
The number of <Child bind:inputValue={percentage}/> is {percentage}
</div>
```

## Complément du markup par le JS

### If

```svelte
{#if expression}
...
{:else if expression}
...
{:else}
...
{/if}
```

### Each

```svelte
{#each expression as name, index} //Le index n'est pas obligatoire
	...
{/each}
```
Possibilité d'ajouter un `{:else}`, sera exécuter si le tableau est vide.

### Key

## Stores

Le principe de Store est principalement pour les versions avec Svelte5.
Depuis cette version, il vaut mieux utiliser les runes, quitte à créer une variable externe à importer qui est basée sur des runes.

Cependant dans certains cas, il 

