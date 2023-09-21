# Dientsys Client

## Dev Environment Setup

### Technologies

- Package Manager: pnpm
- Build Tool: Vite
- Typescript
- React
- TailwindCSS

#### Why pnpm?

Apart from pnpm having much faster download speeds compared to npm, pnpm is also much friendlier to your disk space compared to npm. Whereas npm bloats your local machine with node_modules, pnpm using a global caching method which greatly reduces the overall disk space node_moduels take up on your machine as well as improves download speeds.

pnpm docs: <https://pnpm.io/motivation>

### Install pnpm

MacOs

```bash
brew install pnpm
```

WSL2

```bash
npm install -g pnpm
```

### Install dependencies

While in the root directory of the client folder, run the follwoing command in the terminal

```bash
pnpm install
```

### Install VSCode Extenstions

- Prettier
- Tailwind CSS IntelliSense

### Conclusion

Your dev enviroment should now be set up with the correct configurations. I have included a prettier config file so our code stays formatted as we work. I have also gone ahead and created two utility functions that will be useful down the line:

- cn.tsx

function that leverages tailwind-merge and clsx to create dynamic classes and resuable components

- getError.ts

takes a error as a parameter and returns the error message
