const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 8080;

const authenticateToken = require('./middleware/middleware');
const basicRouter = require('./routes/basic.router')
const autoRouter = require('./routes/auto.routes')
const autoImagesRouter = require('./routes/auto-images.router')
// const typesRouter = require('./routes/types.routes')
const userRouter = require('./routes/user.routes')
const clientsRouter = require('./routes/clients.routes')
const salesRouter = require('./routes/sales.routes')
const modelsRouter = require('./routes/models.router')

const app = express();

const corsOptions = {
    origin: 'https://autolix.vercel.app',
    optionSuccessStatus: 200,
}

app.use(express.json());
app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'));
app.use('/api', userRouter);
app.use('/api', basicRouter);

app.use(authenticateToken);
app.use('/api', autoRouter);
app.use('/api', autoImagesRouter);
app.use('/api', modelsRouter);
// app.use('/api', typesRouter);
app.use('/api', clientsRouter);
app.use('/api', salesRouter);


app.listen(PORT, () => console.log(`Server started on ${PORT}`))
