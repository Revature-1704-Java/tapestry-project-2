import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

import { UrlsService } from './urls.service';

@Injectable()
export class ThreadService {
    public threads: Observable<Array<Thread>>;
    public replies: Observable<Array<Thread>>;
    
    constructor(private httpClient: HttpClient, public urls: UrlsService) { }

    updateThreads(board: string): void {
        this.threads = this.getThreads(board);
    }

    updateReplies(id: number): void {
        this.replies = this.getReplies(id);
    }


    getThreads(board: string): Observable<Array<Thread>> {
        const apiUrl = this.urls.serverBasePath + '/getPosts';

        const body = new HttpParams()
            .set('boardName', board);
        
        const header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');

        return this.httpClient
            .post<Array<any>>(apiUrl, body, { headers: header })
            .map(val => {
                const threads: Array<Thread> = [];
                val.map(res => {
                    const thread = {
                        postID: res.postID,
                        commentID: 0,
                        userId: res.user.userID,
                        username: res.user.username,
                        title: res.title,
                        textContent: res.textContent,
                        imagePath: this.urls.imageBasePath + res.imagePath,
                        postTime: res.postTime
                    };
                    if (res.imagePath === null) {
                        thread.imagePath = this.urls.placeholderPostImage;
                    }
                    threads.push(thread as Thread);
                });

                return threads;
            });
    }

    getReplies(id: number): Observable<Array<Thread>> {
        const apiUrl = this.urls.serverBasePath + '/getPost';

        const body = new HttpParams()
            .set('postId', id.toString())
            
        const header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');

        return this.httpClient
            .post<any>(apiUrl, body, { headers: header })
            .map(val => {
                const threads: Array<Thread> = [];

                const thread = {
                    postID: val.postID,
                    commentID: 0,
                    userId: val.user.userID,
                    username: val.user.username,
                    title: val.title,
                    textContent: val.textContent,
                    imagePath: this.urls.imageBasePath + val.imagePath,
                    postTime: val.postTime
                };
                if (val.imagePath === null) {
                    thread.imagePath = this.urls.placeholderPostImage;
                }
                threads.push(thread as Thread);

                val.replies.map(res => {
                    const reply = {
                        postID: 0,
                        commentID: res.commentID,
                        userId: res.user.userID,
                        username: res.user.username,
                        title: '',
                        textContent: res.textContent,
                        imagePath: this.urls.imageBasePath + res.imagePath,
                        postTime: res.postTime
                    };
                    if (res.imagePath === null) {
                        reply.imagePath = this.urls.placeholderCommentImage;
                    }
                    threads.push(reply as Thread);
                });

                return threads;
            });
    }
}
