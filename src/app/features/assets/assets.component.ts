import { Component, OnInit } from '@angular/core';
interface Status {
  value: string;
  viewValue: string;
}
interface Assetuser {
  value: string;
  viewValue: string;
}
interface Assetstatus {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  isCardView: boolean = true;
  selectedValue: any;
  statuss: Status[] = [
    { value: 'status-1', viewValue: 'Status 1' },
    { value: 'status-2', viewValue: 'Status 2' },
    { value: 'status-3', viewValue: 'Status 3' },
  ];
  assetusers: Assetuser[] = [
    { value: 'asset-user-1', viewValue: 'Asset User 1' },
    { value: 'asset-user-2', viewValue: 'Asset User 2' },
    { value: 'asset-user-3', viewValue: 'Asset User 3' },
  ];
  assetstatuss: Assetstatus[] = [
    { value: 'asset-status-1', viewValue: 'Status 1' },
    { value: 'asset-status-2', viewValue: 'Status 2' },
    { value: 'asset-status-3', viewValue: 'Status 3' },
  ];
  tiles = [
    {
      tileTitle: 'Total Assets',
      tileCounter: '489',
      tileImage: '../../../assets/images/svg/total-assets-icon.svg',
      tileColor: 'blue',
    },
    {
      tileTitle: 'Assigned Assets',
      tileCounter: '109',
      tileImage: '../../../assets/images/svg/assigned-assets-icon.svg',
      tileColor: 'yellow',
    },
    {
      tileTitle: 'New Request',
      tileCounter: '02',
      tileImage: '../../../assets/images/svg/new-request-icon.svg',
      tileColor: 'green',
    },
    {
      tileTitle: 'Pending Request',
      tileCounter: '103',
      tileImage: '../../../assets/images/svg/pending-request-icon.svg',
      tileColor: 'red',
    },
  ];

  cards = [
    {
      assetImage: '../../../assets/images/png/asset.png',
      assetTitle: 'Dell Laptop',
      assetId: 'CV-PC-01',
      assetModel: '14a-na0003TU',
      assetUser: 'John Doe 1',
      assetStatus: 'Assigned',
      assetDate: '5 Jan 2019',
      assetWarranty: '2 Year Warranty',
    },
    {
      assetImage: '../../../assets/images/png/asset.png',
      assetTitle: 'Dell Laptop',
      assetId: 'CV-PC-02',
      assetModel: '14a-na0003TU',
      assetUser: 'John Doe 2',
      assetStatus: 'Not-Assigned',
      assetDate: '5 Feb 2019',
      assetWarranty: '1 Year Warranty',
    },
    {
      assetImage: '../../../assets/images/png/asset.png',
      assetTitle: 'Dell Laptop',
      assetId: 'CV-PC-03',
      assetModel: '14a-na0003TU',
      assetUser: 'John Doe 3',
      assetStatus: 'Assigned',
      assetDate: '5 Mar 2019',
      assetWarranty: '2 Year Warranty',
    },
    {
      assetImage: '../../../assets/images/png/asset.png',
      assetTitle: 'Dell Laptop',
      assetId: 'CV-PC-04',
      assetModel: '14a-na0003TU',
      assetUser: 'John Doe 4',
      assetStatus: 'Not-Assigned',
      assetDate: '5 Apr 2019',
      assetWarranty: '1 Year Warranty',
    },
    {
      assetImage: '../../../assets/images/png/asset.png',
      assetTitle: 'Dell Laptop',
      assetId: 'CV-PC-05',
      assetModel: '14a-na0003TU',
      assetUser: 'John Doe 5',
      assetStatus: 'Assigned',
      assetDate: '5 May 2019',
      assetWarranty: '2 Year Warranty',
    },
    {
      assetImage: '../../../assets/images/png/asset.png',
      assetTitle: 'Dell Laptop',
      assetId: 'CV-PC-06',
      assetModel: '14a-na0003TU',
      assetUser: 'John Doe 6',
      assetStatus: 'Not-Assigned',
      assetDate: '5 Jun 2019',
      assetWarranty: '1 Year Warranty',
    },
  ];

  displayedColumns: string[] = [
    'assetTitle',
    'assetId',
    'assetModel',
    'assetDate',
    'assetWarranty',
    'assetStatus',
    'assetUser',
    'assetAction',
  ];
  dataSource = this.cards;
  constructor() {}

  ngOnInit(): void {}
  changeView(event: any) {
    if (event.value == 'grid-view') {
      this.isCardView = false;
    } else {
      this.isCardView = true;
    }
  }
}
