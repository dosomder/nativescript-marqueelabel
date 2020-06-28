# nativescript-marqueelabel

This plugin extends the Label to allow for marquee (scrolling) text effect. It supports iOS and Android.

Android has marquee built in, for iOS https://github.com/cbpowell/MarqueeLabel/ is used.

## Prerequisites / Requirements

None.

## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-marqueelabel
```

### Additional step for iOS

Copy the contents of `App_Resources` in the `App_Resources` folder of your app.

## Usage

### Vue

```javascript
import MarqueeLabelPlugin from "nativescript-marqueelabel/vue";

Vue.use(MarqueeLabelPlugin);
```

Then simply change `<Label></Label>` to `<MarqueeLabel></MarqueeLabel>`

## API

Currently none. PRs welcome.

## License

Apache License Version 2.0, January 2004
