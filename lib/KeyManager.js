import Configstore from 'configstore';
import { createRequire } from "module";
const pkg = createRequire(import.meta.url)("../package.json");

export class KeyManager {
    constructor() {
        this.config = new Configstore(pkg.name);
    }

    set(key){
        this.config.set('apiKey', key);
        return key;
    }

    get(){
        const key = this.config.get('apiKey');

        if (!key){
            throw new Error('No API Key Found [Get at https://openweathermap.org/]')
        }

        return key;
    }

    
    delete(){
        const key = this.config.get('apiKey');

        if (!key){
            throw new Error('No API Key Found [Get at https://openweathermap.org/]')
        }

        this.config.delete('apiKey');
        return;
    }
}