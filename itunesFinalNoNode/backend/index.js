import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./Routes.js"
import path from "path"

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/", routes);
app.use(helmet.frameguard());

//connect front and backend
if (process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, 'frontend/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	})
}

app.listen(3001, () => {
	console.log("Server started at port 3001");
});

//notifies error in backend
app.use(function (err, req, res, next){
	console.log(err.stack)
	res.status(500).send("Backend error")
})
