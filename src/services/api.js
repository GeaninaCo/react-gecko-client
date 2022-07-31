import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {'Accept': 'application/json'} //ii spunem ca va fi de tip json
})

const getCoinsMarkets =  ()=>{ //returneaza un promise si de aceea nu mai trecem async await
return instance.get ( `/coins/markets?vs_currency=EUR&order=market_cap_desc`) //calul de http catre Api
}

export {getCoinsMarkets} //e un obiect si il trecem intre {}, nu e by default