import {Injectable} from '@angular/core';
import {GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import {UUID} from 'angular2-uuid';
import * as htmlToImage from 'html-to-image';
import {Question} from './app.service';

@Injectable({
  providedIn: 'root',
})
export class DragAndDropService {
  public options: GridsterConfig = {
    gridType: GridType.ScrollVertical,
    fixedRowHeight: 75,
    draggable: {
      enabled: true,
    },
    swapItems: true,
    resizable: {
      enabled: true,
    },
    maxCols: 1,
    // maxRows: 100 // change for allowing more than 100 questions in the worksheet
  };

  public gridsterItems: GridsterItem[] = [];

  constructor() {}
  // TODO::
  // addItem(questionData: Question): void {
  //   const qId = questionData.id;
  //   const node = document.getElementById('qid-' + qId);
  //   if (node) {
  //     htmlToImage.toPng(node)
  //       .then((dataUrl) => {
  //         const img = new Image();
  //         img.src = dataUrl;
  //         document.body.appendChild(img);
  //         console.log('=================================== appended!', img.src, qId);
  //       })
  //       .catch((error) =>  {
  //         console.error('===================================oops, something went wrong!', error);
  //       });
  //   }
  //
  //   this.gridsterItems.push({
  //     cols: 1,
  //     id: UUID.UUID(),
  //     rows: 2,
  //     x: 0,
  //     y: 0,
  //     questionData,
  //   });
  // }

  deleteItem(id: string): void {
    const item = this.gridsterItems.find((d) => d.id === id);
    if (item) {
      this.gridsterItems.splice(this.gridsterItems.indexOf(item), 1);
    }
  }

  resetItems(): void {
    this.gridsterItems = [];
  }
}
