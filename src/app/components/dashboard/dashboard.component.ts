import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AppService, Question, Worksheet} from '../../services/app.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'worksheetName', 'details', 'file'];
  worksheets = new MatTableDataSource<Worksheet>();
  @ViewChild(MatPaginator) worksheetsPaginator: MatPaginator;

  questionColumns: string[] = ['Question', 'Book'];
  questions = new MatTableDataSource<Question>();
  @ViewChild(MatPaginator) questionsPaginator: MatPaginator;

  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    this.appservice
      .getWorksheetsByAuthor('')
      .subscribe((worksheets) => {
        this.worksheets = new MatTableDataSource<Worksheet>(worksheets);
        if (this.worksheetsPaginator) {
          this.worksheets.paginator = this.worksheetsPaginator;
        }
      });
    this.appservice.getQuestionsByTeacher('').subscribe(questions => {
      this.questions = new MatTableDataSource<Question>(questions);
      if (this.questionsPaginator) {
        this.questions.paginator = this.questionsPaginator;
      }
    });
  }

  applyWorkSheetFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.worksheets.filter = filterValue.trim().toLowerCase();
  }

}
