# Svelte

Documentation à but de comprendre Svelte 5

## Sommaire

WIP

## Triptyque

Le triptyque de Svelte : composition des fichiers .svelte
- script (possibilité d’ajouter un script module) : pour le JS (avec lang=ts)
- markup : balises HTML
- style : pour le css

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





