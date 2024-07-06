export default async function handler(request) {
  const url = new URL(request.url)
  const hostname = url.hostname
  if (hostname === 'monorepo-npm-demo.contentstackapps.com' ) {
      /**
       * Response properties are immutable. To change them, construct a new
       * Response and pass modified status or statusText in the ResponseInit
       * object. Response headers can be modified through the headers `set` method.
       */
      // const originalResponse = await fetch(request);
      // const responseHeaderEntries = originalResponse.headers.entries()
      // let responseHeaders = new Headers(responseHeaderEntries);
      // responseHeaders.set("X-Robots-Tag", "noindex");
      
      // const response = new Response(originalResponse.body, {
      //   ...originalResponse,
      //   headers: responseHeaders,
      //   status: originalResponse.statusCode,
      //   statusText: originalResponse.statusText,
      // });
    let response;
    try {
      response = await fetch(request)
  
      // Clone the response so that it's no longer immutable
      const newResponse = new Response(response.body, response)
      
      // Add a custom header with a value
      newResponse.headers.append("X-Robots-Tag", "noindex")
      
    } catch (error) {
      console.log('reaching here with an error message');
      console.log(error);      
    }
      
      
      console.log('reaching here without an error message2')
      return response; // Explicitly return the modified response
    }
  
    if (hostname === 'domain-number-2.contentstackapps.com') {
      return new Response('Access to this site is blocked.', { status: 403 })
    }
  console.log('Edge log identifier: contentfly-management-background-jobs-service-dev-deploy:1ff7e98cc1b0-1b0f3dc9d82f:run-counter-1')
  return fetch(request);
}

const request = new Request({
  method: "GET",
  url: "monorepo-npm-demo.contentstackapps.com"
})

const response = await handler(request);