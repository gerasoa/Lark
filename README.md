# Lark

Lark é uma plataforma de aprendizagem de inglês por compreensão auditiva. Cada aula combina uma cena curta, vocabulário contextualizado e perguntas de interpretação para transformar escuta em prática ativa.

## Princípio de aprendizagem

**Assista. Repita. Interprete. Use.**

O primeiro lançamento prioriza aulas curtas, claras e responsivas para alunos de nível A2 a B1.

## Tecnologias

- React e TypeScript
- App Router com vinext
- CSS próprio para a interface
- Sites para hospedagem

## Estrutura do projeto

```text
app/                    Interface, páginas e rotas
app/lessons.ts          Conteúdo de exemplo das aulas
app/lesson/[slug]/      Página individual de cada aula
public/                 Imagens e outros recursos estáticos
docs/                   Produto, arquitetura e casos de uso
.openai/hosting.json    Configuração da hospedagem do Sites
```

## Começar localmente

Pré-requisito: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:3000`.

Para verificar uma versão de produção:

```bash
npm run build
```

## Documentação de produto

Antes de implementar uma funcionalidade, leia:

- [Visão do produto](docs/produto.md)
- [Arquitetura inicial](docs/arquitetura.md)
- [Decisões registradas](docs/decisoes.md)
- [Backlog](docs/backlog.md)
- [Casos de uso](docs/casos-de-uso/)

O primeiro caso de uso, [UC-001 — Estudar uma aula](docs/casos-de-uso/UC-001-estudar-uma-aula.md), define a experiência atual de uma lição.

## Fluxo de contribuição

1. Escolha ou crie um caso de uso em `docs/casos-de-uso/`.
2. Defina critérios de aceitação antes de começar a programar.
3. Crie uma branch para a funcionalidade.
4. Implemente, teste e revise o diff.
5. Faça um pull request para `main`.
6. Publique apenas depois da revisão.

## Segurança

O repositório é público. Nunca envie tokens, chaves de API, arquivos `.env` ou credenciais. Valores de ambiente devem ser configurados na plataforma de hospedagem.

## Próximos passos

Consulte o [backlog](docs/backlog.md) para priorizar as próximas melhorias do Lark.
