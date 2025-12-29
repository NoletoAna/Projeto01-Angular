import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface HeaderConfig{
    title:string;
    subtitle?:string;
    user?:string;
}

@Injectable({providedIn:'root'})

export class HeaderService{
    private headerSubject = new BehaviorSubject<HeaderConfig>({
        title:'',
        subtitle:'',
        user:'',
    });

    header$ = this.headerSubject.asObservable();

    setHeader(config: HeaderConfig){
        this.headerSubject.next(config);
    }
}