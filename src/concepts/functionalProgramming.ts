export default function functionalProgramming() {
// Functional Programming by LUNO Dev
    const text1 = "Hello World!"
    const fn = (x: string):string => "text0" + x
// starting the countdown...
    fn(text1); // 🚀🚀🚀


// programmazione funzionale
    const showStringResult = (stringValue: string): void => console.log(stringValue);
    const inputValue: string = "Hello world!";

// 1. funzione di “prima classe”
    const firstClassFunc = (inputValue: string): string => "Sono una funzione di \"prima classe\" e il mio input è: " + inputValue;
// stampare il risultato
    const funcResult: string = firstClassFunc(inputValue);
    showStringResult(funcResult);

// 2. funzione di “ordine superiore” (riceve una funzione come parametro)
    const hightOrderFunc = (
        funcAsParam: (inputValue: string) => void,
        inputValue: string
    ): void => {
        const message = "Sono una funzione di \"ordine superiore\" e ti posso dire: " + inputValue;
        funcAsParam(message);
    }
// stampare il risultato
    hightOrderFunc(showStringResult, inputValue);


// 3. funzione pura
    type Aereo = { // https://accateo.medium.com/typescript-qual-%C3%A8-la-differenza-tra-type-e-interface-37eaacac077e
        passeggeri: number
    }
    const aereo: Aereo = {
        passeggeri: 0,
    }
    const comunicarePasseggeriAbordo = (quantita: number) => {
        // 3A. scegli l'immutabilità
        const voloAereo = structuredClone(aereo);
        voloAereo.passeggeri = quantita;

        console.log("aereo: ",aereo)
        console.log("voloAereo", voloAereo)
    }
// 3B. è idempotente (questa funzione sempre ti darà lo stesso risultato)
    comunicarePasseggeriAbordo(110);

// 4. "Imperativa" vs. "Dichiarativa (o Funzionale)"
// quante volte si ripete il numero tre?
    const numeri: Array<number> = [1,5,3,4,3,3,3,5];
    const numeroScelto = 3;

// programmazione “imperativa” (come fare?)
    let volteCheSiRipete = 0;
// A. facciamo l'iterazione
    for(const numero of numeri){
        // B. compariamo quando è uguale
        if (numero === numeroScelto) volteCheSiRipete++;
    }
// stampare il risultato
    console.log("volte che si ripete il numero tre con Prog Imperativa è –> ", volteCheSiRipete);

// programmazione “dichiarativa (o funzionale)" (cosa voglio?)
    volteCheSiRipete = numeri.filter((numero: number) => numero === numeroScelto).length;
// stampare il risultato
    console.log("volte che si ripete il numero tre con Prog Dichiarativa è –> ", volteCheSiRipete);
}
