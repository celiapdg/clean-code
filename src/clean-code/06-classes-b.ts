(() => {
    // sin aplicar el principio de responsabilidad única


    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }


    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({ email,
            role,
            name,
            gender,
            birthdate,
        }: UserProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ email,
            role,
            name,
            gender,
            birthdate,
            workingDirectory,
            lastOpenFolder
        }: UserSettingsProps
        ) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        email: 'celia@gmail.com',
        workingDirectory: '/user/home',
        lastOpenFolder: '/home',
        role: 'Admin',
        name: 'Celia',
        gender: 'F',
        birthdate: new Date('1995-09-27'),
    }
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });



















})();