import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = "5d86371fd55e2e2a30fe1ccb2"

    findHero(id1, (error, hero1) => {

        if ( error) {
            element.innerHTML = error
        }
        // element.innerHTML= hero?.name || 'No hay heroe';


        findHero( id2, (error, hero2) => {
            if( error ){
                element.innerHTML = error;
                return
            }
    
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        })

    })



}


/**
 * 
 * @param { String } id 
 * @param { ( error: String|Null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) =>{

    const hero = heroes.find ( hero => hero.id === id);

    if ( !hero ) {
        const msgHeroeNotFound = `Hero with id ${ id } not found`;
        callback(msgHeroeNotFound);
        return; // retornara un undefined;
    }

    callback( null, hero ); 
    
    /* debemos darle un parametro "null" porque 
        en la documentación estamos diciendo que pasaremos un Strind ID,
        y tambien  un Error/Null  y un Heroe. 
    */
}

