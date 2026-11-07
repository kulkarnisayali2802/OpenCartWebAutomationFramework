import{test,expect} from '@playwright/test';


let OAUTH_CONFIG={
    tokenURL:'https://accounts.spotify.com/api/token',
    clientID:process.env.OAUTH_CLIENT_ID!,
    clientSecret:process.env.OAUTH_CLIENT_SECRET!,
    grantType:process.env.GRANT_TYPE!
}

let accessToken: string;

test.beforeEach('POST-generate access token', async({request})=>{

    let response=await request.post(OAUTH_CONFIG.tokenURL, {
        form:{
            grant_type:OAUTH_CONFIG.grantType,
            client_id:OAUTH_CONFIG.clientID,
            client_secret:OAUTH_CONFIG.clientSecret
            
        }

    })


    expect(response.status()).toBe(200);
    let jsonResponse=await response.json();
    console.log('Token response is', jsonResponse);
    accessToken=jsonResponse.access_token;
    console.log('Access token is', accessToken);
    
})

test('get album data test', async({request})=>{
let baseURL='https://api.spotify.com';
let endpoint='/v1/albums/4aawyAB9vmqN3uQ7FjRGTy';

let response=await request.get(`${baseURL}${endpoint}`, {
    headers:{
        Authorization:`Bearer ${accessToken}`
    }})

    console.log ('Response status is', response.status());
    let jsonResponse=await response.json();
    console.log('Album data is', jsonResponse);
})

