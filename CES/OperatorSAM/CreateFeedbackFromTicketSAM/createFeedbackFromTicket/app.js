let response;
exports.lambdaHandler = async (event, context) => {
  try {
    const axios = require("axios");

    const message = event.Records[0].Sns.Message;
    axios
      .post(
        "http://52.201.233.250:8080/api/tenant/5fffd184e7581800216e996f/forAlliance/feedback",
        {
          data: {
            assignee: "5fffd95f12c4c6002112a767",
            description: `${message}`,
            feedbackStatus: "pending",
            sourceId: "1111",
            sourceType: "fromHelpDesk",
            title: `${message}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
