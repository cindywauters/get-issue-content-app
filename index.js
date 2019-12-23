/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  app.on('issues.opened', async context => {
    app.log(context)
    var issueTitle = context.payload.issue.title
    var issueLabels = ""
    for (var i in context.payload.issue.labels) {issueLabels += (context.payload.issue.labels[i].name) + ' ';}
    var issueBody = context.payload.issue.body
    const issueComment = context.issue({ body: `Title: ${issueTitle}, labels: ${issueLabels}, body: ${issueBody}`})
    return context.github.issues.createComment(issueComment)
  })
}
