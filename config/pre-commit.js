const { errorLog, checkGit, logSuccess } = require("./common");

/**
 * 检查冲突
 */
function checkConflict() {
  const arr = checkGit.split("\n");
  conflicts = [];
  arr.forEach((item) => {
    if (item.match(/^<<<<<<<$|^=======$|^>>>>>>>\\s/)) {
    }
  });
  // 你大爷的

  // 你三大爷的

  // if (conflicts) {
  //   errorLog(["错误：发现冲突，请解决完后在提交", "错误代码：", conflicts]);
  //   process.exit(1);
  // } else {
  //   logSuccess(["没有发现冲突"]);
  // }
}

function checkGitStageFileConflict() {
  // 检查冲突
  checkConflict();
}

checkGitStageFileConflict();
