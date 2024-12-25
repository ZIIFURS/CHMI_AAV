import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Animals from "@/pages/Animals.vue";
import Health from "@/pages/Health.vue";
import Events from "@/pages/Events.vue";
import Quarantines from "@/pages/Quarantines.vue";
import Settings from "@/pages/Settings.vue";
import Livestock from "@/pages/Livestock.vue";
import Active from "@/pages/Active.vue";
import Protocols from "@/pages/Protocols.vue";
import Inventory from "@/pages/Inventory.vue";

const routes = [
    { path: '/', component: Main },
    { path: '/animals', component: Animals },
    { path: '/health', component: Health },
    { path: '/events', component: Events },
    { path: '/quarantines', component: Quarantines },
    { path: '/settings', component: Settings },
    { path: '/livestock', component: Livestock },
    { path: '/active', component: Active },
    { path: '/protocols', component: Protocols },
    { path: '/inventory', component: Inventory },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

