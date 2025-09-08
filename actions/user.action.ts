"use server";

import { actionClient } from "@/lib/safe-action";
import { contactActionSchema } from "@/lib/validation";
import axios from "axios";

const telegramBotId = "5726585838:AAFw3arclQJTosdi9_4_eHFSsJwnT4uBt4s";
const telegramChatId = "123456789";

export const sendMessage = actionClient
  .schema(contactActionSchema)
  .action(async ({ parsedInput }) => {
    try {
      const { message } = parsedInput;

      await axios.post(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          chat_id: telegramChatId,
          text: message,
        }
      );

      return {
        success: true,
        message: "Xabar muvaffaqiyatli yuborildi",
      };
    } catch {
      return {
        success: false,
        message: "Xabar yuborishda xatolik yuz berdi",
      };
    }
  });
