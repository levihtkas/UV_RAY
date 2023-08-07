
import express from "express" 
import bodyParser from "body-parser"
import axios from "axios"
import cors from "cors"

const app = express();
const port = 3000; // Or any other port you are using

// Use the cors middleware to allow cross-origin requests during development
app.use(cors());

app.get('/', async (req, res) => {
  const api_key = 'openuv-htarll0p398j-io';
  const latitude = 9.925201;
  const longitude = 78.119774;
  const altitude = 100;
  const datetime = ''; // Provide the desired datetime if required

  try {
    const response = await axios.get("https://api.openuv.io/api/v1/uv", {
      headers: {
        "x-access-token": api_key,
      },
      params: {
        lat: latitude,
        lng: longitude,

      },
    });

    var result = (response.data);
    const uvValue = response.data.result.uv;

    console.log(uvValue);
    res.render('index.ejs',{uvValue:uvValue});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




// import express from "express" 
// import bodyParser from "body-parser"
// import axios from "axios"

// const app = express();
// const port = 3000;
// const api_key = "openuv-htarll0p398j-io";
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/',(req,res)=>{
//     res.render('index.ejs')
// })

// app.get('/',async(req,res)=>{
//     try {
//         const response = await axios.get("https://api.openuv.io/api/v1/uv?lat=:lat&lng=:lng&alt=:alt&dt=:dt",{

//         headers: { 
//             "x-access-token" : openuv-htarll0p398j-io,
//             "Content-Type": application/json
//           },
//             params:{
                
//                 "lat":9.925201,
//                 "lng":78.119774
//             }
//         });

//         const result = response.data;
//         console.log(result)
        
//     } catch (error) {
//         res.status(404).send(error.message);
//     }

// })



// app.get("/apiKey", async(req, res) => {
//     //TODO 4: Write your code here to hit up the /filter endpoint
//     //Filter for all secrets with an embarassment score of 5 or greater
//     //HINT: You need to provide a query parameter of apiKey in the request.
  
//     try {
//       const response = await axios.get("https://secrets-api.appbrewery.com/filter", {
//         params: {
//           apiKey: yourAPIKey,
//           score:5
//         },
//       });
//       const result = response.data;
//       res.render("index.ejs", { content: JSON.stringify(result) });
      
//     } catch (error) {
//       res.status(404).send(error.message);
      
//     }