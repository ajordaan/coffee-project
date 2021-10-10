import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerScrollSpy } from "vue3-scroll-spy";

const app = createApp(App);
registerScrollSpy(app);
app.use(router);
app.use(store);
app.mount("#app");
