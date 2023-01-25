## Usage

This repository is a companion to [dts-runtime](https://github.com/Proglang-TypeScript/run-time-information-gathering) and should be saved under the same parent directory as dts-runtime. To set up this repository, run the command one of the two following commands.

```bash
node install.js
```

```bash
node install.js 2>&1 | tee install.log
```

The second command is meant to save the details of the installation process.

Additionally, the file `create-files.js` has been included as well. This file is unnecessary for initial set up. However, the user can create additional tests by additing the paths of the desired test files to `import-files.txt` before executing this file. The user must then run `install.js` again.

```bash
node create-files.js
node install.js
```