const name = "minu",
age = 20,
gender = "male";

const sayHi = (name: string, age, gender): void => {
    console.log(`hello ${name}, you are ${age} and ${gender}`);
} 

sayHi(name, age, gender); // js에서는 argument 다 안 넣어도 됨.

var fir_dt = [1,2,3,4],
now=30;

const date_cal = (fir_dt : number[], now: number) : void => {
    const date = now - fir_dt[2];
    console.log(`You've been dating with her(him) for ${date} days!`);
} 

date_cal(fir_dt, 40);

export {}; // 이 파일이 모듈이 된다는 뜻 
 