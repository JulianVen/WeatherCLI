import { KeyManager } from '../lib/KeyManager.js';
import { isRequired } from '../utils/validation.js';
import colors from 'colors';

import inquirer from 'inquirer';
const prompt = inquirer.createPromptModule();

export const key = {
    async set() {
        const keyManager = new KeyManager();
    
        const input = await prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + "https://openweathermap.org/",
                validate: isRequired,
            }
        ]);

        const key = keyManager.set(input.key);
        if (key) {
            console.log('API Key Set'.blue);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.get();

            console.log(`API Key: ${key}`.yellow);
        } catch(err){
            console.error(err.message.red);
        }
    },
    delete() {
        try {
            const keyManager = new KeyManager();
            keyManager.delete();

            console.log('API Key remove'.red);
        } catch(err){
            console.error(err.message.red);
        }
    }
}