install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-greeter.js

make-lint:
	npx eslint .

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js