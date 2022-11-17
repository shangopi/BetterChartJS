import Check from "../../pages/ShowData/Logic/Check";

describe('Checking the showdata check function',()=>{

    it('expect the expected algorithm result to be the output boolean', () => {
        
    const arrayLabel=['Name','age','City','data'];
    const arrayData =[['Vinul','24','Colombo','3'],['Sachin','30','Galle','s'],['Nishani','40','Rathmalana','10'],['Sumith','10','Kurunegala','p']];
    const variable='Name';
    const bool=Check(variable,arrayLabel,arrayData)
    expect(bool).toEqual(false)
    });

    it('expect the expected algorithm result to be the output boolean', () => {
        
        const arrayLabel=['Name','age','City','data'];
        const arrayData =[['Vinul','24','Colombo','3'],['Sachin','30','Galle','s'],['Nishani','40','Rathmalana','10'],['Sumith','10','Kurunegala','p']];
        const variable='age';
        const bool=Check(variable,arrayLabel,arrayData)
        expect(bool).toEqual(true)
        });
    
    it('expect the expected algorithm result to be the output boolean', () => {
    
        const arrayLabel=['Name','age','City','data'];
        const arrayData =[['Vinul','24','Colombo','3'],['Sachin','30','Galle','s'],['Nishani','40','Rathmalana','10'],['Sumith','10','Kurunegala','p']];
        const variable='data';
        const bool=Check(variable,arrayLabel,arrayData)
        expect(bool).toEqual(false)
        });
    

})