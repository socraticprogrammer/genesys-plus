import axios from "axios";

export async function authenticate(clientId: string, clientSecret: string) {
  const {
    data: { access_token: accessToken },
  } = await axios.post(
    "https://login.mypurecloud.com/oauth/token",
    {
      grant_type: "client_credentials",
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
      },
    }
  );

  return accessToken;
}
