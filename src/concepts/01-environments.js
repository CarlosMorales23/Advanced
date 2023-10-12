

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = (element) => {

    console.log( import.meta.env )

    const html= `
        variables:
    `;
    element.innerHTML= html

}