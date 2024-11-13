const { program } = require("commander");
const commands = require("../src/commands");
const { PROGRAM_NAME, PROGRAM_DESCRIPTION, PROGRAM_VERSION } = require("../src/constant");

const commandEntryPoint = () => {
    program.name(PROGRAM_NAME).description(PROGRAM_DESCRIPTION).version(PROGRAM_VERSION);

    Object.keys(commands).forEach((commandName) => {
        program.addCommand(commands[commandName]);
    });
    program.parse(process.argv);
};

module.exports = { commandEntryPoint };
