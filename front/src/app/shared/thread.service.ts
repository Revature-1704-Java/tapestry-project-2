import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ThreadService {
    private threads: Thread[];

    constructor(private httpClient: HttpClient) { }

    getThreads(): Observable<Thread[]> {
        const apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

        return this.httpClient
            .get<Post[]>(apiUrl)
            .map(val => {
                return <Thread[]> val;
            });
    }
}

const threads2 = [
    {
        'picture': 'http://placehold.it/150x150',
        'title': 'great',
        'content': 'pork chops'
    },
    {
        'picture': 'http://placehold.it/150x150',
        'title': 'round',
        'content': 'apple'
    },
    {
        'picture': 'http://placehold.it/150x150',
        'title': 'me',
        'content': 'the money'
    }
]