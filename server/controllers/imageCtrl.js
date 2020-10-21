const axios = require('axios');

module.exports = {


    getHeroImage: async (req, response) => {
        const imageArray = [];



        const req1 = axios.get('http://superheroapi.com/api/370642517457220/644/image');
        const req2 = axios.get('http://superheroapi.com/api/370642517457220/70/image');
        const req3 = axios.get('http://superheroapi.com/api/370642517457220/213/image');

        axios
            .all([req1, req2, req3])
            .then(([res1, res2, res3]) => {
                const char1 = { name: res1.data.name, url: res1.data.url };
                const char2 = { name: res2.data.name, url: res2.data.url };
                const char3 = { name: res3.data.name, url: res3.data.url };

                imageArray.push(char1, char2, char3);
                response.status(200).send(imageArray);
            })


    }

}
