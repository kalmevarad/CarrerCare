const courses = [{
  title: "HTML & CSS Fundamentals",
  description: "Learn the core building blocks of web development, starting with HTML for structure and CSS for styling.",
  category: "Web Development",
  resources: [
    { url: "https://www.freecodecamp.org/learn/responsive-web-design/", type: "Free" },
    { url: "https://www.udemy.com/course/html-and-css-for-beginners-crash-course-learn-fast-easy/", type: "Paid" }
  ]
},
{
  title: "JavaScript Essentials",
  description: "Master the fundamentals of JavaScript, the programming language of the web.",
  category: "Web Development",
  resources: [
    { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-javascript-course/", type: "Paid" }
  ]
},
{
  title: "Responsive Web Design",
  description: "Learn to create web pages that look great on all devices using CSS media queries and frameworks.",
  category: "Web Development",
  resources: [
    { url: "https://web.dev/learn/design/", type: "Free" },
    { url: "https://www.udemy.com/course/responsive-web-design-tutorial-course-html5-css3-bootstrap/", type: "Paid" }
  ]
},
{
  title: "Version Control with Git",
  description: "Learn how to use Git and GitHub for version control and collaboration in web projects.",
  category: "Web Development",
  resources: [
    { url: "https://git-scm.com/doc", type: "Free" },
    { url: "https://www.udemy.com/course/git-complete/", type: "Paid" }
  ]
},
{
  title: "Web Performance Optimization",
  description: "Understand techniques to improve website speed, accessibility, and SEO.",
  category: "Web Development",
  resources: [
    { url: "https://web.dev/learn/performance/", type: "Free" },
    { url: "https://www.udemy.com/course/website-performance-optimization/", type: "Paid" }
  ]
},
{
  title: "Modern Frontend Frameworks",
  description: "Get started with frameworks like React, Vue, and Angular to build interactive web applications.",
  category: "Web Development",
  resources: [
    { url: "https://react.dev/learn", type: "Free" },
    { url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Paid" }
  ]
},{
  title: "Android Development for Beginners",
  description: "Learn to build Android apps using Java and Android Studio, starting from the basics.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/courses/android-basics-compose/course", type: "Free" },
    { url: "https://www.udemy.com/course/android-app-development-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Kotlin for Android",
  description: "Master Kotlin, the preferred language for modern Android development.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/kotlin", type: "Free" },
    { url: "https://www.udemy.com/course/kotlin-android-developer-masterclass/", type: "Paid" }
  ]
},
{
  title: "Jetpack Compose Fundamentals",
  description: "Learn Jetpack Compose, Android's modern toolkit for building native UI.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/jetpack/compose/tutorial", type: "Free" },
    { url: "https://www.udemy.com/course/jetpack-compose-android-development/", type: "Paid" }
  ]
},
{
  title: "Android App Architecture",
  description: "Understand MVVM architecture, LiveData, ViewModel, and Room database in Android apps.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/jetpack/guide", type: "Free" },
    { url: "https://www.udemy.com/course/android-architecture-componentsmvvm-viewmodel-livedata-room/", type: "Paid" }
  ]
},
{
  title: "Publishing on Google Play Store",
  description: "Learn how to prepare, test, and publish your Android app on Google Play.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/distribute", type: "Free" },
    { url: "https://www.udemy.com/course/publish-your-android-app-on-google-play-store/", type: "Paid" }
  ]
},
{
  title: "Advanced Android Development",
  description: "Explore advanced Android features like background services, sensors, and APIs.",
  category: "Android Development",
  resources: [
    { url: "https://developer.android.com/guide", type: "Free" },
    { url: "https://www.udemy.com/course/advanced-android-app-development/", type: "Paid" }
  ]
},{
  title: "Introduction to Artificial Intelligence",
  description: "Understand the basics of AI, its history, and applications in various fields.",
  category: "AI",
  resources: [
    { url: "https://www.coursera.org/learn/introduction-to-ai", type: "Free" },
    { url: "https://www.udemy.com/course/artificial-intelligence-az/", type: "Paid" }
  ]
},
{
  title: "Machine Learning with Python",
  description: "Learn core machine learning concepts and implement them using Python libraries.",
  category: "AI",
  resources: [
    { url: "https://scikit-learn.org/stable/tutorial/index.html", type: "Free" },
    { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
  ]
},
{
  title: "Deep Learning Fundamentals",
  description: "Explore neural networks, CNNs, RNNs, and deep learning frameworks like TensorFlow.",
  category: "AI",
  resources: [
    { url: "https://www.deeplearning.ai/courses/deep-learning-specialization/", type: "Free" },
    { url: "https://www.udemy.com/course/deeplearning/", type: "Paid" }
  ]
},
{
  title: "Natural Language Processing (NLP)",
  description: "Learn to process and analyze text data using NLP libraries and models.",
  category: "AI",
  resources: [
    { url: "https://web.stanford.edu/~jurafsky/NLP.html", type: "Free" },
    { url: "https://www.udemy.com/course/nlp-natural-language-processing-with-python/", type: "Paid" }
  ]
},
{
  title: "Computer Vision Basics",
  description: "Understand image processing, object detection, and recognition using OpenCV.",
  category: "AI",
  resources: [
    { url: "https://docs.opencv.org/master/d9/df8/tutorial_root.html", type: "Free" },
    { url: "https://www.udemy.com/course/computer-vision-a-z/", type: "Paid" }
  ]
},
{
  title: "AI in Real-world Applications",
  description: "Learn how AI is used in healthcare, finance, robotics, and other industries.",
  category: "AI",
  resources: [
    { url: "https://www.edx.org/course/artificial-intelligence-ai", type: "Free" },
    { url: "https://www.udemy.com/course/artificial-intelligence-real-world-projects/", type: "Paid" }
  ]
},{
  title: "Machine Learning Fundamentals",
  description: "Learn the core concepts of machine learning, including supervised and unsupervised learning.",
  category: "ML",
  resources: [
    { url: "https://www.coursera.org/learn/machine-learning", type: "Free" },
    { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
  ]
},
{
  title: "Supervised Learning Techniques",
  description: "Dive deeper into regression, classification, and model evaluation methods.",
  category: "ML",
  resources: [
    { url: "https://scikit-learn.org/stable/supervised_learning.html", type: "Free" },
    { url: "https://www.udemy.com/course/supervised-machine-learning/", type: "Paid" }
  ]
},
{
  title: "Unsupervised Learning and Clustering",
  description: "Explore clustering methods like K-Means, DBSCAN, and dimensionality reduction techniques.",
  category: "ML",
  resources: [
    { url: "https://scikit-learn.org/stable/unsupervised_learning.html", type: "Free" },
    { url: "https://www.udemy.com/course/unsupervised-machine-learning/", type: "Paid" }
  ]
},
{
  title: "Model Deployment and MLOps",
  description: "Learn how to deploy ML models into production with Docker, Flask, and cloud services.",
  category: "ML",
  resources: [
    { url: "https://www.tensorflow.org/tfx/tutorials", type: "Free" },
    { url: "https://www.udemy.com/course/mlops-machine-learning-operations/", type: "Paid" }
  ]
},
{
  title: "Feature Engineering",
  description: "Understand techniques for extracting, selecting, and transforming features to improve model performance.",
  category: "ML",
  resources: [
    { url: "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/", type: "Free" },
    { url: "https://www.udemy.com/course/feature-engineering-for-machine-learning/", type: "Paid" }
  ]
},
{
  title: "ML Project Case Studies",
  description: "Work on real-world ML problems and datasets to gain practical experience.",
  category: "ML",
  resources: [
    { url: "https://www.kaggle.com/learn/intro-to-machine-learning", type: "Free" },
    { url: "https://www.udemy.com/course/real-world-machine-learning-projects/", type: "Paid" }
  ]
},{
  title: "Introduction to IoT",
  description: "Understand the fundamentals of the Internet of Things, its architecture, and use cases.",
  category: "IoT",
  resources: [
    { url: "https://www.coursera.org/learn/iot", type: "Free" },
    { url: "https://www.udemy.com/course/introduction-to-internet-of-things-iot/", type: "Paid" }
  ]
},
{
  title: "IoT with Arduino",
  description: "Learn how to build IoT projects using Arduino microcontrollers and sensors.",
  category: "IoT",
  resources: [
    { url: "https://create.arduino.cc/projecthub", type: "Free" },
    { url: "https://www.udemy.com/course/arduino-step-by-step-more-than-50-hours-complete-course/", type: "Paid" }
  ]
},
{
  title: "IoT with Raspberry Pi",
  description: "Build IoT applications using Raspberry Pi, Python, and various IoT sensors.",
  category: "IoT",
  resources: [
    { url: "https://projects.raspberrypi.org/en/projects", type: "Free" },
    { url: "https://www.udemy.com/course/raspberry-pi-full-stack/", type: "Paid" }
  ]
},
{
  title: "IoT Communication Protocols",
  description: "Explore protocols like MQTT, CoAP, and HTTP used in IoT systems.",
  category: "IoT",
  resources: [
    { url: "https://mqtt.org/getting-started/", type: "Free" },
    { url: "https://www.udemy.com/course/mqtt-essentials/", type: "Paid" }
  ]
},
{
  title: "IoT Security",
  description: "Learn the security challenges and solutions in IoT systems.",
  category: "IoT",
  resources: [
    { url: "https://www.coursera.org/learn/iot-security", type: "Free" },
    { url: "https://www.udemy.com/course/internet-of-things-security-iot-security/", type: "Paid" }
  ]
},
{
  title: "Industrial IoT",
  description: "Understand how IoT is transforming industries through automation and data collection.",
  category: "IoT",
  resources: [
    { url: "https://www.ibm.com/topics/iiot", type: "Free" },
    { url: "https://www.udemy.com/course/industrial-iot-for-beginners/", type: "Paid" }
  ]
},
{
  title: "IoT Cloud Integration",
  description: "Learn how to connect IoT devices to AWS, Azure, or Google Cloud.",
  category: "IoT",
  resources: [
    { url: "https://aws.amazon.com/iot-core/getting-started/", type: "Free" },
    { url: "https://www.udemy.com/course/iot-integration-with-cloud-computing/", type: "Paid" }
  ]
},{
  title: "Data Science Fundamentals",
  description: "Learn the basics of data science, including data collection, cleaning, and analysis.",
  category: "Data Science",
  resources: [
    { url: "https://www.coursera.org/learn/what-is-datascience", type: "Free" },
    { url: "https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/", type: "Paid" }
  ]
},
{
  title: "Python for Data Science",
  description: "Use Python libraries like Pandas, NumPy, and Matplotlib for data analysis.",
  category: "Data Science",
  resources: [
    { url: "https://www.kaggle.com/learn/python", type: "Free" },
    { url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Data Visualization",
  description: "Master data visualization tools like Tableau, Power BI, and Matplotlib.",
  category: "Data Science",
  resources: [
    { url: "https://public.tableau.com/en-us/s/resources", type: "Free" },
    { url: "https://www.udemy.com/course/tableau10/", type: "Paid" }
  ]
},
{
  title: "Statistics for Data Science",
  description: "Understand statistical concepts essential for data science applications.",
  category: "Data Science",
  resources: [
    { url: "https://www.khanacademy.org/math/statistics-probability", type: "Free" },
    { url: "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/", type: "Paid" }
  ]
},
{
  title: "Machine Learning Basics",
  description: "Get introduced to supervised and unsupervised machine learning techniques.",
  category: "Data Science",
  resources: [
    { url: "https://www.coursera.org/learn/machine-learning", type: "Free" },
    { url: "https://www.udemy.com/course/machinelearning/", type: "Paid" }
  ]
},
{
  title: "Big Data Analytics",
  description: "Learn big data tools like Hadoop and Spark for handling large datasets.",
  category: "Data Science",
  resources: [
    { url: "https://spark.apache.org/", type: "Free" },
    { url: "https://www.udemy.com/course/apache-spark-with-scala-hands-on-with-big-data/", type: "Paid" }
  ]
},
{
  title: "Data Science Project Deployment",
  description: "Deploy data science models to production using Flask, FastAPI, or cloud platforms.",
  category: "Data Science",
  resources: [
    { url: "https://fastapi.tiangolo.com/", type: "Free" },
    { url: "https://www.udemy.com/course/deployment-of-machine-learning-models/", type: "Paid" }
  ]
},{
  title: "Java Programming Fundamentals",
  description: "Learn the basics of Java, including syntax, data types, and control flow.",
  category: "Java Developer",
  resources: [
    { url: "https://www.learnjavaonline.org/", type: "Free" },
    { url: "https://www.udemy.com/course/java-the-complete-java-developer-course/", type: "Paid" }
  ]
},
{
  title: "Object-Oriented Programming in Java",
  description: "Master OOP concepts like inheritance, polymorphism, and encapsulation in Java.",
  category: "Java Developer",
  resources: [
    { url: "https://www.javatpoint.com/java-oops-concepts", type: "Free" },
    { url: "https://www.udemy.com/course/java-object-oriented-programming/", type: "Paid" }
  ]
},
{
  title: "Java Collections Framework",
  description: "Learn how to use Java’s Collections API for efficient data handling.",
  category: "Java Developer",
  resources: [
    { url: "https://www.baeldung.com/java-collections", type: "Free" },
    { url: "https://www.udemy.com/course/java-collections-framework/", type: "Paid" }
  ]
},
{
  title: "Java Multithreading and Concurrency",
  description: "Understand multithreading, concurrency, and parallel programming in Java.",
  category: "Java Developer",
  resources: [
    { url: "https://www.baeldung.com/java-concurrency", type: "Free" },
    { url: "https://www.udemy.com/course/java-multithreading-concurrency-performance-optimization/", type: "Paid" }
  ]
},
{
  title: "Spring Framework Basics",
  description: "Learn to build Java applications using the Spring framework.",
  category: "Java Developer",
  resources: [
    { url: "https://spring.io/guides", type: "Free" },
    { url: "https://www.udemy.com/course/spring-framework-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Spring Boot for Java Developers",
  description: "Create production-ready Java applications using Spring Boot.",
  category: "Java Developer",
  resources: [
    { url: "https://spring.io/projects/spring-boot", type: "Free" },
    { url: "https://www.udemy.com/course/spring-boot-tutorial-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Java Database Connectivity (JDBC)",
  description: "Learn how to connect and interact with databases using JDBC.",
  category: "Java Developer",
  resources: [
    { url: "https://www.javatpoint.com/java-jdbc", type: "Free" },
    { url: "https://www.udemy.com/course/jdbc-and-java-database-integration-for-beginners/", type: "Paid" }
  ]
},
// Removed duplicate 'HTML & CSS Fundamentals' from Frontend Development
{
  title: "JavaScript Basics",
  description: "Understand JavaScript syntax, variables, functions, and DOM manipulation.",
  category: "Frontend Development",
  resources: [
    { url: "https://javascript.info/", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-javascript-course/", type: "Paid" }
  ]
},
// Removed duplicate 'Responsive Web Design' from Frontend Development
{
  title: "React.js Fundamentals",
  description: "Learn the basics of building interactive UIs with React.",
  category: "Frontend Development",
  resources: [
    { url: "https://react.dev/learn", type: "Free" },
    { url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Paid" }
  ]
},
{
  title: "Advanced JavaScript (ES6+)",
  description: "Master ES6+ features like arrow functions, destructuring, and modules.",
  category: "Frontend Development",
  resources: [
    { url: "https://www.javascripttutorial.net/es6/", type: "Free" },
    { url: "https://www.udemy.com/course/modern-javascript-es6-basics-to-advanced/", type: "Paid" }
  ]
},
{
  title: "CSS Frameworks (Bootstrap & Tailwind CSS)",
  description: "Speed up development using popular CSS frameworks.",
  category: "Frontend Development",
  resources: [
    { url: "https://getbootstrap.com/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/tailwind-css-from-scratch/", type: "Paid" }
  ]
},
// Removed duplicate 'Version Control with Git' from Frontend Development
{
  title: "Node.js Basics",
  description: "Learn server-side JavaScript development with Node.js.",
  category: "Backend Development",
  resources: [
    { url: "https://nodejs.dev/en/learn/", type: "Free" },
    { url: "https://www.udemy.com/course/nodejs-the-complete-guide/", type: "Paid" }
  ]
},
{
  title: "Express.js Framework",
  description: "Build robust backend applications using Express.js.",
  category: "Backend Development",
  resources: [
    { url: "https://expressjs.com/en/starter/installing.html", type: "Free" },
    { url: "https://www.udemy.com/course/expressjs-the-complete-guide/", type: "Paid" }
  ]
},
{
  title: "Databases with MongoDB",
  description: "Work with NoSQL databases using MongoDB and Mongoose.",
  category: "Backend Development",
  resources: [
    { url: "https://www.mongodb.com/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/", type: "Paid" }
  ]
},
{
  title: "REST API Development",
  description: "Design and implement RESTful APIs for backend services.",
  category: "Backend Development",
  resources: [
    { url: "https://restfulapi.net/", type: "Free" },
    { url: "https://www.udemy.com/course/rest-api-design-nodejs-api-development/", type: "Paid" }
  ]
},
{
  title: "Authentication & Authorization",
  description: "Implement secure login systems with JWT, OAuth, and sessions.",
  category: "Backend Development",
  resources: [
    { url: "https://developer.okta.com/blog/2018/11/15/node-express-typescript", type: "Free" },
    { url: "https://www.udemy.com/course/secure-nodejs-api-with-jwt-authentication/", type: "Paid" }
  ]
},
{
  title: "SQL Databases (PostgreSQL/MySQL)",
  description: "Learn how to manage and query relational databases.",
  category: "Backend Development",
  resources: [
    { url: "https://www.postgresql.org/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-sql-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Backend Deployment",
  description: "Deploy backend applications to cloud platforms like Heroku and AWS.",
  category: "Backend Development",
  resources: [
    { url: "https://devcenter.heroku.com/", type: "Free" },
    { url: "https://www.udemy.com/course/deploying-nodejs-to-aws/", type: "Paid" }
  ]
},{
  title: "Full Stack Web Development with MERN",
  description: "Learn to build complete web apps using MongoDB, Express, React, and Node.js.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.mongodb.com/mern-stack", type: "Free" },
    { url: "https://www.udemy.com/course/mern-stack-front-to-back/", type: "Paid" }
  ]
},
{
  title: "HTML, CSS & JavaScript Mastery",
  description: "Master the core frontend technologies before diving into full stack.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.freecodecamp.org/learn", type: "Free" },
    { url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/", type: "Paid" }
  ]
},
{
  title: "React for Full Stack Developers",
  description: "Create dynamic frontend interfaces with React.",
  category: "Full Stack Development",
  resources: [
    { url: "https://react.dev/learn", type: "Free" },
    { url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Paid" }
  ]
},
{
  title: "Node.js & Express Backend",
  description: "Build backend APIs to power full stack apps.",
  category: "Full Stack Development",
  resources: [
    { url: "https://nodejs.dev/en/learn/", type: "Free" },
    { url: "https://www.udemy.com/course/nodejs-the-complete-guide/", type: "Paid" }
  ]
},
{
  title: "Database Integration (MongoDB & SQL)",
  description: "Store and retrieve app data efficiently using databases.",
  category: "Full Stack Development",
  resources: [
    { url: "https://www.mongodb.com/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/sql-and-database-design/", type: "Paid" }
  ]
},
{
  title: "REST & GraphQL APIs",
  description: "Learn both REST and GraphQL approaches to backend communication.",
  category: "Full Stack Development",
  resources: [
    { url: "https://graphql.org/learn/", type: "Free" },
    { url: "https://www.udemy.com/course/graphql-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Full Stack Deployment",
  description: "Deploy full stack apps to platforms like Vercel, Netlify, and AWS.",
  category: "Full Stack Development",
  resources: [
    { url: "https://vercel.com/docs", type: "Free" },
    { url: "https://www.udemy.com/course/deploying-full-stack-apps/", type: "Paid" }
  ]
},{
  title: "iOS Development with Swift",
  description: "Learn the fundamentals of Swift programming for iOS app development.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/swift/resources/", type: "Free" },
    { url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/", type: "Paid" }
  ]
},
{
  title: "SwiftUI Essentials",
  description: "Create beautiful and responsive UIs with Apple's SwiftUI framework.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/tutorials/swiftui", type: "Free" },
    { url: "https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/", type: "Paid" }
  ]
},
{
  title: "UIKit Fundamentals",
  description: "Understand UIKit to build powerful and custom iOS interfaces.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/uikit", type: "Free" },
    { url: "https://www.udemy.com/course/ios-12-app-development-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Core Data & Persistence",
  description: "Learn to store and manage data in iOS apps using Core Data.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/coredata", type: "Free" },
    { url: "https://www.udemy.com/course/core-data-in-ios-with-swift/", type: "Paid" }
  ]
},
{
  title: "iOS Networking",
  description: "Fetch and send data over the internet using URLSession and REST APIs.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/foundation/url_loading_system", type: "Free" },
    { url: "https://www.udemy.com/course/ios-networking-with-swift/", type: "Paid" }
  ]
},
{
  title: "App Store Deployment",
  description: "Learn how to prepare and publish your iOS app on the App Store.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/app-store/", type: "Free" },
    { url: "https://www.udemy.com/course/app-store-optimization-course/", type: "Paid" }
  ]
},
{
  title: "Advanced iOS Development",
  description: "Master advanced concepts like Combine, ARKit, and ML integration.",
  category: "iOS Development",
  resources: [
    { url: "https://developer.apple.com/documentation/", type: "Free" },
    { url: "https://www.udemy.com/course/advanced-ios-app-development-with-swift/", type: "Paid" }
  ]
},{
  title: "Introduction to Cybersecurity",
  description: "Understand the fundamentals of cybersecurity, threats, and defenses.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.coursera.org/learn/intro-cyber-security", type: "Free" },
    { url: "https://www.udemy.com/course/cybersecurity-course/", type: "Paid" }
  ]
},
{
  title: "Network Security Basics",
  description: "Learn about firewalls, VPNs, intrusion detection, and securing networks.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.geeksforgeeks.org/network-security/", type: "Free" },
    { url: "https://www.udemy.com/course/network-security-fundamentals/", type: "Paid" }
  ]
},
{
  title: "Ethical Hacking for Beginners",
  description: "Learn ethical hacking tools and penetration testing techniques.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.coursera.org/specializations/penetration-testing", type: "Free" },
    { url: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/", type: "Paid" }
  ]
},
{
  title: "Web Application Security",
  description: "Understand OWASP Top 10 vulnerabilities and how to secure web apps.",
  category: "Cybersecurity",
  resources: [
    { url: "https://owasp.org/www-project-top-ten/", type: "Free" },
    { url: "https://www.udemy.com/course/web-application-security-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Cloud Security Essentials",
  description: "Learn to secure cloud-based infrastructure and services.",
  category: "Cybersecurity",
  resources: [
    { url: "https://aws.amazon.com/security/", type: "Free" },
    { url: "https://www.udemy.com/course/cloud-security-fundamentals/", type: "Paid" }
  ]
},
{
  title: "Incident Response and Forensics",
  description: "Master the process of detecting, responding to, and recovering from attacks.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.cisa.gov/topics/cyber-threats-and-advisories/incident-response", type: "Free" },
    { url: "https://www.udemy.com/course/computer-forensics-investigations-and-incident-response/", type: "Paid" }
  ]
},
{
  title: "Advanced Penetration Testing",
  description: "Deep dive into advanced exploitation techniques and security testing.",
  category: "Cybersecurity",
  resources: [
    { url: "https://www.offsec.com/courses/pen-200/", type: "Paid" },
    { url: "https://www.sans.org/cyber-security-courses/advanced-penetration-testing-exploits-ethical-hacking/", type: "Paid" }
  ]
},{
  title: "Introduction to Cloud Computing",
  description: "Learn the basics of cloud computing, including types of cloud services and deployment models.",
  category: "Cloud Computing",
  resources: [
    { url: "https://www.ibm.com/topics/cloud-computing", type: "Free" },
    { url: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/", type: "Paid" }
  ]
},
{
  title: "AWS Certified Solutions Architect - Associate",
  description: "Prepare for AWS certification and learn to design scalable systems.",
  category: "Cloud Computing",
  resources: [
    { url: "https://aws.amazon.com/training/learn-about/cloud-practitioner/", type: "Free" },
    { url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/", type: "Paid" }
  ]
},
{
  title: "Microsoft Azure Fundamentals",
  description: "Understand Azure services, pricing, and deployment models.",
  category: "Cloud Computing",
  resources: [
    { url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/", type: "Free" },
    { url: "https://www.udemy.com/course/azure-fundamentals/", type: "Paid" }
  ]
},
{
  title: "Google Cloud Platform (GCP) Essentials",
  description: "Learn GCP services and how to deploy applications in the cloud.",
  category: "Cloud Computing",
  resources: [
    { url: "https://cloud.google.com/training", type: "Free" },
    { url: "https://www.udemy.com/course/gcp-google-cloud-platform-certification-training/", type: "Paid" }
  ]
},
{
  title: "Cloud Security Fundamentals",
  description: "Understand cloud security risks and best practices to secure infrastructure.",
  category: "Cloud Computing",
  resources: [
    { url: "https://cloudsecurityalliance.org/", type: "Free" },
    { url: "https://www.udemy.com/course/cloud-security-fundamentals/", type: "Paid" }
  ]
},
{
  title: "DevOps on the Cloud",
  description: "Integrate DevOps practices with AWS, Azure, and GCP.",
  category: "Cloud Computing",
  resources: [
    { url: "https://aws.amazon.com/devops/", type: "Free" },
    { url: "https://www.udemy.com/course/devops-cloud/", type: "Paid" }
  ]
},
{
  title: "Serverless Computing",
  description: "Learn serverless architecture using AWS Lambda, Azure Functions, and Google Cloud Functions.",
  category: "Cloud Computing",
  resources: [
    { url: "https://aws.amazon.com/serverless/", type: "Free" },
    { url: "https://www.udemy.com/course/serverless-framework/", type: "Paid" }
  ]
},{
  title: "Introduction to DevOps",
  description: "Learn the fundamentals of DevOps culture, principles, and practices.",
  category: "DevOps",
  resources: [
    { url: "https://aws.amazon.com/devops/what-is-devops/", type: "Free" },
    { url: "https://www.udemy.com/course/devops-foundations/", type: "Paid" }
  ]
},
{
  title: "CI/CD with Jenkins",
  description: "Master Continuous Integration and Continuous Delivery using Jenkins.",
  category: "DevOps",
  resources: [
    { url: "https://www.jenkins.io/doc/tutorials/", type: "Free" },
    { url: "https://www.udemy.com/course/jenkins-from-zero-to-hero/", type: "Paid" }
  ]
},
{
  title: "Docker for DevOps Engineers",
  description: "Learn Docker containers and how to integrate them into DevOps pipelines.",
  category: "DevOps",
  resources: [
    { url: "https://docs.docker.com/get-started/", type: "Free" },
    { url: "https://www.udemy.com/course/docker-mastery/", type: "Paid" }
  ]
},
{
  title: "Kubernetes for Beginners",
  description: "Learn Kubernetes fundamentals for container orchestration.",
  category: "DevOps",
  resources: [
    { url: "https://kubernetes.io/docs/tutorials/", type: "Free" },
    { url: "https://www.udemy.com/course/kubernetes-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Infrastructure as Code with Terraform",
  description: "Manage cloud infrastructure using Terraform and IaC principles.",
  category: "DevOps",
  resources: [
    { url: "https://developer.hashicorp.com/terraform/tutorials", type: "Free" },
    { url: "https://www.udemy.com/course/terraform-beginner-to-advanced/", type: "Paid" }
  ]
},
{
  title: "Monitoring and Logging with Prometheus & Grafana",
  description: "Set up monitoring and visualization for DevOps systems.",
  category: "DevOps",
  resources: [
    { url: "https://prometheus.io/docs/introduction/overview/", type: "Free" },
    { url: "https://www.udemy.com/course/prometheus-grafana/", type: "Paid" }
  ]
},
{
  title: "GitOps with ArgoCD",
  description: "Implement GitOps principles using ArgoCD for Kubernetes deployments.",
  category: "DevOps",
  resources: [
    { url: "https://argo-cd.readthedocs.io/en/stable/", type: "Free" },
    { url: "https://www.udemy.com/course/gitops-with-argocd/", type: "Paid" }
  ]
},{
  title: "Blockchain Basics",
  description: "Understand the core concepts and architecture of blockchain technology.",
  category: "Blockchain Development",
  resources: [
    { url: "https://www.ibm.com/topics/what-is-blockchain", type: "Free" },
    { url: "https://www.udemy.com/course/blockchain-and-cryptocurrency-explained/", type: "Paid" }
  ]
},
{
  title: "Ethereum Smart Contracts with Solidity",
  description: "Learn to develop decentralized applications (dApps) using Solidity.",
  category: "Blockchain Development",
  resources: [
    { url: "https://docs.soliditylang.org/en/v0.8.21/", type: "Free" },
    { url: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/", type: "Paid" }
  ]
},
{
  title: "Hyperledger Fabric Fundamentals",
  description: "Get started with permissioned blockchain using Hyperledger Fabric.",
  category: "Blockchain Development",
  resources: [
    { url: "https://hyperledger-fabric.readthedocs.io/en/latest/", type: "Free" },
    { url: "https://www.udemy.com/course/hyperledger-fabric-blockchain/", type: "Paid" }
  ]
},
{
  title: "Decentralized Finance (DeFi) Development",
  description: "Explore DeFi protocols and build your own decentralized financial applications.",
  category: "Blockchain Development",
  resources: [
    { url: "https://ethereum.org/en/defi/", type: "Free" },
    { url: "https://www.udemy.com/course/decentralized-finance-defi-course-2021/", type: "Paid" }
  ]
},
{
  title: "NFT Development on Ethereum",
  description: "Create and deploy your own Non-Fungible Tokens (NFTs) using ERC-721.",
  category: "Blockchain Development",
  resources: [
    { url: "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/", type: "Free" },
    { url: "https://www.udemy.com/course/nft-development-course/", type: "Paid" }
  ]
},
{
  title: "Blockchain Security Best Practices",
  description: "Learn how to secure blockchain applications and smart contracts.",
  category: "Blockchain Development",
  resources: [
    { url: "https://consensys.github.io/smart-contract-best-practices/", type: "Free" },
    { url: "https://www.udemy.com/course/blockchain-security-course/", type: "Paid" }
  ]
},
{
  title: "Web3.js for Blockchain Developers",
  description: "Interact with Ethereum blockchain using Web3.js library.",
  category: "Blockchain Development",
  resources: [
    { url: "https://web3js.readthedocs.io/en/v1.10.0/", type: "Free" },
    { url: "https://www.udemy.com/course/complete-dapp-solidity-react-blockchain-development/", type: "Paid" }
  ]
},{
  title: "Game Development Fundamentals",
  description: "Learn the basics of game design and development principles.",
  category: "Game Development",
  resources: [
    { url: "https://learn.unity.com/", type: "Free" },
    { url: "https://www.udemy.com/course/unitycourse/", type: "Paid" }
  ]
},
{
  title: "Unity Game Development",
  description: "Build 2D and 3D games using the Unity engine.",
  category: "Game Development",
  resources: [
    { url: "https://learn.unity.com/tutorials", type: "Free" },
    { url: "https://www.udemy.com/course/unitycourse/", type: "Paid" }
  ]
},
{
  title: "Unreal Engine for Beginners",
  description: "Create high-quality games with Unreal Engine.",
  category: "Game Development",
  resources: [
    { url: "https://www.unrealengine.com/en-US/onlinelearning-courses", type: "Free" },
    { url: "https://www.udemy.com/course/unrealcourse/", type: "Paid" }
  ]
},
{
  title: "C# Programming for Games",
  description: "Learn C# programming for game development in Unity.",
  category: "Game Development",
  resources: [
    { url: "https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/", type: "Free" },
    { url: "https://www.udemy.com/course/csharp-tutorial-for-beginners/", type: "Paid" }
  ]
},
{
  title: "2D Game Development",
  description: "Master the art of creating 2D games using various tools.",
  category: "Game Development",
  resources: [
    { url: "https://learn.unity.com/tutorials/2d-game-kit", type: "Free" },
    { url: "https://www.udemy.com/course/2d-game-development-course/", type: "Paid" }
  ]
},
{
  title: "3D Game Development",
  description: "Build immersive 3D games with advanced graphics and physics.",
  category: "Game Development",
  resources: [
    { url: "https://learn.unity.com/tutorials/3d-game-kit", type: "Free" },
    { url: "https://www.udemy.com/course/3d-game-development-course/", type: "Paid" }
  ]
},
{
  title: "Game AI Programming",
  description: "Implement artificial intelligence for non-player characters (NPCs).",
  category: "Game Development",
  resources: [
    { url: "https://www.gamedev.net/tutorials/programming/artificial-intelligence/", type: "Free" },
    { url: "https://www.udemy.com/course/game-ai-development/", type: "Paid" }
  ]
},{
  title: "Introduction to AR & VR",
  description: "Learn the basics of augmented and virtual reality technologies.",
  category: "AR/VR Development",
  resources: [
    { url: "https://www.coursera.org/learn/introduction-augmented-reality-virtual-reality", type: "Free" },
    { url: "https://www.udemy.com/course/augmented-reality-and-virtual-reality/", type: "Paid" }
  ]
},
{
  title: "Unity for AR & VR",
  description: "Build immersive AR and VR experiences using Unity engine.",
  category: "AR/VR Development",
  resources: [
    { url: "https://learn.unity.com/tutorials/ar-vr", type: "Free" },
    { url: "https://www.udemy.com/course/unity-ar-vr-development/", type: "Paid" }
  ]
},
{
  title: "Unreal Engine for AR & VR",
  description: "Create high-quality AR/VR applications with Unreal Engine.",
  category: "AR/VR Development",
  resources: [
    { url: "https://www.unrealengine.com/en-US/onlinelearning-courses", type: "Free" },
    { url: "https://www.udemy.com/course/unreal-engine-ar-vr/", type: "Paid" }
  ]
},
{
  title: "3D Modeling for AR/VR",
  description: "Learn 3D modeling techniques for creating assets in AR and VR.",
  category: "AR/VR Development",
  resources: [
    { url: "https://www.blender.org/support/tutorials/", type: "Free" },
    { url: "https://www.udemy.com/course/3d-modeling-for-beginners/", type: "Paid" }
  ]
},
{
  title: "XR Interaction Toolkit",
  description: "Use Unity’s XR Interaction Toolkit to build interactive AR/VR apps.",
  category: "AR/VR Development",
  resources: [
    { url: "https://learn.unity.com/tutorial/xr-interaction-toolkit", type: "Free" }
  ]
},
{
  title: "ARKit and ARCore Development",
  description: "Develop native AR apps using Apple ARKit and Google ARCore.",
  category: "AR/VR Development",
  resources: [
    { url: "https://developer.apple.com/augmented-reality/", type: "Free" },
    { url: "https://developers.google.com/ar", type: "Free" }
  ]
},
{
  title: "VR Game Development",
  description: "Build engaging VR games with immersive environments.",
  category: "AR/VR Development",
  resources: [
    { url: "https://learn.unity.com/tutorials/vr-game-development", type: "Free" },
    { url: "https://www.udemy.com/course/vr-game-development/", type: "Paid" }
  ]
},{
  title: "Introduction to UI/UX Design",
  description: "Learn the basics of user interface and user experience design principles.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.coursera.org/learn/ui-ux-design", type: "Free" },
    { url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/", type: "Paid" }
  ]
},
{
  title: "User Research and Usability Testing",
  description: "Understand user needs and evaluate design effectiveness through testing.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.nngroup.com/articles/usability-testing-101/", type: "Free" },
    { url: "https://www.udemy.com/course/user-research/", type: "Paid" }
  ]
},
{
  title: "Wireframing and Prototyping",
  description: "Create wireframes and prototypes using popular tools like Figma and Sketch.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.figma.com/resources/learn-design/", type: "Free" },
    { url: "https://www.udemy.com/course/figma-ui-ux-design-course/", type: "Paid" }
  ]
},
{
  title: "Visual Design Fundamentals",
  description: "Learn about typography, color theory, and visual hierarchy.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.interaction-design.org/courses/visual-design", type: "Free" },
    { url: "https://www.udemy.com/course/visual-design-fundamentals/", type: "Paid" }
  ]
},
{
  title: "Design Systems and Style Guides",
  description: "Create consistent and scalable design systems.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.invisionapp.com/inside-design/design-systems-guide/", type: "Free" },
    { url: "https://www.udemy.com/course/design-systems/", type: "Paid" }
  ]
},
{
  title: "Accessibility in UI/UX",
  description: "Design inclusive products accessible to all users.",
  category: "UI/UX Design",
  resources: [
    { url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/", type: "Free" },
    { url: "https://www.udemy.com/course/web-accessibility-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Mobile App Design",
  description: "Design user-friendly mobile interfaces for iOS and Android.",
  category: "UI/UX Design",
  resources: [
    { url: "https://material.io/design", type: "Free" },
    { url: "https://www.udemy.com/course/mobile-ui-ux-design/", type: "Paid" }
  ]
},{
  title: "Database Fundamentals",
  description: "Learn the basics of database systems, architecture, and models.",
  category: "Database Administration",
  resources: [
    { url: "https://www.khanacademy.org/computing/computer-programming/sql", type: "Free" },
    { url: "https://www.udemy.com/course/database-administration-fundamentals/", type: "Paid" }
  ]
},
{
  title: "SQL for Database Administration",
  description: "Master SQL queries and database management.",
  category: "Database Administration",
  resources: [
    { url: "https://mode.com/sql-tutorial/", type: "Free" },
    { url: "https://www.udemy.com/course/sql-for-beginners/", type: "Paid" }
  ]
},
{
  title: "MySQL Administration",
  description: "Manage and optimize MySQL databases.",
  category: "Database Administration",
  resources: [
    { url: "https://dev.mysql.com/doc/", type: "Free" },
    { url: "https://www.udemy.com/course/mysql-database-administration/", type: "Paid" }
  ]
},
{
  title: "PostgreSQL for DBAs",
  description: "Learn to administer and optimize PostgreSQL databases.",
  category: "Database Administration",
  resources: [
    { url: "https://www.postgresql.org/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/postgresql-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Oracle Database Administration",
  description: "Manage Oracle database systems and perform advanced DBA tasks.",
  category: "Database Administration",
  resources: [
    { url: "https://docs.oracle.com/en/database/", type: "Free" },
    { url: "https://www.udemy.com/course/oracle-database-administration/", type: "Paid" }
  ]
},
{
  title: "Database Security Best Practices",
  description: "Protect databases from vulnerabilities and attacks.",
  category: "Database Administration",
  resources: [
    { url: "https://www.sans.org/cyber-security-courses/database-security/", type: "Free" },
    { url: "https://www.udemy.com/course/database-security/", type: "Paid" }
  ]
},
{
  title: "Backup and Recovery",
  description: "Learn strategies for data backup, recovery, and disaster management.",
  category: "Database Administration",
  resources: [
    { url: "https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/", type: "Free" },
    { url: "https://www.udemy.com/course/database-backup-and-recovery/", type: "Paid" }
  ]
},{
  title: "Software Testing Fundamentals",
  description: "Learn basic concepts and types of software testing.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.guru99.com/software-testing.html", type: "Free" },
    { url: "https://www.udemy.com/course/software-testing/", type: "Paid" }
  ]
},
{
  title: "Manual Testing Basics",
  description: "Understand manual testing techniques and test case writing.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.softwaretestinghelp.com/manual-testing-tutorial-1/", type: "Free" },
    { url: "https://www.udemy.com/course/manual-testing/", type: "Paid" }
  ]
},
{
  title: "Selenium WebDriver Automation",
  description: "Automate web testing using Selenium WebDriver.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.selenium.dev/documentation/en/webdriver/", type: "Free" },
    { url: "https://www.udemy.com/course/selenium-webdriver-with-java-basics-to-advanced/", type: "Paid" }
  ]
},
{
  title: "API Testing with Postman",
  description: "Learn to test APIs using Postman and Newman.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://learning.postman.com/docs/getting-started/introduction/", type: "Free" },
    { url: "https://www.udemy.com/course/postman-the-complete-guide/", type: "Paid" }
  ]
},
{
  title: "Performance Testing with JMeter",
  description: "Test application performance and load using Apache JMeter.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://jmeter.apache.org/usermanual/get-started.html", type: "Free" },
    { url: "https://www.udemy.com/course/apache-jmeter-performance-testing/", type: "Paid" }
  ]
},
{
  title: "Test Automation Frameworks",
  description: "Build scalable and maintainable test automation frameworks.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.guru99.com/test-automation-framework.html", type: "Free" },
    { url: "https://www.udemy.com/course/test-automation-frameworks/", type: "Paid" }
  ]
},
{
  title: "Agile Testing & Scrum",
  description: "Learn agile testing methodologies and Scrum practices.",
  category: "Software Testing / QA",
  resources: [
    { url: "https://www.scrum.org/resources/what-is-agile-testing", type: "Free" },
    { url: "https://www.udemy.com/course/agile-testing-scrum/", type: "Paid" }
  ]
},{
  title: "Python for Beginners",
  description: "Learn Python programming basics and syntax.",
  category: "Python Developer",
  resources: [
    { url: "https://www.learnpython.org/", type: "Free" },
    { url: "https://www.udemy.com/course/complete-python-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Python Data Structures",
  description: "Master lists, dictionaries, sets, and tuples in Python.",
  category: "Python Developer",
  resources: [
    { url: "https://docs.python.org/3/tutorial/datastructures.html", type: "Free" },
    { url: "https://www.udemy.com/course/python-data-structures/", type: "Paid" }
  ]
},
{
  title: "Web Development with Django",
  description: "Build web applications using the Django framework.",
  category: "Python Developer",
  resources: [
    { url: "https://docs.djangoproject.com/en/stable/intro/tutorial01/", type: "Free" },
    { url: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/", type: "Paid" }
  ]
},
{
  title: "Flask Web Development",
  description: "Learn to build lightweight web apps with Flask.",
  category: "Python Developer",
  resources: [
    { url: "https://flask.palletsprojects.com/en/2.2.x/tutorial/", type: "Free" },
    { url: "https://www.udemy.com/course/python-and-flask-bootcamp-create-websites-using-flask/", type: "Paid" }
  ]
},
// Removed duplicate 'Python for Data Science' from Python Developer
{
  title: "Automating Tasks with Python",
  description: "Write Python scripts to automate everyday tasks.",
  category: "Python Developer",
  resources: [
    { url: "https://automatetheboringstuff.com/", type: "Free" },
    { url: "https://www.udemy.com/course/automate/", type: "Paid" }
  ]
},
{
  title: "Python Object-Oriented Programming",
  description: "Understand OOP concepts and apply them in Python.",
  category: "Python Developer",
  resources: [
    { url: "https://realpython.com/python3-object-oriented-programming/", type: "Free" },
    { url: "https://www.udemy.com/course/python-object-oriented-programming/", type: "Paid" }
  ]
},{
  title: "C++ Fundamentals",
  description: "Learn the basics of C++ programming language and syntax.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.learncpp.com/", type: "Free" },
    { url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/", type: "Paid" }
  ]
},
{
  title: "Object-Oriented Programming in C++",
  description: "Master classes, objects, inheritance, and polymorphism in C++.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.cplusplus.com/doc/tutorial/classes/", type: "Free" },
    { url: "https://www.udemy.com/course/cplusplus-oop/", type: "Paid" }
  ]
},
{
  title: "Data Structures and Algorithms in C++",
  description: "Implement common data structures and algorithms using C++.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.geeksforgeeks.org/data-structures/", type: "Free" },
    { url: "https://www.udemy.com/course/dsa-in-cplusplus/", type: "Paid" }
  ]
},
{
  title: "Advanced C++ Programming",
  description: "Learn about templates, STL, exceptions, and advanced topics.",
  category: "C++ Developer",
  resources: [
    { url: "https://isocpp.org/wiki/faq", type: "Free" },
    { url: "https://www.udemy.com/course/advanced-cplusplus/", type: "Paid" }
  ]
},
{
  title: "C++ for Game Development",
  description: "Use C++ to build games and understand game engine architecture.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.udemy.com/course/cplusplus-for-game-development/", type: "Paid" }
  ]
},
{
  title: "Memory Management in C++",
  description: "Understand pointers, dynamic allocation, and memory handling.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.cplusplus.com/doc/tutorial/pointers/", type: "Free" },
    { url: "https://www.udemy.com/course/cplusplus-memory-management/", type: "Paid" }
  ]
},
{
  title: "Multithreading in C++",
  description: "Learn concurrent programming and multithreading concepts.",
  category: "C++ Developer",
  resources: [
    { url: "https://www.cplusplus.com/reference/thread/thread/", type: "Free" },
    { url: "https://www.udemy.com/course/multithreading-in-cplusplus/", type: "Paid" }
  ]
},{
  title: "Data Engineering Fundamentals",
  description: "Learn core concepts of data engineering, pipelines, and ETL processes.",
  category: "Data Engineer",
  resources: [
    { url: "https://www.coursera.org/learn/data-engineering-foundations", type: "Free" },
    { url: "https://www.udemy.com/course/data-engineering/", type: "Paid" }
  ]
},
{
  title: "Big Data and Hadoop",
  description: "Understand big data ecosystem and work with Hadoop framework.",
  category: "Data Engineer",
  resources: [
    { url: "https://hadoop.apache.org/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/hadoop-for-beginners/", type: "Paid" }
  ]
},
{
  title: "Apache Spark Essentials",
  description: "Learn distributed data processing with Apache Spark.",
  category: "Data Engineer",
  resources: [
    { url: "https://spark.apache.org/docs/latest/", type: "Free" },
    { url: "https://www.udemy.com/course/apache-spark-with-scala-hands-on-with-big-data/", type: "Paid" }
  ]
},
{
  title: "Data Warehousing Concepts",
  description: "Explore data warehousing architecture and design patterns.",
  category: "Data Engineer",
  resources: [
    { url: "https://www.coursera.org/learn/dwdesign", type: "Free" },
    { url: "https://www.udemy.com/course/data-warehousing/", type: "Paid" }
  ]
},
{
  title: "ETL Development with Python",
  description: "Build ETL pipelines using Python and related libraries.",
  category: "Data Engineer",
  resources: [
    { url: "https://realpython.com/etl-data-pipeline-python/", type: "Free" },
    { url: "https://www.udemy.com/course/etl-with-python/", type: "Paid" }
  ]
},
{
  title: "Cloud Data Engineering with GCP",
  description: "Learn cloud-based data engineering using Google Cloud Platform.",
  category: "Data Engineer",
  resources: [
    { url: "https://cloud.google.com/training/data-engineering", type: "Free" },
    { url: "https://www.udemy.com/course/google-cloud-platform-data-engineer/", type: "Paid" }
  ]
},
{
  title: "Data Pipeline Automation",
  description: "Automate data workflows with Apache Airflow.",
  category: "Data Engineer",
  resources: [
    { url: "https://airflow.apache.org/docs/", type: "Free" },
    { url: "https://www.udemy.com/course/airflow-the-complete-hands-on-course/", type: "Paid" }
  ]
},{
  title: "Introduction to Product Management",
  description: "Learn the basics of product management and lifecycle.",
  category: "Product Management",
  resources: [
    { url: "https://www.coursera.org/learn/product-management", type: "Free" },
    { url: "https://www.udemy.com/course/product-management-101/", type: "Paid" }
  ]
},
{
  title: "Agile Product Management",
  description: "Understand agile principles and apply them in product management.",
  category: "Product Management",
  resources: [
    { url: "https://www.scrum.org/resources/what-is-product-management", type: "Free" },
    { url: "https://www.udemy.com/course/agile-product-management/", type: "Paid" }
  ]
},
{
  title: "Roadmapping and Prioritization",
  description: "Learn to create product roadmaps and prioritize features effectively.",
  category: "Product Management",
  resources: [
    { url: "https://www.productplan.com/roadmap-guide/", type: "Free" },
    { url: "https://www.udemy.com/course/product-roadmap/", type: "Paid" }
  ]
},
{
  title: "User Story Mapping",
  description: "Create user story maps to better understand user needs and workflow.",
  category: "Product Management",
  resources: [
    { url: "https://www.jpattonassociates.com/user-story-mapping/", type: "Free" },
    { url: "https://www.udemy.com/course/user-story-mapping/", type: "Paid" }
  ]
},
{
  title: "Product Metrics and Analytics",
  description: "Measure product success using key performance indicators and analytics.",
  category: "Product Management",
  resources: [
    { url: "https://www.intercom.com/resources/guides/product-metrics", type: "Free" },
    { url: "https://www.udemy.com/course/product-management-analytics/", type: "Paid" }
  ]
},
{
  title: "Go-to-Market Strategy",
  description: "Plan and execute successful product launches and marketing strategies.",
  category: "Product Management",
  resources: [
    { url: "https://www.productplan.com/learn/go-to-market-strategy/", type: "Free" },
    { url: "https://www.udemy.com/course/go-to-market-strategy/", type: "Paid" }
  ]
},
{
  title: "Leadership and Stakeholder Management",
  description: "Develop skills to manage teams and stakeholders effectively.",
  category: "Product Management",
  resources: [
    { url: "https://www.mindtools.com/pages/article/newLDR_74.htm", type: "Free" },
    { url: "https://www.udemy.com/course/leadership-stakeholder-management/", type: "Paid" }
  ]
}


























]

export default courses ;