const { Command } = require("commander");
const fs = require("fs");

const { LOG_FILE, LAST_COMMIT_FILE } = require("../constant");
const FileManager = require("../util/file-manager");
const GitManager = require("../util/git-manager");
/**
 * init command
 */
class InitCommand {
    static #doAction() {
        FileManager.checkAndCreateFile(LOG_FILE, "# Change Log\n\n");
        FileManager.checkAndCreateFile(LAST_COMMIT_FILE, "");

        let lastLoggedCommit = fs.readFileSync(LAST_COMMIT_FILE, "utf8").trim();

        let newCommits = GitManager.getNewCommits(lastLoggedCommit);

        if (!newCommits) {
            console.log("새로운 커밋이 없습니다.");
            return;
        }
        const commitLines = newCommits.split("\n");
        const categorizedCommits = GitManager.categorizeCommits(commitLines);
        const logContent = GitManager.formatChangelog(categorizedCommits);

        FileManager.appendFile(LOG_FILE, logContent);

        const latestCommitHash = commitLines[0].split(" ")[0];
        FileManager.writeFile(LAST_COMMIT_FILE, latestCommitHash);

        console.log("새 커밋이 changelog.md에 추가되었습니다.");
    }
    static command(name) {
        return new Command(name).action(() => {
            this.#doAction();
        });
    }
}

module.exports = InitCommand;
