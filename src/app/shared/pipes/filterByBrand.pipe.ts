import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterByBrand"
})
export class FilterByBrandPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== "ALL") {
      return select
        ? items.filter(item => item["productSeller"] === select)
        : items;
    } else {
      return items;
    }
  }
}
