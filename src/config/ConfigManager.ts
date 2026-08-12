import prod from './prod.json';

export class ConfigManager {
    
    static getConfig() {
        const environment = process.env.TEST_ENV || 'prod';
        switch (environment.toLowerCase()) {
           
            case 'prod':
                return prod;

            default:
                throw new Error(`Invalid environment: ${environment}`);
        }       
            
    }
}

