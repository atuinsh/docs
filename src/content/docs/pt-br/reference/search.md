---
title: pesquisar
---

Atuin search supports wildcards, with either the `*` or `%` character. Por
padrão, uma pesquisa de prefixo é realizada (ou seja, todas as consultas são automaticamente
anexadas com um curinga).

| Argumento                  | Descrição                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `--cwd`/`-c`         | O diretório para listar o histórico (padrão: todos os diretórios)                         |
| `--exclude-cwd`      | Não incluir comandos que foram executados neste diretório (padrão: nenhum)            |
| `--exit`/`-e`        | Filtrar por código de saída (padrão: nenhum)                                           |
| `--exclude-exit`     | Não incluir comandos que saíram com este valor (padrão: nenhum)           |
| `--before`           | Incluir apenas comandos executados antes deste horário (padrão: nenhum)                     |
| `--after`            | Incluir apenas comandos executados após este horário (padrão: nenhum)                      |
| `--interactive`/`-i` | Abrir a interface de pesquisa interativa (padrão: falso)                               |
| `--human`            | Usar formatação legível para o carimbo de data/hora e duração (padrão: falso) |
| `--limit`            | Limitar o número de resultados (padrão: nenhum)                                   |
| `--offset`           | Deslocamento do início dos resultados (padrão: nenhum)                          |
| `--delete`           | Excluir histórico que corresponda a esta consulta                                            |
| `--delete-it-all`    | Excluir todo o histórico do shell                                                      |
| `--reverse`          | Inverter a ordem dos resultados da pesquisa, os mais antigos primeiro                                 |
| `--format`/`-f`      | Variáveis disponíveis: {command}, {directory}, {duration}, {user}, {host}, {time}, {exit} e {relativetime}. Exemplo: --format "{time} - [{duration}] - {directory}$	{command}" |
| `--inline-height`    | Definir o número máximo de linhas que a interface do Atuin deve ocupar              |
| `--help`/`-h`        | Imprimir ajuda                                                                    |

## `atuin search -i`

A TUI de pesquisa interativa do Atuin permite que você pesquise de forma difusa em seu histórico.

![compact](https://user-images.githubusercontent.com/1710904/161623659-4fec047f-ea4b-471c-9581-861d2eb701a9.png)

Você pode reproduzir o `n-ésimo` comando com `alt + #` onde `#` é o número da linha do comando que você gostaria de reproduzir.

Nota: Isso ainda não é suportado no macOS.

## Exemplos

```bash
# Abrir a TUI de pesquisa interativa
atuin search -i

# Abrir a TUI de pesquisa interativa pré-carregada com uma consulta
atuin search -i atuin

# Pesquisar todos os comandos, começando com cargo, que saíram com sucesso
atuin search --exit 0 cargo

# Pesquisar todos os comandos que falharam, do diretório atual, e foram executados antes de 1º de abril de 2021
atuin search --exclude-exit 0 --before 01/04/2021 --cwd .

# Pesquisar todos os comandos, começando com cargo, que saíram com sucesso, e foram executados depois de ontem às 15h
atuin search --exit 0 --after "yesterday 3pm" cargo

# Excluir todos os comandos, começando com cargo, que saíram com sucesso, e foram executados depois de ontem às 15h
atuin search --delete --exit 0 --after "yesterday 3pm" cargo

# Pesquisar um comando começando com cargo, retornar exatamente um resultado.
atuin search --limit 1 cargo

# Pesquisar um único resultado para um comando começando com cargo, pulando (deslocando) um resultado
atuin search --offset 1 --limit 1 cargo

# Encontrar o comando cargo mais antigo
atuin search --limit 1 --reverse cargo
```
