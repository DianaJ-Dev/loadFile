const apiValidate = async (email, password) => {
    try {
        return await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
      } catch (err) {
        console.error('An error occurred. Please try again.');
      }
}

export const login = async (email, password) => {
    const response = await apiValidate(email, password); 
    const data = await response.json()
    return response.ok ? (localStorage.setItem('authToken', data.token), true) : false;
} 

export const logout = () => {
    localStorage.removeItem("authToken");
};
  
export const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
};