const { render, screen } = require("@testing-library/react")
const { PostCard } = require(".")
const { postCardPropsMock } = require("./mock")

const props = postCardPropsMock

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    // const {debug} = render(<PostCard post={mock} />)
    // debug()
    render(<PostCard post={props} />)

    expect(screen.getByRole('img', {name: /Titulo/i })).toHaveAttribute('src', 'img/img.png')
    expect(screen.getByRole('heading', {name: /titulo/i})).toBeInTheDocument()
    expect(screen.getByText('body')).toBeInTheDocument()
  })
})