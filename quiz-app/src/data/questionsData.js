export const questionsData = {
  dbms: [
    {
      id: 1,
      question: "Which SQL statement is used to extract data from a database?",
      options: ["GET", "SELECT", "EXTRACT", "CHOOSE"],
      answer: "SELECT",
    },
    {
      id: 2,
      question: "Which of the following is a property of the relational model?",
      options: [
        "Complex Data Types",
        "Hierarchical Data Storage",
        "Tuple-at-a-time Processing",
        "Data is stored in tables"
      ],
      answer: "Data is stored in tables",
    },
    {
      id: 3,
      question: "What does ACID stand for in DBMS?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Clarity, Integrity, Durability",
        "Atomicity, Clarity, Isolation, Dependency",
        "Accuracy, Concurrency, Isolation, Dependency"
      ],
      answer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
      id: 4,
      question: "What is a primary key?",
      options: [
        "A key to encrypt data",
        "A unique identifier for a row",
        "A non-unique attribute",
        "A column used for sorting"
      ],
      answer: "A unique identifier for a row",
    }
  ],
  java: [
    {
      id: 1,
      question: "Which of the following is not a feature of Java?",
      options: ["Object-oriented", "Platform dependent", "Secure", "Robust"],
      answer: "Platform dependent",
    },
    {
      id: 2,
      question: "What is method overloading in Java?",
      options: [
        "Redefining a method in subclass",
        "Changing method name",
        "Defining multiple methods with the same name but different parameters",
        "Writing the same method in multiple classes"
      ],
      answer: "Defining multiple methods with the same name but different parameters",
    },
    {
      id: 3,
      question: "What is the output of the following code?\nint a = 10;\nint b = ++a + a++ + --a;\nSystem.out.println(b);",
      options: ["32", "33", "31", "34"],
      answer: "33",
    },
    {
      id: 4,
      question: "Which of these is used to achieve runtime polymorphism in Java?",
      options: ["Constructor", "Method Overloading", "Method Overriding", "Static block"],
      answer: "Method Overriding",
    }
  ],
  os: [
    {
      id: 1,
      question: "Which of the following scheduling algorithms may cause starvation?",
      options: ["FCFS", "Round Robin", "Shortest Job First", "Multilevel Queue"],
      answer: "Shortest Job First",
    },
    {
      id: 2,
      question: "What is the purpose of a system call in OS?",
      options: [
        "To execute I/O instructions directly",
        "To provide an interface between user and kernel",
        "To allocate memory",
        "To switch processes"
      ],
      answer: "To provide an interface between user and kernel",
    },
    {
      id: 3,
      question: "Which one of the following is a non-preemptive scheduling algorithm?",
      options: ["SJF", "Round Robin", "FCFS", "Priority Scheduling"],
      answer: "FCFS",
    },
    {
      id: 4,
      question: "What is a deadlock?",
      options: [
        "A condition where all processes are running",
        "A condition where processes wait indefinitely",
        "A high CPU usage state",
        "A terminated process state"
      ],
      answer: "A condition where processes wait indefinitely",
    }
  ],
  aptitude: [
    {
      id: 1,
      question: "What is the next number in the series: 2, 6, 12, 20?",
      options: ["28", "30", "36", "40"],
      answer: "28",
    },
    {
      id: 2,
      question: "A train 150 meters long is running at 60 km/h. How long will it take to pass a man standing on the platform?",
      options: ["9 sec", "12 sec", "15 sec", "18 sec"],
      answer: "9 sec",
    },
    {
      id: 3,
      question: "If 3x - 5 = 16, what is the value of x?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      id: 4,
      question: "A bag contains 4 red, 5 green and 6 blue balls. What is the probability of picking a red ball?",
      options: ["4/15", "5/15", "6/15", "1/3"],
      answer: "4/15",
    }
  ]
};
