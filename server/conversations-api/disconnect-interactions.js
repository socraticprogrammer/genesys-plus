const fs = require("fs/promises");
const path = require("path");

async function disconnectInteractionsOnGenesysCloud(conversationId) {
  const response = await fetch(
    `https://api.mypurecloud.com/api/v2/conversations/${conversationId}/disconnect`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer XJ9p6IdATlF4IrreiWFulp55OTJAcmTNHonL0BxNIjXSAz5o0puc55sh2NOJx3ws313GKZyqDPiI_4de7SzehA",
      },
    }
  );
  return response?.status;
}

(async () => {
  console.time("execution time");

  const file = await fs.open(
    path.join(__dirname, "july 2024 take Interactions.csv")
  );

  const data = await file.readFile({
    encoding: "utf-8",
  });

  const dataSplitted = data.split("\r");
  dataSplitted.shift();
  const conversationsFormatted = dataSplitted.map((conversationId) =>
    conversationId.replaceAll("\n", "").trim()
  );

  for (const conversationId of conversationsFormatted) {
    console.timeLog("execution time");
    do {
      const statusCode = await disconnectInteractionsOnGenesysCloud(
        conversationId
      );

      if (statusCode === 200) {
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, 5000));
    } while (true);
    console.info(`[CONVERSATION DISCONNECTED] ${conversationId}`);
  }

  console.timeEnd("execution time");
})();
