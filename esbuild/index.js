const EB = require('esbuild')

EB.buildSync({
	entryPoints: [ `../src/app.ts` ],
      outdir: '../dist',
      tsconfig:'../tsconfig.json'
})
