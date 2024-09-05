module.exports = (app) => {

    const apiroute = require('./APIController');

    //Business table id
    app.post('/insertbusiness',apiroute.insertbusiness);
    app.get('/getbusinesdata',apiroute.getbusinesdata);
    // app.delete('/deletebusiness/:id',apiroute.deletebusiness);
    // app.get('/idget/:id',apiroute.idget);

    //redirect get api call- category table data
    // app.post('/insertdata',apiroute.insertdata);
    // app.get('/GetsingleBusiness/:id',apiroute.GetsingleBusiness);
    // app.delete('/deletebyId/:id',apiroute.deletebyId);
    // app.get('/byIncategory/:id',apiroute.byIncategory);
    // app.get('/byOutcategory/:id',apiroute.byOutcategory);

    // app.post('/postdata',apiroute.postdata);
    // app.post('/postoutdata',apiroute.postoutdata);
    // app.put('/editrecord/:id',apiroute.editrecord);
    // app.get('/getoneRecEdit/:id',apiroute.getoneRecEdit);

    // chart show 
    // app.get('/chartshowdata/:id',apiroute.chartshowdata);
}