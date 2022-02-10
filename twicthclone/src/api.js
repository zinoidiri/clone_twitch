import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID" : "zwcqlrk0sc52evbermldc6llbd2l0g",
        "Authorization": "Bearer thg3o0mukl1xp6zk9jyoybp38j9sc2"
    }
})

/*
    redirection = 'http://localhost:3000/'
    lien auth = https://id.twitch.tv/oauth2/authorize?client_id=zwcqlrk0sc52evbermldc6llbd2l0g&redirect_uri=http://localhost:3000/&response_type=token
*/

export default api;