import * as S from './styles'

const Main = ({ title = 'Trad', description = 'Controle suas operações' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logotipo da Trad" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de um desenvolvedor de frente para a tela do computador"
    />
  </S.Wrapper>
)

export default Main
