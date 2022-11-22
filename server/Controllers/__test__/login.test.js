


const app =require('../../app');
const request = require('supertest')

describe('login',()=>{
    it("Checking the login for valid input,should give 'ok'",async()=>{
        const res=await request(app).post('/api/loginUser/login').send({email:'hns@gmail.com',password:'1234'});
        expect(res.body.status).toBe("ok");
    });
    it("checking for a non existing email as input,should give 'error' ",async()=>{
        const res=await request(app).post('/api/loginUser/login').send({email:'hns123@gmail.com',password:'1234'});
        expect(res.body.status).toBe('error');
    });
    it("checking for a wrong password,should give 'error' ",async()=>{
        const res=await request(app).post('/api/loginUser/login').send({email:'vinu@gmail.com',password:'1234567'});
        expect(res.body.status).toBe('error');
    });
});