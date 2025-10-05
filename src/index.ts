import colors from 'colors';
import app from "./server";


const port = process.env.PORT_APP || 4000;

// Start Express Server
app.listen(port, () => {
    console.log(colors.yellow.bold(`App starting in ${port} port`));
})