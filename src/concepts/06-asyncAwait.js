import { heroes } from "../data/heroes"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = (element) => {

    

}

const findHero = async(id)=>{
    const hero = heroes.find( hero => hero.id === id )

    if( !hero )
        throw `Hero with id ${id} not found`

    return hero
}