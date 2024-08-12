// src/app/_middleware.js (o src/app/api/orden/_middleware.js si quieres aplicarlo solo a esa ruta)

import { NextResponse } from 'next/server';

export function middleware(req) {
    const res = NextResponse.next();

    // Configura los encabezados CORS
    res.headers.set('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Manejo de preflight requests
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }

    return res;
}
