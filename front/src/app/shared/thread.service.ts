import { Injectable } from '@angular/core';
import { Thread } from './thread';

@Injectable()
export class ThreadService {
    getThreads(): Thread[] {
        return threads;
    }
}

const threads = [
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