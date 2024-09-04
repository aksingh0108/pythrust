import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
 


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
  selector: 'app-feature-matrix',
  standalone: true,
  imports: [MatTableModule, CommonModule,MatExpansionModule],
  templateUrl: './feature-matrix.component.html',
  styleUrls: ['./feature-matrix.component.scss']
})
export class FeatureMatrixComponent {
  

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
                images: ['secondary-image-001.png'],
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
                images: ['additional-image-001.png'],
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
                images: ['supplementary-image-001.png', 'supplementary-image-002.png'],
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

 
  

}
