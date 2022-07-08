const fs = require("fs");
const path = require('path');

const configPath = path.join(__dirname,"../../configs/build/");
const configFile = (file:string) => path.join(__dirname,"../../configs/build/",file);

const configs = fs.readdirSync(configPath).filter(fn => fn.endsWith('.config.js'));

configs.forEach((config: string) => {
    const jsConfig = require(configFile(config));
    const jsonData = JSON.stringify(jsConfig.default, null, 4);
    const writePath = path.join(__dirname,'../../public/configs/',`${config.slice(0,-2)}json`);
    fs.writeFileSync(writePath,jsonData);
});

export {};