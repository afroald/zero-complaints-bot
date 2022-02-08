module.exports = (app) => {
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    await context.octokit.issues.addLabels(context.issue({ labels: ['wontfix'] }))
    await context.octokit.issues.update(context.issue({ state: 'closed' }))
  });
};
