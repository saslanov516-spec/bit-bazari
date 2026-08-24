export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("BİT BAZARI işləyir! 🇦🇿");
    }

    const update = await request.json();

    if (update.message) {
      const chatId = update.message.chat.id;
      const text = "Salam! 👋\n\nBİT BAZARI işləyir.\n\nElan yerləşdirmək üçün /elan yazın.";

      await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text
        })
      });
    }

    return new Response("OK");
  }
};
