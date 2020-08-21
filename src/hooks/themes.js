class themeHandler {
    constructor() {
        this.themes = {
            'Forest Green': {
                ['--primary-color']: '#1a771a',
                ['--secondary-color']: '#e4b84a',
                ['--tertiary-color']: '#1a771a',
                ['--secondary-accent']: '#fdecc1',
                ['--background-color']: 'rgb(16, 94, 23)'
            },
            'Royal Sky': {
                ['--primary-color']: 'rgb(75, 51, 161)',
                ['--secondary-color']: '#e4b84a',
                ['--tertiary-color']: 'rgb(84, 26, 122)',
                ['--secondary-accent']: '#fcf270',
                ['--background-color']: 'white'
            }  
        }
    }

    createTheme(themeName, themeObj) {
        this.themes[themeName] = themeObj;
    }

    setTheme(themeName) {
        const root = document.documentElement;
        let themeToSet = this.themes[themeName];

        try {
            for (let key in themeToSet) {
                root.style.setProperty(key, themeToSet[key]);
            }
        } catch(err) {
            alert('Theme failed to set');
            console.log(err);
        }
    }
    
}

const themes = new themeHandler();

export default themes;