import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface Question {
  id?: number;
  author: string;
  questionString: string;
  imagePath?: string;
  classLevel: string;
  book: string;
  chapter: string;
  marks: string;
  questionType: string;
  difficulty: string;
  comments?: string;
}

export interface Worksheet {
  id?: number;
  author: string;
  worksheetName: string;
  metadata?: string;
  questions?: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private GET_WORK_SHEETS = '/teacher/';
  constructor(private http: HttpClient) { }
  getWorksheetsByAuthor(author: string) {
    return this.http.get<[Worksheet]>(environment.domain + '/api/worksheets/teacher/Rachiket');
  }

  getQuestionsByTeacher(author: string) {
    return this.http.get<[Question]>(environment.domain + '/api/questions/teacher/Rachiket');
  }
}
