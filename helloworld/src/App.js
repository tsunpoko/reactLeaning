import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

function getGreeting(user) {
  if (user) {
    return <h1 >Hello, {formatName(user)}.</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://cdn.pixabay.com/photo/2022/10/04/07/23/alien-7497513_1280.png'
}

const element = (
  <div>
    {getGreeting(user)}
    <img src={user.avatarUrl} />
  </div>
)

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div className="UserInfo-name">
          {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}></UserInfo>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// function Clock(props) {
//   return (
//     <div>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('You clicked submit.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true};
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={false} />
        {button}
      </div>
    )
  }

}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

const numbers = [1, 2, 3, 4, 5]

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
  const content = props.posts.map((post) =>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
  )
  return (
    <div>
      {sidebar}
			<hr />
			{content}
    </div>
  )
}

class NameForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: ''}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

class EssayForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'Please write an essay about your favorite DOM element.'
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		alert('An essay was submitted: ' + this.state.value)
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Essay:
					<textarea value={this.state.value} onChange={this.handleChange} />
					<input type="submit" value="Submit" />
				</label>
			</form>
		)
	}
}

class FlavorForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: 'coconut'};
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite flavor:
					<select value={this.state.value} onChange={this.handleChange}>
					<option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
					</select>
				</label>
				<p></p>
				{this.state.value}
			</form>
		)
	}
}

class Reservation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<form>
				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guest
					<input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
				</label>
			</form>
		)
	}
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>
	}
	return <p>The water would not boil.</p>
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)
	if (Number.isNaN(input)) {
		return ''
	}

	const output = convert(input)
	const rounded = Math.round(output * 1000) / 1000
	return rounded.toString()
}

class Calculator extends React.Component {
	constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'};
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature})
		console.log(this.state)
	}

	handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
		console.log(this.state)
  }

	render() {
		const scale = this.state.scale
		const temperature = this.state.temperature
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
		console.log('celsius: ', celsius)
		console.log('fahrenheit: ', fahrenheit)
		return (
			<div>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange} />
					<BoilingVerdict
						celsius={parseFloat(celsius)} />
			</div>
		)
	}
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
	
	handleChange(e) {
    // this.setState({temperature: e.target.value})
		this.props.onTemperatureChange(e.target.value)
  }

	render() {
		// const temperature = this.state.temperature
		const temperature = this.props.temperature
    const scale = this.props.scale
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
			</fieldset>
		)
	}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Sara"></Welcome>
        <Clock />
        <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        />
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page />
        <Form />
        <Toggle />
        <NumberList numbers={numbers} />
				<Blog posts={posts} />
				<NameForm />
				<EssayForm />
				<FlavorForm />
				<Reservation />
				<Calculator />
        {element}
      </header>
    </div>
  );
}

export default App;
