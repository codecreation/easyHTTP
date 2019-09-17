const http = new easyHTTP();

//Get POSTS

http.get('https://jsonplaceholder.typicode.com/posts');

//Post post...

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//create posts
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err){
//       console.log(err);
//     }else{
//       console.log(post);
//     }
// })

//put request
// http.put('https://jsonplaceholder.typicode.com/posts/10', data, function(err, post) {
//   if(err){
//         console.log(err);
//       }else{
//         console.log(post);
//       }
// });

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/10', function(err, response) {
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
})
