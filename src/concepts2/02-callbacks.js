import { heroes } from "../data/heroes"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callBackComponent = (element) => {

    const id = '5d86371f1efebc31def272e2'

    findHero( id, ( heroFromFindHero ) => {
        element.innerHTML = heroFromFindHero.name
    })
};


/**
 * 
 * @param {String} id 
 * @param { (hero:Object) => void } callBack 
 */
const findHero = ( id, callBack) => {
    const hero = heroes.find(hero => hero.id === id)

    callBack( hero )
}