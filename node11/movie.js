const http = require('http');
const queryString = require('querystring');
const port = 3000;

let movieList = [{title: '스타워즈', director:'조지루카스'}];

const server = http.createServer((req, res) => {
    if(req.method === 'post'){
        addNewMovie();
    } else if(req.method === 'get') {
        showList();
    }
});

server.listen((port, () => {
    console.log(`Server on ${port}`);
}))

function showList(req, res){
    res.writeHeader(200, {'Content-Type':'text/html:charset=UTF-8'});

), this};
    res.write('<ul></div>');
    res.write();
    res.write('<li></li>');
};

    res.write('</body>');
    res.write('</br>');
    res.end();
}

