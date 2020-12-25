const fs = require("fs");
const { exec } = require("child_process");

function startListen(watchDir) {
    fs.watch(watchDir, { recursive: true }, (event, fileName) => {

        if (event === "change" && isFileIncluded(fileName)) {

            console.log("Detect changes...");

            // Run a command when a file changed
            exec("npm run dev:css", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                console.log("-- Style updated");
            });
        }
    })
}

// Check if the changed file need updates
function isFileIncluded(fileName) {
    let included = true;

    // exclude files in these directory
    ['dist', 'node_modules'].some(name => {
        if (fileName.indexOf(name) === 0) {
            included = false;
        }
        return !included;
    })

    return included;
}

startListen("./");
