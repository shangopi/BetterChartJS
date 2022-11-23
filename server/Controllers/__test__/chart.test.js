
const app =require('../../app');
const request = require('supertest')

describe('chart',()=>{
    it("Checking the user exists for the given email and other data,should give 'ok'",async()=>{
        const res=await request(app).post('/api/chart/saveChart').send({email:'hns@gmail.com',title:'testchart',chart:'bar',data:['fkfk']});
        expect(res.body.status).toBe("ok");
    });
    it("Checking the user exists a non existing email ,should give'error'",async()=>{
        const res=await request(app).post('/api/chart/saveChart').send({email:'90@gmail.com',title:'testchart',chartType:'bar',data:['fkfk']});
        expect(res.body.status).toBe("User Error");
    });
    it("Checking the user exists for the given email but empty data,should give 'error'",async()=>{
        const res=await request(app).post('/api/chart/saveChart').send({email:'hns@gmail.com'});
        expect(res.body.status).toBe("chart error");
    });
});