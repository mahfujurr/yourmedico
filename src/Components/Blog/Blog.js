import React from 'react';

const Blog = () => {
    return (
        <div className='  px-5 md:px-10 lg:px-24 text-center pb-12'>
            <h1 className='text-5xl   font-bold pt-5 mb-12'>
                Blog
            </h1>
            <h1 className='my-6 text-3xl font-bold '>
                Difference between SQL and NoSQL
            </h1>
            <p className='font-semibold'>
                When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.

                The Main Differences:

                Type –
                SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.


                Language –
                SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.

            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>
            <h1 className='my-6 text-3xl font-bold'>
                What is JWT, and how does it work?
            </h1>
            <p className='font-semibold'>
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>
            <h1 className='my-6 text-3xl font-bold'>
                What is the difference between javascript and NodeJS?
            </h1>
            <p className='font-semibold'>
                1. NodeJS :<br />
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                <br />
                2. JavaScript : <br />
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>

            <h1 className='my-6 text-3xl font-bold'>
                How does NodeJS handle multiple requests at the same time?
            </h1>
            <p className='font-semibold'>
                We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.

                How NodeJS handle multiple client requests?

                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </p>
        </div>
    );
};

export default Blog;