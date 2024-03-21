## dynamic-theme-switcher

A JavaScript library for dynamically switching themes in web applications.

### Installation

You can install the library via npm:

```bash
npm install dynamic-theme-switcher
```

### Usage

```javascript
import ThemeSwitcher from 'dynamic-theme-switcher';

// Initialize the theme switcher with the default theme
ThemeSwitcher.init(defaultTheme);

// Switch to a new theme
ThemeSwitcher.switchTheme(newTheme);
```

### API

#### `init(defaultTheme: Object)`

Initialize the theme switcher with the default theme.

- `defaultTheme`: An object containing the default theme variables.

#### `switchTheme(themeVariables: Object)`

Switch to a new theme.

- `themeVariables`: An object containing the new theme variables.

### Example

```javascript
import ThemeSwitcher from 'dynamic-theme-switcher';

const defaultTheme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
};

ThemeSwitcher.init(defaultTheme);

const darkTheme = {
  primaryColor: '#343a40',
  secondaryColor: '#6c757d',
};

ThemeSwitcher.switchTheme(darkTheme);
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
