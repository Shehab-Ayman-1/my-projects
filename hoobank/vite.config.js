import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: resolve(__dirname, "./src/assets"),
			components: resolve(__dirname, "./src/components"),
			constants: resolve(__dirname, "./src/constants"),
			layout: resolve(__dirname, "./src/layout"),
			context: resolve(__dirname, "./src/context"),
			utilities: resolve(__dirname, "./src/assets"),
			widgets: resolve(__dirname, "./src/widgets"),
		},
	},
});
