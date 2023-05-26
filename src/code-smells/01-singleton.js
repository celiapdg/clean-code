/** 
 * STUPID - Se trata de un acrónimo formado por seis code smells
 * que debemos evitar: Singleton, Tight coupling, Untestability, 
 * Premature optimization, Indescriptive naming, Duplication
 */

/**
 * Singleton: 
 * PROS - garantiza una única isntancia de la clase a lo largo de 
 * toda la aplicación
 * CONS - vive en contexto global
 *      - puede ser modificado por cualquiera en cualquier momento
 *      - no es rasteable
 *      - dificil de testear
 */

const Singleton = (function () {

    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();