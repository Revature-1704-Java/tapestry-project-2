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
    private threads: Array<Thread>;

    constructor(private httpClient: HttpClient) { }

    getThreads(): Observable<Array<Thread>> {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        return this.httpClient
            .get<Array<Post>>(apiUrl)
            .map(val => {
                return val as Array<Thread>;
            });
    }

    getThread(id: number): Observable<Array<Thread>> {
        // TODO: Also keep the Thread OP
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        return this.httpClient
            .get<Array<Post>>(apiUrl)
            .map(val => {
                return val as Array<Thread>;
            });
    }
}

const threads2 = [
    {
        picture: 'http://placehold.it/150x150',
        title: 'great',
        content: 'pork chops'
    },
    {
        picture: 'http://placehold.it/150x150',
        title: 'round',
        content: 'apple'
    },
    {
        picture: 'http://placehold.it/150x150',
        title: 'me',
        content: 'the money'
    }
];
