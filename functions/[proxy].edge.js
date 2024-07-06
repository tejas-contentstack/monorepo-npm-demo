export default async function handler(request) {
  const url = new URL(request.url)
  const hostname = url.hostname
  if (hostname === 'monorepo-npm-demo.contentstackapps.com' ) {
      /**
       * Response properties are immutable. To change them, construct a new
       * Response and pass modified status or statusText in the ResponseInit
       * object. Response headers can be modified through the headers `set` method.
       */
      const originalResponse = await fetch(request);
      const responseHeaderEntries = originalResponse.headers.entries()
      let responseHeaders = new Headers(responseHeaderEntries)
      responseHeaders.headers.append("X-Robots-Tag", "noindex");
      
      const response = new Response(originalResponse.body, {
        ...originalResponse,
        headers: responseHeaders
      });
      return response; // Explicitly return the modified response
    }
  
    if (hostname === 'domain-number-2.contentstackapps.com') {
      return new Response('Access to this site is blocked.', { status: 403 })
    }
  console.log('Edge log identifier: contentfly-management-background-jobs-service-dev-deploy:1ff7e98cc1b0-1b0f3dc9d82f:run-counter-1')
  return fetch(request);
}