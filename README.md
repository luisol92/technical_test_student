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

3. Api to search student by gradeId
curl --location 'http://localhost:8000/api/consultar-alumno/1' \
--header 'Authorization: Basic YWRtaW46YWRtaW4='
