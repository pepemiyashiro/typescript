
/**
 * Array Sorting in typescript
 */

/**
 * Avoid mutating methods from Array
 * Readonly Array 
 */
const arr: ReadonlyArray<string> = ['foo', 'bar'];
const copy = arr.slice().sort();

console.log(copy);

/**
 * Array Sorting
 */

 const foo = [1,3,22];
 foo.sort( (a,b) => a - b);

 console.log(foo);


 /**
  * Complex Sorting
  */

  const movies = [
    {
      name: 'The Godfather',
      year: 1994
    },
    {
      name: 'The Crow',
      year: 1994 
    },
    {
      name: 'Akira',
      year: 1995
    },
    {
      name: 'Tonari no Totoro',
      year: 1992
    }
  ]

movies.sort( (a, b) => a.year - b.year );

console.log(movies.map(m => m.name));

/**
 * Sorting String Array
 */

const greekAlpha = [
  'Alpha',
  'beta',
  'Gamma',
  'delta'
]

greekAlpha.sort( (a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) );
greekAlpha.map( g => console.log(g) );


