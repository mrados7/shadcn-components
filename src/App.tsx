import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/main";
import type React from "react";

interface IProps {}

const App: React.FC<IProps> = () => {
	return (
		<div>
			<ThemeProvider defaultTheme="dark" storageKey="my-theme">
				<Button>Button</Button>
			</ThemeProvider>
		</div>
	);
};

export default App;
