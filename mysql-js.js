import mysql from "mysql";
import dotenv from "dotenv"

dotenv.config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const getStudent = (lastName) => {
  const query = `SELECT * 
    FROM students 
    WHERE last_name = "${lastName}"`;

  const escapedquery = `SELECT *  
    FROM students 
    WHERE last_name = ? or last_name =?`;

  //connection.query(escapedquery, [lastName, "Anty"], (error, results) => {
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
    }
    console.log(results);
  });
};

getStudent("Yepes");

const createStudent = (
  student_id,
  first_name,
  last_name,
  email,
  phone,
  admission_date
) => {
  const newStudentQuery = `INSERT INTO students (student_id, first_name, last_name, email, phone, admission_date)
                values (${student_id}, "${first_name}","${last_name}","${email}","${phone}","${admission_date}")`;
  connection.query(newStudentQuery, (error, results) => {
    if (error) {
      console.error(error);
    }
    console.log(results);
  });
};

createStudent(7472, "suarez", "rick", "rick@magic.net", "1011411420", "2021-10-10")

connection.end()

 

