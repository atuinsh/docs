# Atuin docs

This powers docs.atuin.sh - the unified documentation site for Atuin CLI and Atuin Desktop.

This site uses [MkDocs](https://www.mkdocs.org/) with the [Material theme](https://squidfunk.github.io/mkdocs-material/) and the [mkdocs-multirepo-plugin](https://github.com/jdoiro3/mkdocs-multirepo-plugin) to pull documentation from multiple repositories.

## Documentation sources

- **Atuin CLI**: Documentation lives in the [atuinsh/atuin](https://github.com/atuinsh/atuin) repository under `docs/`
- **Atuin Desktop**: Documentation lives in the [atuinsh/desktop](https://github.com/atuinsh/desktop) repository under `docs/`

## Local development

```bash
# Install dependencies
uv sync

# Run local dev server
uv run mkdocs serve

# Build the site
uv run mkdocs build
```

## Contributing

To contribute to the documentation:

- For Atuin CLI docs, submit PRs to [atuinsh/atuin](https://github.com/atuinsh/atuin)
- For Atuin Desktop docs, submit PRs to [atuinsh/desktop](https://github.com/atuinsh/desktop)
- For site-wide changes (navigation, theme, etc.), submit PRs to this repository
