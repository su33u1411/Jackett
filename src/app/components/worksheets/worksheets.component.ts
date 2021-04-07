import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AppService, Worksheet} from '../../services/app.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DragAndDropService} from '../../services/drag-and-drop.service';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

@Component({
  selector: 'app-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.css']
})
export class WorksheetsComponent implements OnInit {
  worksheetFormGroup: FormGroup;

  constructor(private appservice: AppService,
              public dragAndDropService: DragAndDropService) {
    this.worksheetFormGroup = new FormGroup({
      workSheetName: new FormControl('', Validators.required),
      workSheetDescription: new FormControl(''),
      resourceBank: new FormControl('', Validators.required),
      book: new FormControl('', Validators.required),
      chapter: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required),
      difficultyLevel: new FormControl('', Validators.required),
      questionType: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  get options(): GridsterConfig {
    return this.dragAndDropService.options;
  }

  get questionsInWorksheet(): GridsterItem[] {
    return this.dragAndDropService.gridsterItems;
  }
}
