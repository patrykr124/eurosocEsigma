const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: {
  				'50': ' #F6F8FD',
  				'500': '#624CF5',
  				DEFAULT: '#624CF5',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			grey: {
  				'50': '#F6F6F6',
  				'400': '#AFAFAF',
  				'500': '#757575',
  				'600': '#545454'
  			},
  			blue: {
  				'500': '#0023eb'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				blue: 'hsl(var(--secondary-blue))',
  				'blue-hover': 'hsl(var(--secondary-blue-hover))'
  			},
			"black-1": "#080808",
			"gray-1": "#363636",
			"gray-2": "#E3E3E3",
			"gray-3": "#FCFCFC",
			"blue-1": "#0022E9",
			"blue-1-hover": "rgba(0,34,234,0.87)",
            "red-1": "#E90022",
			"red-1-hover": "rgba(233,0,34,0.76)",
  		},
		boxShadow: {
			'light': '0px 0px 4px 2px rgba(0, 0, 0, 0.1)',
		},
  		fontFamily: {
  			ubuntumono: ["var(--font-ubuntu-mono)"]
  		},
  		keyframes: {
  			animation: {
  				'accordion-down': 'accordion-down 0.2s ease-out',
  				'accordion-up': 'accordion-up 0.2s ease-out'
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
