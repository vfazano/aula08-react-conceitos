# Aula 08: leituras em curso

Aplicação React para acompanhar uma pequena lista de leituras. Marque itens como concluídos e filtre as leituras pendentes.

## Executar

```bash
npm install
npm run dev
```

## Conceitos demonstrados

- **JSX e expressões:** os componentes montam a interface e exibem valores calculados.
- **Componentes:** `Header`, `ReadingCard` e `ReadingList` dividem a interface em partes reutilizáveis.
- **Props:** dados e callbacks são passados para `Header`, `ReadingCard` e `ReadingList`.
- **DOM/Virtual DOM:** React atualiza o DOM conforme o estado muda, sem manipulação manual do DOM.
- **Listas e keys:** `ReadingList` usa `map()` com o identificador estável `reading.id` como `key`.
- **Renderização condicional:** a lista exibe uma mensagem quando vazia e cada botão muda conforme o status de leitura.

Crie um repositório público e envie a pasta para o GitHub antes de preencher o link de entrega. A publicação não foi feita.
