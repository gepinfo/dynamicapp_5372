import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class listdropController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/listdrop', this.GpGetAllValues);
this.router.post('/listdrop', this.GpCreate);
this.router.get('/listdrop/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/listdrop/get/searchrelationship', this.GpSearchRelationship);
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.LISTDROPURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpCreate');
        new ApiAdapter().post(Constant.LISTDROPURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.LISTDROPURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                let response1:any;
                                                let response2:any;
                                                let finalresponse:any;
                                                let relURL = '/files/get/search?name=';                                                
                                                new CustomLogger().showLogger('info', 'Enter into listdropController.ts: GpSearch');
                                                new ApiAdapter().get(Constant.LISTDROPURL + `${req.url}`).then((res: any) => res.response.json()).then(result => 
                                                {
                                                  response1 = result;
                                                  new CustomLogger().showLogger('info', 'Exit from listdropController.ts: GpSearch');
                                                  new CustomLogger().showLogger('info', 'Enter into filesController.ts: GpSearch');
                                                  new ApiAdapter().get(`${Constant.ADDFILEURL}`+`${relURL}`+`${response1[0].files}`).then((res: any) => res.response.json()).then(result => 
                                                  {
                                                    response2 = result;
                                                    finalresponse = 
                                                    {
                                                      "response1" : response1,
                                                      "response2" : response2
                                                    }
                                                    new CustomLogger().showLogger('info', 'Exit from filesController.ts: GpSearch');
                                                    req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                    req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                  });
                                                }).catch(err => 
                                                   {
                                                    res.send(err);
                                                   });
                                            }

    //#@apifacebooklogin@#

    //#@apigithublogin@#








}

