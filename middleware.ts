import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    if (request.url === 'http://localhost:3000/') {
        return NextResponse.redirect(new URL('/mahdi', request.url))
    }
}
 
// export const config = {
// }