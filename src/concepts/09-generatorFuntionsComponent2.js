



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFuntionsComponent2 = (element) => {

    const genId = idGenerator()

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = ` Click ${ value }`
    }

    button.addEventListener( 'click', renderButton)

}

function* idGenerator(){
    let currentId = 0;

    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay mas valores'; //cuando con next llega el turno de return ya se muestra done en consola como true
    yield 'Ya no pueden hacer nada'; //  luego de hacer un return ya no lee mas yield
}

