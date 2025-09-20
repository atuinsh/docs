---
title: Desinstalando o Atuin
---

Lamentamos vê-lo partir!

Se você usou o instalador do Atuin, pode excluí-lo completamente removendo o seguinte:

1. Exclua o diretório ~/.atuin
2. Exclua o diretório ~/.local/share/atuin
3. Remova a linha que faz referência a "atuin init" da configuração do seu shell

Caso contrário, a desinstalação do Atuin depende do seu sistema e de como você o instalou.

Por exemplo, no macOS, você precisaria executar:

```sh
brew uninstall atuin
```

e então remover a integração com o shell.
