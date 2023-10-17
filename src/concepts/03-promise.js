import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) =>{
        element.innerHTML = hero.name;
    };

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>ERROR</h1>
            <h3>${ error }</h3>
        `
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';



    findHero( id1 )
        // .then( superHero => renderHero(superHero))  se puede hacer como en la siguiente linea, como estamos mandando todo el Objeto Hero
        .then( renderHero )
        // .cath( error => renderError( error ))  se puede hacer como en la siguiente linea, como estamos mandando todo el Error
        .catch( error => renderError( error ));
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise( ( resolve, reject)=>{

        const hero = heroes.find( hero => hero.id === id);

        if ( hero ) {
            resolve (hero);
            return
        }

        reject(`Hero with id ${ id } not found`)

    })

    return promise;

}
