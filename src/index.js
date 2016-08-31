// Import theme
import createTheme from "spectacle/lib/themes/default";

const initialTheme = createTheme({
	primary: "#042B35",
	secondary: "#D2A03E",
	tertiary: "#FD853D",
	quartenary: "#A7A7A7",
}, {
	primary: "Menlo"
});

export const theme = {
	...initialTheme,
	screen: {
		...initialTheme.screen,
		components: {
			...initialTheme.screen.components,
			text: {
				...initialTheme.screen.components.text,
				color: initialTheme.screen.colors.quartenary
			},
			link: {
				...initialTheme.screen.components.link,
				color: initialTheme.screen.colors.secondary
			}
		}
	}
};
