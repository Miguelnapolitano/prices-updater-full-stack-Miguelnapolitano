import connection from './config';

const startDataBase = (): void => {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Database is connected.');
  });
};

export default startDataBase;