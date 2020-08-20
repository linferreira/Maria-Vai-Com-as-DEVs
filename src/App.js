import React from "react";

import LogoSerasa from "./images/serasa-white.svg";

import {
  Header,
  Title,
  Subtitle,
  Paragraph,
  Circle,
  CircleText,
  Serasa,
  Text,
  Footer,
  Box,
  BoxContainer,
  Collapse,
  C1,
  C2,
  Group,
  Program
} from "./styles";

function App() {
  const [buttonA, setButtonA] = React.useState(false);
  const [buttonB, setButtonB] = React.useState(false);
  const [buttonC, setButtonC] = React.useState(false);

  const groupA = {
    title: "Benefícios para Pessoas Físicas Cadastradas",
    options: [
      "Inserção no mercado de trabalho através de empresas parceiras",
      "Oportunidades de capacitação através de aulas de educação financeira e empreendedorismo",
      "Oportunidades de treinamentos para o mercado de trabalho",
      "Acesso a produtos e serviços dos MEI’s cadastrados, com descontos.",
    ],
  };

  const groupB = {
    title: "Benefícios para Micro e Pequenas Empresas Cadastradas",
    options: [
      "Incentivo fiscal de acordo com o número de pessoas em vulnerabilidade inscritas no programa e ligadas a empresa;",
      "Ajuda financeira para microempreendedores",
      "Aumento de taxa de crédito com maior prazo para pagamento",
      "Menores taxas de juros",
      "Parceria com o Governo Federal para obter ajuda com parte dos salários de futuros empregados cadastrados no Co.Labor",
      "Novas linhas de crédito, juros mais  baixos e opções de negociação de dívidas",
    ],
  };

  const groupC = {
    title: "Benefícios para Médias e Grandes Empresas Cadastradas",
    options: [
      "Incentivos ficais para empresas parceiras",
      "Apadrinhe e ajude microempreendedores",
      "Colabore com vagas de consultoria econômica e soluções para pessoas em vulnerabilidade (empregos, capacitação específica, polos de atendimento e formações especializadas)",
    ],
  };

  function openButtonA() {
    setButtonB(false);
    setButtonC(false);
    setButtonA(!buttonA);
  }

  function openButtonB() {
    setButtonA(false);
    setButtonC(false);
    setButtonB(!buttonB);
  }

  function openButtonC() {
    setButtonA(false);
    setButtonB(false);
    setButtonC(!buttonC);
  }

  return (
    <>
      <Header>
        <Title>
          <Group>
            <C1>Co.</C1>
            <C2>Labor</C2>
          </Group>

          <Program>Maria Vai Com as DEVs</Program>
        </Title>
      </Header>

      <Paragraph>
        <p style={{ fontSize: "20px", fontFamily: "arial" }}>
          &emsp;&emsp;<b style={{ fontSize: "40px" }}>D</b>esde o início da
          pandemia do novo Coronavírus, efeitos devastadores têm atingido a
          economia brasileira e nesse cenário encontram-se brasileiros que
          sofrem bem mais com tais efeitos: são as
          <b> pessoas em situação de vulnerabilidade</b>, apresentando um sério
          comprometimento de suas finanças pessoais. Paralelamente, o setor de
          <b> micro e pequenas empresas</b> também apresenta números alarmantes
          de pedidos de falência, demissão de funcionários e redução drástica
          seu faturamento mensal.
          <br></br>
          &emsp;&emsp;A proposta do{" "}
          <b style={{ fontSize: "25px" }}>Projeto Co.Labor</b> tem como
          público-alvo principal as pessoas em situação de vulnerabilidade. A
          situação de micro e pequenas empresas também é considerada pelo nosso
          produto ao promovermos uma ligação entre pessoas vulneráveis e micro e
          pequenas empresas, onde ambos se beneficiariam dessa relação. Com uma
          parcela de incentivo federal, as empresas receberiam não apenas
          incentivos fiscais, mas também parte do salário de seus funcionários
          ao comprometerem-se a gerar novas vagas de emprego para cidadãos, com
          especial ênfase em cidadãos em situação de vulnerabilidade e baixo
          nível de crédito.
        </p>
      </Paragraph>

      <Serasa>
        <Circle src={LogoSerasa} height={100} />

        <CircleText
          style={{ fontSize: "16px", fontFamily: "arial", margin: 0 }}
        >
          A <b>SERASA</b> é parte intrínseca ao Projeto ao disponibilizar
          informações de crédito e Score do bancos de dados com o intuito de
          estabelecer conexões compatíveis entre Pessoas Físicas em estado de
          vulnerabilidade e micro/pequenas empresas. Com a integração dos dados
          é possível detectar os estados brasileiros mais afetados pela Pandemia
          que são carentes de maior incentivo e também promover a sua
          recuperação econômica por meio da inserção de cidadãos no mercado de
          trabalho e manutenção de micro/pequenas empresas. Com a
          disponibilização de dados, médias e grandes empresas também podem
          escolher em quais áreas se dará a sua atuação, sempre com preferência
          aos municípios brasileiros mais afetados.
        </CircleText>
      </Serasa>

      <BoxContainer>
        <Box onClick={() => openButtonA()}>
          <Text style={{ fontSize: "20px", fontFamily: "arial" }}>
            PF - Pessoas Físicas
          </Text>
        </Box>
        <Box onClick={() => openButtonB()}>
          <Text style={{ fontSize: "20px", fontFamily: "arial" }}>
            PJ - Micro e Pequenas EMpresas
          </Text>
        </Box>
        <Box onClick={() => openButtonC()}>
          <Text style={{ fontSize: "20px", fontFamily: "arial" }}>
            PJ -Médias e Grandes Empresas
          </Text>
        </Box>
      </BoxContainer>

      {buttonA && (
        <Collapse>
          <Subtitle style={{ fontSize: "20px", fontFamily: "arial" }}>
            {groupA.title}
          </Subtitle>
          <div>
            {groupA.options.map((item) => (
              <li>
                <span style={{ fontSize: "20px", fontFamily: "arial" }}>
                  {item}
                </span>
              </li>
            ))}
          </div>
        </Collapse>
      )}

      {buttonB && (
        <Collapse>
          <Subtitle style={{ fontSize: "20px", fontFamily: "arial" }}>
            {groupB.title}
          </Subtitle>
          <div>
            {groupB.options.map((item) => (
              <li>
                <span style={{ fontSize: "20px", fontFamily: "arial" }}>
                  {item}
                </span>
              </li>
            ))}
          </div>
        </Collapse>
      )}

      {buttonC && (
        <Collapse>
          <Subtitle style={{ fontSize: "20px", fontFamily: "arial" }}>
            {groupC.title}
          </Subtitle>
          <div>
            {groupC.options.map((item) => (
              <li>
                <span style={{ fontSize: "20px", fontFamily: "arial" }}>
                  {item}
                </span>
              </li>
            ))}
          </div>
        </Collapse>
      )}

      <Footer>Feito com carinho - Equipe Co.Labor ♥</Footer>
    </>
  );
}

export default App;
