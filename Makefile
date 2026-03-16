.PHONY: check fix

check:
	pnpm format-check
	pnpm lint
	pnpm build

fix:
	pnpm format
	pnpm lint --fix
	pnpm build
