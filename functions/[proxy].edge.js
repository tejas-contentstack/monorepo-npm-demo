import jwt from '@tsndr/cloudflare-worker-jwt';

export default async function handler(request, context) {
    console.log("I'm from edge")
    return fetch(request);
}
