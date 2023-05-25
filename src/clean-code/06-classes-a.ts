(() => {

    type Gender = 'M' | 'F';


    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date) { }
    }

    // sin aplicar el principio de responsabilidad única
    class User extends Person {

        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,

            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super(email, role, name, gender, birthDate);
        }
    }

    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'celia@gmail.com',
        'Admin',
        'Celia',
        'F',
        new Date('1995-09-27')
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

    const newPerson = new Person('Celia', 'F', new Date('1995-09-27'));
    console.log({ newPerson });


















})();