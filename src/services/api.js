import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {'Accept': 'application/json'} 
    
    //ii spunem ca va fi de tip json
})

const getCoinsMarkets = (pageNo) => {
    return instance.get('/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page='+pageNo)
}
const getCoinById = (id)=> {
    return instance.get ("/coins/"+id)
}

export {getCoinsMarkets, getCoinById} //e un obiect si il trecem intre {}, nu e by default