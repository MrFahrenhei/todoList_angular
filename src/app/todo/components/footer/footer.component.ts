import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';


@Component({
    selector: 'app-todos-footer',
    templateUrl: './footer.component.html',
    standalone: true,
    imports: [CommonModule],
})

export class FooterComponent{
    todosService = inject(TodosService);
    filter = this.todosService.filterSig();
    filterEnum = FilterEnum;
}