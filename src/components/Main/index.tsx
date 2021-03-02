import * as s from './styles'

const Main = () => (
  <s.Wrapper>
    <s.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <s.Title>React Avançado</s.Title>
    <s.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </s.Description>
    <s.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela do computador código"
    />
  </s.Wrapper>
)

export default Main
