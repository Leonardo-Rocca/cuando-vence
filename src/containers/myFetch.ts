let headers: {
    'Content-Type': 'application/json',
   // 'Access-Control-Allow-Origin': '*',
    "Authorization": "key=AAAAUacr8Jo:APA91bFZCh2qkqqVfy53DbJmAMIyQtncmWnvXpZ-OgWXSwupNgDeKE-AEbEZUM4GIFq3R4LFalqGPE69q-zUZhakksOGYvoksTz2zQaXPGl033GcGh-aHHMZZBkkPVnd5XIlr12ZlJLG" ,

};

type Methods = 'DELETE' | 'POST' | 'GET' | 'PUT' | 'PATCH' | 'OPTIONS'

export const myFetch = (fetchUrl:string , method: Methods, body?: any) => {
    const props: { method: Methods, credentials?: "include", headers: any, body?: any } = {
        method: method,
        headers: new Headers(headers),
    };

    if (body)
        props.body = JSON.stringify(body);
    return fetch(fetchUrl,props);
};