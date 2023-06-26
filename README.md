# ngx-ribbon

An [Angular](https://angular.io/) UI Component library for corner ribbons.

## Installation

```bash
npm install --save <TODO:publish library>
```

## Usage

### Initialize module

Import the library into your app module:

```ts
import { NgxRibbonModule } from 'ngx-ribbon';
@NgModule({
  imports: [
    // ... your other module imports
    NgxRibbonModule,
  ],
})
```

### Use on template
```
<ngx-ribbon label="hello world!" [scale]="0.5"></ngx-ribbon>
```

## Contributing
### Known Issues
1. Ribbon floats when using browser's zoom tool.
2. Ribbon labels' font-size are not dynamic.
3. Ribbon labels are upside down for `position=bottom-*`.

### Development

Run `ng serve` and `npm run watch` on separate terminals.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### # Issue on testing with Windows Chrome via WSL2

Please see this [StackOverflow](https://stackoverflow.com/questions/54090298/karma-use-windows-chrome-from-wsl) post. Similar to the answers, you can [add your permanent environment variable](https://github.com/microsoft/WSL/issues/4359#issuecomment-516839749) on `.bashrc` or `.zshrc`. For example:

```
export CHROME_BIN="/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"
```

