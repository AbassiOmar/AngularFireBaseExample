
import { Injectable } from '@angular/core';

@Injectable()
export class Appconfig {
    private _config: { [key: string]: string };
    constructor() {
        this._config = {
            PathAPI: 'http//localhost:50498/api/'
        };
    };

};

