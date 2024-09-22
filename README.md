### Tree shakable
🌳 Library is tree shakeable, so what is not imported will not be in final bundle of the app 🎉!
![alt text](image.png)

### Installation
* ⚠️ tailwind is requirement so install it first https://tailwindcss.com/docs/guides/vite
* install package
  ```npm install shadcn-components```
* add tailwind configuration for components to **tailwind.config.js**:
```js
/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('./node_modules/shadcn-components/dist/tailwind.config.js')
  ],
  content: [
    "./node_modules/shadcn-components/dist/**/*.js",
  ],
  theme: {
  	extend: {}
  },
  plugins: [],
}
```
> Theme can be overwritten here and additional tailwind properties may be added. Check `./node_modules/shadcn-components/dist/tailwind.config.js` for base!

### Configure theme
Use theme generator for shadcn such as https://ui.shadcn.com/themes or https://zippystarter.com/tools/shadcn-ui-theme-generator.
Copy generated theme to index.css in your project. Make sure css file is imported in the app! <br />
e.g. 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root  {
    --background: 44 100% 99%;
    --foreground: 44 5% 10%;
    --card: 44 50% 99%;
    --card-foreground: 44 5% 15%;
    --popover: 44 100% 99%;
    --popover-foreground: 44 100% 10%;
    --primary: 44 100% 61.2%;
    --primary-foreground: 0 0% 0%;
    --secondary: 44 30% 90%;
    --secondary-foreground: 0 0% 0%;
    --muted: 6 30% 95%;
    --muted-foreground: 44 5% 40%;
    --accent: 6 30% 90%;
    --accent-foreground: 44 5% 15%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 44 5% 99%;
    --border: 44 30% 82%;
    --input: 44 30% 50%;
    --ring: 44 100% 61.2%;
    --radius: 1rem;
  }
  
  .dark  {
    --background: 44 50% 10%;
    --foreground: 44 5% 99%;
    --card: 44 50% 10%;
    --card-foreground: 44 5% 99%;
    --popover: 44 50% 5%;
    --popover-foreground: 44 5% 99%;
    --primary: 44 100% 61.2%;
    --primary-foreground: 0 0% 0%;
    --secondary: 44 30% 20%;
    --secondary-foreground: 0 0% 100%;
    --muted: 6 30% 25%;
    --muted-foreground: 44 5% 65%;
    --accent: 6 30% 25%;
    --accent-foreground: 44 5% 95%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 44 5% 99%;
    --border: 44 30% 50%;
    --input: 44 30% 50%;
    --ring: 44 100% 61.2%;
    --radius: 1rem;
  }
}
```

### Usage
```tsx
import {
  Badge,
  Button,
  Calendar
} from 'shadcn-components'
```
