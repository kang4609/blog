import Post from './models/post';

export default function createFakeData(){
    const posts = [...Array(40).keys()].map(i => ({
            title : `포스트#${i}`,
            body:'avaScript has ranked as the most popular language in the world by the StackOverflow survey for the seventh year in a row. With the rising popularity of JavaScript, it is clear that it is the most used language for coding frontend applications. It is interesting to note that visitors to websites, lose interest or leave your website if the content doesn’t load within two seconds. The two seconds benchmark is hard to keep up with and that means you need to optimize your JavaScript code for better performance. In this blog post, we will learn some quick tips that you can follow to keep you JavaScript code concise and improve the overall performance of your application. Alright, let’s dive in. Tip 1: Minimize accessing the DOM Accessing the DOM (Document Object Model) directly comes with a cost. If your application happens to access the DOM elements many times, you can instead access it once and use it as a local variable. Remember that, if you remove this value from the DOM, then the variable needs to be set to null, to prevent memory leaks.',
            tags : ['가짜','데이터'],
        })
    );

    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });


}