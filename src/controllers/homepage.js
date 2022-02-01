const fetch = require('cross-fetch');
const { response } = require('express');
const AIC_URL = 'https://api.artic.edu/api/v1/artworks/search?q='; 

const getArtworks = async (req, res = response) => {
    const { keyword } = req.params;

    debugger;
    try {
        const resp = await fetch(
            `${AIC_URL}${keyword}&limit=15&fields=id,title,image_id,date_display,artist_display,place_of_origin,medium_display`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (resp.status >= 400) {
            throw new Error('Bad response from AIC server');
        }

        const { data = [] } = await resp.json(); // TODO: if the check above isn't waiting, is it possible to receive an error here?
        const dataWithUrls = data.map((image) => ({
            ...image,
            image_url: `https://www.artic.edu/iiif/2/${image.image_id}/full/843,/0/default.jpg`,
        }));
        // TODO: look into why the image API url is the way it is, esp the 843,/0 piece ^

        res.json(dataWithUrls);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getArtworks
};