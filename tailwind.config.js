/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'amz-sm': '2px',
  			'amz-md': '4px',
  			'amz-lg': '8px',
  			'amz-input': '3px',
  		},
  		spacing: {
  			'amz-header': '60px',
  			'amz-subnav': '39px',
  		},
  		fontSize: {
  			'amz-xs': ['11px', '16px'],
  			'amz-sm': ['12px', '16px'],
  			'amz-base': ['13px', '19px'],
  			'amz-md': ['14px', '20px'],
  			'amz-lg': ['16px', '22px'],
  			'amz-xl': ['18px', '24px'],
  			'amz-2xl': ['21px', '27px'],
  			'amz-3xl': ['24px', '32px'],
  			'amz-4xl': ['28px', '36px'],
  		},
  		colors: {
  			amz: {
  				'dark-blue': '#131921',
  				'nav-blue': '#232f3e',
  				'orange': '#febd69',
  				'orange-hover': '#f3a847',
  				'yellow': '#ffd814',
  				'yellow-hover': '#f7ca00',
  				'yellow-border': '#fcd200',
  				'buy-now': '#ffa41c',
  				'buy-now-hover': '#fa8900',
  				'link': '#007185',
  				'link-hover': '#c7511f',
  				'text': '#0f1111',
  				'text-secondary': '#565959',
  				'border': '#d5d9d9',
  				'border-light': '#e7e7e7',
  				'bg-gray': '#e3e6e6',
  				'bg-light': '#f0f2f2',
  				'bg-hover': '#e3e6e6',
  				'category-bg': '#f3f3f3',
  				'star': '#de7921',
  				'deal-red': '#cc0c39',
  				'green': '#007600',
  				'error': '#c40000',
  				'focus': '#e77600',
  				'prime-blue': '#00a8e1',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
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
  plugins: [require("tailwindcss-animate")],
};