import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "首页",
      path: "/home",
      component: "./index",
    },
    {
      name: "权限演示",
      path: "/docs",
      component: "./docs",
    },
  ],
  npmClient: "yarn",
});
