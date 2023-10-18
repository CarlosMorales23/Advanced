import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb2'
    findHero( id1 )
        .then(name => element.innerHTML = name)
        // .then(({name}) => element.innerHTML = name)
        .catch( error => element.innerHTML = error)

}


/**
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async( id )=>{
    const hero = heroes.find(hero => hero.id === id )

    return hero?.name
}

//la función asyncrona me permite regresar un objeto directamente y no una promesa. 
//De tal manera que puedo pasarlo pasar todo el objeto hero o si quiero una propiedad hero.name 
// si paso el objeto completo hero,  donde se recibe se puede desestructurar y usar lo que necesite {name}. 