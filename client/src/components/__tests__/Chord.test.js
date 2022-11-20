import ChordLogic from '../../components/Chart_Components/Logic/ChordLogic'

  
describe('Check the Chord Chart Logic', () => {
    
    it('expect the expected algorithm result to calculated result', () => {
        
        const Chord_data =[["Colombo","Galle",100],["Colombo","Kandy",20],["Kandy","Galle",120],["Colombo","Rathnapura",50],["Kandy","Rathnapura",89],["Rathnapura",'Kurunegala',300],["Galle","Rathnapura",70],['Kurunegala',"Jaffna",300]];
        const result = { "Colombo": [ -1.5707963267948966, [ "Galle", 100 ], [ "Kandy", 20 ], [ "Rathnapura", 50 ] ], "Kandy": [ -0.33093039868605556, [ "Galle", 120 ], [ "Rathnapura", 89 ] ], "Rathnapura": [ 0.28630720465508486, [ "Kurunegala", 300 ] ], "Galle": [ -1.1125850055372815, [ "Rathnapura", 70 ] ], "Kurunegala": [ 1.6582458077146502, [ "Jaffna", 300 ] ] };
        const Result_logic = ChordLogic(Chord_data)  ;    
        expect(Result_logic).toEqual(result)
    });
    it('expect the expected algorithm result to calculated result', () => {
        
        const Chord_data = [['mars','venus',100],['venus','mars',25],['venus','earth',299],['earth','mars',200],['mars','jupiter',500],['jupiter','venus',200],['venus','mercury',100],['mercury','venus',50],['earth','jupiter',200],['jupiter','mercury',800],['venus','jupiter',100],['neptune','pluto',200],['pluto','mars',800],['satum','neptune',100],['satum','venus',130],['earth','pluto',200],['mercury','earth',300],['neptune','venus',200],['venus','neptune',300],['pluto','neptune',400]];
        const result = { "mars": [ -1.5707963267948966, [ "venus", 100 ], [ "jupiter", 500 ] ], "venus": [ -0.6879025420379649, [ "mars", 25 ], [ "earth", 299 ], [ "mercury", 100 ], [ "jupiter", 100 ], [ "neptune", 300 ] ], "earth": [ 0.12924961320783535, [ "mars", 200 ], [ "jupiter", 200 ], [ "pluto", 200 ] ], "jupiter": [ 0.7806893965454114, [ "venus", 200 ], [ "mercury", 800 ] ], "mercury": [ 1.7586640504300126, [ "venus", 50 ], [ "earth", 300 ] ], "neptune": [ 2.4378131156276526, [ "pluto", 200 ], [ "venus", 200 ] ], "pluto": [ 3.0897962182173866, [ "mars", 800 ], [ "neptune", 400 ] ], "satum": [ 3.9591070216703654, [ "neptune", 100 ], [ "venus", 130 ] ] };
        const Result_logic = ChordLogic(Chord_data)      
        expect(Result_logic).toEqual(result)
    });
})

 // 
 