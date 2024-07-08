export default async function handler(request, context) {
  const url = new URL(request.url);
  const hostname = url.hostname;

  if (hostname === 'monorepo-npm-demo.contentstackapps.com') {
    const response = await fetch(request);
    console.log("before responseBody")
    const modifiedResponse =  new Response(response.body, response)
    console.log("post modifiedResponse");

    modifiedResponse.headers.set("X-Robots-Tag", "noindex");
    
    return modifiedResponse;
    // try {
    //   const response = await fetch(request);

    //   // Clone the response for modification
    //   const newResponse = new Response(response.body, response);

    //   // Add a custom header with a value
    //   newResponse.headers.append("X-Robots-Tag", "noindex");

    //   return newResponse;
    // } catch (error) {
    //   console.log('Error fetching response:', error);
    //   // Handle the error here (e.g., return a generic error response)
    //   return new Response('An error occurred.', { status: 500 });
    // }
  }

  if (hostname === 'domain-number-2.contentstackapps.com') {
    return new Response('Access to this site is blocked.', { status: 403 })
  }

  console.log('Edge log identifier: contentfly-management-background-jobs-service-dev-deploy:1ff7e98cc1b0-1b0f3dc9d82f:run-counter-1')
  return fetch(request);
}