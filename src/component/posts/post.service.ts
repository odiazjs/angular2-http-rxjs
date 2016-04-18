import {Inject, Injector, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {IHttpContract} from '../../commons/http/http.contract.ts'
import {ResponseObject} from '../../commons/http/responseObject.model';
import {Post} from './post.model'
import {UrlProvider} from '../../commons/url/url.provider'

@Injectable()
export class PostService implements IHttpContract{

    public response : Response
    
    constructor (public http: Http) {
        
    }
    
    Get () : Observable<ResponseObject> {

        return this.http.get(new UrlProvider(Post, 'GET').buildUrl())
                        .map(data => new ResponseObject(data))
        
    }
    
    Post (data : Post[]) : Response {
        return this.response
    }
    
    Delete (id : number) : Response {
        return this.response
    }
    
}