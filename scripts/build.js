const { workspaces } = require('./util')
const execa = require('execa')
const chalk = require('chalk')
const ora = require('ora')
const log = console.log
const inquirer = require('inquirer')
const logSymbols = require('log-symbols')
const { i = false, interactive = false } = require('yargs').argv

const packages = workspaces.map((workspace) => ({
  name: workspace.substr(workspace.lastIndexOf('/') + 1),
  command: execa('tsc', ['--sourceRoot', workspace, '--outDir', `${workspace}/build`]),
  path: workspace
}))

const promptList = [
  {
    type: 'checkbox',
    message: '请选择需要构建的模块:',
    name: 'buildModule',
    choices: packages.map((p) => ({
      value: p,
      name: p.name,
      checked: true
    }))
  }
]

/**
 * 构建指定模块
 * @param {{name: string, command:execa.ExecaChildProcess}} modules 模块
 */
const build = async (modules = []) => {
  for (const module of modules) {
    const spinner = ora(`构建 ${module.name} 模块...`).start()
    spinner.start()
    try {
      await module.command
      spinner.succeed('构建成功')
    } catch (e) {
      spinner.fail('构建失败')
    }
  }
}

/**
 * 主函数
 */
const main = async () => {
  let modules = packages.map((p) => p.value)
  if (i || interactive) {
    const { buildModule } = await inquirer.prompt(promptList)
    modules = buildModule
  }
  const names = modules.map((p) => p.name).join(',')
  log(logSymbols.info, chalk.green(`将会构建如下模块: ${names}`))
  await build(modules)
}

main().catch((err) => console.error(err))
