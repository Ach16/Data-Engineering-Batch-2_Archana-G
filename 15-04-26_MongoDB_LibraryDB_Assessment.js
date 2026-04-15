// # MongoDB Multi-Collection Assignment 2
// ## Database: `library_db`
// Collections:
// * `members`
// * `books`
// * `borrowings`
use library_db
//switched to db library_db

// ## 1. Create Members Collection
db.members.insertMany([
  { member_id: 1, name: "Aarav", city: "Hyderabad", membership_type: "Gold" },
  { member_id: 2, name: "Priya", city: "Bangalore", membership_type: "Silver" },
  { member_id: 3, name: "Rahul", city: "Mumbai", membership_type: "Gold" },
  { member_id: 4, name: "Sneha", city: "Delhi", membership_type: "Silver" },
  { member_id: 5, name: "Kiran", city: "Hyderabad", membership_type: "Gold" }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69df0eba0a3866c2aba1075c'),
//     '1': ObjectId('69df0eba0a3866c2aba1075d'),
//     '2': ObjectId('69df0eba0a3866c2aba1075e'),
//     '3': ObjectId('69df0eba0a3866c2aba1075f'),
//     '4': ObjectId('69df0eba0a3866c2aba10760')
//   }
// }

// ## 2. Create Books Collection
db.books.insertMany([
  { book_id: 101, title: "MongoDB Basics", category: "Database", author: "John Smith", price: 500 },
  { book_id: 102, title: "Python Fundamentals", category: "Programming", author: "Alice Brown", price: 650 },
  { book_id: 103, title: "Data Engineering Intro", category: "Data", author: "Mark Lee", price: 800 },
  { book_id: 104, title: "SQL for Beginners", category: "Database", author: "David Miller", price: 450 },
  { book_id: 105, title: "Machine Learning Start", category: "AI", author: "Sara Khan", price: 900 }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69df0ecd0a3866c2aba10761'),
//     '1': ObjectId('69df0ecd0a3866c2aba10762'),
//     '2': ObjectId('69df0ecd0a3866c2aba10763'),
//     '3': ObjectId('69df0ecd0a3866c2aba10764'),
//     '4': ObjectId('69df0ecd0a3866c2aba10765')
//   }
// }

// ## 3. Create Borrowings Collection
db.borrowings.insertMany([
  { borrow_id: 1001, member_id: 1, book_id: 101, days_borrowed: 5, borrow_date: "2026-03-01" },
  { borrow_id: 1002, member_id: 2, book_id: 102, days_borrowed: 3, borrow_date: "2026-03-02" },
  { borrow_id: 1003, member_id: 1, book_id: 103, days_borrowed: 7, borrow_date: "2026-03-03" },
  { borrow_id: 1004, member_id: 3, book_id: 104, days_borrowed: 4, borrow_date: "2026-03-05" },
  { borrow_id: 1005, member_id: 5, book_id: 105, days_borrowed: 10, borrow_date: "2026-03-07" },
  { borrow_id: 1006, member_id: 5, book_id: 101, days_borrowed: 2, borrow_date: "2026-03-08" }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69df0eda0a3866c2aba10766'),
//     '1': ObjectId('69df0eda0a3866c2aba10767'),
//     '2': ObjectId('69df0eda0a3866c2aba10768'),
//     '3': ObjectId('69df0eda0a3866c2aba10769'),
//     '4': ObjectId('69df0eda0a3866c2aba1076a'),
//     '5': ObjectId('69df0eda0a3866c2aba1076b')
//   }
// }

// ## Basic Queries
// 1. Display all members.
db.members.find()
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075c'),
//   member_id: 1,
//   name: 'Aarav',
//   city: 'Hyderabad',
//   membership_type: 'Gold'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075d'),
//   member_id: 2,
//   name: 'Priya',
//   city: 'Bangalore',
//   membership_type: 'Silver'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075e'),
//   member_id: 3,
//   name: 'Rahul',
//   city: 'Mumbai',
//   membership_type: 'Gold'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075f'),
//   member_id: 4,
//   name: 'Sneha',
//   city: 'Delhi',
//   membership_type: 'Silver'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba10760'),
//   member_id: 5,
//   name: 'Kiran',
//   city: 'Hyderabad',
//   membership_type: 'Gold'
// }

// 2. Display all books.
db.books.find()
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10761'),
//   book_id: 101,
//   title: 'MongoDB Basics',
//   category: 'Database',
//   author: 'John Smith',
//   price: 500
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10762'),
//   book_id: 102,
//   title: 'Python Fundamentals',
//   category: 'Programming',
//   author: 'Alice Brown',
//   price: 650
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10763'),
//   book_id: 103,
//   title: 'Data Engineering Intro',
//   category: 'Data',
//   author: 'Mark Lee',
//   price: 800
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10764'),
//   book_id: 104,
//   title: 'SQL for Beginners',
//   category: 'Database',
//   author: 'David Miller',
//   price: 450
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10765'),
//   book_id: 105,
//   title: 'Machine Learning Start',
//   category: 'AI',
//   author: 'Sara Khan',
//   price: 900
// }

// 3. Display all borrowings.
db.borrowings.find()
// {
//   _id: ObjectId('69df0eda0a3866c2aba10766'),
//   borrow_id: 1001,
//   member_id: 1,
//   book_id: 101,
//   days_borrowed: 5,
//   borrow_date: '2026-03-01'
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10767'),
//   borrow_id: 1002,
//   member_id: 2,
//   book_id: 102,
//   days_borrowed: 3,
//   borrow_date: '2026-03-02'
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10768'),
//   borrow_id: 1003,
//   member_id: 1,
//   book_id: 103,
//   days_borrowed: 7,
//   borrow_date: '2026-03-03'
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10769'),
//   borrow_id: 1004,
//   member_id: 3,
//   book_id: 104,
//   days_borrowed: 4,
//   borrow_date: '2026-03-05'
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076a'),
//   borrow_id: 1005,
//   member_id: 5,
//   book_id: 105,
//   days_borrowed: 10,
//   borrow_date: '2026-03-07'
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076b'),
//   borrow_id: 1006,
//   member_id: 5,
//   book_id: 101,
//   days_borrowed: 2,
//   borrow_date: '2026-03-08'
// }

// ## Filtering
// 4. Show members from **Hyderabad**.
db.members.find({city:"Hyderabad"})
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075c'),
//   member_id: 1,
//   name: 'Aarav',
//   city: 'Hyderabad',
//   membership_type: 'Gold'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba10760'),
//   member_id: 5,
//   name: 'Kiran',
//   city: 'Hyderabad',
//   membership_type: 'Gold'
// }

// 5. Show books in the **Database** category.
db.books.find({category:"Database"})
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10761'),
//   book_id: 101,
//   title: 'MongoDB Basics',
//   category: 'Database',
//   author: 'John Smith',
//   price: 500
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10764'),
//   book_id: 104,
//   title: 'SQL for Beginners',
//   category: 'Database',
//   author: 'David Miller',
//   price: 450
// }

// 6. Show books whose **price is greater than 600**.
db.books.find({price:{$gt:600}})  
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10762'),
//   book_id: 102,
//   title: 'Python Fundamentals',
//   category: 'Programming',
//   author: 'Alice Brown',
//   price: 650
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10763'),
//   book_id: 103,
//   title: 'Data Engineering Intro',
//   category: 'Data',
//   author: 'Mark Lee',
//   price: 800
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10765'),
//   book_id: 105,
//   title: 'Machine Learning Start',
//   category: 'AI',
//   author: 'Sara Khan',
//   price: 900
// }

// 7. Show borrowings where **days_borrowed is greater than 5**.
db.borrowings.find({days_borrowed:{$gt:5}})
// {
//   _id: ObjectId('69df0eda0a3866c2aba10768'),
//   borrow_id: 1003,
//   member_id: 1,
//   book_id: 103,
//   days_borrowed: 7,
//   borrow_date: '2026-03-03'
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076a'),
//   borrow_id: 1005,
//   member_id: 5,
//   book_id: 105,
//   days_borrowed: 10,
//   borrow_date: '2026-03-07'
// }

// ## Sorting
// 8. Display books sorted by **price descending**.
db.books.find().sort({price:-1})
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10765'),
//   book_id: 105,
//   title: 'Machine Learning Start',
//   category: 'AI',
//   author: 'Sara Khan',
//   price: 900
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10763'),
//   book_id: 103,
//   title: 'Data Engineering Intro',
//   category: 'Data',
//   author: 'Mark Lee',
//   price: 800
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10762'),
//   book_id: 102,
//   title: 'Python Fundamentals',
//   category: 'Programming',
//   author: 'Alice Brown',
//   price: 650
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10761'),
//   book_id: 101,
//   title: 'MongoDB Basics',
//   category: 'Database',
//   author: 'John Smith',
//   price: 500
// }
// {
//   _id: ObjectId('69df0ecd0a3866c2aba10764'),
//   book_id: 104,
//   title: 'SQL for Beginners',
//   category: 'Database',
//   author: 'David Miller',
//   price: 450
// }

// 9. Display members sorted by **name ascending**.
db.members.find().sort({name:1})
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075c'),
//   member_id: 1,
//   name: 'Aarav',
//   city: 'Hyderabad',
//   membership_type: 'Gold'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba10760'),
//   member_id: 5,
//   name: 'Kiran',
//   city: 'Hyderabad',
//   membership_type: 'Gold'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075d'),
//   member_id: 2,
//   name: 'Priya',
//   city: 'Bangalore',
//   membership_type: 'Silver'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075e'),
//   member_id: 3,
//   name: 'Rahul',
//   city: 'Mumbai',
//   membership_type: 'Gold'
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075f'),
//   member_id: 4,
//   name: 'Sneha',
//   city: 'Delhi',
//   membership_type: 'Silver'
// }

// ## Counting
// 10. Count the total number of members.
db.members.countDocuments()
//5

// 11. Count the total number of books.
db.books.countDocuments()
//5

// 12. Count how many books belong to the **Database** category.
db.books.countDocuments({category:"Database"})
//2

// ## Aggregation
// 13. Find the **average price of all books**.
db.books.aggregate([{$group:{_id: null,averagePrice:{$avg:"$price"}}}])
// {
//   _id: null,
//   averagePrice: 660
// }

// 14. Find the **maximum book price**.
db.books.aggregate([{$group:{_id:null,maxPrice:{$max:"$price"}}}])
// {
//   _id: null,
//   maxPrice: 900
// }

// 15. Find the **minimum book price**.
db.books.aggregate([{$group:{_id:null,minPrice:{$min:"$price"}}}])
// {
//   _id: null,
//   minPrice: 450
// }

// 16. Find the **total days borrowed per member**.
db.borrowings.aggregate([{$group:{_id:"$member_id",totalDaysBorrowed:{$sum:"$days_borrowed"}}}])
// {
//   _id: 3,
//   totalDaysBorrowed: 4
// }
// {
//   _id: 1,
//   totalDaysBorrowed: 12
// }
// {
//   _id: 2,
//   totalDaysBorrowed: 3
// }
// {
//   _id: 5,
//   totalDaysBorrowed: 12
// }

// ## Multi-Collection Queries using `$lookup`
// 17. Display borrowings along with **member details**.
db.borrowings.aggregate([
  {
    $lookup:{
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "memberDetails"
    }
  }
])
// {
//   _id: ObjectId('69df0eda0a3866c2aba10766'),
//   borrow_id: 1001,
//   member_id: 1,
//   book_id: 101,
//   days_borrowed: 5,
//   borrow_date: '2026-03-01',
//   memberDetails: [
//     {
//       _id: ObjectId('69df0eba0a3866c2aba1075c'),
//       member_id: 1,
//       name: 'Aarav',
//       city: 'Hyderabad',
//       membership_type: 'Gold'
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10767'),
//   borrow_id: 1002,
//   member_id: 2,
//   book_id: 102,
//   days_borrowed: 3,
//   borrow_date: '2026-03-02',
//   memberDetails: [
//     {
//       _id: ObjectId('69df0eba0a3866c2aba1075d'),
//       member_id: 2,
//       name: 'Priya',
//       city: 'Bangalore',
//       membership_type: 'Silver'
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10768'),
//   borrow_id: 1003,
//   member_id: 1,
//   book_id: 103,
//   days_borrowed: 7,
//   borrow_date: '2026-03-03',
//   memberDetails: [
//     {
//       _id: ObjectId('69df0eba0a3866c2aba1075c'),
//       member_id: 1,
//       name: 'Aarav',
//       city: 'Hyderabad',
//       membership_type: 'Gold'
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10769'),
//   borrow_id: 1004,
//   member_id: 3,
//   book_id: 104,
//   days_borrowed: 4,
//   borrow_date: '2026-03-05',
//   memberDetails: [
//     {
//       _id: ObjectId('69df0eba0a3866c2aba1075e'),
//       member_id: 3,
//       name: 'Rahul',
//       city: 'Mumbai',
//       membership_type: 'Gold'
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076a'),
//   borrow_id: 1005,
//   member_id: 5,
//   book_id: 105,
//   days_borrowed: 10,
//   borrow_date: '2026-03-07',
//   memberDetails: [
//     {
//       _id: ObjectId('69df0eba0a3866c2aba10760'),
//       member_id: 5,
//       name: 'Kiran',
//       city: 'Hyderabad',
//       membership_type: 'Gold'
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076b'),
//   borrow_id: 1006,
//   member_id: 5,
//   book_id: 101,
//   days_borrowed: 2,
//   borrow_date: '2026-03-08',
//   memberDetails: [
//     {
//       _id: ObjectId('69df0eba0a3866c2aba10760'),
//       member_id: 5,
//       name: 'Kiran',
//       city: 'Hyderabad',
//       membership_type: 'Gold'
//     }
//   ]
// }

// 18. Display borrowings along with **book details**.
db.borrowings.aggregate([
  {
    $lookup:{
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "bookDetails"
    }
  }
])
// {
//   _id: ObjectId('69df0eda0a3866c2aba10766'),
//   borrow_id: 1001,
//   member_id: 1,
//   book_id: 101,
//   days_borrowed: 5,
//   borrow_date: '2026-03-01',
//   bookDetails: [
//     {
//       _id: ObjectId('69df0ecd0a3866c2aba10761'),
//       book_id: 101,
//       title: 'MongoDB Basics',
//       category: 'Database',
//       author: 'John Smith',
//       price: 500
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10767'),
//   borrow_id: 1002,
//   member_id: 2,
//   book_id: 102,
//   days_borrowed: 3,
//   borrow_date: '2026-03-02',
//   bookDetails: [
//     {
//       _id: ObjectId('69df0ecd0a3866c2aba10762'),
//       book_id: 102,
//       title: 'Python Fundamentals',
//       category: 'Programming',
//       author: 'Alice Brown',
//       price: 650
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10768'),
//   borrow_id: 1003,
//   member_id: 1,
//   book_id: 103,
//   days_borrowed: 7,
//   borrow_date: '2026-03-03',
//   bookDetails: [
//     {
//       _id: ObjectId('69df0ecd0a3866c2aba10763'),
//       book_id: 103,
//       title: 'Data Engineering Intro',
//       category: 'Data',
//       author: 'Mark Lee',
//       price: 800
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba10769'),
//   borrow_id: 1004,
//   member_id: 3,
//   book_id: 104,
//   days_borrowed: 4,
//   borrow_date: '2026-03-05',
//   bookDetails: [
//     {
//       _id: ObjectId('69df0ecd0a3866c2aba10764'),
//       book_id: 104,
//       title: 'SQL for Beginners',
//       category: 'Database',
//       author: 'David Miller',
//       price: 450
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076a'),
//   borrow_id: 1005,
//   member_id: 5,
//   book_id: 105,
//   days_borrowed: 10,
//   borrow_date: '2026-03-07',
//   bookDetails: [
//     {
//       _id: ObjectId('69df0ecd0a3866c2aba10765'),
//       book_id: 105,
//       title: 'Machine Learning Start',
//       category: 'AI',
//       author: 'Sara Khan',
//       price: 900
//     }
//   ]
// }
// {
//   _id: ObjectId('69df0eda0a3866c2aba1076b'),
//   borrow_id: 1006,
//   member_id: 5,
//   book_id: 101,
//   days_borrowed: 2,
//   borrow_date: '2026-03-08',
//   bookDetails: [
//     {
//       _id: ObjectId('69df0ecd0a3866c2aba10761'),
//       book_id: 101,
//       title: 'MongoDB Basics',
//       category: 'Database',
//       author: 'John Smith',
//       price: 500
//     }
//   ]
// }


// 19. Display **member name and book title** for each borrowing.
db.borrowings.aggregate([
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $project: {
      _id: 0,
      member_name: "$member.name",
      book_title: "$book.title"
    }
  }
])
// {
//   member_name: 'Aarav',
//   book_title: 'MongoDB Basics'
// }
// {
//   member_name: 'Priya',
//   book_title: 'Python Fundamentals'
// }
// {
//   member_name: 'Aarav',
//   book_title: 'Data Engineering Intro'
// }
// {
//   member_name: 'Rahul',
//   book_title: 'SQL for Beginners'
// }
// {
//   member_name: 'Kiran',
//   book_title: 'Machine Learning Start'
// }
// {
//   member_name: 'Kiran',
//   book_title: 'MongoDB Basics'
// }

// 20. Display **book title and total times it was borrowed**.
db.borrowings.aggregate([
  {
    $group: {
      _id: "$book_id",
      total_borrowed: {$sum:1}
    }
  },
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $project: {
      _id: 0,
      book_title: "$book.title",
      total_borrowed: 1
    }
  }
])
// {
//   total_borrowed: 1,
//   book_title: 'SQL for Beginners'
// }
// {
//   total_borrowed: 1,
//   book_title: 'Python Fundamentals'
// }
// {
//   total_borrowed: 2,
//   book_title: 'MongoDB Basics'
// }
// {
//   total_borrowed: 1,
//   book_title: 'Data Engineering Intro'
// }
// {
//   total_borrowed: 1,
//   book_title: 'Machine Learning Start'
// }

// ## Advanced Aggregation
// 21. Find the **total number of books borrowed by each member**.
db.borrowings.aggregate([
  {
    $group: {
      _id: "$member_id",
      total_books: {$sum:1}
    }
  }
])
// {
//   _id: 2,
//   total_books: 1
// }
// {
//   _id: 1,
//   total_books: 2
// }
// {
//   _id: 3,
//   total_books: 1
// }
// {
//   _id: 5,
//   total_books: 2
// }

// 22. Find the **most borrowed book**.
db.borrowings.aggregate([
  {
    $group: {
      _id: "$book_id",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 }
])
// {
//   _id: 101,
//   total: 2
// }

// 23. Find the **total borrowing count by category**.
db.borrowings.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book"},
  {
    $group: {
      _id: "$book.category",
      total_borrowed: {$sum:1}
    }
  }
])
// {
//   _id: 'AI',
//   total_borrowed: 1
// }
// {
//   _id: 'Programming',
//   total_borrowed: 1
// }
// {
//   _id: 'Database',
//   total_borrowed: 3
// }
// {
//   _id: 'Data',
//   total_borrowed: 1
// }

// 24. Find members who borrowed **more than one book**.
db.borrowings.aggregate([
  {
    $group: {
      _id: "$member_id",
      count: {$sum: 1}
    }
  },
  {
    $match: {
      count: {$gt:1}
    }
  }
])
// {
//   _id: 1,
//   count: 2
// }
// {
//   _id: 5,
//   count: 2
// }

// ## Final Challenge
// 25. Display:member name,city,total books borrowed. Sort by **highest books borrowed first**.
db.members.aggregate([
  {
    $lookup: {
      from: "borrowings",
      localField: "member_id",
      foreignField: "member_id",
      as: "borrowings"
    }
  },
  {
    $project: {
      name: 1,
      city: 1,
      total_books: { $size:"$borrowings" }
    }
  },
  { $sort: { total_books: -1 } }
])
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075c'),
//   name: 'Aarav',
//   city: 'Hyderabad',
//   total_books: 2
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba10760'),
//   name: 'Kiran',
//   city: 'Hyderabad',
//   total_books: 2
// }{
//   _id: ObjectId('69df0eba0a3866c2aba1075d'),
//   name: 'Priya',
//   city: 'Bangalore',
//   total_books: 1
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075e'),
//   name: 'Rahul',
//   city: 'Mumbai',
//   total_books: 1
// }
// {
//   _id: ObjectId('69df0eba0a3866c2aba1075f'),
//   name: 'Sneha',
//   city: 'Delhi',
//   total_books: 0
// }