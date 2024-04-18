/** https://commitlint.js.org/reference/configuration.html */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // 影响构建系统或外部依赖项的更改（例如：gulp、broccoli、npm）
        "chore", // 构建过程或辅助工具的变动
        "cli", // CLI命令行工具变更
        "docs", // 文档变更
        "feat", // 新功能
        "fix", // 修复
        "perf", // 性能优化
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "revert", // 撤回提交
        "style", // 格式（不影响代码运行的变动）
        "test", // 增加测试
      ],
    ],
    "type-case": [2, "always", "lower-case"], // 要求 type 为小写
  },
};
