import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ThreadService {
    private threads: Array<Thread>;

    constructor(private httpClient: HttpClient) { }

    getThreads(board: string): Observable<Array<Thread>> {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        const body = new HttpParams()
            .set('board', board);

        return this.httpClient
            .get<Array<Post>>(apiUrl, { params: body })
            .map(val => {
                const threads: Array<Thread> = [];
                val.map(res => {
                    const thread = {
                        postID: res.id,
                        commentID: 0,
                        userId: res.userId,
                        title: res.title,
                        textContent: res.body,
                        imagePath: 'http://placehold.it/150x150',
                        postTime: ''
                    };
                    threads.push(thread as Thread);
                });

                return threads;
            });
    }

    getReplies(id: number): Observable<Array<Thread>> {
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        return this.httpClient
            .get<Array<Post>>(apiUrl)
            .map(val => {
                const threads: Array<Thread> = [];
                val.map(res => {
                    const reply = {
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
                const thread = {
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
