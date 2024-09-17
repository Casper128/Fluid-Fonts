# Fluid Fonts README

## Overview

Fluid Fonts is a VS Code extension designed to simplify the use of fluid typography in your projects, enabling you to create responsive font sizes effortlessly.

## Features

- **Easy Integration**: Quickly generate fluid font sizes using the `Generate Clamp` function.
- **User-Friendly Interface**: Intuitive settings for configuring your typography.

![Extension Demo](https://s11.gifyu.com/images/SApiR.gif)

### How to Use the `Generate Clamp` Function

1. Press `CTRL + SHIFT + P` (Windows) or `Command + Shift + P` (Mac OS).
2. Select the `Generate Clamp` option.
3. Enter your values separated by commas in the placeholder specified (in `px` or `rem`).

## Extension Settings

Fluid Fonts offers the following configurable settings:

- **Enable**: Toggle the extension on or off.
- **Min and Max Viewport**: Customize the default minimum and maximum viewport values.
- **Units**: Specify whether you want to enter values in `px` or `rem`.

## Getting Started

You can configure the following parameters in your workspace settings:

1. **Minimum Viewport**: The viewport width at which the font size won’t be reduced (e.g., `320px`).
2. **Maximum Viewport**: The viewport width at which the font size starts to decrease (e.g., `1400px`).

### Steps to Insert Data

1. Press `CTRL + SHIFT + P` (Windows) or `Command + Shift + P` (Mac OS).
2. Select the `Generate Clamp` option.
3. Enter your values separated by commas in the placeholder specified (in `px` or `rem`).
4. **Minimum Value**: The smallest font size (e.g., `16px`). The final value will not go below this.
5. **Maximum Value**: The largest font size (e.g., `24px`). The starting value will not exceed this.

For more information on CSS Clamp, check out the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).

## TODO

- [ ] Implement unit testing

## Acknowledgements 

This project was inspired by the [css-clamp-generator-vscode](https://github.com/karnauhmax/css-clamp-generator-vscode) library. 
We would like to thank the author for his work and contributions that served as the basis for the development of Fluid Fonts.
