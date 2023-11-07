import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBackComponentManejoDeErrores = (element) => {

    const id = '5d86371f1efebc31def272e2'

    findHero( id, ( error, heroFromFindHero ) => {
        // element.innerHTML = heroFromFindHero?.name   //!DA UNDEFINED
        // element.innerHTML = heroFromFindHero?.name || 'No hay Heroe'   //!Renderiza el mensaje

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        element.innerHTML= heroFromFindHero.name
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