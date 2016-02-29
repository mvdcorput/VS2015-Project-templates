import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'header',
    moduleId: module.id
})
@View({
        templateUrl: 'header.html',
        styleUrls: ['header.css']
})
class HeaderComponent {
    public applicationName: string;

    constructor() {
        this.applicationName = 'DNX, MVC6, TypeScript, Angular2';
    }
}
bootstrap(HeaderComponent);