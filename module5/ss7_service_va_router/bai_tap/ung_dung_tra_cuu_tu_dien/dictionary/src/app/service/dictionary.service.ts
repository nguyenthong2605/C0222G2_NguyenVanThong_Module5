import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [{
    word: 'dog',
    mean: 'con chó'
  },
    {
      word: 'cat',
      mean: 'con mèo'
    },
    {
      word: 'red',
      mean: 'màu đỏ'
    },
    {
      word: 'black',
      mean: 'màu đèn'
    }];

  constructor() {
  }

  getAll() {
    return this.dictionaries;
  }

  findByWord(word: string): Dictionary {
    for (let i = 0; i <= this.dictionaries.length; i++) {
      if (this.dictionaries[i].word === word) {
        return this.dictionaries[i];
      }
    }
    return null;
  }
}
