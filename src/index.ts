import './commons/http/http.contract'
import {bootstrap} from 'angular2/platform/browser'
import {PostPage} from './component/posts/post.controller';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(PostPage, [HTTP_PROVIDERS]);