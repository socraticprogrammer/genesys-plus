import wrapUps from "../docs/wraps-kabum.json";
import queues from "../docs/queues-kabum.json";
import axios from "axios";
import { authenticate } from "./auth";

const KABUM_CLIENT_ID = "5e76adce-a2f6-4398-b05c-bb694c3a99ee";
const KABUM_CLIENT_SECRET = "g3i7r7KAyzKqC3IZ0r_FjUoNqS3mYFiH_uqp_ONg4_Y";

export async function associateWrapupsToQueues() {
  try {
    const accessToken = await authenticate(
      KABUM_CLIENT_ID,
      KABUM_CLIENT_SECRET
    );
    console.info(`[TOKEN] ${accessToken}`);

    const wrapUpsWithIdentifier = [];

    for (const { wrapName } of wrapUps) {
      const {
        data: { entities: wrapUpsEntities },
      } = await axios.get(
        "https://api.mypurecloud.com/api/v2/routing/wrapupcodes",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            name: wrapName,
          },
        }
      );

      const wrapupId = wrapUpsEntities?.length ? wrapUpsEntities[0]?.id : "";
      wrapUpsWithIdentifier.push({
        name: wrapName,
        id: wrapupId,
      });
    }

    console.info(
      `[WRAPUPS] ${
        wrapUpsWithIdentifier.filter(({ id }) => id).length
      } founded.`
    );

    for (const { queueName } of queues) {
      const {
        data: { entities: queuesEntities },
      } = await axios.get("https://api.mypurecloud.com/api/v2/routing/queues", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          name: queueName,
        },
      });

      const queueId = queuesEntities?.length ? queuesEntities[0]?.id : "";

      if (!queueId) {
        console.warn(`[QUEUE] ${queueName} do not exists.`);
        continue;
      }

      const {
        data: { entities: wrapUpsFromQueueEntities },
      } = await axios.get(
        `https://api.mypurecloud.com/api/v2/routing/queues/${queueId}/wrapupcodes`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            pageSize: 200,
          },
        }
      );

      console.info(`[WRAPUPS] ${wrapUpsFromQueueEntities.length} founded.`);

      //   for (const wrapUpFromQueue of wrapUpsFromQueueEntities) {
      //     const { status, data } = await axios.delete(
      //       `https://api.mypurecloud.com/api/v2/routing/queues/${queueId}/wrapupcodes/${wrapUpFromQueue.id}`,
      //       {
      //         headers: {
      //           Authorization: `Bearer ${accessToken}`,
      //         },
      //       }
      //     );

      //     if (status < 200 || status > 299) {
      //       throw data;
      //     }

      //     console.info(
      //       `[WRAP UPS] ${wrapUpFromQueue.name} removed of ${queueName}.`
      //     );
      //   }

      //   if (!wrapUpsWithIdentifier.every(({ id }) => id)) {
      //     console.warn(`[WRAPUPS] Any wrapup founded.`);
      //     return;
      //   }

      //   const { status, data } = await axios.post(
      //     `https://api.mypurecloud.com/api/v2/routing/queues/${queueId}/wrapupcodes`,
      //     wrapUpsWithIdentifier.map(({ id }) => ({ id })),
      //     {
      //       headers: {
      //         Authorization: `Bearer ${accessToken}`,
      //       },
      //     }
      //   );

      //   if (status < 200 || status > 299) {
      //     throw data;
      //   }

      //   console.info(
      //     `[WRAP UPS] ${wrapUpsWithIdentifier.length} added to ${queueName}.`
      //   );
    }
  } catch (error) {
    console.error(error);
  }
}
