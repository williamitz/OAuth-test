import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class CustomMatPaginatorService extends MatPaginatorIntl  {

  getAndInitTranslations() {
    this.itemsPerPageLabel = 'Items por página';
    this.nextPageLabel = 'Siguiente página';
    this.previousPageLabel = 'Anterior página';
    this.firstPageLabel = 'Primera página';
    this.lastPageLabel = 'Última página';

    this.changes.next();
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    const totalPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${totalPages}`;
  };
}
