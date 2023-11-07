



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitNoSecuencialesComponent = async (element) => {


    console.time('Start')

    /*Asi se hace cuando la segunda promesa depende que se resuelva la primera, y asi sucesivamente */
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();


    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])

    element.innerHTML = `
        value1: ${ value1 }<br>
        value2: ${ value2 }<br>
        value3: ${ value3 }<br>
        `
}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow promise')
    }, 2000);
})

const mediumPromise = ()=> new Promise( resolve =>{
    setTimeout(()=>{
        resolve ('Medium Promise')
    }, 1500)
})

const fastPromise = ( ) => new Promise( resolve => {
    setTimeout(() => {
        resolve ('Fast Promise')
    }, 1000);
}) 