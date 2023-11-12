import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = "5d86371f233c9f2425f16916"

    const heroIds = heroes.map( hero => hero.id) // Devuelve el arreglo de los Ids que espera getHeroesAsync
    console.log(heroIds)

    const heroPromises = getHeroesAsync( heroIds)

    for await ( const hero of heroPromises ) {
        element.innerHTML += `${ hero.name } <br/>`
    }

    // for (const hero of await getHeroesAsync())


    // if ( await getHeroAsync(id) ){
    //     element.innerHTML = 'Si existe el heroe';
    //     return;
    // }

    // element.innerHTML = 'No existe el Heroe'
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });
    return heroes.find( hero => hero.id === id );
}