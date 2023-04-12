const { render, screen } = require("@testing-library/react")
const { TextInput } = require(".")
const { default: userEvent } = require("@testing-library/user-event")

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue={'testando'} placeholder={'type your search'} />)

    const input = screen.getByPlaceholderText(/type your search/i)
    expect(input).toBeInTheDocument()

    expect(input.value).toBe('testando')
  })

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} placeholder={'type your search'} />)

    const input = screen.getByPlaceholderText(/type your search/i)
    const value = 'o valor'
    userEvent.type(input, value)
    expect(input.value).toBe(value)
    expect(fn).toHaveBeenCalledTimes(value.length)
  })
})