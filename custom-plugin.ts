import plugin from "tailwindcss/plugin";

export const customPlugin = plugin(
	// 1. Add css variable definitions to the base layer
	({ addBase }) => {
		addBase({
			":root": {
				"--background": "75 100% 95%",
				"--foreground": "75 5% 10%",
				"--card": "75 50% 90%",
				"--card-foreground": "75 5% 15%",
				"--popover": "75 100% 95%",
				"--popover-foreground": "75 100% 10%",
				"--primary": "75 99% 47%",
				"--primary-foreground": "0 0% 100%",
				"--secondary": "75 30% 70%",
				"--secondary-foreground": "0 0% 0%",
				"--muted": "37 30% 85%",
				"--muted-foreground": "75 5% 35%",
				"--accent": "37 30% 80%",
				"--accent-foreground": "75 5% 15%",
				"--destructive": "0 100% 30%",
				"--destructive-foreground": "75 5% 90%",
				"--border": "75 30% 50%",
				"--input": "75 30% 26%",
				"--ring": "75 99% 47%",
				"--radius": "1rem"
			},
			".dark": {
				"--background": "75 50% 10%",
				"--foreground": "75 5% 90%",
				"--card": "75 50% 10%",
				"--card-foreground": "75 5% 90%",
				"--popover": "75 50% 5%",
				"--popover-foreground": "75 5% 90%",
				"--primary": "75 99% 47%",
				"--primary-foreground": "0 0% 100%",
				"--secondary": "75 30% 20%",
				"--secondary-foreground": "0 0% 100%",
				"--muted": "37 30% 25%",
				"--muted-foreground": "75 5% 60%",
				"--accent": "37 30% 25%",
				"--accent-foreground": "75 5% 90%",
				"--destructive": "0 100% 30%",
				"--destructive-foreground": "75 5% 90%",
				"--border": "75 30% 26%",
				"--input": "75 30% 26%",
				"--ring": "75 99% 47%",
				"--radius": "1rem"
			}
		});
		addBase({
			"*": {
				"@apply border-border": {},
			},
			body: {
				"@apply bg-background text-foreground": {},
			},
		});
	}
);
