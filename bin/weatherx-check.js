import { program } from 'commander';
import { check } from '../commands/check.js';

program
    .command('weather')
    .description('Check the Weather Status')
    .option('--place <type>', 
        'Location to check the weather. Format \'city, state, country\'',
        'Nuevo León, México'
    )
    .action(cmd => check.weather(cmd));

program.parse(process.argv);