export default async function handler(request) {
    if (hostname === 'monorepo-npm-demo.devcontentstackapps.com') {
        const response = await fetch(request)
        const newHeaders = new Headers(response.headers)
        newHeaders.set('X-Robots-Tag', 'noindex')

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
      }
    
    console.log('Edge log identifier: contentfly-management-background-jobs-service-dev-deploy:1ff7e98cc1b0-1b0f3dc9d82f:run-counter-1')
    return fetch(request);
}