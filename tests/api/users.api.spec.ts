
import{test,expect} from '../../src/fixtures/apifixtures'


const TOKEN=process.env.API_TOKEN;

let AUTH_Header={
    Authorization:`Bearer ${TOKEN}`,
};


let userid:number;
test.describe.serial('running e2e go rest crud api',()=>{


    test('Get API- get all users', async({apiHelper})=>{
        let response=await apiHelper.get('/public/v2/users',AUTH_Header);
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Post API- create new user', async({apiHelper})=>{
        let userData={
            name:'Manish Kumar',
            email:'manish34@gmail.com',
            gender:'male',
            status:'active'
        };

        let response=await apiHelper.post('/public/v2/users',userData, AUTH_Header );
        expect(response.status).toBe(201);
        userid=response.body.id;
        console.log ('Newly created user id  is: ',userid);
    });
});
