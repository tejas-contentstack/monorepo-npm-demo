export default async function handler(request) {
    const url = new URL(request.url)
    const hostname = url.hostname
    if (hostname === 'monorepo-npm-demo.contentstackapps.com' ) {
        const response = await fetch(request)
        const newHeaders = new Headers(response.headers)
        newHeaders.set('X-Robots-Tag', 'noindex')
        console.log("response")
        console.log(response)
        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
      }
    
      if (hostname === 'domain-number-2.contentstackapps.com') {
        return new Response('Access to this site is blocked.', { status: 403 })
      }
    console.log('Edge log identifier: contentfly-management-background-jobs-service-dev-deploy:1ff7e98cc1b0-1b0f3dc9d82f:run-counter-1')
    return fetch(request);
}