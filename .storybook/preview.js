//import GlobalStyles from '../src/styles/global'
/**
 * Por conta de uma configuracao feita no webpack do
 * storybook, podemos incluir tudo a partir da pasta src,
 * ao invés de fazer como as duas linhas de cima
 */
import GlobalStyles from 'styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
