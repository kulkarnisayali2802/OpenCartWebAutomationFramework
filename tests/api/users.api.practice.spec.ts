import{test,expect, APIResponse} from '@playwright/test';

const AUTH_TOKEN={
    Authorization:'Bearer 50f887906f98ad806367b3d33c5dcb34350f87086ece79b3fb9487835348531e'
};

test('Get user API test', async({request})=>{

    const response:APIResponse = await request.get('https://www.gorest.co.in/public/v2/users', {
        headers:AUTH_TOKEN
    });

    console.log(response.status());
    console.log(response.url());

    // const jsonBody=await response.json();
    // console.log(jsonBody);


})

test('Post user API test', async({request})=>{


    let userData={
        name:'John11 Doe11',
        email:'abc11sqs@gmail.com',
        gender:'male',
        status:'active'
    }

    let user=await request.post('https://gorest.co.in/public/v2/users', {
        headers:AUTH_TOKEN,
        data:userData
    });

    console.log(user.status())

});




