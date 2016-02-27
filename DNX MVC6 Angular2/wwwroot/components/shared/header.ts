import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'header'
})
@View({
        templateUrl: 'components/shared/header.html',
        styleUrls: ['components/shared/header.css']
})
class HeaderComponent {
    public applicationName: string;

    constructor() {
        this.applicationName = 'DNX, MVC6, TypeScript, Angular2';
    }
}
bootstrap(HeaderComponent);