const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/emmanuel-tour-of-heroes'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/emmanuel-tour-of-heroes/index.html'));
});

app.listen(process.env.PORT || 3000);
