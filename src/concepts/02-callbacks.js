import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1ccb1'

    findHero(id, (hero) => {
        // element.innerHTML= hero?.name || 'No hay heroe';
        element.innerHTML= hero?.name;
    })

}


/**
 * 
 * @param {String} id 
 * @param { (error?: String, hero: Object) => void} callback 
 */
const findHero = (id, callback) =>{

    const hero = heroes.find ( hero => hero.id === id);

    if ( !hero ) {
        callback(`Hero with id ${ id } not found`);
        return; // undefined;
    }

    callback( hero );
}

