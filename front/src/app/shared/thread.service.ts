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
                let threads: Array<Thread> = [];
                val.map(res => { 
                    let thread = {
                        postID: res.id,
                        commentID: 0,
                        userId: res.userId,
                        title: res.title,
                        textContent: res.body,
                        imagePath: 'http://placehold.it/150x150',
                        postTime: ''
                    };
                    threads.push(thread as Thread)
                });
                return threads
            });
    }

    getReplies(id: number): Observable<Array<Thread>> {
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        return this.httpClient
            .get<Array<Post>>(apiUrl)
            .map(val => {
                let threads: Array<Thread> = [];
                val.map(res => {
                    let reply = {
                        postID: 0,
                        commentID: res.id,
                        userId: 42,
                        title: '',
                        textContent: res.body,
                        imagePath: 'http://placehold.it/100x100',
                        postTime: ''
                    };
                    threads.push(reply as Thread);
                });
                return threads;
            });
    }

    getThread(id: number): Observable<Thread> {
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        return this.httpClient
            .get<Post>(apiUrl)
            .map(val => {
                let thread = {
                    postID: val.id,
                    commentID: 0,
                    userId: val.userId,
                    title: val.title,
                    textContent: val.body,
                    imagePath: 'http://placehold.it/150x150',
                    postTime: ''
                };
                return thread as Thread;
            });
    }
}