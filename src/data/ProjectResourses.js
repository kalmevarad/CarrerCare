const projects = [
  // Web Development
  {
    projectName: "Event Webpage",
    description: "Build a responsive event landing page using HTML, CSS, and basic JavaScript to display event info and collect signups.",
    resources: ["https://www.geeksforgeeks.org/web-development-projects/"],
    category: "Web Development"
  },
  {
    projectName: "Portfolio Website",
    description: "Create a personal portfolio using HTML, CSS, and JavaScript to showcase your projects and skills.",
    resources: ["https://www.freecodecamp.org/news/build-a-portfolio-site/"],
    category: "Web Development"
  },
  {
    projectName: "Blog Platform",
    description: "Develop a blog site with a CMS for adding, editing, and deleting posts.",
    resources: ["https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction"],
    category: "Web Development"
  },
  {
    projectName: "E-commerce Store",
    description: "Build an online store with product listings, cart, and checkout functionality.",
    resources: ["https://www.shopify.com/partners/blog/web-development-projects"],
    category: "Web Development"
  },
  {
    projectName: "Weather App",
    description: "Use a weather API to display current weather data for a user’s location.",
    resources: ["https://openweathermap.org/api"],
    category: "Web Development"
  },
  {
    projectName: "Recipe Finder",
    description: "Create a recipe search site that uses a food API to fetch recipes by ingredients.",
    resources: ["https://spoonacular.com/food-api"],
    category: "Web Development"
  },
  {
    projectName: "Quiz App",
    description: "Build an interactive quiz game with multiple-choice questions and a score tracker.",
    resources: ["https://www.w3schools.com/js/js_quiz.asp"],
    category: "Web Development"
  },
  {
    projectName: "Image Gallery",
    description: "Develop a responsive image gallery with modal pop-ups for full-size images.",
    resources: ["https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"],
    category: "Web Development"
  },
  {
    projectName: "Chat Application",
    description: "Implement a real-time chat app using WebSockets.",
    resources: ["https://socket.io/get-started/chat"],
    category: "Web Development"
  },
  {
    projectName: "URL Shortener",
    description: "Create a tool that shortens URLs and keeps track of click analytics.",
    resources: ["https://dev.to/abbazs/url-shortener-using-node-js-and-mongodb-4m5f"],
    category: "Web Development"
  },

  // Android Development
  {
    projectName: "To-Do List App",
    description: "Build a mobile app to manage daily tasks with add, edit, and delete features.",
    resources: ["https://developer.android.com/courses"],
    category: "Android Development"
  },
  {
    projectName: "Expense Tracker",
    description: "Create an app to track income and expenses with charts.",
    resources: ["https://developer.android.com/guide"],
    category: "Android Development"
  },
  {
    projectName: "Fitness Tracker",
    description: "Develop a step counter app using Google Fit API.",
    resources: ["https://developers.google.com/fit"],
    category: "Android Development"
  },
  {
    projectName: "Notes App",
    description: "Make a note-taking app with offline storage.",
    resources: ["https://developer.android.com/training/data-storage"],
    category: "Android Development"
  },
  {
    projectName: "Weather Forecast App",
    description: "Use a weather API to display forecasts for any city.",
    resources: ["https://openweathermap.org/api"],
    category: "Android Development"
  },
  {
    projectName: "Language Learning App",
    description: "Create an app for learning new languages with flashcards.",
    resources: ["https://developer.android.com/guide"],
    category: "Android Development"
  },
  {
    projectName: "Meditation App",
    description: "Build an app with guided meditations and timers.",
    resources: ["https://developer.android.com/courses"],
    category: "Android Development"
  },
  {
    projectName: "News Reader App",
    description: "Fetch news articles from an API and display them in a clean layout.",
    resources: ["https://newsapi.org/"],
    category: "Android Development"
  },
  {
    projectName: "Grocery List App",
    description: "Let users create and manage a grocery shopping list.",
    resources: ["https://developer.android.com/guide"],
    category: "Android Development"
  },
  {
    projectName: "Music Player",
    description: "Create a music player app with playlists and search.",
    resources: ["https://developer.android.com/guide"],
    category: "Android Development"
  },

  // AI
  {
    projectName: "Chatbot",
    description: "Build a chatbot using NLP to answer basic queries.",
    resources: ["https://dialogflow.cloud.google.com/"],
    category: "AI"
  },
  {
    projectName: "Image Caption Generator",
    description: "Create a model that generates captions for images.",
    resources: ["https://keras.io/examples/vision/image_captioning/"],
    category: "AI"
  },
  {
    projectName: "Speech Recognition App",
    description: "Convert speech to text using AI models.",
    resources: ["https://pypi.org/project/SpeechRecognition/"],
    category: "AI"
  },
  {
    projectName: "Movie Recommendation System",
    description: "Recommend movies based on user preferences.",
    resources: ["https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata"],
    category: "AI"
  },
  {
    projectName: "Face Detection System",
    description: "Detect faces in images using AI libraries.",
    resources: ["https://opencv.org/"],
    category: "AI"
  },
  {
    projectName: "Handwriting Recognition",
    description: "Recognize handwritten text using deep learning.",
    resources: ["https://www.kaggle.com/c/digit-recognizer"],
    category: "AI"
  },
  {
    projectName: "Sentiment Analysis Tool",
    description: "Analyze the sentiment of text data.",
    resources: ["https://monkeylearn.com/sentiment-analysis/"],
    category: "AI"
  },
  {
    projectName: "AI-powered Resume Screener",
    description: "Screen resumes based on job requirements.",
    resources: ["https://huggingface.co/models"],
    category: "AI"
  },
  {
    projectName: "Object Detection App",
    description: "Identify objects in live camera feed.",
    resources: ["https://tensorflow.org/"],
    category: "AI"
  },
  {
    projectName: "AI Music Composer",
    description: "Generate music using AI algorithms.",
    resources: ["https://magenta.tensorflow.org/"],
    category: "AI"
  },

  // ML
  {
    projectName: "House Price Prediction",
    description: "Predict house prices based on dataset features.",
    resources: ["https://www.kaggle.com/c/house-prices-advanced-regression-techniques"],
    category: "ML"
  },
  {
    projectName: "Stock Price Predictor",
    description: "Predict stock prices using historical data.",
    resources: ["https://www.kaggle.com/datasets/szrlee/stock-time-series-20050101-to-20171231"],
    category: "ML"
  },
  {
    projectName: "Customer Churn Prediction",
    description: "Predict whether a customer will leave a service.",
    resources: ["https://www.kaggle.com/datasets/blastchar/telco-customer-churn"],
    category: "ML"
  },
  {
    projectName: "Spam Email Classifier",
    description: "Classify emails as spam or not spam.",
    resources: ["https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset"],
    category: "ML"
  },
  {
    projectName: "Loan Approval Prediction",
    description: "Predict loan approvals based on applicant data.",
    resources: ["https://www.kaggle.com/datasets/altruistdelhite04/loan-prediction-problem-dataset"],
    category: "ML"
  },
  {
    projectName: "Credit Card Fraud Detection",
    description: "Detect fraudulent transactions.",
    resources: ["https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"],
    category: "ML"
  },
  {
    projectName: "Diabetes Prediction",
    description: "Predict diabetes using health data.",
    resources: ["https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database"],
    category: "ML"
  },
  {
    projectName: "Wine Quality Prediction",
    description: "Predict wine quality from chemical properties.",
    resources: ["https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009"],
    category: "ML"
  },
  {
    projectName: "Heart Disease Prediction",
    description: "Predict heart disease risk.",
    resources: ["https://www.kaggle.com/datasets/johnsmith88/heart-disease-dataset"],
    category: "ML"
  },
  {
    projectName: "Car Price Prediction",
    description: "Predict used car prices based on features.",
    resources: ["https://www.kaggle.com/datasets/hellbuoy/car-price-prediction"],
    category: "ML"
  },

  // IoT
  {
    projectName: "Smart Home Automation",
    description: "Control home devices remotely via IoT.",
    resources: ["https://www.instructables.com/IoT-Home-Automation/"],
    category: "IoT"
  },
  {
    projectName: "Smart Irrigation System",
    description: "Automate watering plants based on soil moisture.",
    resources: ["https://create.arduino.cc/projecthub"],
    category: "IoT"
  },
  {
    projectName: "IoT Weather Station",
    description: "Measure temperature, humidity, and air quality.",
    resources: ["https://randomnerdtutorials.com/"],
    category: "IoT"
  },
  {
    projectName: "Smart Parking System",
    description: "Detect and manage parking space availability.",
    resources: ["https://create.arduino.cc/projecthub"],
    category: "IoT"
  },
  {
    projectName: "Wearable Health Monitor",
    description: "Track health metrics with IoT sensors.",
    resources: ["https://www.hackster.io/"],
    category: "IoT"
  },
  {
    projectName: "Home Security System",
    description: "Detect motion and alert homeowners.",
    resources: ["https://randomnerdtutorials.com/"],
    category: "IoT"
  },
  {
    projectName: "Smart Energy Meter",
    description: "Monitor and optimize energy usage.",
    resources: ["https://circuitdigest.com/"],
    category: "IoT"
  },
  {
    projectName: "Air Pollution Monitor",
    description: "Measure air quality index with IoT sensors.",
    resources: ["https://create.arduino.cc/projecthub"],
    category: "IoT"
  },
  {
    projectName: "Voice Controlled Appliances",
    description: "Control appliances using voice commands.",
    resources: ["https://www.hackster.io/"],
    category: "IoT"
  },
  {
    projectName: "Smart Door Lock",
    description: "Implement an IoT-controlled smart lock system.",
    resources: ["https://create.arduino.cc/projecthub"],
    category: "IoT"
  },

  // Data Science
  {
    projectName: "Data Cleaning Pipeline",
    description: "Build a pipeline to clean and preprocess raw data.",
    resources: ["https://www.kaggle.com/learn/data-cleaning"],
    category: "Data Science"
  },
  {
    projectName: "Exploratory Data Analysis",
    description: "Perform EDA on a dataset to uncover patterns.",
    resources: ["https://www.kaggle.com/learn/data-visualization"],
    category: "Data Science"
  },
  {
    projectName: "Customer Segmentation",
    description: "Segment customers using clustering.",
    resources: ["https://www.kaggle.com/learn/unsupervised-learning"],
    category: "Data Science"
  },
  {
    projectName: "Market Basket Analysis",
    description: "Analyze shopping trends using association rules.",
    resources: ["https://www.kaggle.com/code/pavansanagapati/market-basket-analysis/notebook"],
    category: "Data Science"
  },
  {
    projectName: "Social Media Sentiment Analysis",
    description: "Analyze sentiment of tweets.",
    resources: ["https://www.kaggle.com/datasets/twitte r/"],
    category: "Data Science"
  },
  {
    projectName: "Predictive Maintenance",
    description: "Predict machine failures before they happen.",
    resources: ["https://www.kaggle.com/learn/machine-learning"],
    category: "Data Science"
  },
  {
    projectName: "Sales Forecasting",
    description: "Forecast product sales for coming months.",
    resources: ["https://www.kaggle.com/competitions/demand-forecasting-kernels-only"],
    category: "Data Science"
  },
  {
    projectName: "Fraud Detection",
    description: "Identify fraudulent transactions.",
    resources: ["https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud"],
    category: "Data Science"
  },
  {
    projectName: "Churn Prediction",
    description: "Predict if a customer will leave a company.",
    resources: ["https://www.kaggle.com/datasets/blastchar/telco-customer-churn"],
    category: "Data Science"
  },
  {
    projectName: "Covid-19 Data Analysis",
    description: "Analyze Covid-19 spread and recovery trends.",
    resources: ["https://www.kaggle.com/datasets/imdevskp/corona-virus-report"],
    category: "Data Science"
  },

  // Java Development
  {
    projectName: "Library Management System",
    description: "Create a system to manage books, members, and loans.",
    resources: ["https://www.geeksforgeeks.org/library-management-system/"],
    category: "Java Development"
  },
  {
    projectName: "Online Banking System",
    description: "Implement banking features like fund transfer and account management.",
    resources: ["https://www.javatpoint.com/"],
    category: "Java Development"
  },
  {
    projectName: "Hotel Booking System",
    description: "Create a hotel booking platform with room availability check.",
    resources: ["https://www.geeksforgeeks.org/hotel-management-system/"],
    category: "Java Development"
  },
  {
    projectName: "Student Management System",
    description: "Manage student records and grades.",
    resources: ["https://www.javatpoint.com/student-management-system"],
    category: "Java Development"
  },
  {
    projectName: "Inventory Management System",
    description: "Track products, suppliers, and stock levels.",
    resources: ["https://www.geeksforgeeks.org/inventory-management-system/"],
    category: "Java Development"
  },
  {
    projectName: "Payroll System",
    description: "Automate salary calculations and payslip generation.",
    resources: ["https://www.javatpoint.com/payroll-system"],
    category: "Java Development"
  },
  {
    projectName: "Chat Application",
    description: "Build a Java-based real-time chat app.",
    resources: ["https://www.javatpoint.com/socket-programming"],
    category: "Java Development"
  },
  {
    projectName: "E-voting System",
    description: "Develop a secure online voting platform.",
    resources: ["https://www.geeksforgeeks.org/e-voting-system/"],
    category: "Java Development"
  },
  {
    projectName: "Quiz Application",
    description: "Create a quiz system with timer and score tracking.",
    resources: ["https://www.javatpoint.com/quiz-application-in-java"],
    category: "Java Development"
  },
  {
    projectName: "Hospital Management System",
    description: "Manage hospital appointments, staff, and patients.",
    resources: ["https://www.geeksforgeeks.org/hospital-management-system/"],
    category: "Java Development"
  }
];

export default projects;