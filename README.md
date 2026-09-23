# ÁguaPro PDV

PDV para distribuidoras de água e bebidas, feito para uso em computador. A versão atual funciona localmente no navegador e salva os dados no próprio PC. A pasta `backend/supabase` contém a base para migrar a persistência para o Supabase.

## Como executar

É necessário ter o Node.js instalado. Na pasta do projeto, execute:

```powershell
npm start
```

Depois abra `http://localhost:4173`. Também é possível abrir o arquivo `index.html` diretamente, mas o servidor local oferece um comportamento mais consistente.

## O que já funciona

- Lançamento de vendas com busca, categorias, carrinho, desconto e pagamentos em dinheiro, Pix ou cartão;
- abertura e fechamento de caixa, com valor esperado e valor contado;
- produtos, categorias, fornecedores, custos, preços e promoções;
- upload de foto por produto, com prévia no cadastro e identificação visual no caixa, estoque e catálogo;
- entradas, saídas, ajustes, estoque mínimo e histórico de movimentações;
- cancelamento auditável, com motivo, responsável e devolução automática ao estoque;
- relatórios diário, mensal, anual ou geral, com faturamento, custo, lucro estimado e ticket médio;
- exportação de relatório em CSV;
- dados de demonstração e persistência local via `localStorage`.

As vendas confirmadas nunca são apagadas. Um cancelamento cria registros de estorno e mantém a venda original nos relatórios.

## Atalhos

- `F2`: buscar produto;
- `F4`: finalizar venda;
- `Esc`: fechar uma janela.

## Estrutura

```text
index.html             Interface das cinco seções
css/style.css          Tema claro e responsivo
js/app.js              Regras do PDV e persistência local
backend/server.mjs     Servidor local sem dependências
backend/supabase/      Modelo PostgreSQL, RLS e auditoria
```

## Próxima etapa: Supabase

1. Crie um projeto no Supabase.
2. Execute `backend/supabase/schema.sql` no SQL Editor.
3. Cadastre os usuários pelo Supabase Auth.
4. Troque a camada de persistência de `localStorage` em `js/app.js` pelo cliente Supabase.
5. Para produção, confirme venda e cancelamento por funções transacionais no banco. Nunca exponha a chave `service_role` no navegador.

O lucro exibido é estimado: faturamento após descontos menos o custo histórico dos itens. Taxas de cartão, impostos, entregas e demais despesas devem ser incluídos antes de tratá-lo como lucro líquido contábil.
