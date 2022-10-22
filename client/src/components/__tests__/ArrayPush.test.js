import ArrayPush from "../../pages/ShowData/Logic/ArrayPush";

describe('Checking the showdata arrayPush function',()=>{

    it('expect the expected algorithm result to be the output array', () => {
        
    const arrayLabel=['Name','age','City','data'];
    const arrayData =[['Vinul','24','Colombo','3'],['Sachin','30','Galle','s'],['Nishani','40','Rathmalana','10'],['Sumith','10','Kurunegala','p']];
    const variable='Name';
    const arr=ArrayPush("x",arrayLabel,arrayData,"Name")
    expect(arr).toEqual({"Name":["Vinul","Sachin","Nishani","Sumith"]})
    });
    it('expect the expected algorithm result to be the output array', () => {
        
        const arrayLabel=['Name','age','City','data'];
        const arrayData =[['Vinul','24','Colombo','3'],['Sachin','30','Galle','s'],['Nishani','40','Rathmalana','10'],['Sumith','10','Kurunegala','p']];
        const variable='Name';
        const arr=ArrayPush("y",arrayLabel,arrayData,["Name","age"])
        expect(arr).toEqual({"Name":["Vinul","Sachin","Nishani","Sumith"],"age":["24","30","40","10"]})
        });
    it('expect the expected algorithm result to be the output array', () => {
    
        const arrayLabel=['Name','age','City','data'];
        const arrayData =[['Vinul','24','Colombo','3'],['Sachin','30','Galle','s'],['Nishani','40','Rathmalana','10'],['Sumith','10','Kurunegala','p']];
        const variable='Name';
        const arr=ArrayPush("A",arrayLabel,arrayData,["Name","City","age"])
        expect(arr).toEqual([["Vinul",'Colombo','24'],["Sachin",'Galle','30'],["Nishani",'Rathmalana','40'],["Sumith",'Kurunegala','10']])
        });
})