const fs = require("fs");

class FileManager {
    static checkAndCreateFile(filePath, defaultContent = "") {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, defaultContent, "utf8");
        }
    }

    static readFile(filePath) {
        return fs.readFileSync(filePath, "utf8").trim();
    }

    static writeFile(filePath, content) {
        fs.writeFileSync(filePath, content, "utf8");
    }

    static appendFile(filePath, content) {
        fs.appendFileSync(filePath, content, "utf8");
    }
}

module.exports = FileManager;
