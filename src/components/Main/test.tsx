import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the trad heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /trad/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
