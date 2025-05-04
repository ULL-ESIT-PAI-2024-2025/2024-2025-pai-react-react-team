/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Javier Gómez Alayón
 * @since 01/05/25
 * @desc Main file of the example of how to create a status variable using React.
 * 
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from './Example';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);