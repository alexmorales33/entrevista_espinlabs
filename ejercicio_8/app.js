const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

class Photo {
  constructor(id) {
    this.id = id;
    this.likes = 0;
  }

  async like() {
    try {
      // Conectar a la base de datos
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mypassword',
        database: 'mydatabase'
      });

      // Buscar la foto en la base de datos
      const [rows, fields] = await connection.execute('SELECT * FROM photos WHERE id = ?', [this.id]);

      // Si la foto no existe, insertarla en la base de datos
      if (rows.length === 0) {
        await connection.execute('INSERT INTO photos (id, likes) VALUES (?, ?)', [this.id, 1]);
        console.log(`Se registró un like en la foto con ID ${this.id}`);
      } else {
        // Si la foto ya existe y no tiene un like registrado, actualizar el contador de likes
        if (rows[0].likes === 0) {
          await connection.execute('UPDATE photos SET likes = 1 WHERE id = ?', [this.id]);
          console.log(`Se registró un like en la foto con ID ${this.id}`);
        } else {
          console.log('Solo se puede guardar 1 solo like por foto');
        }
      }

      // Cerrar la conexión a la base de datos
      await connection.end();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Endpoint para registrar un like en una foto
app.post('/photos/:id/like', async (req, res) => {
  const photoId = req.params.id;
  const photo = new Photo(photoId);

  try {
    // Registrar el like en la foto
    await photo.like();
    res.status(200).send('Like registrado exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocurrió un error al registrar el like');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});