# Angular Tutorial — Learning Projects

This repository contains a set of standalone Angular learning projects. Each top-level folder is a self-contained Angular application or demo used to explore a specific topic in the framework. Clone the repository and open any folder to run the example locally.

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- (optional) @angular/cli installed globally: `npm install -g @angular/cli`

## Clone the repository

```bash
git clone https://github.com/zhenchai00/angular-tutorial-project.git
cd angular-tutorial-project
```

## How to run each project locally

1. Open the folder for the example you want:
    `cd 02-components`
2. Install dependencies:
    `npm install`
3. Start the dev server:
    `npm start`
    or
    `ng serve --open --port 4201`
If `npm start` is not defined, use `npx ng serve --open` or check package.json for the proper script. Use `--port` to avoid port conflicts.

## Notes & troubleshooting

- If Angular CLI version mismatches cause errors, run `npm install` inside the project to use the local CLI or use `npx @angular/cli@<version>`.
- For CORS or API issues, check the demo’s README or environment files in the project folder.
- If a folder is not a runnable app, it may contain notes or exercises. Check the folder README.
