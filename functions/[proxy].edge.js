export default async function handler(request) {
    const url = new URL(request.url)
    const hostname = url.hostname
    if (hostname === 'monorepo-npm-demo.contentstackapps.com' ) {
        const response = await fetch(request)
        
        const newResponse = new Response(response.body, response);
        console.log("response")
        console.log(response)
      // Add a custom header with a value
      newResponse.headers.append(
        "X-Robots-Tag",
        "noindex"
      );

      console.log("newResponse");
      console.log(JSON.stringify(newResponse));

      return newResponse;
      }
    
      if (hostname === 'domain-number-2.contentstackapps.com') {
        return new Response('Access to this site is blocked.', { status: 403 })
      }
    console.log('Edge log identifier: contentfly-management-background-jobs-service-dev-deploy:1ff7e98cc1b0-1b0f3dc9d82f:run-counter-1')
    return fetch(request);
}