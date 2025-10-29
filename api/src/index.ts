import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import v1Router from './routes/v1Router';

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors({
	origin: process.env.CORS_ORIGIN || '*',
	credentials: true,
	optionsSuccessStatus: 200
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

if (NODE_ENV === 'development') {
	app.use(morgan('dev'));
} else {
	app.use(morgan('combined'));
}

app.get('/health', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Server is running',
		timestamp: new Date().toISOString(),
		environment: NODE_ENV
	});
});

app.use('/api/v1', v1Router);

app.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Welcome to the API',
		version: '1.0.0',
		endpoints: {
			health: '/health',
			api: '/api/v1'
		}
	});
});

app.use((req, res) => {
	res.status(404).json({
		status: 'error',
		message: 'Route not found',
		path: req.originalUrl
	});
});

const server = app.listen(PORT, () => {
	console.log(`
    ╔═══════════════════════════════════════╗
    ║  Server is running successfully!      ║
    ╠═══════════════════════════════════════╣
    ║  Runtime: Bun${' '.repeat(24)} ║
    ║  Environment: ${NODE_ENV.padEnd(23)} ║
    ║  Port: ${PORT.toString().padEnd(30)} ║
    ║  URL: http://localhost:${PORT.toString().padEnd(17)}║
    ║  API Base: /api/v1${' '.repeat(20)}║
    ╚═══════════════════════════════════════╝
  `);
});

process.on('SIGTERM', () => {
	console.log('SIGTERM signal received: closing HTTP server');
	server.close(() => {
		console.log('HTTP server closed');
		process.exit(0);
	});
});
process.on('SIGINT', () => {
	console.log('SIGINT signal received: closing HTTP server');
	server.close(() => {
		console.log('HTTP server closed');
		process.exit(0);
	});
});

export default app;
