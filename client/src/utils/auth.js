// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Decode the token to get the user's information, including the userId
    const decodedToken = decode(idToken);

    // Saves user token and userId to localStorage
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('userId', decodedToken.data._id); // Store the userId

    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('userId'); // Clear the userId as well

    // This will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
