import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Restaurant Management || Blog </title>
            </Helmet>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">My Blog</h1>
                <div className="text-gray-600">
                    <h2 className="text-xl font-semibold mb-2">Question 1: What is One way data binding?</h2>
                    <p>
                        One-way data binding is a concept commonly used in software development and user interface design to describe the flow of data from a source (such as a model or data variable) to a destination (such as a user interface element or view) in a unidirectional manner. In one-way data binding, changes in the source data are reflected in the destination, but not the other way around. This means that when the source data changes, it updates the destination, but changes in the destination do not affect the source.
                        <br />
                        1. Data flows from source to destination: When the source data changes, it triggers updates in the destination
                        <br />
                        2. Common in declarative UI frameworks: Declarative UI frameworks like React, Angular etc
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Question 2: What is NPM in node.js?</h2>
                    <p>
                        NPM stands for "Node Package Manager." It is a package manager for Node.js, which is a JavaScript runtime environment commonly used for building server-side applications and command-line tools. NPM is the default package manager for Node.js, and it plays a crucial role in the Node.js ecosystem.
                        <br />
                        1. Package Management: NPM allows developers to easily manage and install external libraries and dependencies
                        <br />
                        2.Scripts: NPM provides a way to define and run scripts for various tasks, such as building, testing, or starting a Node.js application.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Question 3: Different between Mongodb database vs mySQL database.</h2>
                    <p>
                        MongoDB and MySQL are both database management systems, but they are designed for different use cases and have significant differences in their data models and characteristics. Here are some key differences between MongoDB and MySQL:
                        <br />
                        1. Data Model: MongoDB is a NoSQL database, which means it uses a document-based data model. Data is stored in flexible, JSON-like BSON documents, and there is no need to define a fixed schema upfront. This allows for dynamic and schema-less data storage.
                        MySQL is a relational database management system (RDBMS) and follows a structured, table-based data model. Data is organized into tables with predefined schemas, consisting of rows and columns.
                        <br />
                        2. Use Cases: MongoDB is well-suited for applications that require flexible data schemas, such as content management systems, real-time analytics, and applications with rapidly evolving data requirements.
                        MySQL is a solid choice for applications that rely on complex, structured data and require strong transactional support, such as e-commerce platforms, financial applications, and traditional relational database use cases.
                        <br />
                        3. Scaling: MongoDB is designed for horizontal scalability. It can handle large amounts of data and high write loads by distributing data across multiple servers or clusters.
                        MySQL traditionally relies on vertical scaling, which means increasing the resources (CPU, RAM) of a single server. However, there are also ways to achieve horizontal scalability with MySQL through techniques like sharding.
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;