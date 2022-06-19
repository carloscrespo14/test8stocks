

export default class HttpHandler {

    getMethod(endpoint: string, symbols: string[] | string) {
        
        const  url= `${process.env.REACT_APP_APCA_BASE_URL}${endpoint}${symbols[0] ? '?symbols='+  symbols.toString() : '?symbols='+symbols}`
        
        console.log(url)
      

        /* return new Promise(

            async (resolve, reject) => {

                await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then( res => res.json())
                .catch( error => reject(error))
                .then( response => resolve(response))
            }
        ); */
    }

}