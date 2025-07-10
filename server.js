import http from 'node:http';
import {getDataFromDB} from './database/db.js';
import {continentError, countryError, error ,invalidQueryError} from './utils/errors.js';
import {sendJSONResponse} from './utils/sendJSONResponse.js';
import {filterByKey} from './utils/filter.js';
import {getDataByQueryParams} from './utils/getDataByQueryParams.js';

const PORT = 8000;

const server = http.createServer(async(req , res) => {
    const destination = await getDataFromDB();

    const urlobj = new URL(req.url, `http://${req.headers.host}`);
    const queryobj = Object.fromEntries(urlobj.searchParams);

//http://localhost:8000/api?continent=asia&is_open_to_public=true

    if (urlobj.pathname === '/api' && req.method === 'GET') {
        const validQueryKeys = ['continent', 'country', 'is_open_to_public'];
        const invalidKeys = Object.keys(queryobj).filter(key => !validQueryKeys.includes(key));

        if (invalidKeys.length > 0) {
            sendJSONResponse(res, 400, invalidQueryError);
            return;
        }
        let filteredData = getDataByQueryParams(destination, queryobj)
        sendJSONResponse(res, 200, filteredData);
    }
    //continent
    else if (req.url.startsWith("/api/continent") && req.method === 'GET') {
        const continentName = req.url.split('/').pop(); //africa
        filterByKey(destination, 'continent', continentName);
        if (filterByKey(destination, 'continent', continentName).length > 0) {
            sendJSONResponse(res, 200, filterByKey(destination, 'continent', continentName));
        }
        else{
            sendJSONResponse(res, 404, continentError);
        }
    }
    //continent

    //country
    else if(req.url.startsWith("/api/country") && req.method === 'GET') {
        const countryName = req.url.split('/').pop(); //india
        filterByKey(destination, 'country', countryName);
        if (filterByKey(destination, 'country', countryName).length > 0) {
            sendJSONResponse(res, 200, filterByKey(destination, 'country', countryName));
        }
        else{
            sendJSONResponse(res, 404, countryError);
        }

    }
    else{
        sendJSONResponse(res, 404, error);
    }

})

server.listen(PORT, () => console.log(`server is running on port: ${PORT}`)); 