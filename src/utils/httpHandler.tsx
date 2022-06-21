
/* 
    @HttpHandler class to define custome headers and request method to api
*/
export default class HttpHandler {

    /* 
        @getMethod: method to request data using fetch
        @requestHeaders: custom headers
    */

    getMethod(endpoint: string, symbols: string) {
        
        const  url= `${process.env.REACT_APP_APCA_BASE_URL}${endpoint}${'?symbols='  +  symbols.toString()}`;

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