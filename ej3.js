let dividir = (a,b) => {
    
    if (b!=0) {
        return a/b;
    }else {
        throw new Error("Los divisor no debe ser 0");
    }

};