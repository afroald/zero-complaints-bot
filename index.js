module.exports = (robot) => {
  robot.on('issues.opened', async context => {
    context.github.issues.addLabels(context.issue({ labels: ['wontfix'] }))
    context.github.issues.edit(context.issue({ state: 'closed' }))
  })
}
