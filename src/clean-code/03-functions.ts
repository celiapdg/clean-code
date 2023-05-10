(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película, necesita más de 3 argumentos
    // la función recibirá un objeto Movie y lo desestructura para obtener
    // title, description, rating y cast
    interface Movie {
        cast:           string[];
        description:    string; 
        rating:         number; 
        title:          string; 
    }

    function createMovie( { title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }


    function checkFullName( fullName: string ) {
        // if fullName already exists
        return true
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        if (checkFullName(fullName)) return false;

        console.log('Crear actor');
        return true;        

    }


    // Continuación
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        
        if (isDead) return 1500;
        if (isSeparated) return 2500;

        return isRetired?3500:4000;
    }
    


})();