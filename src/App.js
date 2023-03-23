// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  state={
    counter: 0, 
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      },
    ]
  }

  timeoutUpdate = null

  componentDidMount() {
    this.handleTimeout()
  }

  componentDidUpdate() {
    // clearTimeout(this.timeoutUpdate)
    this.handleTimeout()
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, counter } = this.state
    posts[0].title = 'O titulo mudou'

    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter + 1 })
    }, 2000)
  }

  render(){
    const { posts, counter } = this.state
    console.log(posts)

    return(
      <div className='App'>
          <h1>{counter}</h1>
          {posts.map(post => (
            <div>
              <h1 key={post.id}>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default App;
