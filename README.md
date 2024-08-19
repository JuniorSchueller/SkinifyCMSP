# SkinifyCMSP

**SkinifyCMSP** é um userscript que permite a personalização visual da interface do CMSP (Centro de Mídias São Paulo). Cansado do design padrão? Com SkinifyCMSP, você pode aplicar suas próprias skins e transformar completamente a aparência do CMSP.

## Funcionalidades

- **Personalização do Login**: Modifique o fundo, as cores dos textos e o estilo dos menus na tela de login.
- **Estilização das Salas**: Altere o fundo, as cores dos textos e os detalhes visuais das salas e canais.
- **Suporte a "Cheats"**: Adicione suporte a truques no CMSP ao ativar a opção `allowCheats` no skinData.
- **Aplicação Fácil de Skins**: Aplique skins hospedadas externamente com facilidade.

## Como Instalar e Usar

1. **Instalar Tampermonkey**:
   - Primeiro, instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no seu navegador.

2. **Instalar o Script**:
   - Visite o [gist do SkinifyCMSP](https://gist.github.com/JuniorSchueller/a5f925d64fd5734a027ccc3ffa7d1303).
   - Clique em "Raw" para abrir o código do userscript e o Tampermonkey irá sugerir a instalação do script.

3. **Configurar a Skin**:
   - No código do userscript, há uma variável chamada `skinUrl`. Basta substituir o valor dessa variável com a URL do seu skinData JSON hospedado externamente.

4. **Aplicar a Skin**:
   - Salve e ative o script no Tampermonkey. O CMSP será automaticamente estilizado com a skin configurada ao acessar a plataforma.

## Como Criar uma Skin

1. **Acessar o Skin Builder**:
   - Visite [SkinifyCMSP Builder](https://skinifycmsp-builder.vercel.app/) para criar sua própria skin.

2. **Configurar as Propriedades da Skin**:
   - Preencha os campos disponíveis para personalizar as diversas partes do CMSP, como fundos, cores de texto e bordas.

3. **Pré-visualização**:
   - O builder possui um iframe integrado que permite visualizar como sua skin ficará na tela de login do CMSP enquanto você faz as alterações.

4. **Gerar o Código**:
   - Depois de finalizar as personalizações, clique no botão "Enviar".

5. **Aplicar a Skin**:
   - Pegue a URL do JSON hospedado e configure-a na variável `skinUrl` do script do SkinifyCMSP.

## Contribuição

Se desejar contribuir para o desenvolvimento do SkinifyCMSP, sinta-se à vontade para abrir issues ou enviar pull requests no [repositório oficial](https://github.com/JuniorSchueller/SkinifyCMSP).

---

**Autor**: JuniorSchueller  
**Versão**: 2024-08-10  
**Licença**: MIT
