/*** Example 7. Additional properties based on boolean property ***/

interface BaseItem {
  name: string;
  description: string;
  forSale: false;
}

interface SaleItemDate {
  price: number;
}

type SaleItem = Omit<BaseItem, 'forSale'> & SaleItemDate & {forSale: true};

type Item = BaseItem | SaleItem;


const baseItem: Item = {
  forSale: false,
  name: 'Statue',
  description: 'Statue of cat'
};

const itemForSale: Item = {
  forSale: true,
  name: 'iPhone',
  description: 'Mobile phone',
  price: 100
};
