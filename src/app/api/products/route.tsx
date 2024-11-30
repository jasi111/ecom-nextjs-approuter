import { cookies, headers } from 'next/headers';
export async function GET() {

    const data = [{
        id: 1,
        title: 'T shirt'
    }] //localhost/api/products

    // Getting Cookies
    const cookieList = cookies();
    const tokenCookie = cookieList.get('authToken');//authToken is setted in broswer>inspect>application>coookies section
    console.log('tokenCookie', tokenCookie)
//localhost/api/products

    //Getting Header
    const headerList = headers();
    console.log('Authorization', headerList.get('Authorisation'))//Authorization is setted in postman>Header section>give header name Authorization and value xyz (for example)
    return Response.json({ data })
}
// api url in postman 
// localhost/api/products 
// Method Get


export async function POST(request: Request) {
    const prod = await request.json();

    const data = [{
        id: 1,
        title: 'T shirt',
        data: prod,
    }]
    const cookieList = cookies();
    const tokenCookie = cookieList.get('authToken');//authToken is setted in broswer>inspect>application>coookies section
    console.log('tokenCookie', tokenCookie)

    return Response.json({ data })
}

//   api url in postman
// localhost/api/products
// Method Post
// In Body > raw ---> type following for testing post method:
// {'title:'watch'}