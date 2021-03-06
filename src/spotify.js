export const authEndPoint = "https://accounts.spotify.com/authorize"; //login using spotify API authotication 
const redirectUri = "https://spotify-clone-816a1.web.app/"; // come back to local app
const clientid = "603f7bb9c4d74850b98ca1f58931a1e5";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
export const getTokenFromResponse = () => {
    return window.location.hash.substring(1).split("&").reduce((initial,item) =>{
       let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
}
export const loginURL = `${authEndPoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;