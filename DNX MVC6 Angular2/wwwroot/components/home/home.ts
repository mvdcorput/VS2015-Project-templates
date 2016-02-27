import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'home'
})
@View({
        templateUrl: 'components/home/home.html',
        styleUrls: ['components/home/home.css']
})
class HomeComponent {

}
bootstrap(HomeComponent);