


const app =require('../../app');
const request = require('supertest')

describe('register',()=>{
    it("Checking the register for valid input,should give 'ok'",async()=>{
        const res=await request(app).post('/api/registerUser/register').send({firstName:"Vinul",lastName:'Fernando',email:'n@gmail.com',password:'1234'});
        expect(res.body.status).toBe("ok");
    });
    it("checking for an empty input,should give 'error' ",async()=>{
        const res=await request(app).post('/api/registerUser/register').send({});
        expect(res.body.status).toBe('error');
    });
    it("checking for an already registered email,should give 'error' ",async()=>{
        const res=await request(app).post('/api/registerUser/register').send({firstName:"Vinul",lastName:'Fernando',email:'vinu@gmail.com',password:'1234'});
        expect(res.body.status).toBe('error');
    });
});