[Manual do usuário - mód 6.pdf](https://github.com/2023M6T3-Inteli/Grupo-4/files/11857810/Manual.do.usuario.-.mod.6.pdf)<center>
[template-documento1](../img/template-documento1.jpg)
</center>
<table>
<tr>
<table>
<tr>
<td>
<a href= "[https://klabin.com.br/](https://www.dell.com/pt-br)"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/72px-Dell_logo_2016.svg.png" alt="Dell" border="0" width="100%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="https://s3.amazonaws.com/gupy5/production/companies/26702/career/63484/images/2022-04-28_16-56_logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="30%"></a>
</td>
</tr>
</table>

. Nome do Projeto: xxxx
. Nome do Parceiro: Dell technologies
. Nome do Grupo: xxxx
. Integrantes do grupo:
  Alexandre Fonseca <br/>
  Beatriz Hirasaki <br/>
  Felipe Gomes <br/>
  Luiz Alencar <br/>
  Mariana Silva <br/>
  Pedro Baptista <br/>
  Stefano Tinelli <br/>

<font size="+12"><center>
Template do Documento do Projeto <br/>
Módulo 6 - Engenharia de Software <br/>

</center></font>

>*Observação 1: A estrutura inicial deste documento é só um exemplo. O seu grupo deverá alterar esta estrutura de acordo com o que está sendo solicitado nos artefatos.*

>*Observação 2: O índice abaixo não precisa ser editado se você utilizar o Visual Studio Code com a extensão **Markdown All in One**. Essa extensão atualiza o índice automaticamente quando o arquivo é salvo.*

**Conteúdo**

- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Parceiro de Negócios](#parceiro-de-negócios)
  - [Problema](#problema)
    - [Análise do Problema](#análise-do-problema)
    - [Matriz de avaliação de valor Oceano Azul](#matriz-de-avaliação-de-valor-oceano-azul)
    - [Proposta de Valor e Value Proposition Canvas](#proposta-de-valor-e-value-proposition-canvas)
    - [Matriz de Risco](#matriz-de-risco)
    - [Análise financeira do projeto](#análise-financeira-do-projeto)
  - [Mapeamento do processo](#mapeamento-do-processo)
  - [Descritivo da Solução](#descritivo-da-solução)
    - [Objetivos](#objetivos)
      - [Objetivos do projeto](#objetivos-do-projeto)
      - [Objetivos gerais](#objetivos-gerais)
      - [Objetivos específicos](#objetivos-específicos)
    - [Justificativa](#justificativa)
  - [Partes Interessadas](#partes-interessadas)
- [Requisitos](#requisitos)
  - [Requisitos Funcionais](#requisitos-funcionais)
  - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Perfis de Usuários](#perfis-de-usuários)
  - [Casos de Uso](#casos-de-uso)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
  - [Versão 1](#versão-1)
  - [Versão 2](#versão-2)
  - [Fluxo de Dados](#fluxo-de-dados)
  - [Arquitetura de Mensageria](#arquitetura-de-mensageria)
    - [Diagramas](#diagramas)
    - [Mensageria de Recomendação](#mensageria-de-recomendação)
    - [Vantagens e Desvantagens Arquitetura de Mensageria](#vantagens-e-desvantagens-arquitetura-de-mensageria)
- [UX e UI Design](#ux-e-ui-design)
  - [Benchmark e Revisão de Design Systems](#benchmark-e-revisão-de-design-systems)
  - [Wireframes](#wireframes)
  - [Design de Interface  - Seleção de Estilos](#design-de-interface----seleção-de-estilos)
- [Projeto de Banco de Dados](#projeto-de-banco-de-dados)
  - [Modelo Conceitual](#modelo-conceitual)
  - [Modelo Lógico](#modelo-lógico)
- [Pipeline de dados](#pipeline-de-dados)
- [Testes de Software](#testes-de-software)
  - [Teste Unitário](#teste-unitário)
  - [Teste de Integração](#teste-de-integração)
  - [Teste de Regressão](#teste-de-regressão)
  - [Teste de Usabilidade](#teste-de-usabilidade)
  - [Teste de Funcionalidade](#teste-de-funcionalidade)
  - [Teste de API](#teste-de-api)
    - [Teste Mensageria de Recomendação](#teste-mensageria-de-recomendação)
- [Documentação da API](#documentação-da-api)
- [Manual do Usuário](#manual-do-usuário)
- [Referências](#referências)
- [Apêndice](#apêndice)


# Visão Geral do Projeto
	


## Parceiro de Negócios

Nosso parceiro de negócio é a Dell, uma empresa voltada principalmente para a venda de computadores com a maior parte dos seus clientes sendo outras empresas. É uma empresa conhecida por sua capacidade de inovação e que busca oferecer soluções tecnológicas personalizadas para atender as necessidades de seus clientes,  mas existem também outras especialidades como a venda de outras tecnologias (mouses, fone de ouvido, consoles e acessórios para videogame) e um portfólio de soluções de TI (servidores, storage, hiperconvergência e proteção de dados).

A Dell Technologies é líder no mercado de computadores e equipamentos de tecnologia, sendo uma das maiores fabricantes de computadores do mundo, e também no segmento corporativo com 38,5% das vendas do mercado brasileiro e de pequenas empresas com 45,2% das vendas de desktops e notebooks segundo dados da IDC Quartely Personal Computing Devide Tracker.


## Problema

Descrever o problema ou a oportunidade de negócio.


### Análise do Problema

Nesta seção, serão apresentados os problemas identificados e as necessidades do usuário, bem como uma avaliação da situação atual e as possíveis soluções para cada questão. Além disso, serão identificados os obstáculos e limitações do projeto, a fim de assegurar que todas as preocupações sejam abordadas antes do início da implementação. A Análise do Problema é essencial para garantir que a solução do software seja eficaz e atenda às necessidades dos usuários. É importante que seja realizada uma pesquisa exaustiva e que todas as perspectivas sejam consideradas para garantir que a solução seja bem-sucedida.


### Matriz de avaliação de valor Oceano Azul

Matriz Oceano Azul é uma ferramenta estratégica utilizada por empresas para a criação de novos mercados, nos quais há pouca ou nenhuma concorrência, ou seja, o oceano ainda não foi explorado. propõe uma mudança de foco das empresas para a criação de novos mercados, como a solução que será desenvolvida que traz algo inovador e estratégico para o aprendizado interno da empresa. E de forma geral, é uma ferramenta estratégica que incentiva a pensar fora da caixa e criar novos “mercados”.

A matriz é dividida em quatro etapas: eliminar, reduzir, aumentar e criar. Na primeira etapa, as empresas devem identificar quais aspectos do mercado existente podem ser eliminados. Na segunda etapa, é preciso reduzir os aspectos que não são essenciais para o cliente. Na terceira etapa, a empresa deve identificar quais aspectos podem ser aumentados, como por exemplo, aumentar a eficiência ou a qualidade do produto ou serviço. Na última etapa, a empresa deve criar algo novo, que atenda às necessidades do cliente de uma forma inovadora e diferenciada.
	
<img src="https://imgur.com/6EUaRfB.png"></img>


### Proposta de Valor e Value Proposition Canvas

O Value Proposition Canvas é uma ferramenta valiosíssima de planejamento estratégico que ajuda as empresas a definir o valor que oferecem aos clientes. Ele consiste em um framework que objetiva certificar a compatibilidade do produto em desenvolvimento para com o mercado. Isso é feito por meio da modelagem da relação entre o valor agregado a tal produto e as expectativas inerentes ao público alvo - que por sua vez permite certificar qual o valor criado pelo produto, e qual o público alvo para tal produto.
![Canvas Value Proposition](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/ddbd6d63-189d-4b06-bde6-e03deb96d5a2)


### Matriz de Risco

Matriz de Risco é uma ferramenta utilizada para identificar e avaliar os riscos de um projeto, atividade ou processo. É uma representação visual que ajuda a empresa a identificar quais são os riscos mais significativos e a priorizar ações para gerenciá-los.

Com base na avaliação dos riscos, a matriz de risco permite identificar quais são os riscos mais críticos e, portanto, exigem maior atenção e ação imediata, e a partir disso, é possível definir um plano de gerenciamento de riscos, que inclui ações preventivas e de mitigação para minimizar os impactos dos riscos identificados.
![Matriz de Risco](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/6f4ef38c-f419-4167-891d-a3acf4f608e5)


### Análise financeira do projeto

O primeiro ponto a ser considerado é o tipo de projeto. Levando em conta o atual, não existe nenhum valor de gasto projetado pelo fato de ser um projeto interno da Dell em parceria com a faculdade Inteli. Contudo, é possível analisar o custo do projeto e quais serão as vantagens ao concluí-lo.

O custo principal do projeto é a hospedagem de toda a plataforma, sendo assim, é necessário pensar na quantidade de acessos à plataforma como uma base para o cálculo do custo. A Dell possui 175.000 funcionários ao redor do mundo, e tendo um cenário otimista ao pensar na aceitação da plataforma, pode-se dizer que cerca de 10% dos colaboradores acessarão a plataforma ao mesmo tempo. Com isso, é necessário utilizar instâncias com alto poder de processamento como a EC2 M5.

O preço de utilização por demanda é de aproximadamente 1 dólar/hora, então minimamente ao mês o gasto será de 720 dólares, porém caso ocorra um aumento do tráfego, a demanda por máquinas pode ser maior, consequentemente aumentando o custo.

Além disso, é necessário considerar o custo da hospedagem do banco de dados, também do modelo m5. O preço de utilização dessa categoria é de 0,42 dólar/hora, considerando em uma perspectiva mensal, o gasto seria de 300 dólares.

Para tudo funcionar de maneira contínua, é necessário alocar horas de um funcionário com conhecimento em AWS no projeto, caso ocorra algum erro na aplicação na produção, ou seja requisitada alguma manutenção.

É possível estimar também o gasto com a equipe que desenvolverá toda a engenharia.

Lembrando que os valores presentes na planilha são referentes a um gasto mensal, com a possibilidade de visualização na coluna valor mensal.

OBS: Há um custo indireto relacionado a perda de talentos, tendo em vista o fato de que a cada um funcionário perdido, há um grande investimento de dinheiro e tempo gastos em tal. O qual nossa aplicação também ajuda, pois nós garantimos uma maior retenção desses.
![Análise financeira](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/53466f2a-bf02-40ad-a309-b3854add02a3)



## Mapeamento do processo

<img src="https://imgur.com/SQMtxEg.png"></img>


## Descritivo da Solução

Descrição da solução a ser desenvolvida (o que é, quais principais funcionalidades, como usar) . Caso ainda não esteja definida a solução na Sprint 1, o faça assim que possível.


### Objetivos

#### Objetivos do projeto
O objetivo do projeto é desenvolver uma plataforma web/mobile com arquitetura implementada em nuvem(AWS), tendo como finalidade recomendar conteúdos sobre tecnologia para funcionários da Intranet da Dell. Esta aplicação proporcionará aos usuários o conhecimento de diversas áreas da tecnologia que são do interesse do mesmo, possibilitando a incrição em tópicos de temas específicos e recomendando novos aprendizados que se relacionam com o perfil do usuário.

#### Objetivos gerais
Dentre os objetivos gerais do projeto, podemos citar: O aprendizado de novas tecnologias e insights por meio de uma interface amigável, que não passe a tensão de um ambiente de trabalho. Com o uso de IA, é possível analisar os tópicos que o usuário possui mais interesse, e a partir disso é possível fazê-lo ter mais opções que são compatíveis com o interesse do mesmo, fidelizando o colaborador ao sistema de forma que ele possua interesse de aprender no tempo livre.

#### Objetivos específicos
Recomendação de projetos que terão adesão pelo usuário, tendo como base o perfil do mesmo;
Visualização do perfil com tags e sistema de gamificação;
Criação de Projetos e de conteúdos por parte do usuário.

### Justificativa

Descrever o tipo de arquitetura escolhida, sua justificativa, como deverá ser utilizada e quais os benefícios que ela proporciona.


## Partes Interessadas 

Descrever os principais stakeholders envolvidos no projeto e seus papéis.


# Requisitos

Esta seção é importante porque permite que os desenvolvedores entendam claramente o que é esperado do software e quais serão as restrições e desafios enfrentados durante o desenvolvimento. Além disso, permite que os usuários finais saibam se o software atende às suas expectativas e se está adequado ao seu ambiente de trabalho.

A seção de requisitos do sistema é atualizada constantemente durante o ciclo de desenvolvimento do software, garantindo que todas as necessidades e especificações estejam sempre atualizadas.


## Requisitos Funcionais
Esta seção da documentação do software fornece uma descrição detalhada dos requisitos do sistema. Ela inclui informações sobre as funcionalidades esperadas do software, as restrições e limitações do sistema e outras especificações relevantes.

| Código   |Descrição do Requisito                          | Tipo                  |Grupo                 |Prioridade        |
|----------|------------------------------------------------|-----------------------|----------------------|------------------|
| RF01     | O sistema deve permitir o usuário acessar os dois feeds, de projeto e conteúdo| Funcional | Acessibilidade| HIGH |
| RF02     | O sistema deve permitir a criação de novos projetos| Funcional | Controle | HIGH |
| RF03     | O sistema deve permitir a edição das informações do projeto| Funcional | Controle | HIGH |
| RF04     | O sistema deve permitir a exclusão de projetos criados | Funcional | Controle | HIGH |
| RF05     | O sistema deve permitir os funcionários se inscreverem nos projetos| Funcional | Acessibilidade| HIGH |
| RF06     | O sistema deve permitir o líder do projeto aprovar ou reprovar um candidato| Funcional | Controle | HIGH |
| RF07     | O sistema deve permitir o responsável do projeto adicionar um co-responsável| Funcional | Funcionamento | MEDIUM |
| RF08     | O sistema deve permitir o usuário pesquisar os projetos e os conteúdos| Funcional | Acessibilidade | HIGH |
| RF09     | O sistema deve permitir o usuário efetuar login na plataforma| Funcional | Acessibilidade | HIGH |
| RF10     | O sistema deve permitir o usuário curtir os conteúdos que têm interesse| Funcional | Acessibilidade | MEDIUM |
| RF11     | O sistema deve permitir o usuário compartilhar conteúdos que tem interesse | Funcional | Acessibilidade | MEDIUM |
| RF12     | O sistema deve permitir o usuário filtrar os projetos por características específicas | Funcional | Acessibilidade | MEDIUM |
| RF13     | O sistema deve permitir os líderes do projeto visualizar o perfil dos usuários inscritos | Funcional | Acessibilidade | HIGH |
| RF14     | O sistema deve permitir os líderes criar e selecionar funções para o projeto | Funcional | Acessibilidade | HIGH |
| RF15     | O sistema deve permitir o cancelamento de um projeto pelo seu criador | Funcional | Acessibilidade | MEDIUM |
| RF16     | O sistema deve mostrar no perfil do usuário o histórico de projetos que ele realizou | Funcional | Acessibilidade | LOW |
| RF17     | O sistema deve enviar um email de aprovação do projeto para o gestor do líder do projeto | Funcional | Acessibilidade | HIGH |
| RF18     | O sistema deve fazer match entre os conteúdos curtidos pelo usuário e os projetos | Funcional | Acessibilidade | HIGH |
| RF19     | O usuário deve enviar notificação para o usuário sempre que alguém enviar um conteúdo para ela | Funcional | Acessibilidade | MEDIUM |
| RF20     | O sistema deve permitir o usuário publicar conteúdos na plataforma | Funcional | Acessibilidade | HIGH |
| RF21     | O sistema deve permitir os usuários denunciarem conteúdos impróprios na aplicação | Funcional | Acessibilidade | MEDIUM |
| RF22     | O sistema deve permitir o usuário responder um questionário com suas preferências | Funcional | Acessibilidade | HIGH |
| RF23     | O sistema deve fazer recomendações ao usuário de acordo com suas preferências | Funcional | Acessibilidade | HIGH |
| RF24     | O sistema deve permitir os usuários moderadores excluirem conteúdos denunciados | Funcional | Acessibilidade | HIGH |
	

## Requisitos não Funcionais

Descreve os recursos necessários para sua execução, os requisitos de segurança e privacidade.

| Código   |Descrição do Requisito                          | Tipo                  |Grupo                 |Prioridade        |
|----------|------------------------------------------------|-----------------------|----------------------|------------------|
| RNF0 | O sistema deve ser fluído e rápido com tempo de resposta de 3,5 seg, 99% | Não Funcional | Performance | HIGH
| RNF1 | O sistema deve ser intuitivo ao usuário | Não Funcional | Usabilidade | MEDIUM
| RNF2 | O sistema deve seguir as normas LGPD | Não Funcional | Segurança | HIGH
| RNF3 | O sistema deve permitir apenas o responsável fazer alterações no seu projeto | Não Funcional | Controle | HIGH
| RNF4 | O sistema deverá ter alta disponibilidade, 99% | Não Funcional | Disponibilidade | HIGH
| RNF5 | O sistema não apresentará informações de cunho privativo aos seus usuários | Não Funcional | Segurança | HIGH
| RNF6 | O sistema deve receber aprovação do gestor do criador do projeto para ficar disponível | Não Funcional | Implementação | HIGH
| RNF7 | A interface do sistema deve ser desenvolvida em inglês | Não Funcional | Implementação | HIGH
| RNF8 | O sistema deve ser alocado na nuvem da AWS | Não Funcional | Implementação | HIGH
| RNF9 | O sistema deve ter proteção contra acesso não autorizado | Não Funcional | Segurança | HIGH
| RNF10 | O sistema deve ser capaz de rodar em diferentes plataformas com mínimas alterações | Não Funcional | Implementação | HIGH
| RNF11 | O sistema deve ser fácil de se manter e atualizar | Não Funcional | Manutenção | HIGH
| RNF12 | O sistema deve manter a integridade da criação dos projetos | Não Funcional | Segurança | MEDIUM
| RNF13 | O sistema deve ter a capacidade de aguentar o uso dos usuários | Não Funcional | Atuação | HIGH

## Perfis de Usuários 

A seção de perfil de usuário da documentação de software é responsável por descrever instruções detalhadas sobre o uso de cada opção e recursos relacionados ao perfil do usuário, garantindo uma experiência fácil e intuitiva para o usuário final.


## Casos de Uso

A seção de casos de uso da documentação de software é uma parte crucial que descreve as funcionalidades 
do software e como elas serão utilizadas pelos usuários. Aqui, são listados todos os cenários possíveis de uso do software, incluindo as ações que o usuário pode realizar, as interações com o sistema e os resultados esperados. Os casos de uso são descritos em detalhes, incluindo a descrição do objetivo da funcionalidade, as entradas de dados, as ações do usuário e os resultados esperados. Além disso, também são incluídos os critérios de aceitação, que são os padrões que o software precisa atender para ser considerado como funcionando corretamente.

<img src="https://imgur.com/GfgmuM9.png"></img>


<center>
[template-documento3](../img/template-documento3.jpg)

Exemplo de Diagrama de Casos de Uso
</center>


# Arquitetura do Sistema

Atualizar a cada revisão/atualização da arquitetura, mantendo todas as 3 versões no documento..

## Versão 1
<img src="https://imgur.com/1nSwzws.png"></img>

## Versão 2
<img src="https://imgur.com/UkTlRNK.png"></img>

## Versão 3
<img src="https://imgur.com/8TOtHhX.png"></img>

## Fluxo de Dados
<img src="https://imgur.com/txCjN9e.png"></img>


## Arquitetura de Mensageria 
	
### Diagramas 
![Arquitetura de Mensageria](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/1ffbc105-9b0c-4f53-8c90-a6a5081c4691)
![Fluxo de Dados - Diagrama de sequência básico](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/8bb13a97-b7bb-4811-bda7-bdcf2c0a1294)

Proteção contra ataques DDoS:
O Load Balancer é o principal atuante nessa parte, pois com as configurações corretas, ele consegue aplicar técnicas capazes de lidar com os ataques. Seguem alguma aplicações:
1- Filtragem de tráfego: Configurar com a finalidade de bloquear IPs e solicitações suspeitas.
2- Distribuir o tráfego: Como o Load Balancer tem a capacidade de aumentar a quantidade de servidores, é possível distribuir essa grande quantidade de tráfego em diversos servidores.
3- Serviços externos: Caso o Load Balancer não consiga lidar com ataques DDoS utilizando todas as técnicas já citadas, é possível dialogar com serviços externos para que o DDoS seja neutralizado.

### Mensageria de Recomendação

Serviço de Recomendação Por Mensageria
https://colab.research.google.com/drive/1xVku2jFYw0W5UWsWsSARY36lfVhGFta9?usp=sharing


	
### Vantagens e Desvantagens Arquitetura de Mensageria 

Vantagens:
1- Comunicação de forma assíncrona: A comunicação de forma assíncrona permite que os diferentes componentes de um sistema distribuído se comuniquem sem a necessidade de disponibilidade a todo tempo. Possibilitando a interação de forma flexível, exemplificando, caso um serviço esteja fora do ar, não ocorrerá um erro total do sistema ao requisitar esse serviço.
2- Individualidade: Os componentes se comunicam via mensagem, sem a necessidade de informações específicas um sobre o outro.
3- Mensagens Escaláveis: Caso perceba-se uma demanda alta no sistema de mensagens, é possível mudar a quantidade de servidores e nós no processamento da informação.

Desvantagens:
1- Complexidade de implementação: Ao implementar em casos avançados, necessita-se de mais critérios de qualidade, como tratamento de erros, garantia de rapidez, etc. Sendo assim, é necessária boa organização e competência vinda de uma equipe para a implementação desse tipo de sistema.
2- Sobrecarga do sistema: Pelo fato da comunicação ser assíncrona, caso um serviço não estiver disponível, aquela informação ficará aguardando até poder ser enviada, com isso, pode ocorrer uma sobrecarga de todo o sistema pelo fatos dessas mensagens estarem exigindo processamento. O que pode ocasionar em demora nas requisições, alta latência, etc.


| Vantagens                                | Desvantagens                                        |
|------------------------------------------|-----------------------------------------------------|
| Desacoplamento                           | Complexidade na implementação e manutenção do sistema de mensageria. Exige conhecimento técnico especializado.|
| Resiliência                              | A latência pode ser maior do que em sistemas de comunicação direta.|
| Escalabilidade                           | Custos de infraestrutura podem ser significativos, principalmente para sistemas com alta demanda.|
| Entrega garantida                        |                                                       |
| Maior confiabilidade                     | Pode haver problemas de segurança se o sistema de mensageria não for bem configurado e gerenciado.|
| Integração fácil com diferentes tecnologias| A falha no sistema de mensageria pode afetar todo o sistema, incluindo o desempenho e a disponibilidade.|
| Flexibilidade                            | A falta de padronização pode dificultar a interoperabilidade com outros sistemas e tecnologias. |
| Melhora no desempenho                    | As mensagens podem ser perdidas se o sistema de mensageria não for configurado adequadamente. |
|                                     | Possibilidade de aumento da complexidade do sistema como um todo.|

<center>
[template-documento4](../img/template-documento4.jpg)

Exemplo de Diagrama de Arquitetura
</center>


# UX e UI Design

Aborda o design e a funcionalidade da aplicação ou sistema em questão. Ela fornece informações sobre como o software é projetado para ser fácil de usar e intuitivo para os usuários. Nesta seção, deve ser possível encontrar descrições detalhadas sobre as principais características e recursos da interface do usuário, como botões, menus, ícones e outros elementos que são utilizados para facilitar a interação do usuário com o software. Além disso, são fornecidos exemplos de como as funcionalidades do software são acessadas e usadas pelos usuários, incluindo informações sobre os passos necessários para realizar tarefas específicas. Esta seção também aborda as principais preocupações de UX, como acessibilidade, usabilidade, consistência e simplicidade. São apresentados exemplos de como o software é projetado para atender às necessidades dos usuários com diferentes tipos de habilidades e recursos.

## Benchmark e Revisão de Design Systems
	
O benchmarking é uma técnica de análise comparativa que permite identificar as melhores práticas em um determinado campo, em relação aos concorrentes ou empresas de referência. No caso de um Design System, o benchmarking pode ser útil para avaliar a eficácia e a qualidade do sistema, além de obter insights sobre como melhorá-lo.
Análise comparativa entre o Design System utilizado no projeto e outros dois a serem selecionados pelo grupo – i.e. [Google Material Design](https://m3.material.io/), [IBM Carbon Design System](https://carbondesignsystem.com/), [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/), [Adobe Spectrum](https://spectrum.adobe.com/), [Microsoft Fluent Design System](https://www.microsoft.com/design/fluent/#/), [Atlassian Design System](https://atlassian.design/), [DSGov (Governo Federal)](https://www.gov.br/ds/home), [Shopify Polaris](https://polaris.shopify.com/), [Cloudscape](https://cloudscape.design/) etc. – com o objetivo de tornar mais assertivo o uso do Design System demandado para o projeto.
Alguns critérios de análise são: 
- Os DSs analisados são unificados, universais, pregnantes e conversacionais? Por quê?
- Em qual nível hierárquico (nascente, básico, integrado, distribuído e otimizado) cada um deles se encontra?
- Quais os pontos de fragilidade e força de cada um deles?

| Critério      | Dell                               | Adobe                              | Google                             |
|---------------|------------------------------------|------------------------------------|------------------------------------|
| Unificado     | Embora o Design System da Dell tenha uma identidade visual consistente, alguns elementos podem parecer redundantes ou excessivamente semelhantes em diferentes partes do sistema, como os ícones e a paleta de cores. Além disso, a documentação pode ser mais clara e organizada, para facilitar a referência cruzada entre os elementos.|  O Spectrum apresenta uma identidade coesa, com elementos visuais que se referenciam uns aos outros de forma clara e organizada. A documentação é bem estruturada e fácil de seguir, o que ajuda na criação de designs unificados. |  O Material 3 apresenta uma identidade coesa e consistente, com elementos que se referenciam uns aos outros de forma clara e organizada. Os elementos visuais do sistema parecem ter sido criados de forma integrada, formando uma experiência coesa. |
| Universal     | Embora o sistema tenha sido projetado para ser acessível e compreensível, algumas das convenções de interface podem não ser imediatamente óbvias para usuários menos experientes, como a utilização de filtros em uma lista de produtos. Além disso, a documentação poderia incluir mais exemplos de uso para ajudar os desenvolvedores a entender como aplicar o DS em diferentes contextos.| O Spectrum é construído a partir de convenções gerais que o tornam acessível e compreensível de forma espontânea. As diretrizes para tipografia, cores e layout são claras e simples de seguir, permitindo que os usuários possam usar o sistema sem grandes dificuldades.| O Material 3 é construído a partir de convenções gerais que o tornam acessível e compreensível de forma espontânea. As regras de layout e a tipografia são simples e fáceis de seguir, permitindo que usuários iniciantes ou menos experientes em design possam entender rapidamente como usar o sistema.|
| Icônico/pregnante|O Design System da Dell não parece ter uma identidade visual ou discurso claro que diferencie a marca de outras marcas do mesmo setor. Embora a Dell tenha um logotipo reconhecível, a aplicação dele no Design System pode parecer genérica e sem personalidade. Seria interessante explorar mais elementos de design que ajudem a expressar a personalidade da marca e seus valores.| O Spectrum é facilmente reconhecível e justificável, definindo um discurso claro sobre seus propósitos. A aparência geral do sistema é sofisticada e profissional, o que contribui para que o Spectrum seja facilmente identificável como um sistema da Adobe. |O Material 3 é facilmente reconhecível e justificável, definindo um discurso claro sobre seus propósitos. A estética do Material Design já é bastante conhecida e, com a nova versão, o sistema parece mais sofisticado e distinto, com uma aparência moderna e atraente.| 
| Conersacional/dinâmico   | Embora a documentação inclua alguns exemplos de interações dinâmicas, como animações e componentes interativos, o sistema geralmente parece um pouco estático e inflexível. Seria interessante explorar mais formas de incentivar a comunicação e a colaboração entre usuários, por exemplo, por meio de componentes de chat ou fóruns de discussão.|O Spectrum permite criar ambientes sociais digitais e híbridos que estimulam formação, letramento e comunicação na e pela diversidade. O sistema apresenta um conjunto de componentes flexíveis que podem ser usados para criar designs interativos e dinâmicos, contribuindo para uma experiência envolvente para os usuários.| O Material 3 permite criar ambientes sociais digitais e híbridos que estimulam formação, letramento e comunicação na e pela diversidade. Com as novas diretrizes para a criação de componentes dinâmicos, o Material 3 parece estar mais preparado para lidar com interações mais complexas e animações mais suaves, criando um ambiente mais envolvente para os usuários.| 
	
## Wireframes

Telas de baixa fidelidade das áreas do usuário, conectados, demonstrando a diagramação e o fluxo de navegação. Exemplos: home, login, dashboards etc. Em cada tela colocar: cabeçalho, rodapé, barra lateral, área de conteúdo.
	
Aqui você deve colocar o link para o wireframe e colocar as imagens geradas na sequência correta do fluxo de navegação. 
	
Recursos e funcionalidades de inclusão e acessibilidade já devem estar previstos nesse protótipo. 
	
O grupo deve demonstrar que a UI: (1) se adequa a diferentes contextos e necessidades do usuário, já que se trata de uma aplicação mobile, (2) é transparente, ou seja, atualiza o usuário de forma clara e precisa sobre cada processo que ocorre no sistema, (3) oferece feedbacks (visuais, textuais e, se aplicável, sonoros e táteis) rápidos/imediatos, (4) implementa linguagem amigável e personalizável para constituir uma experiência (4a) coerente com a identidade da marca e (4b) intuitiva e fluida, mitigando possíveis erros do usuário.
	
link para wireframe: https://www.figma.com/file/jKjtj5vSs9huTVwh0fj8cL/M2-G4?type=design&node-id=1%3A2&t=soqkiayCKvyOWzt0-1

## Design de Interface  - Seleção de Estilos
	
Refere-se ao design visual, cores, tipografia, imagens, logotipos, ou seja, os elementos visuais que compõem o produto. Aqui você deve colocar o link para seu documento de guia de estilos e também colar as capturas de tela destes estilos.
![M2-G4](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/3924c154-f9f7-449a-b707-a979b5442f76)


# Projeto de Banco de Dados

Documento contendo diagrama de entidades e relacionamentos do banco de dados


## Modelo Conceitual

O modelo conceitual deve garantir uma conexão com a realidade. Os 4 tipos de conexões com a realidade são:
conceitos
atributos
identificações
associações
O Modelo Entidade-Relacionamento - MER
entidades e tipos de entidades
atributos e tipos de atributos
relacionamentos e tipos de relacionamentos
<img src="https://imgur.com/cQE0bqc.png"></img>


## Modelo Lógico 

O modelo lógico de banco de dados é uma representação abstrata e simplificada dos dados armazenados no sistema. É utilizado para entender como os dados são relacionados e para garantir a integridade e consistência dos dados armazenados. Incluir  uma descrição detalhada das tabelas, campos e relações presentes no modelo lógico de banco de dados. Também serão apresentadas as regras de negócio e as restrições aplicadas aos dados para garantir a integridade e a consistência dos dados armazenados.
<img src="https://imgur.com/iNalh0P.png"></img>

# Pipeline de dados 
![Arq  Pipeline de dados](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/73edd380-c37d-45d4-b38e-c37d69337334)

# Testes de Software

## Teste Unitário

<img src="https://imgur.com/tvplcJG.png"></img>


## Teste de Integração

Link ou imagem da tabela com dados organizados dos testes realizados.
![image](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/d44d3baa-b544-4b11-8437-d827fa40aa2e)
Os testes que falaharam passarão por correção de erro. 

## Teste de Regressão

Link ou imagem da tabela com dados organizados dos testes realizados.


## Teste de Usabilidade 
| Funcionalidade a ser testada | Caso de teste                                        | Passo-a-passo e condições de reprodução do teste                                                                                                                          | Usabilidade | Resultado | Observações                                      |
|-----------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-----------|-------------------------------------------------|
| Logar                       | Funcionário logar na plataforma                    | Funcionário preenche as lacunas com seu email de cadastro e senha e clica em entrar                                                                                          | Alta        | Sucesso   |                                                 |
| Criar projeto               | Funcionário criar um projeto                       | Funcionário clica em criar projeto, preenche todos os campos de informações necessários e clica em criar, e recebe um email de confirmação                                  | Alta        | Sucesso   |                                                 |
| Criar conteúdo              | Funcionário postar um conteúdo                     | Funcionário vai na aba de criar conteúdo, preenche todas as informações e clica em postar                                                                                  | Alta        | Sucesso   |                                                 |
| Editar projeto              | Funcionário editar o projeto que criou             | Funcionário vai na aba de criar projetos, preenche as informações e cria o projeto. Após isso, ele acessa a aba de projetos e edita o projeto que criou                    | Baixa       | Falha     | Funcionalidade não implementada                 |
| Adicionar/remover vagas     | Exibição da seção de vagas do projeto              | Dentro da inscrição do projeto aparece a opção de criar as vagas do projeto                                                                                                | Alta        | Sucesso   |                                                 |
| Adicionar/remover vagas     | Campos de adicionar a quantidade de pessoas por vaga | Depois de criar as vagas do projeto a pessoa selecionará a quantidade de vagas                                                                                            | Alta        | Sucesso   |                                                 |
| Adicionar/remover vagas     | Funcionário remover a vaga criada                  | Depois de criar as vagas do projeto a pessoa removerá uma vaga que não acha mais necessária                                                                                | Baixa       | Falha     | Funcionalidade não implementada                 |
| Adicionar/remover Tags      | Funcionário adicionar as tags                      | Ao criar um projeto ou um conteúdo, o funcionário preenche a lacuna de adicionar tags                                                                                        | Alta        | Sucesso   |                                                 |
| Adicionar/remover Tags      | Funcionário remover as tags                        | Ao criar um projeto ou um conteúdo, o funcionário remove as tags desnecessárias                                                                                              | Baixa       | Falha     | Funcionalidade não implementada                 |
| Visualizar projeto          | Funcionário visualizar os projetos disponíveis     | Ao acessar o Feed, o usuário clica em "Projects", visualiza todos os projetos disponíveis e consegue clicar nos projetos para ver mais detalhes                              | Alta        | Sucesso   |                                                 |
| Visualizar conteúdo         | Funcionário visualizar os conteúdos disponíveis    | Ao acessar o Feed, o usuário clica em "Contents", visualiza todos os conteúdos postados e consegue clicar nos conteúdos para ver mais detalhes                                | Alta        | Sucesso   |                                                 |
| Aplicar no projeto          | Funcionário aplicar para um projeto que deseja participar | Ao acessar o Feed, o usuário clica em "Projects", acessa o projeto que tem interesse e clica em "Subscribe". Após isso, ele responde o questionário e clica novamente
| Denunciar conteúdo          | Funcionário reportar/denunciar o conteúdo           | Ao acessar o Feed, o funcionário clica "Contents" e acessa os conteúdos disponíveis. Após isso, ele clica em um conteúdo, na parte superior direita da tela entra nos 3 pontinhos e clica em "Report" | Alta        | Sucesso   |                 |
| Avaliar conteúdo            | Funcionário avaliar o conteúdo                      | Ao acessar o Feed, o funcionário clica "Contents" e acessa os conteúdos disponíveis. Após isso, ele clica em um conteúdo e na parte supior da tela consegue escolher com quantas estrelas deseja avaliar esse conteúdo | Alta        | Sucesso   |                 |


## Teste de Funcionalidade 
| Funcionalidade a ser testada (ou requisito) | Casos de teste                                                    | Resultado | Observações                                      |
|---------------------------------------------|------------------------------------------------------------------|-----------|-------------------------------------------------|
| Criar projeto                               | O sistema permite a criação de projetos                           | Sucesso   |                                                 |
| Remoção de projeto                          | O sistema permite a remoção de projetos criados                   | Falha     |                                                 |
| Inscrição para projeto                      | O sistema permite que funcionários se inscrevam em qualquer projeto | Sucesso   |                                                 |
| Inscrição para projeto                      | O sistema deve permite que os funcionários entrem em mais de um projeto | Sucesso   |                                                 |
| Líderes definem requisitos do projeto       | O sistema permite que os líderes do projeto definam a data do projeto | Sucesso   |                                                 |
| Líderes definem requisitos do projeto       | O sistema permite que os líderes do projeto aprovem ou não um funcionário que se inscreveu em seu projeto | Falha     | Funcionalidade ainda não está implementada     |
| Líderes definem requisitos do projeto       | O sistema permite definir um limite de vagas ao criar um projeto | Sucesso   |                                                 |
| Sistema de feedback                         | O sistema permite que os líderes do projeto deixem um feedback ao candidato sobre o resultado da inscrição | Falha     | Funcionalidade ainda não foi implementada       |
| Busca por projetos com uso de filtro        | O sistema permite a filtragem de projetos por características específicas | Falha     | Funcionalidade ainda não foi implementada       |
| Busca de conteúdos com uso do filtro         | O sistema permite o usuário filtrar os conteúdos por características especifícas | Falha     | Funcionalidade ainda não foi implementada       |
| Requisitos implementados pelo líder do projeto | O sistema permite que os líderes do projeto definam quais funções terão no projeto | Sucesso   |                                                 |
| Requisitos implementados pelo líder do projeto | O sistema permite definir a quantidade de vagas para cada função em um projeto | Sucesso   |                                                 |
| Mostrar projetos finalizados                | O sistema permite mostrar os projetos já finalizados               | Falha     | Funcionalidade ainda não está integrada         |
| Cancelar projeto                            | O sistema permite o cancelamento do projeto caso ele não tenha atingido o número mínimo de candidatos | Falha     |                                                 |
| Status do projeto                           | O sistema permite o usuário visualizar todos os projetos com vagas em aberto | Sucesso   |                                                 |
| Status do projeto                           | O sistema permite o usuário visualizar todos os projetos que estão em andamento | Sucesso   |                                                 |
| Visualizar perfil                           | O sistema mostra no perfil dos usuários os projetos realizados por esse usuário | Falha     | Funcionalidade não está concluída                |
| Visualizar perfil                           | O sistema permite a visualização do perfil dos funcionários        | Sucesso   | Não está concluída mas é possível visualizar o perfil |
| Curtir conteúdos de interesse               | O sistema permite o usuário curtir um conteúdo que se interessou   | Sucesso   |                                                 |
| Compartilhamento de conteúdos               | O sistema deve permitir o usuário compartilhar conteúdos que tem interesse | Falha     | Funcionalidade não está implementada             |
| Denúncia de conteúdos                | O sistema deve permitir os usuários denunciarem conteúdos impróprios na aplicação | Sucesso   |                                                 |
| Denúncia de conteúdos                | O sistema deve permitir os usuários moderadores excluírem conteúdos denunciados | Sucesso   |                                                 |
| Recomendações de projetos e conteúdos | O sistema deve fazer recomendações ao usuário de acordo com suas preferências  | Falha     | Funcionalidade ainda não está implementada     |

## Teste de API 

Link ou imagem da tabela com dados organizados dos testes realizados.

### Teste Mensageria de Recomendação

<img src="https://i.imgur.com/oRRoBfN.png"></img>
<img src="https://i.imgur.com/hgktqgu.png"></img>
![teste_mensageria](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/bfc4dd3c-9a52-4b68-be0a-a90a42c761e1)
![test_recomendation](https://github.com/2023M6T3-Inteli/Grupo-4/assets/99264876/e99f7838-d3e2-43ad-85a3-e443bb4a7964)


# Documentação da API
Link para acesso a documentação da API: http://localhost:3001/api-docs/#/

<img src="https://i.imgur.com/xA9LEQH.png"></img>
<img src="https://i.imgur.com/eUSAZxL.png"></img>


# Manual do Usuário

Fornecer instruções detalhadas sobre como usar o software corretamente. É uma ferramenta valiosa para ajudar os usuários a compreender as funções do software, instalar o software, configurar as preferências do usuário, entre outras tarefas. O manual do usuário geralmente inclui screenshots, animações e outros recursos visuais para tornar a experiência do usuário mais clara e intuitiva. Além disso, ele também pode incluir informações sobre solução de problemas, dicas e truques, bem como informações de contato para suporte técnico. É importante que a seção de manual do usuário seja atualizada frequentemente para garantir que os usuários tenham acesso à informação mais recente e precisa sobre o software.

 ## 1. Login 

 Para acessar a plataforma, é necessário conectar ao seu acesso da Dell e preencher os campos email e senha como mostrado a seguir:

A figura abaixo exibe a tela de login da plataforma.

 <img src="https://i.imgur.com/qUV655A.png"></img>
<img src="https://i.imgur.com/cSxGLSL.png"></img>

### 1.1 Formato Login

O login apresenta dois campos de inserção de dados, sendo eles programados para receberem formatos específicos de textos. No primeiro campo, "email", é necessário que o preenchimento seja realizado com a parte local, símbolo @ e nome do domínio utilizado.
O campo reservado para a senha, pode ser preenchido (após o primeiro acesso e o cadastramento do usuário), mediante a preferência do usuário. Os tipos de caracteres suportados, são:
1) Texto; 
2) Números;
3) Caractere especial.
   
 ## 2. Pagina Inicial

 Após o login concluído, a página inicial da plataforma é aberta, nela o usuário irá visualizar os cards de conteúdos com algumas informações, e ao clicar irá poder visualizar mais informações do conteúdo, na parte superior da tela temos os filtros que podem ser aplicados para procurar algum conteúdo específico e na lateral, o sidebar para navegação entre as telas. 

 <img src="https://i.imgur.com/10e1Qj9.png"></img>

 ## 3. Sidebar
 Na lateral das páginas temos o sidebar que serve como uma forma de navegação entre as páginas, ela fica inicial fechada, mas pode se expandir e mostrar o nome das páginas tornando mais fácil a navegação e fechada ocupa pouco espaço na tela. Temos as páginas, Home, Feed, Creation, Profile, Ranking e o Logout.

 <img src="https://i.imgur.com/lE6TIs4.png"></img>


 
 ## 4. Pagina de visualizar projetos
 Para acessar os projetos, utilize a navbar para clicar em feed, depois em projects:
 
<img src="https://i.imgur.com/Mrxfq1i.png"></img>
 
Depois de clicar o usuário será direcionado para a página a seguir: Onde ele encontrara projetos criados por outros usuarios 
 <img src="https://i.imgur.com/pgtqwX0.png"></img>

Depois de escolher é possivel acessar os projetos

<img src="https://i.imgur.com/VTA9PvK.png"></img>



### 4.1 Formulario de inscrição
<img src="https://i.imgur.com/VTA9PvK.png"></img>


 ## 5. Pagina de visualizar conteudo
 <img src="https://i.imgur.com/Mrxfq1i.png"></img>
 <img src="https://i.imgur.com/10e1Qj9.png"></img>
 <img src="https://i.imgur.com/sW7mfxI.png"></img>


 ## 6. Perfil
<img src="https://i.imgur.com/bHtCRqr.png"></img>
<img src="https://i.imgur.com/0QF1Toi.png"></img>
<img src="https://i.imgur.com/gXrQiXb.png"></img>
 
 ## 7. Ranking
 <img src="https://i.imgur.com/zJc6Yvk.png"></img>
 <img src="https://i.imgur.com/B4KCDVh.png"></img>

 
 ## 8. Criar Projeto
 <img src="https://i.imgur.com/mU80D6n.png"></img>
<img src="https://i.imgur.com/VnVe9NK.png"></img>

 
 ## 9. Criar Conteudo 
  <img src="https://i.imgur.com/mU80D6n.png"></img>
   <img src="https://i.imgur.com/CwuI12G.png"></img>
   
[Manual do usuário - mód 6.pdf](https://github.com/2023M6T3-Inteli/Grupo-4/files/11857809/Manual.do.usuario.-.mod.6.pdf)


# Referências

Toda referência citada no texto deverá constar nessa seção, utilizando o padrão de normalização da ABNT - ABNT NBR 10520). As citações devem ser confiáveis e relevantes para o trabalho. São imprescindíveis as citações dos sites de download das ferramentas utilizadas, bem como a citação de algum objeto, música, textura ou outros que não tenham sido produzidos pelo grupo, mas utilizados (mesmo no caso de licenças gratuitas, royalty free ou similares).
Sugerimos o uso do sistema autor-data para citações.


# Apêndice 

Os apêndices representam informações adicionais que não caberiam no documento exposto acima, mas que são importantes por alguma razão específica do projeto. 
