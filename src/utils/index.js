export const login = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({
                "username": username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        // console.log("here", data.username);
        setter(data.username);

    } catch (error) {
        console.log(error)
    }
}