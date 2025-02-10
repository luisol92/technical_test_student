## About Technical Test Luis Olmedo Solis Mera

In this repository you can find two projects which are student-back-api and student-front-api.

1. If not exist data for grade , you can to register with this api


curl --location 'http://localhost:8000/api/crear-grade' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Once"
}'


2. Api to register student
   
curl --location 'http://localhost:8000/api/crear-alumno' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Martin Guranizo Vejarano",
    "birthdate": "23/03/2014",
    "father": "N/A",
    "mother": "Juliana Vejarano Mendoza",
    "grade_id": 5,
    "section": "Primaria"
}'

4. Api to search student by gradeId
   
curl --location 'http://localhost:8000/api/consultar-alumno/1' \
--header 'Authorization: Basic YWRtaW46YWRtaW4='


Test Evidence Front

Register student
<img width="1412" alt="Screenshot 2025-02-09 at 9 43 44 PM" src="https://github.com/user-attachments/assets/1908b033-2db8-41ca-a308-04037cbe0b87" />

Save Student
<img width="642" alt="Screenshot 2025-02-09 at 9 45 29 PM" src="https://github.com/user-attachments/assets/fbb8f276-8a4a-41ac-9e77-7e20e4966b85" />

Validate Fields
<img width="1412" alt="Screenshot 2025-02-09 at 9 46 08 PM" src="https://github.com/user-attachments/assets/f4191517-74ec-4a0f-a8b1-0303e8d6e03a" />

Search student
<img width="1428" alt="Screenshot 2025-02-09 at 9 46 37 PM" src="https://github.com/user-attachments/assets/476bd832-ff20-46c4-9c81-438e987b5f5f" />

Search studen by Grades
<img width="1408" alt="Screenshot 2025-02-09 at 9 47 20 PM" src="https://github.com/user-attachments/assets/c6359395-95b9-4906-935d-661cbbfa06eb" />

Validate Fields
<img width="1367" alt="Screenshot 2025-02-09 at 9 48 04 PM" src="https://github.com/user-attachments/assets/9894655c-6a21-40db-9321-7ef27b4d3405" />


Test Evidence Back

Validate Authorization
<img width="1038" alt="Screenshot 2025-02-09 at 9 49 18 PM" src="https://github.com/user-attachments/assets/f7606ac5-1cd4-4c09-a4a4-7e43b48a002e" />

Validate search student by grade
<img width="1025" alt="Screenshot 2025-02-09 at 9 50 03 PM" src="https://github.com/user-attachments/assets/f164c1db-fe9b-438f-98d0-0be1df784c08" />

Create Student
<img width="1073" alt="Screenshot 2025-02-09 at 9 50 37 PM" src="https://github.com/user-attachments/assets/53f367d3-afab-4bff-9ec1-dd3e711a64c7" />

