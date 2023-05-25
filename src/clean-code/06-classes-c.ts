(() => {


    // Aplicando el principio de responsabilidad única
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
    }

    class User {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }

    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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


    // en vez de herencia, composición
    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            role, email,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ role, email });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
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

    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials() });



















})();