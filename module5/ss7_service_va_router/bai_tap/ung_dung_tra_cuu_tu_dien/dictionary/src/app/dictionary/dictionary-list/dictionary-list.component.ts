import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {Dictionary} from '../../model/dictionary';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  dictionaries: {} = [];
    constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.dictionaries = this.dictionaryService.getAll();
  }
}
