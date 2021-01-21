/**
 * Starts the application on the port specified.
 */
require('dotenv').config();

import api from './api';

//  ttt
const PORT = process.env.PORT || 8096;

api.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
