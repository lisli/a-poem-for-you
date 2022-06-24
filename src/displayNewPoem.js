import axios from 'axios'

function displayNewPoem() {
    const config = {
        headers: {
            Accept: 'application/json'
        },
    }
    axios.get('https://poetrydb.org/random/1/author,title,lines', config).then((response) => {
        document.getElementById('title').innerHTML = response.data[0].title;
        document.getElementById('author').innerHTML = response.data[0].author;

        const lines = response.data[0].lines;
        let i, len, text;
        for (i = 0, len = lines.length, text = ""; i < len; i++) {
            text += lines[i] + "<br>";
        }
        document.getElementById("poem").innerHTML = text;
        
        
    
    })


}
export default displayNewPoem