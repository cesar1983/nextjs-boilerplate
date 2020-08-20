import Main from 'components/Main'

type Props = {
  title: string
}

export default function Home({ title = 'Trad' }: Props) {
  return (
    <div>
      <Main />
    </div>
  )
}
