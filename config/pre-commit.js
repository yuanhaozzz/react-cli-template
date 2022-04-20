const { errorLog, execStr, logSuccess } = require("./common");

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
  const conflicts = execStr(
    'git grep -n -P -E  "^<<<<<<<\\s|^=======$|^>>>>>>>\\s"'
  );
  if (conflicts) {
    errorLog(["错误：发现冲突，请解决完后在提交", "错误代码：", conflicts]);
    process.exit(1);
  } else {
    logSuccess("没有发现冲突");
  }
}

errorLog(["你小子错了 知道不"]);

function checkGitStageFileConflict() {
  // 检查冲突
  checkConflict();
}

checkGitStageFileConflict();
