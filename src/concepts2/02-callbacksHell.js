import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBackHellComponent = (element) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f25a058e5b1c8a65e';

    findHero( id1, ( error, heroFromFindHero1 ) => {
        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, heroFromFindHero2) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML= `${ heroFromFindHero1.name } / ${ heroFromFindHero2.name}`

        })

    })
};


/**
 * 
 * @param {String} id 
 * @param { (erorr: String|null, hero:Object) => void } callBack 
 */
const findHero = ( id, callBack) => {
    const hero = heroes.find(hero => hero.id === id)

    const msgHeroNotFound = ` Hero with id ${ id } not found`;

    if(!hero){
        callBack( msgHeroNotFound )
        return
    }

    callBack( null, hero )
}