'use strict'

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully! Knowledge is so awesome!',
      input: event
    })
  }

  callback(null, response)
}
