<!DOCTYPE html>
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoja de Vida</title>
    <link rel="stylesheet" href="css/index.css">
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&family=Libre+Caslon+Display&family=Open+Sans&family=PT+Serif&family=Playfair+Display&display=swap" rel="stylesheet">
</head>
<body>
    <div class="name">
        <div class="img">
            <img src="foto.jpg" alt="">
        </div>
        <div class="content">
            <p class="p-1">Alejandro Ladino Galvis</p>
            <p class="p-2">25 años, Estudiante de Ingeniería de sistemas y telecomunicaciones</p>

        </div>
    </div>
    <div class="info">
        <p class="titleSeccion">Información personal</p>
        <p class="titleInfo">Nombre y Apellidos:</p>
        <p class="infoInfo">Alejandro Ladino Galvis</p><br>
        <p class="titleInfo">Dirección:</p>
        <p class="infoInfo">Calle 51G # 34-70</p><br>
        <p class="titleInfo">Teléfono:</p>
        <p class="infoInfo">3216092882</p><br>
        <p class="titleInfo">Email:</p>
        <p class="infoInfo">alejoladino0724@gmail.com</p><br>
        <p class="titleInfo">Fecha de nacimiento:</p>
        <p class="infoInfo">24 de Julio del 1996</p><br>
        <p class="titleInfo">Cédula:</p>
        <p class="infoInfo">1053851366</p><br>
    </div>
    <div class="info">
        <p class="titleSeccion">Experiencia laboral</p>
        <p class="titleInfo">Feryeik Jeans:</p>
        <p class="infoInfo">Asesor comercial</p><br>
        <p class="titleInfo">Fabi Sport:</p>
        <p class="infoInfo">Asesor comercial</p><br>
        <p class="titleInfo">Comdata Group:</p>
        <p class="infoInfo">Asesor comercial</p><br>
        <p class="titleInfo">Comdata Group:</p>
        <p class="infoInfo">Auditor de calidad</p><br>
        <p class="titleInfo">Comdata Group:</p>
        <p class="infoInfo">Consultor Analytics (Cargo actual)</p><br>
    </div>
    <div class="info">
        <p class="titleSeccion">Educación e Información</p>
        <p class="titleInfo">Institución Educativa Rural Miguel Antonio Caro:</p>
        <p class="infoInfo">Primaria</p><br>
        <p class="titleInfo">Institución Educativa Rural Miguel Antonio Caro:</p>
        <p class="infoInfo">Secundaria</p><br>
        <p class="titleInfo">Universidad de Manizales:</p>
        <p class="infoInfo">Ingeniería de sistemas y telecomunicaciones (cursando actualmente)</p><br>
    </div>
    <div class="info">
        <p class="titleSeccion">Aptitudes y Pasatiempos</p>
        <p class="titleInfo">Aptitudes:</p>
        <p class="infoInfo">Soy ágil, me gusta el trabajo en equipo, facil adaptación al cambio, puedo trabajar bajo presión, me considero muy responsable y proactiva en todo lo que hago.</p><br>
        <p class="titleInfo">Pasatiempos:</p>
        <p class="infoInfo">El cine, salir a comer, ir a bailar, estudiar y leer.</p><br>
    </div>
    <div class="info">
        <p class="titleSeccion">Lenguas</p>
        <p class="titleInfo">Materna:</p>
        <p class="infoInfo">Español</p><br>
        <p class="titleInfo">Secundaria:</p>
        <p class="infoInfo">Inglés, nivel básico</p><br>
    </div>
</body>
</html>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
