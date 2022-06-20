

export default class HttpHandler {

    getMethod(endpoint: string, symbols: string[] | string) {
        
        const  url= `${process.env.REACT_APP_APCA_BASE_URL}${endpoint}${symbols[0] ? '?symbols='+  symbols.toString() : '?symbols='+symbols}`;

        const requestHeaders: any = { 
            'Accept': 'application/json',
            'APCA-API-KEY-ID': process.env.REACT_APP_APCA_API_KEY_ID,
            'APCA-API-SECRET-KEY': process.env.REACT_APP_APCA_API_SECRET_KEY
        };
      
        return new Promise(

            async (resolve, reject) => {

                await fetch(url, {
                    method: 'GET',
                    headers: requestHeaders
                })
                .then( res => res.json())
                .catch( error => reject(error))
                .then( response => resolve(response))
            }
        );
    }

}