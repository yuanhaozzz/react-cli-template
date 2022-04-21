const { errorLog, execStr, logSuccess } = require("./common");

/**
 * 检查冲突
 */
function checkConflict() {
  // const conmand = 'git grep -n -P -E "^<<<<<<<\\s|^=======$|^>>>>>>>\\s"';
  const conmand = "git grep -n -P -E '<<<<<<< HEAD'";
  const conflicts = execStr(conmand);
  if (conflicts) {
    errorLog(["错误：发现冲突，请解决完后在提交", "错误代码：", conflicts]);
    process.exit(1);
  } else {
    logSuccess(["没有发现冲突"]);
  }
}

function checkGitStageFileConflict() {
  // 检查冲突
  checkConflict();
}

checkGitStageFileConflict();
