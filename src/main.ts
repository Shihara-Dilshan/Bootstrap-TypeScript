import implementor from './components/mine';

class main{

    static main():void{
        let s1 = new implementor("shihara" , 23);
        s1.getInt();
        s1.run();
    }
    

}

main.main();