import { Component, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent {

  @ViewChild('badgeTable') badgeTable!: ElementRef;
  @ViewChild('badgeList') badgeList!: ElementRef;

  captureBadgeTable() {
    html2canvas(this.badgeTable.nativeElement).then(canvas => {
      const downloadLink = document.createElement('a');
      const image = canvas.toDataURL('image/png');
      downloadLink.href = image;
      downloadLink.download = 'BadgeTable.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  captureBadgeList() {
    html2canvas(this.badgeList.nativeElement).then(canvas => {
      const downloadLink = document.createElement('a');
      const image = canvas.toDataURL('image/png');
      downloadLink.href = image;
      downloadLink.download = 'BadgeList.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
}
