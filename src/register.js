import logo from './logo.svg';
import './App.css';
import '../src/login.css';

function App() {
  return (
    <div className="content">
      <div className="header">
        Welcome to Sproutpay. 
      </div>
      <div className="app-container">
        <div className="register-text">Register</div>
        <div className="form">
            <label htmlFor='email'>Email</label>
          <div className="form-group">
            <input type='email' name='email' placeholder='Input your email' />
          </div>
            <label htmlFor='password'>Password</label>
          <div className="form-group">
            <input type='password' name='password' placeholder='Input your password' />
          </div>
            <label htmlFor='submit'></label>
          <div className="footer">
            <input type='submit' name='submit' />
          </div>
        <div className="to-sign-up">Alraedy have an account? <span>Sign In</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
