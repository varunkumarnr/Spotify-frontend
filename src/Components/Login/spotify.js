export const authEndPoint = "https://accounts.spotify.com/authorize"; //login using spotify API authotication 
const redirectUri = "http://localhost:3000/"; // come back to local app
const clientid = "603f7bb9c4d74850b98ca1f58931a1e5";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
export const getTokenFromResponse = () => {
    return 
}
export const loginURL = `${authEndPoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;