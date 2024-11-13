const { execSync } = require("child_process");
const { COMMIT_TYPES } = require("../constant");

class GitManager {
    static getNewCommits(lastLoggedCommit) {
        try {
            const gitLogCommand = lastLoggedCommit ? `git log --pretty=format:"%H %s" ${lastLoggedCommit}..HEAD` : 'git log --pretty=format:"%H %s"';
            return execSync(gitLogCommand).toString().trim();
        } catch (error) {
            console.error("Git 로그를 가져오는 데 실패했습니다:", error);
            process.exit(1);
        }
    }
    static formatChangelog(categorizedCommits) {
        return Object.keys(categorizedCommits)
            .map((type) => {
                if (categorizedCommits[type].length > 0) {
                    const sectionTitle = type === "other" ? "Other" : type.charAt(0).toUpperCase() + type.slice(1);
                    return `## ${sectionTitle}\n\n${categorizedCommits[type].join("\n")}\n`;
                }
                return "";
            })
            .join("\n");
    }
    static categorizeCommits(commitLines) {
        const categorizedCommits = COMMIT_TYPES.reduce((acc, type) => {
            acc[type] = [];
            return acc;
        }, {});

        // "other" 키를 명시적으로 추가
        categorizedCommits["other"] = [];

        // 커밋 메시지를 커밋 타입별로 분류
        commitLines.forEach((line) => {
            const [hash, ...messageParts] = line.split(" ");
            const message = messageParts.join(" ");

            const tag = COMMIT_TYPES.find((t) => message.startsWith(t));
            if (tag) {
                categorizedCommits[tag].push(`- ${message.replace(tag, "").trim()} (${hash})`);
            } else {
                categorizedCommits["other"].push(`- ${message} (${hash})`);
            }
        });

        return categorizedCommits;
    }
}

module.exports = GitManager;
