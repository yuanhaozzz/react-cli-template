const { errorLog, execStr } = require("./common");

function getGitStatus() {
  console.log(execStr("git status"));
  const diff = execStr("git diff");
  console.log(diff.split("\n"));
}

getGitStatus();

/**
 * 检查冲突
 */
function checkConflict() {
  const diff = execStr("git diff");
  const arr = diff.split("\n");
  let hasConflict = undefined;
  if (arr.length > 0) {
    hasConflict = arr.filter((item) => item.includes("<<<<<<< HEAD"));
  }
  if (hasConflict.length > 0) {
    errorLog(["冲突在这里：", ...hasConflict]);
    process.exit(1);
  }
}

errorLog(["你小子错了 知道不"]);

function checkGitStageFileConflict() {
  // 检查冲突
  checkConflict();
}

checkGitStageFileConflict();
