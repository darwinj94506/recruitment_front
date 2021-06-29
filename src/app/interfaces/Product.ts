export interface Product {
    id: number
    slug: any
    productParentId: any
    alternateCode: any[]
    autoBarcode: string
    name: string
    codeRetention: any
    description: string
    code: string
    conversions: Conversions
    model: string
    rating: any
    numberVisit: number
    tags: Tags 
    flagEcommerce: number
    priceDiscount: number
    eCategories: any[]
    filters: any[]
    sections: any[]
    productsRelated: any[]
    price: number
    cost: number
    priceOld: number
    weigth: any
    categoryId: number
    subCategoryId: any
    features: any[]
    flagTypeUnit: number
    inlineFeatures: any
    inlineAlternateCode: string
    urlImage: any
    banners: any[]
    isPublic: number
    type: number
    groupType: number
    unitId: number
    flagControlSerie: number
    flagSales: number
    flagActive: number
    externalCode: any
    eCommerces: any
    priceSaleMin: number
    codeProductCubso: any
    companyId: number
    originPlatform: number
    additionalInformation: AdditionalInformation
    createdAt: string
    updatedAt: string
    flagIgv: number
    stockVirtual: number
    warrantyFrequency: any
    warrantyQuantity: any
    accountingAccount: any[]
    score: number
    flagLoyalti: number
    priceSaleMax: number
    warProductId: number
    priceCost: number
    stock: number
    location: string
    minStock: number
    warehouseId: number
    priceList: PriceList
    warWarehouseProductBrandId: number
    unitName: string
    unitCode: string
    brandName: string
    brandId: number
    warehouseName: string
    categoryName: string
    categoryFeatures: any[]
    typeName: string
    typeId: number
    typeCode: string
    taxes: Tax[]
    localDates: LocalDates
    stockWarehouse: number
    groupTypeName: string
    flagTypeUnitName: string
    percentageDiscount: number
    stockComposite: number
  }
  
  export interface Conversions {}
  
  export interface Tags {}
  
  export interface AdditionalInformation {}
  
  export interface PriceList {
    "184": N184
  }
  
  export interface N184 {
    price: number
    taxes: number
    units: Units
    ranges: Range[]
    discount: number
    unitPrice: number
  }
  
  export interface Units {}
  
  export interface Range {
    to: number
    from: number
    price: number
  }
  
  export interface Tax {
    id: number
    codeTable: string
    code: string
    codePercentage: string
    percentage: number
    name: string
    flagSales: number
    flagPurchases: number
    productId: number
    companyId: number
    createdAt: string
    updatedAt: string
  }
  
  export interface LocalDates {
    createdAt: string
    updatedAt: string
  }
  