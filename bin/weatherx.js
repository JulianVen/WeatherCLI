#!/usr/bin/env node 
import { program } from 'commander';
import { createRequire } from "module";
const pkg = createRequire(import.meta.url)("../package.json");

program
  .name(pkg.name)
  .version(pkg.version)
  .command('key', 'Manage API Key [GET AT https://openweathermap.org/]')
  .command('check', 'Check weather Information')
  .parse(process.argv);