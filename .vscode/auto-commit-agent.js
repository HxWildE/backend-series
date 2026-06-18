const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const statusFile = path.join(__dirname, 'auto-commit-status.json');
const today = new Date().toISOString().slice(0, 10);

function log(message) {
    console.log(`[AutoCommit] ${message}`);
}

function readStatus() {
    try {
        if (fs.existsSync(statusFile)) {
            return JSON.parse(fs.readFileSync(statusFile, 'utf8'));
        }
    } catch (error) {
        log(`Unable to read status file: ${error.message}`);
    }
    return { lastRun: null };
}

function writeStatus(status) {
    try {
        fs.writeFileSync(statusFile, JSON.stringify(status, null, 2), 'utf8');
    } catch (error) {
        log(`Unable to write status file: ${error.message}`);
    }
}

function git(command) {
    return execSync(`git ${command}`, {
        cwd: workspaceRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
    })
        .toString()
        .trim();
}

function getGitRemote() {
    try {
        const remotes = git('remote').split('\n').filter(Boolean);
        if (remotes.includes('origin')) {
            return 'origin';
        }
        return remotes[0] || null;
    } catch {
        return null;
    }
}

function main() {
    const status = readStatus();
    if (status.lastRun === today) {
        log('Already ran today. Skipping.');
        return;
    }

    try {
        const statusOutput = git('status --porcelain');
        if (!statusOutput) {
            log('No repository changes to commit. Marking as run today.');
            writeStatus({ lastRun: today });
            return;
        }

        log('Changes detected. Staging files...');
        execSync('git add -A', { cwd: workspaceRoot, stdio: 'inherit' });

        const commitMessage = `Daily auto-commit (${today})`;
        log(`Creating commit: ${commitMessage}`);
        execSync(`git commit -m "${commitMessage}"`, {
            cwd: workspaceRoot,
            stdio: ['pipe', 'pipe', 'pipe'],
        });

        const remoteName = getGitRemote();
        const branch = git('rev-parse --abbrev-ref HEAD');
        if (remoteName) {
            log(`Pushing ${branch} to ${remoteName}...`);
            execSync(`git push ${remoteName} ${branch}`, { cwd: workspaceRoot, stdio: 'inherit' });
            log('Push completed.');
        } else {
            log('No remote configured. Commit created locally only.');
        }
    } catch (error) {
        const errorMessage = error.stderr ? error.stderr.toString() : error.message;
        if (/nothing to commit/.test(errorMessage)) {
            log('Nothing to commit after staging.');
        } else {
            log(`Git operation failed: ${errorMessage}`);
        }
    } finally {
        writeStatus({ lastRun: today });
    }
}

main();
