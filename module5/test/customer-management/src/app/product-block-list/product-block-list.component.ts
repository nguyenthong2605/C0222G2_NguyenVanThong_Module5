import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {ProductBlock} from '../model/product-block';
import {ProductBlockService} from '../service/product-block.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-block-list',
  templateUrl: './product-block-list.component.html',
  styleUrls: ['./product-block-list.component.css']
})
export class ProductBlockListComponent implements OnInit {
  productBlock: ProductBlock[] = [];
  // p: number = 1;
  totalPages = 0;
  pageNumber: number;

  constructor(private productBlockService: ProductBlockService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    // this.getAllProductBlock();
    this.getALlProductBlockApi();
  }


  // getAllProductBlock() {
  //   this.productBlockService.getAllProductBlock().subscribe(data => {
  //     this.productBlock = data;
  //     this.p = 1;
  //     this.router.navigateByUrl('/productBlock/list');
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  deleteProductBlock(id: number) {
    this.productBlockService.deleteProductBlock(id).subscribe(() => {
      this.ngOnInit();
      this.toastr.success('Xóa thành công!', '', {
        timeOut: 3000,
        progressBar: true
      });
    }, error => {
      console.log(error);
    });
  }

  getALlProductBlockApi() {
    this.productBlockService.getAllProductBlock(this.pageNumber).subscribe( productBlocks => {
      console.log(productBlocks);
      // @ts-ignore
      this.productBlock = productBlocks.content;
      // @ts-ignore
      this.totalPages = productBlocks.totalPages;
      // @ts-ignore
      this.pageNumber = productBlocks.pageable.pageNumber;
    }, error => {
      console.log(error);
    });
  }

  previousPage() {
    this.productBlockService.getAllProductBlock(this.pageNumber - 1).subscribe(productBlocks => {
      // @ts-ignore
      this.productBlock = productBlocks.content;
      // @ts-ignore
      this.totalPages = productBlocks.totalPages;
      // @ts-ignore
      this.pageNumber = productBlocks.pageable.pageNumber;
    });
  };

  nextPage() {
    this.productBlockService.getAllProductBlock(this.pageNumber + 1).subscribe(productBlocks => {
      // @ts-ignore
      this.productBlock = productBlocks.content;
      // @ts-ignore
      this.totalPages = productBlocks.totalPages;
      // @ts-ignore
      this.pageNumber = productBlocks.pageable.pageNumber;
    });
  }


}
