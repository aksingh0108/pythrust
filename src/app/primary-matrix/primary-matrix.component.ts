import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common'; 
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 

export interface Patent {
  id?: string;
  patentNo?: string;
  filingDate?: Date;
  publicationDate?: Date;
}

export interface ClaimElement {
  id?: string;
  featureTitle?: string;
  patentMatrix?: {
    patentNo?: string;
    label?: string;
  }[];
  patentResults?: {
    patentNo?: string;
    dataReference?: string;
    description?: string;
    images?: string[];
  }[];
}

export interface Claim {
  id?: string;
  claimElements?: ClaimElement[];
}

export interface Report {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  claims?: Claim[];
  patents?: Patent[];
}

export function generateId(prefix: string, length: number = 8): string {
  return `${prefix}-${Math.random().toString(36).substr(2, length)}`;
}

export const emptyReport: Report = {
  id: generateId('report'),
  name: '',
  description: '',
  image: '',
  claims: [
    {
      id: generateId('claim'),
      claimElements: [
        {
          id: generateId('element'),
          featureTitle: '',
          patentMatrix: [
            {
              patentNo: '',
              label: '',
            },
          ],
          patentResults: [
            {
              patentNo: '',
              dataReference: '',
              description: '',
              images: [''],
            },
          ],
        },
      ],
    },
  ],
  patents: [
    {
      id: generateId('patent'),
      patentNo: '',
      filingDate: new Date(),
      publicationDate: new Date(),
    },
  ],
};

 

 
@Component({
  selector: 'app-primary-matrix',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule,MatIconModule],
  templateUrl: './primary-matrix.component.html',
  styleUrls: ['./primary-matrix.component.scss']
})
export class PrimaryMatrixComponent {


  rawReportData: Report = {
    id: 'report-abc12345',
    name: 'Sample Report for Testing',
    description: 'This is a sample report used for testing purposes.',
    image: 'sample-report-image.png',
    claims: [
      {
        id: 'claim-def67890',
        claimElements: [
          {
            id: 'element-xyz12345',
            featureTitle: 'Sample Feature A',
            patentMatrix: [
              { patentNo: 'P-0001', label: 'Primary Patent' },
              { patentNo: 'P-0002', label: 'Secondary Patent' },
              { patentNo: 'P-0003', label: 'Primary Patent' },
              { patentNo: 'P-0004', label: 'Secondary Patent' },
            ],
            patentResults: [
              // {
              //   patentNo: 'P-0001',
              //   dataReference: 'Data-001',
              //   description: 'Detailed description for Primary Patent.',
              //   images: ['primary-image-001.png', 'primary-image-002.png'],
              // },
              {
                patentNo: 'P-0002',
                dataReference: 'Data-002',
                description: 'Detailed description for Secondary Patent.',
                images: ['https://imgs.search.brave.com/OScNjpNwDlH7Uqywg4qCk5dMfXGGa9rUta-UHFv7d5I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgw/ODQxMDk0L3Bob3Rv/L2NvcHlyaWdodC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/N2Q5bnhVdDBPOGpp/Q2pvTmljc2s1QjN2/cGVVYmgwRUZad3Rn/cVhCNlJpWT0'],
              },
            ],
          },
          {
            id: 'element-uvw67890',
            featureTitle: 'Sample Feature B',
            patentMatrix: [{ patentNo: 'P-0003', label: 'Additional Patent' }],
            patentResults: [
              {
                patentNo: 'P-0003',
                dataReference: 'Data-003',
                description: 'Detailed description for Additional Patent.',
                images: ['https://imgs.search.brave.com/5xpqpitHqsu0mfAQY8_seWdrtxhvIU__3YW2b8ZkLQA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/ODYyMzgwL3Bob3Rv/L2ludGVsbGVjdHVh/bC1wcm9wZXJ0eS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c0plZEN2VUZ4a0Fy/NDZkMF9ObzBYR3lm/MU13SlI3bW1MTmM0/eUZrUzFrUT0'],
              },
            ],
          },
        ],
      },

      {
        id: 'claim-4',
        claimElements: [
          {
            id: 'element-4',
            featureTitle: 'Sample Feature 4',
            patentMatrix: [
              { patentNo: 'P-0004', label: 'Primary Patent' },
              { patentNo: 'P-0004', label: 'Secondary Patent' },
            ],
            patentResults: [
              // {
              //   patentNo: 'P-0001',
              //   dataReference: 'Data-001',
              //   description: 'Detailed description for Primary Patent.',
              //   images: ['primary-image-001.png', 'primary-image-002.png'],
              // },
              {
                patentNo: 'P-0002',
                dataReference: 'Data-002',
                description: 'Detailed description for Secondary Patent.',
                images: ['https://imgs.search.brave.com/bMfig2VPzkLW0onLV8Bq4Z_-KTbkTaQcn_p_P5DEL1g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzg1LzEzLzgy/LzM2MF9GXzc4NTEz/ODI0Ml93M2E0VTFJ/czN5b3diMzdkbDhu/WmdSa0l2MkN2a1JZ/Qy5qcGc'],
              },
            ],
          },
          {
            id: 'element-uvw67890',
            featureTitle: 'Sample Feature B',
            patentMatrix: [{ patentNo: 'P-0003', label: 'Additional Patent' }],
            patentResults: [
              {
                patentNo: 'P-0003',
                dataReference: 'Data-003',
                description: 'Detailed description for Additional Patent.',
                images: ['https://imgs.search.brave.com/Obq1sNak872l5dyfXF98nxeSXKz53y1JeqgMiBEbzF8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODMx/MDU3ODQwL3Bob3Rv/L2NvcHlyaWdodC1j/b25jZXB0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz14UENM/dUZSY2pFQ3hGRUNm/dTNnUW1vajF3ZnhS/SFkwTXctLVJ1dDhf/ekZZPQ'],
              },
            ],
          },
        ],
      },
      
      {
        id: 'claim-ghi54321',
        claimElements: [
          {
            id: 'element-mno98765',
            featureTitle: 'Sample Feature C',
            patentMatrix: [{ patentNo: 'P-0004', label: 'Supplementary Patent' }],
            patentResults: [
              {
                patentNo: 'P-0004',
                dataReference: 'Data-004',
                description: 'Detailed description for Supplementary Patent.',
                images: ['https://imgs.search.brave.com/hR4KB5uLZOIekq36Q-viOZL5wbmIIz4Rm4ZreV1qlkY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXRlbnRlZC1icmFu/ZC1pZGVudGl0eS1s/aWNlbnNlLXByb2R1/Y3QtY29weXJpZ2h0/LWNvbmNlcHRfNTM4/NzYtMTIyNzA3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn'],
              },
            ],
          },
        ],
      },
    ],
    patents: [
      {
        id: 'patent-12345678',
        patentNo: 'P-0001',
        filingDate: new Date('2023-01-10'),
        publicationDate: new Date('2023-07-15'),
      },
      {
        id: 'patent-23456789',
        patentNo: 'P-0002',
        filingDate: new Date('2023-02-20'),
        publicationDate: new Date('2023-08-25'),
      },
      {
        id: 'patent-34567890',
        patentNo: 'P-0003',
        filingDate: new Date('2023-03-30'),
        publicationDate: new Date('2023-09-10'),
      },
      {
        id: 'patent-45678901',
        patentNo: 'P-0004',
        filingDate: new Date('2023-04-15'),
        publicationDate: new Date('2023-10-05'),
      },
    ],
  };
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // Ensure rawReportData.patents is defined and has at least one entry
    if (this.rawReportData.patents && this.rawReportData.patents.length > 0) {
      this.selectedPatent = this.rawReportData.patents[0];
    }
  }
  

  showRows = true;
  selectedImage: string | null = null;
  
  openImageModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.showRows = false;
  }
  
  closeImageModal() {
    this.selectedImage = null;
    this.showRows = true;
  }
  
  @ViewChild('imgContainer') imgContainer!: ElementRef<HTMLDivElement>;
  // selectedImage: string | null = null;
  zoomLevel: number = 1; // Initial zoom level
  isFullscreen: boolean = false;

  setImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.zoomLevel = 1; // Reset zoom level when a new image is set
  }

  toggleFullscreen() {
    const imgContainer = this.imgContainer.nativeElement;

    if (!this.isFullscreen) {
      if (imgContainer.requestFullscreen) {
        imgContainer.requestFullscreen();
      } else if ((imgContainer as any).webkitRequestFullscreen) { /* Safari */
        (imgContainer as any).webkitRequestFullscreen();
      } else if ((imgContainer as any).msRequestFullscreen) { /* IE11 */
        (imgContainer as any).msRequestFullscreen();
      }
      this.isFullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) { /* Safari */
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) { /* IE11 */
        (document as any).msExitFullscreen();
      }
      this.isFullscreen = false;
    }
  }

  zoomIn() {
    if (this.zoomLevel < 3) { // Limit zoom level to 3x
      this.zoomLevel += 0.1;
      this.applyZoom();
    }
  }

  zoomOut() {
    if (this.zoomLevel > 0.5) { // Limit zoom level to 0.5x
      this.zoomLevel -= 0.1;
      this.applyZoom();
    }
  }

  applyZoom() {
    const imageElement = document.querySelector('.full-screen-image') as HTMLElement;
    if (imageElement) {
      imageElement.style.transform = `scale(${this.zoomLevel})`;
      imageElement.style.transformOrigin = 'center'; // Keep zoom centered
    }
  }

  

  patentlength=this.rawReportData.patents?.length;

  findPatent(patentNo: string): Patent | undefined {
    if (!patentNo) {
      return undefined;
    }
    return this.rawReportData.patents?.find(patent => patent.patentNo === patentNo);
  }
  
  getPatentInfo(patentNo?: string): Patent | undefined {
    if (!patentNo) {
      return undefined;
    }
    return this.findPatent(patentNo);
  }


  selectedPatent: Patent | null = null;

  changeContent(patent: Patent) {
    this.selectedPatent = patent;
  }

  // findPatent(patentNo: string): Patent | undefined {
  //   return this.rawReportData.patents.find(patent => patent.patentNo === patentNo);
  // }
  // getDynamicHeight(text: string | undefined): string {
  //   if (!text) {
  //     return '50px'; // Default height
  //   }
  
  //   const baseHeight = 50; // Base height in pixels
  //   const extraHeight = Math.ceil(text.length / 50) * 20; // Adjust the multiplier as needed
  //   return `${baseHeight + extraHeight}px`;
  // }
  
  
  

}






@Component({
  selector: 'image-modal-dialog',
  template: `
  <div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Close</button>  
    </div>
  </div>
    <h1 mat-dialog-title>Image</h1> 
    <div mat-dialog-content>
      <img [src]="data.imageSrc" alt="Image" style="width: 100%;">
    </div>
    
   
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class ImageModalDialog {
  // showRows=true;
  constructor(
    public dialogRef: MatDialogRef<ImageModalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { imageSrc: string }
  ) {}

  onClose(): void {
    // this.showRows = !this.showRows;
    this.dialogRef.close();
    
  }


  
}
