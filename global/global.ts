
export function getState () {
    let now = new Date()
    let currentHour = now.getHours();

    if(currentHour > 8 && currentHour <= 12){
        return "Programando..."
    }else if(currentHour > 12 && currentHour <= 14){
        return "Comiendo y tomando un descansop..."
    }else if(currentHour >14 && currentHour <= 18){
        return "Programando y escuchando musica..."
    }else if(currentHour > 18 && currentHour <= 19){
        return "Yendo a casa..."
    }else if(currentHour > 19 && currentHour <= 20){
        return "Cenando..."
    }else if(currentHour > 20 && currentHour <= 23){
        return "Jugando y escuchando musica..."
    }else if(currentHour > 23 && currentHour <= 8){
        return "Durmiendo Zzz..."
    }

    console.log(currentHour)

}

export const actualState = getState();
export const appVersion = "v1.2.0"
