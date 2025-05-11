import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

export const echo = new Echo({
  broadcaster: "pusher",
  key: "YOUR_PUSHER_KEY",         // انسخه من .env في الباك اند
  cluster: "YOUR_PUSHER_CLUSTER", // مثلاً: "mt1"
  forceTLS: true,
});