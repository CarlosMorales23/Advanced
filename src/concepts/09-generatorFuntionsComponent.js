



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFuntionsComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction();  //asi invoco la función generadora y ya luego puedo uszr sus valores

    console.log( myGenerator.next() ) //llama al primer yield que regresa la función generadora 
    console.log( myGenerator.next() ) //Luego el segundo y asi sucesivamente 
    console.log( myGenerator.next() )
    console.log( myGenerator.next() )
    console.log( myGenerator.next() )
    console.log( myGenerator.next() )


}

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay mas valores'; //cuando con next llega el turno de return ya se muestra done en consola como true
    yield 'Ya no pueden hacer nada'; //  luego de hacer un return ya no lee mas yield
}

